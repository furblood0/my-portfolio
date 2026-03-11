import { Timeline } from "@/components/about/Timeline";
import { ABOUT } from "@/data/about";

export function AboutPanel() {
  return (
    <div className="flex flex-col gap-8">
      {/* Avatar + title */}
      <div className="flex flex-col items-center gap-4 pt-2">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-900/60 bg-slate-900">
          <span aria-hidden className="absolute inset-[-5px] rounded-full border border-dashed border-slate-700/50" />
          <span aria-hidden className="absolute inset-[-11px] rounded-full border border-slate-800/40" />
          <span className="font-mono text-2xl font-semibold text-slate-400">
            {ABOUT.name.charAt(0)}
          </span>
        </div>
        <div className="text-center">
          <p className="font-mono text-sm font-semibold tracking-[0.1em] text-slate-200">
            {ABOUT.name}
          </p>
          <p className="mt-0.5 font-mono text-[11px] tracking-[0.14em] text-cyan-500/80">
            {ABOUT.title}
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400/70">
            Bio
          </span>
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-cyan-900/60 to-transparent" />
        </div>
        {ABOUT.bio.map((paragraph, i) => (
          <p key={i} className="text-sm leading-7 text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Timeline */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400/70">
            Timeline
          </span>
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-cyan-900/60 to-transparent" />
        </div>
        <Timeline items={ABOUT.timeline} />
      </div>
    </div>
  );
}
