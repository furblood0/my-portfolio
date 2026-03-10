"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Positions as fractions of viewport (0–1). Same values are used for both
// the SVG path endpoints and the CSS absolute positioning, guaranteeing
// perfect alignment at any screen size.
const MODULES_DEF = [
  {
    id: "projects",
    label: "Projects",
    fx: 0.21,
    fy: 0.16,
    flow: "4.8s",
    // Bezier control-point fractions relative to the (dx, dy) vector
    c1: [0.28, -0.08] as [number, number],
    c2: [0.62, -0.28] as [number, number],
  },
  {
    id: "skills",
    label: "Skills",
    fx: 0.8,
    fy: 0.28,
    flow: "5.5s",
    c1: [0.14, -0.04] as [number, number],
    c2: [0.74, -0.14] as [number, number],
  },
  {
    id: "about",
    label: "About",
    fx: 0.28,
    fy: 0.83,
    flow: "6.2s",
    c1: [0.16, 0.22] as [number, number],
    c2: [0.58, 0.42] as [number, number],
  },
  {
    id: "contact",
    label: "Contact",
    fx: 0.84,
    fy: 0.72,
    flow: "5.8s",
    c1: [0.24, 0.06] as [number, number],
    c2: [0.8, 0.3] as [number, number],
  },
];

