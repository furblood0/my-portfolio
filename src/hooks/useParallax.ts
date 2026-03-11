"use client";

import { type MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useParallax() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.3 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.3 });

  const gridX = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const gridY = useTransform(springY, [-0.5, 0.5], [14, -14]);
  const sceneX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const sceneY = useTransform(springY, [-0.5, 0.5], [-22, 22]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    // Skip parallax on touch devices — pointer: coarse means finger/stylus
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - left) / width - 0.5);
    rawY.set((event.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { gridX, gridY, sceneX, sceneY, handleMouseMove, handleMouseLeave };
}
