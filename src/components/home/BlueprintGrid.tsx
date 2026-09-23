"use client";

import { motion, type MotionValue } from "framer-motion";

type Props = {
  gridX: MotionValue<number>;
  gridY: MotionValue<number>;
};

export function BlueprintGrid({ gridX, gridY }: Props) {
  return (
    <motion.div
      aria-hidden
      className="blueprint-grid fixed inset-0"
      style={{ x: gridX, y: gridY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.7 }}
    />
  );
}
