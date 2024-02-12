import constant from "../../assets/constant";
import Section from "../Section";
import VolunteerCard from "../VolunteerCard";

export default function LeadershipSection() {
  const {
    leadership: { title, items },
  } = constant();
  return (
    <Section title={title}>
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((volunteer) => (
          <VolunteerCard volunteer={volunteer} key={volunteer.organization} />
        ))}
      </div>
    </Section>
  );
}
