"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useViewport } from "@/hooks/useViewport";
import { useParallax } from "@/hooks/useParallax";
import { computeModules, MODULES_DEF } from "@/lib/modules";

import { BlueprintGrid } from "@/components/home/BlueprintGrid";
import { ConnectionLines } from "@/components/home/ConnectionLines";
import { CoreRings } from "@/components/home/CoreRings";
import { BootRipple } from "@/components/home/BootRipple";
import { PowerCore } from "@/components/home/PowerCore";
import { ModuleButton } from "@/components/home/ModuleButton";
import { PanelContainer } from "@/components/panels/PanelContainer";
import { ProjectsPanel } from "@/components/panels/ProjectsPanel";
import { SkillsPanel } from "@/components/panels/SkillsPanel";
import { AboutPanel } from "@/components/panels/AboutPanel";
import { ContactPanel } from "@/components/panels/ContactPanel";

export default function Home() {
  const vp = useViewport();
  const { gridX, gridY, sceneX, sceneY, handleMouseMove, handleMouseLeave } = useParallax();

  const [isSystemOn, setIsSystemOn] = useState(false);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [rippleTick, setRippleTick] = useState(0);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const vpReady = vp.w > 0;

  const panelWidth = useMemo(() => {
    if (!activeModule || !vpReady) return 0;
    const mod = MODULES_DEF.find((m) => m.id === activeModule);
    if (!mod) return 0;

    // Desktop: fixed fraction of viewport so panels feel substantial
    if (vp.w >= 1280) return Math.round(vp.w * 0.40);
    if (vp.w >= 1024) return Math.round(vp.w * 0.45);

    // Tablet / mobile: full screen width
    return vp.w;
  }, [activeModule, vp.w, vpReady]);

  // Panel offset motion value — springs towards the shift amount
  const panelOffsetMV = useMotionValue(0);
  const panelSpring = useSpring(panelOffsetMV, { stiffness: 110, damping: 22, mass: 0.8 });

  // Combine parallax sceneX with panel shift
  const totalSceneX = useTransform(
    [sceneX, panelSpring],
    (values: number[]) => values[0] + values[1],
  );

  // Update panel offset when active module or computed width changes
  useEffect(() => {
    if (!activeModule || !panelWidth) {
      panelOffsetMV.set(0);
      return;
    }
    const mod = MODULES_DEF.find((m) => m.id === activeModule);
    if (!mod) { panelOffsetMV.set(0); return; }
    panelOffsetMV.set(mod.fx < 0.5 ? panelWidth : -panelWidth);
  }, [activeModule, panelWidth, panelOffsetMV]);

  const modules = vpReady ? computeModules(vp) : [];

  const activeMod = MODULES_DEF.find((m) => m.id === activeModule);
  const panelSide = activeMod ? (activeMod.fx < 0.5 ? "left" : "right") : null;

  const toggleSystem = () => {
    setIsSystemOn((prev) => {
      if (!prev) {
        setRippleTick((v) => v + 1);
      } else {
        setActiveModule(null);
      }
      return !prev;
    });
  };

  const handleModuleToggle = (id: string) => {
    setActiveModule((prev) => (prev === id ? null : id));
  };

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <BlueprintGrid isSystemOn={isSystemOn} gridX={gridX} gridY={gridY} />

      {/* Side panels — rendered outside the scene so they don't shift with it */}
      <AnimatePresence>
        {activeModule && panelSide && activeMod && (
          <PanelContainer
            side={panelSide}
            title={activeMod.label}
            panelWidth={panelWidth}
            onClose={() => setActiveModule(null)}
          >
            {activeModule === "projects" && <ProjectsPanel />}
            {activeModule === "skills" && <SkillsPanel />}
            {activeModule === "about" && <AboutPanel />}
            {activeModule === "contact" && <ContactPanel />}
          </PanelContainer>
        )}
      </AnimatePresence>

      <motion.section
        className="relative z-10 h-full w-full"
        style={{ x: totalSceneX, y: sceneY }}
      >
        <div className="relative h-full w-full">

          {vpReady && (
            <ConnectionLines
              vp={vp}
              modules={modules}
              isSystemOn={isSystemOn}
              activeModuleId={activeModule}
            />
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
              isActive={activeModule === module.id}
              onToggle={handleModuleToggle}
            />
          ))}


        </div>
      </motion.section>
    </main>
  );
}
