export type ModuleDef = {
  id: string;
  label: string;
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
    fx: 0.21,
    fy: 0.16,
    flow: "4.8s",
    c1: [0.28, -0.08],
    c2: [0.62, -0.28],
  },
  {
    id: "skills",
    label: "Skills",
    fx: 0.8,
    fy: 0.28,
    flow: "5.5s",
    c1: [0.14, -0.04],
    c2: [0.74, -0.14],
  },
  {
    id: "about",
    label: "About",
    fx: 0.28,
    fy: 0.83,
    flow: "6.2s",
    c1: [0.16, 0.22],
    c2: [0.58, 0.42],
  },
  {
    id: "contact",
    label: "Contact",
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

export function computeModules(vp: { w: number; h: number }): ComputedModule[] {
  return MODULES_DEF.map((m) => ({
    ...m,
    x: Math.round(m.fx * vp.w),
    y: Math.round(m.fy * vp.h),
  }));
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
