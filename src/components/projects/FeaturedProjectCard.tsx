"use client";

import { motion } from "framer-motion";
import { type Project } from "@/data/projects";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl border border-cyan-800/40 bg-slate-900/60 backdrop-blur"
    >
      {/* Left cyan accent bar */}
      <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-cyan-400/70 via-cyan-500/30 to-transparent" />

      {/* Top meta row */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
          <span className="font-mono text-[9px] tracking-[0.28em] text-cyan-500/80 uppercase">
            Featured
          </span>
        </div>
        {project.year && (
          <span className="font-mono text-[9px] tracking-[0.15em] text-slate-600">
            {project.year}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 px-5 pb-5 pt-3">
        <ProjectPreview project={project} />

        <h2 className="text-lg font-semibold tracking-tight text-slate-50">
          {project.title}
        </h2>

        <p className="text-sm font-medium leading-relaxed text-slate-200">
          {project.summary}
        </p>
        <p className="text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

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

        {/* Links */}
        {(project.github ?? project.live) && (
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
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
                className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-slate-400 transition-colors hover:border-cyan-700/60 hover:text-cyan-400"
              >
                <LinkIcon />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
