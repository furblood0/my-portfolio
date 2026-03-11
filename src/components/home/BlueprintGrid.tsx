"use client";

import { AnimatePresence, motion, type MotionValue } from "framer-motion";

type Props = {
  isSystemOn: boolean;
  gridX: MotionValue<number>;
  gridY: MotionValue<number>;
};

export function BlueprintGrid({ isSystemOn, gridX, gridY }: Props) {
  return (
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
  );
}
