"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { type Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  onCollapse: (id: string) => void;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 fill-none stroke-current stroke-2 shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </motion.svg>
  );
}

export function ProjectCard({
  project,
  index,
  isExpanded,
  onExpand,
  onCollapse,
}: Props) {
  return (
    <motion.article
      className={`relative overflow-hidden rounded-xl border bg-slate-900/50 backdrop-blur transition-colors duration-200 ${
        isExpanded
          ? "cursor-default border-slate-600/80"
          : "cursor-pointer border-slate-700/60 hover:border-slate-600/80"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      onClick={() => {
        if (!isExpanded) onExpand(project.id);
      }}
    >
      {/* ── Header (always visible) ── */}
      <div className="flex items-start justify-between gap-3 p-5">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {/* Title */}
          <h2
            className={`font-mono text-sm font-semibold tracking-[0.04em] transition-colors duration-200 ${
              isExpanded ? "text-cyan-300" : "text-slate-100"
            }`}
          >
            {project.title}
          </h2>

          {/* Collapsed description — truncated */}
          {!isExpanded && (
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
              {project.description}
            </p>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-cyan-900/50 bg-cyan-950/30 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.08em] text-cyan-400/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year + chevron */}
        <div className="flex shrink-0 flex-col items-end gap-2 pt-0.5">
          {project.year && (
            <span className="font-mono text-[9px] tracking-[0.15em] text-slate-700">
              {project.year}
            </span>
          )}
          <button
            type="button"
            aria-label={isExpanded ? "Kart'ı kapat" : "Kart'ı genişlet"}
            onClick={(e) => {
              e.stopPropagation();
              if (isExpanded) onCollapse(project.id);
              else onExpand(project.id);
            }}
            className={`cursor-pointer transition-colors duration-200 ${
              isExpanded ? "text-cyan-400 hover:text-cyan-300" : "text-slate-600 hover:text-slate-400"
            }`}
          >
            <ChevronIcon open={isExpanded} />
          </button>
        </div>
      </div>

      {/* ── Expanded content ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 border-t border-slate-800/60 px-5 pb-5 pt-4">
              {/* Preview image — fixed 16:9 box, dark bg fills empty space */}
              {project.image ? (
                <div className="relative w-full overflow-hidden rounded-lg border border-slate-700/50 aspect-video">
                  <div className="blueprint-grid absolute inset-0 opacity-25" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1280px) 512px, (min-width: 1024px) 460px, 100vw"
                  />
                </div>
              ) : (
                <div className="blueprint-grid aspect-video w-full rounded-lg border border-slate-800/40 opacity-25" />
              )}

              {/* Full description */}
              <p className="text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Links */}
              {(project.github ?? project.live) && (
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-slate-400 transition-colors hover:border-cyan-700/60 hover:text-cyan-400"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== "/" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-slate-400 transition-colors hover:border-cyan-700/60 hover:text-cyan-400"
                    >
                      <LinkIcon />
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
