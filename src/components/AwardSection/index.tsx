import constant from "../../assets/constant";
import AwardCard from "../AwardCard";
import Section from "../Section";

export default function AwardSection() {
  const {
    award: { title, items },
  } = constant();
  return (
    <Section title={title}>
      <div className="flex base:max-sm:flex-col justify-center items-center gap-5">
        {items.map((award) => (
          <AwardCard award={award} key={award.name} />
        ))}
      </div>
    </Section>
  );
}
