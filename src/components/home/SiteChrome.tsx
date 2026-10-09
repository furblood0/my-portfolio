"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/data/about";
import { CONTACT_LINKS } from "@/data/contact";

type Props = {
  concealed: boolean;
};

const HEADER_LINKS = [
  ...CONTACT_LINKS.filter((link) => link.id !== "email"),
  { id: "cv", label: "CV", value: "cv.pdf", href: "/cv.pdf", icon: "email" as const },
];

export function SiteChrome({ concealed }: Props) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20"
      initial={false}
      animate={{ opacity: concealed ? 0 : 1 }}
      transition={{ duration: 0.25 }}
      aria-hidden={concealed}
      inert={concealed}
    >
      <header className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 sm:pt-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-tight text-slate-50 sm:text-[15px]">
            {ABOUT.name}
          </p>
          <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-cyan-300/80 sm:mt-1 sm:text-[10px] sm:tracking-[0.2em]">
            {ABOUT.title}
            <span className="mx-2 text-slate-600 compact:hidden">/</span>
            <span className="text-slate-400 compact:hidden">{ABOUT.location}</span>
          </p>
        </div>

        <nav className="pointer-events-auto flex shrink-0 flex-wrap justify-end gap-x-3 gap-y-1 pt-0.5 sm:gap-x-4" aria-label="Profile links">
          {HEADER_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              {...(link.id === "cv"
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors hover:text-cyan-300 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-6">
        <p className="max-w-xl text-center text-[11px] leading-5 text-slate-400 sm:text-[13px] sm:leading-6">
          <span className="font-medium text-slate-200">{ABOUT.availability}</span>
          {ABOUT.proof.map((item) => (
            <span key={item} className="compact:hidden">
              <span className="mx-2 text-slate-600">/</span>
              {item}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}
