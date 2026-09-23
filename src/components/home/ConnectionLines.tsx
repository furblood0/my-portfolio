"use client";

import { motion } from "framer-motion";
import { getCurveData, getRouteDelay, type ComputedModule } from "@/lib/modules";

type Props = {
  vp: { w: number; h: number };
  modules: ComputedModule[];
  activeModuleId: string | null;
};

export function ConnectionLines({ vp, modules, activeModuleId }: Props) {
  const coreX = vp.w * 0.5;
  const coreY = vp.h * 0.5;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${vp.w} ${vp.h}`}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {modules.map((module, index) => {
        const curve = getCurveData(module, coreX, coreY);
        const routeDelay = getRouteDelay(index);
        return (
          <g key={module.id}>
            <motion.path
              d={curve.path}
              stroke="#334155"
              strokeWidth="1.45"
              strokeDasharray="6 10"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.75 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: routeDelay }}
            />
            <motion.path
              d={curve.path}
              stroke="#22d3ee"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 0.85, ease: "easeInOut", delay: routeDelay + 0.15 }}
            />
            <motion.circle
              cx={curve.startJx}
              cy={curve.startJy}
              r="1.6"
              fill="#22d3ee"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ delay: routeDelay + 0.15, duration: 0.25 }}
            />
            <motion.circle
              cx={module.x}
              cy={module.y}
              r="1.9"
              fill="#22d3ee"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.92 }}
              transition={{ delay: routeDelay + 0.55, duration: 0.25 }}
            />
            <motion.circle
              r="2.1"
              fill="#22d3ee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.94 }}
              transition={{ duration: 0.25, delay: routeDelay + 0.4 }}
            >
              <animateMotion dur={module.flow} repeatCount="indefinite" path={curve.path} />
            </motion.circle>

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
