"use server";

import { Resend } from "resend";
import { CONTACT_LINKS } from "@/data/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipient = CONTACT_LINKS.find((l) => l.id === "email")?.href.replace("mailto:", "") ?? "";

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
): Promise<ContactResult> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "Email service is not configured." };
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { ok: false, error: "All fields are required." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to send email.";
    return { ok: false, error: msg };
  }
}
