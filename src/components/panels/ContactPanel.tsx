"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_LINKS, type ContactLink } from "@/data/contact";
import { sendContactEmail } from "@/app/actions/contact";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  if (icon === "github") return <GithubIcon />;
  if (icon === "linkedin") return <LinkedinIcon />;
  if (icon === "email") return <EmailIcon />;
  return null;
}

export function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    setStatus("loading");

    const result = await sendContactEmail(trimmedName, trimmedEmail, trimmedMessage);

    if (result.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Contact link cards */}
      <div className="flex flex-col gap-3">
        {CONTACT_LINKS.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.href}
            target={link.icon !== "email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-slate-700/60 bg-slate-900/50 px-4 py-3.5 transition-colors hover:border-cyan-600/50 hover:bg-slate-900/80"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09, duration: 0.35 }}
          >
            <span className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-400">
              <ContactIcon icon={link.icon} />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-sm font-semibold tracking-[0.08em] text-slate-200 transition-colors group-hover:text-cyan-300">
                {link.label}
              </p>
              <p className="truncate font-mono text-[11px] tracking-[0.04em] text-slate-600 transition-colors group-hover:text-slate-400">
                {link.value}
              </p>
            </div>
            <span className="ml-auto shrink-0 font-mono text-xs text-slate-700 transition-colors group-hover:text-cyan-600">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px flex-1 bg-slate-800/60" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-700">
          message
        </span>
        <span aria-hidden className="h-px flex-1 bg-slate-800/60" />
      </div>

      {/* Contact form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            disabled={status === "loading"}
            className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-3 py-2 font-mono text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors focus:border-cyan-700/60 focus:ring-1 focus:ring-cyan-900/50 disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            disabled={status === "loading"}
            className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-3 py-2 font-mono text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors focus:border-cyan-700/60 focus:ring-1 focus:ring-cyan-900/50 disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Your message..."
            disabled={status === "loading"}
            className="resize-none rounded-lg border border-slate-700/60 bg-slate-900/60 px-3 py-2 font-mono text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors focus:border-cyan-700/60 focus:ring-1 focus:ring-cyan-900/50 disabled:opacity-60"
          />
        </div>

        {status === "error" && (
          <p className="font-mono text-xs text-red-400">{errorMsg}</p>
        )}
        {status === "success" && (
          <p className="font-mono text-xs text-cyan-400">Message sent. I&apos;ll get back to you soon.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start rounded-lg border border-slate-600/60 bg-slate-900/80 px-6 py-2 font-mono text-sm tracking-[0.14em] text-slate-300 transition-colors hover:border-cyan-600/60 hover:text-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send //"}
        </button>
      </form>
    </div>
  );
}
