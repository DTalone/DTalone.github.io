import { awards } from "../../assets/constant";
import AwardCard from "../AwardCard";
import Section from "../Section";

export default function AwardSection() {
  return (
    <Section title={"Award"}>
      <div className="flex base:max-sm:flex-col justify-center items-center gap-5">
        {awards.map((award) => (
          <AwardCard award={award} key={award.name} />
        ))}
      </div>
    </Section>
  );
}
