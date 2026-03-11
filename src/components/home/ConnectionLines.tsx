"use client";

import { motion } from "framer-motion";
import { type ComputedModule, getCurveData } from "@/lib/modules";

type Props = {
  vp: { w: number; h: number };
  modules: ComputedModule[];
  isSystemOn: boolean;
  activeModuleId: string | null;
};

export function ConnectionLines({ vp, modules, isSystemOn, activeModuleId }: Props) {
  const coreX = vp.w * 0.5;
  const coreY = vp.h * 0.5;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${vp.w} ${vp.h}`}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: isSystemOn ? 1 : 0 }}
    >
      {modules.map((module, index) => {
        const curve = getCurveData(module, coreX, coreY);
        const routeDelay = 0.28 + index * 0.62;
        return (
          <g key={module.id}>
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

            {/* Fast pulse dots when this module is active */}
            {activeModuleId === module.id && (
              <>
                <motion.circle
                  r="2.8"
                  fill="#22d3ee"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <animateMotion dur="1.3s" repeatCount="indefinite" path={curve.path} />
                </motion.circle>
                <motion.circle
                  r="2.0"
                  fill="#67e8f9"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <animateMotion dur="1.0s" repeatCount="indefinite" path={curve.path} />
                </motion.circle>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