export default function Home() {
  const [vp, setVp] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [isSystemOn, setIsSystemOn] = useState(false);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [rippleTick, setRippleTick] = useState(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.3 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.3 });

  const gridX = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const gridY = useTransform(springY, [-0.5, 0.5], [14, -14]);
  const sceneX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const sceneY = useTransform(springY, [-0.5, 0.5], [-22, 22]);

  // Compute pixel positions from viewport fractions
  const coreX = vp.w * 0.5;
  const coreY = vp.h * 0.5;

  const modules = MODULES_DEF.map((m) => ({
    ...m,
    x: Math.round(m.fx * vp.w),
    y: Math.round(m.fy * vp.h),
  }));

  const getCurveData = (module: (typeof modules)[number]) => {
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
  };

  const toggleSystem = () => {
    setIsSystemOn((prev) => {
      if (!prev) setRippleTick((v) => v + 1);
      return !prev;
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - left) / width - 0.5);
    rawY.set((event.clientY - top) / height - 0.5);
  };

  const vpReady = vp.w > 0;

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
    >
      {/* ── Blueprint grid ── */}
      <AnimatePresence>
        {isSystemOn && (
          <motion.div
            aria-hidden
            className="blueprint-grid fixed inset-0"
            style={{ x: gridX, y: gridY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        )}
      </AnimatePresence>

      <motion.section className="relative z-10 h-full w-full" style={{ x: sceneX, y: sceneY }}>
        <div className="relative h-full w-full">

          {/* ── SVG connection lines ── */}
          {vpReady && (
            <svg
              aria-hidden
              viewBox={`0 0 ${vp.w} ${vp.h}`}
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{ opacity: isSystemOn ? 1 : 0 }}
            >
              {modules.map((module, index) => {
                const curve = getCurveData(module);
                const routeDelay = 0.28 + index * 0.62;
                return (
                  <g key={module.id}>
                    {/* base track */}
                    <motion.path
                      d={curve.path}
                      stroke="#334155"
                      strokeWidth="1.45"
                      strokeDasharray="6 10"
                      fill="none"
                      initial={false}
                      animate={{ pathLength: isSystemOn ? 1 : 0, opacity: isSystemOn ? 0.75 : 0 }}
                      transition={
                        isSystemOn
                          ? { duration: 2.1, ease: "easeInOut", delay: routeDelay }
                          : { duration: 0.35, ease: "easeOut", delay: (3 - index) * 0.1 }
                      }
                    />
                    {/* energy overlay */}
                    <motion.path
                      d={curve.path}
                      stroke="#22d3ee"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      fill="none"
                      initial={false}
                      animate={{ pathLength: isSystemOn ? 1 : 0, opacity: isSystemOn ? 0.9 : 0 }}
                      transition={
                        isSystemOn
                          ? { duration: 2.5, ease: "easeInOut", delay: routeDelay + 0.5 }
                          : { duration: 0.28, ease: "easeOut", delay: (3 - index) * 0.08 }
                      }
                    />
                    {/* start junction */}
                    <motion.circle
                      cx={curve.startJx}
                      cy={curve.startJy}
                      r="1.6"
                      fill="#22d3ee"
                      initial={false}
                      animate={{ scale: isSystemOn ? 1 : 0, opacity: isSystemOn ? 0.8 : 0 }}
                      transition={
                        isSystemOn
                          ? { delay: routeDelay + 0.5, duration: 0.3 }
                          : { delay: (3 - index) * 0.08, duration: 0.2 }
                      }
                    />
                    {/* end junction — exactly at module center */}
                    <motion.circle
                      cx={module.x}
                      cy={module.y}
                      r="1.9"
                      fill="#22d3ee"
                      initial={false}
                      animate={{ scale: isSystemOn ? 1 : 0, opacity: isSystemOn ? 0.92 : 0 }}
                      transition={
                        isSystemOn
                          ? { delay: routeDelay + 2.0, duration: 0.35 }
                          : { delay: (3 - index) * 0.1, duration: 0.2 }
                      }
                    />
                    {/* moving dot */}
                    <motion.circle
                      r="2.1"
                      fill="#22d3ee"
                      initial={false}
                      animate={{ opacity: isSystemOn ? 0.94 : 0 }}
                      transition={
                        isSystemOn
                          ? { duration: 0.35, delay: routeDelay + 1.3 }
                          : { duration: 0.2, delay: (3 - index) * 0.1 }
                      }
                    >
                      <animateMotion dur={module.flow} repeatCount="indefinite" path={curve.path} />
                    </motion.circle>
                  </g>
                );
              })}
            </svg>
          )}

          {/* ── Core outer rings ── */}
          <AnimatePresence>
            {isSystemOn && (
              <motion.div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/40 [animation:spin_14s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-dashed border-slate-500/50 [animation:spin_8s_linear_infinite_reverse]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Boot ripple ── */}
          <AnimatePresence>
            {isSystemOn && (
              <motion.span
                key={`ripple-${rippleTick}`}
                className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80"
                initial={{ scale: 1, opacity: 0.85 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* ── Power Core button ── */}
          <motion.button
            type="button"
            onClick={toggleSystem}
            onHoverStart={() => setIsCoreHovered(true)}
            onHoverEnd={() => setIsCoreHovered(false)}
            className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-full text-center"
            initial={false}
            animate={{
              scale: isSystemOn ? 1 : [1, isCoreHovered ? 1.04 : 1.02, 1],
              borderColor: isSystemOn ? "rgba(34,211,238,0.85)" : "rgba(100,116,139,0.5)",
              backgroundColor: isSystemOn ? "rgba(2,6,23,0.88)" : "rgba(15,23,42,0.65)",
              boxShadow: isSystemOn
                ? "0 0 34px rgba(34,211,238,0.35)"
                : isCoreHovered
                  ? "0 0 24px rgba(34,211,238,0.2)"
                  : "0 0 12px rgba(100,116,139,0.15)",
              color: isSystemOn ? "#22d3ee" : "#94a3b8",
            }}
            transition={{
              scale: isSystemOn
                ? { type: "spring", stiffness: 120, damping: 12 }
                : { duration: isCoreHovered ? 1.4 : 3.1, ease: "easeInOut", repeat: Infinity },
              borderColor: { duration: 0.35 },
              backgroundColor: { duration: 0.35 },
              boxShadow: { duration: 0.35 },
              color: { duration: 0.35 },
            }}
            style={{ borderWidth: "1px", borderStyle: "solid" }}
          >
            <motion.span
              className="pointer-events-none absolute inset-[-8px] rounded-full border border-cyan-300/45"
              initial={false}
              animate={{
                opacity: isCoreHovered || isSystemOn ? 0.7 : 0.3,
                scale: isCoreHovered && !isSystemOn ? 1.05 : 1,
              }}
              transition={{ duration: 0.25 }}
            />
            <span className={`font-mono text-[10px] uppercase tracking-[0.3em] ${isSystemOn ? "text-cyan-200/75" : "text-slate-500"}`}>
              Power Core
            </span>
            <strong className={`mt-2 text-3xl font-semibold ${isSystemOn ? "text-cyan-400" : "text-slate-400/80"}`}>
              Furkan
            </strong>
          </motion.button>

          {/* ── Hover tooltip ── */}
          <AnimatePresence>
            {!isSystemOn && isCoreHovered && (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[calc(50%-126px)] -translate-x-1/2 rounded-sm border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-slate-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                Sistemi Baslat // Initialize System
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Module buttons — positioned with exact pixel values matching SVG ── */}
          {vpReady && modules.map((module, index) => {
            const routeDelay = 0.28 + index * 0.62;
            const moduleDelay = routeDelay + 2.85;
            return (
              <motion.button
                key={module.id}
                type="button"
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-slate-950/80 px-6 py-3 font-mono text-sm tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-300"
                style={{
                  left: module.x,
                  top: module.y,
                  pointerEvents: isSystemOn ? "auto" : "none",
                }}
                initial={false}
                animate={{
                  opacity: isSystemOn ? 1 : 0,
                  borderColor: isSystemOn ? "rgba(71,85,105,0.85)" : "rgba(71,85,105,0)",
                }}
                transition={
                  isSystemOn
                    ? {
                        opacity: { duration: 0.8, delay: moduleDelay },
                        borderColor: { duration: 0.6, delay: moduleDelay + 0.1 },
                      }
                    : { opacity: { duration: 0.2 }, borderColor: { duration: 0.15 } }
                }
              >
                <motion.span
                  className="absolute inset-0 rounded-[10px] border border-cyan-300/50"
                  initial={false}
                  animate={{ opacity: isSystemOn ? [0, 0.75, 0.15] : 0 }}
                  transition={
                    isSystemOn
                      ? { duration: 1.2, delay: moduleDelay + 0.2, times: [0, 0.35, 1] }
                      : { duration: 0.2 }
                  }
                />
                <span className="relative z-10">{module.label}</span>
              </motion.button>
            );
          })}

          {/* ── Corner labels ── */}
          <AnimatePresence>
            {isSystemOn && (
              <>
                <motion.div
                  className="absolute left-8 top-6 font-mono text-xs tracking-[0.22em] text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                >
                  THE KINETIC BLUEPRINT
                </motion.div>
                <motion.div
                  className="absolute bottom-7 right-8 font-mono text-[10px] tracking-[0.22em] text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.15, duration: 0.4 }}
                >
                  SYSTEM STATUS // NOMINAL
                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>
      </motion.section>
    </main>
  );
}
