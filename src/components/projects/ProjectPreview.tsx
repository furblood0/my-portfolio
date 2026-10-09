import Image from "next/image";
import { type Project } from "@/data/projects";

export function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-contain"
          sizes="(min-width: 1280px) 512px, (min-width: 1024px) 460px, 100vw"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col justify-between rounded-lg border border-cyan-900/40 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/80">
          {project.live ? "Live product" : project.category}
        </span>
        {project.year && (
          <span className="font-mono text-[10px] tracking-[0.12em] text-slate-600">
            {project.year}
          </span>
        )}
      </div>
      <p className="text-xl font-semibold tracking-tight text-slate-100">{project.title}</p>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
        {project.tags.slice(0, 3).join("  ·  ")}
      </p>
    </div>
  );
}
