import constant from "../../assets/constant";
import Section from "../Section";
import SkillCard from "../SkillCard";

export default function SkillSection() {
  const {
    skill: { title, items },
  } = constant();
  return (
    <Section title={title}>
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((skill) => (
          <SkillCard skill={skill} key={skill.topic} />
        ))}
      </div>
    </Section>
  );
}
