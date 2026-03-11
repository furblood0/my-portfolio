import { ABOUT } from "@/data/about";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { EducationTimeline } from "@/components/about/EducationTimeline";

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400/70">
        {label}
      </span>
      <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-cyan-900/60 to-transparent" />
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

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
        <SectionHeader label="Bio" />
        {ABOUT.bio.map((paragraph, i) => (
          <p key={i} className="text-sm leading-7 text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-5">
        <SectionHeader label="Experience" />
        <ExperienceTimeline items={ABOUT.experience} />
      </div>

      {/* Education */}
      <div className="flex flex-col gap-5">
        <SectionHeader label="Education" />
        <EducationTimeline items={ABOUT.education} />
      </div>

      {/* CV Download */}
      <div className="pt-2 pb-4">
        <div className="mb-5 flex items-center gap-3">
          <span aria-hidden className="h-px flex-1 bg-slate-800/60" />
        </div>
        <a
          href="/cv.pdf"
          download
          className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-700/60 bg-slate-900/50 px-5 py-3 font-mono text-sm tracking-[0.12em] text-slate-300 transition-colors hover:border-cyan-600/60 hover:bg-slate-900/80 hover:text-cyan-300"
        >
          <DownloadIcon />
          Download CV //
        </a>
      </div>

    </div>
  );
}
