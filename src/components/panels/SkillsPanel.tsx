import { SkillPanel } from "@/components/skills/SkillPanel";
import { SKILLS } from "@/data/skills";

export function SkillsPanel() {
  return (
    <div className="flex flex-col gap-5">
      {SKILLS.map((category, index) => (
        <SkillPanel key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
