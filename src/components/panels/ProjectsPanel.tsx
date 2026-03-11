"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function ProjectsPanel() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const handleExpand = (id: string) =>
    setExpandedIds((prev) => new Set(prev).add(id));

  const handleCollapse = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  return (
    <div className="flex flex-col gap-4">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          isExpanded={expandedIds.has(project.id)}
          onExpand={handleExpand}
          onCollapse={handleCollapse}
        />
      ))}
    </div>
  );
}
