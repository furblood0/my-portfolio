export type ModuleDef = {
  id: string;
  label: string;
  detail: string;
  fx: number;
  fy: number;
  flow: string;
  c1: [number, number];
  c2: [number, number];
};

export type ComputedModule = ModuleDef & { x: number; y: number };

export type CurveData = {
  path: string;
  startJx: number;
  startJy: number;
};

export const MODULES_DEF: ModuleDef[] = [
  {
    id: "projects",
    label: "Projects",
    detail: "Selected work",
    fx: 0.21,
    fy: 0.24,
    flow: "4.8s",
    c1: [0.28, -0.08],
    c2: [0.62, -0.28],
  },
  {
    id: "skills",
    label: "Skills",
    detail: "Stack",
    fx: 0.8,
    fy: 0.28,
    flow: "5.5s",
    c1: [0.14, -0.04],
    c2: [0.74, -0.14],
  },
  {
    id: "about",
    label: "About",
    detail: "Background",
    fx: 0.28,
    fy: 0.76,
    flow: "6.2s",
    c1: [0.16, 0.22],
    c2: [0.58, 0.42],
  },
  {
    id: "contact",
    label: "Contact",
    detail: "Reach me",
    fx: 0.84,
    fy: 0.72,
    flow: "5.8s",
    c1: [0.24, 0.06],
    c2: [0.8, 0.3],
  },
];

/** Stagger for boot lines and module buttons — last item lands around 1s. */
export function getRouteDelay(index: number): number {
  return 0.08 + index * 0.12;
}

/** Phone portrait: keep buttons in the corners, clear of the core and the chrome. */
const PHONE: Record<string, [number, number]> = {
  projects: [0.22, 0.24],
  skills: [0.78, 0.32],
  about: [0.24, 0.78],
  contact: [0.78, 0.7],
};

/** Short phone (SE, browser chrome): pull the top pair up and the bottom pair down. */
const PHONE_SHORT: Record<string, [number, number]> = {
  projects: [0.24, 0.2],
  skills: [0.76, 0.28],
  about: [0.26, 0.8],
  contact: [0.76, 0.68],
};

/** Wide but short (phone landscape, small window). */
const SHORT: Record<string, [number, number]> = {
  projects: [0.15, 0.26],
  skills: [0.85, 0.32],
  about: [0.18, 0.76],
  contact: [0.85, 0.7],
};

export function computeModules(vp: { w: number; h: number }): ComputedModule[] {
  const narrow = vp.w < 640;
  const short = vp.h < 720;
  const spots = narrow ? (short ? PHONE_SHORT : PHONE) : short ? SHORT : null;

  return MODULES_DEF.map((m) => {
    const [fx, fy] = spots?.[m.id] ?? [m.fx, m.fy];
    return {
      ...m,
      x: Math.round(fx * vp.w),
      y: Math.round(fy * vp.h),
    };
  });
}

export function getCurveData(
  module: ComputedModule,
  coreX: number,
  coreY: number,
): CurveData {
  const dx = module.x - coreX;
  const dy = module.y - coreY;
  const c1x = coreX + dx * module.c1[0];
  const c1y = coreY + dy * module.c1[1];
  const c2x = coreX + dx * module.c2[0];
  const c2y = coreY + dy * module.c2[1];
  return {
    path: `M ${coreX} ${coreY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${module.x} ${module.y}`,
    startJx: coreX + dx * 0.16,
    startJy: coreY + dy * 0.08,
  };
}
