"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useViewport } from "@/hooks/useViewport";
import { useParallax } from "@/hooks/useParallax";
import { computeModules } from "@/lib/modules";

import { BlueprintGrid } from "@/components/home/BlueprintGrid";
import { ConnectionLines } from "@/components/home/ConnectionLines";
import { CoreRings } from "@/components/home/CoreRings";
import { BootRipple } from "@/components/home/BootRipple";
import { PowerCore } from "@/components/home/PowerCore";
import { ModuleButton } from "@/components/home/ModuleButton";
import { CornerLabels } from "@/components/home/CornerLabels";

export default function Home() {
  const vp = useViewport();
  const { gridX, gridY, sceneX, sceneY, handleMouseMove, handleMouseLeave } = useParallax();

  const [isSystemOn, setIsSystemOn] = useState(false);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [rippleTick, setRippleTick] = useState(0);

  const vpReady = vp.w > 0;
  const modules = vpReady ? computeModules(vp) : [];

  const toggleSystem = () => {
    setIsSystemOn((prev) => {
      if (!prev) setRippleTick((v) => v + 1);
      return !prev;
    });
  };

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <BlueprintGrid isSystemOn={isSystemOn} gridX={gridX} gridY={gridY} />

      <motion.section className="relative z-10 h-full w-full" style={{ x: sceneX, y: sceneY }}>
        <div className="relative h-full w-full">

          {vpReady && (
            <ConnectionLines vp={vp} modules={modules} isSystemOn={isSystemOn} />
          )}

          <CoreRings isSystemOn={isSystemOn} />

          <BootRipple isSystemOn={isSystemOn} rippleTick={rippleTick} />

          <PowerCore
            isSystemOn={isSystemOn}
            isCoreHovered={isCoreHovered}
            onToggle={toggleSystem}
            onHoverStart={() => setIsCoreHovered(true)}
            onHoverEnd={() => setIsCoreHovered(false)}
          />

          {vpReady && modules.map((module, index) => (
            <ModuleButton
              key={module.id}
              module={module}
              index={index}
              isSystemOn={isSystemOn}
            />
          ))}

          <CornerLabels isSystemOn={isSystemOn} />

        </div>
      </motion.section>
    </main>
  );
}
