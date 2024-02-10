import { skills } from "../../assets/constant";
import Section from "../Section";
import SkillCard from "../SkillCard";

export default function SkillSection() {
  return (
    <Section title={"Skill"}>
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.topic} />
        ))}
      </div>
    </Section>
  );
}
