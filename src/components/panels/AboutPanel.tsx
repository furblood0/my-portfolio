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

      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-900/60 bg-slate-900">
          <span aria-hidden className="absolute inset-[-5px] rounded-full border border-dashed border-slate-700/50" />
          <span className="font-mono text-sm font-semibold tracking-[0.12em] text-cyan-300/90">
            FF
          </span>
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/80">
            {ABOUT.availability}
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            {ABOUT.name}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {ABOUT.title}
            <span className="mx-1.5 text-slate-600">·</span>
            {ABOUT.location}
          </p>
        </div>
      </div>

      <p className="text-[15px] leading-7 text-slate-200">{ABOUT.focus}</p>

      <dl className="grid grid-cols-2 gap-2">
        {ABOUT.highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-slate-800/80 bg-slate-900/50 px-3 py-2.5"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400/70">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm leading-snug text-slate-200">{item.value}</dd>
          </div>
        ))}
      </dl>

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
          className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-cyan-700/50 bg-cyan-950/30 px-5 py-3 text-sm font-medium tracking-wide text-cyan-100 transition-colors hover:border-cyan-400/70 hover:bg-cyan-950/50 hover:text-cyan-50"
        >
          <DownloadIcon />
          Download CV
        </a>
      </div>

    </div>
  );
}
