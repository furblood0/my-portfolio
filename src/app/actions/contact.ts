"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { CONTACT_LINKS } from "@/data/contact";
import { validateContact } from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

const GENERIC_ERROR = "Could not send the message. Please try again or email me directly.";

function fallbackRecipient(): string {
  return CONTACT_LINKS.find((l) => l.id === "email")?.href.replace("mailto:", "") ?? "";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return h.get("x-real-ip") ?? "unknown";
}

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
  company?: string;
}): Promise<ContactResult> {
  if (input.company?.trim()) {
    return { ok: true };
  }

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "Email service is not configured." };
  }

  const recipient = process.env.CONTACT_TO?.trim() || fallbackRecipient();
  if (!recipient) {
    return { ok: false, error: GENERIC_ERROR };
  }

  const ip = await clientIp();
  if (isRateLimited(ip)) {
    return { ok: false, error: "Too many messages. Please wait a few minutes or email me directly." };
  }

  const invalid = validateContact(input);
  if (invalid) {
    return { ok: false, error: invalid };
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const safeName = name.replace(/[\r\n]+/g, " ");
  const from = process.env.RESEND_FROM?.trim() || "Portfolio <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact from ${safeName}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error.message);
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (err) {
    console.error("Contact send failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}
