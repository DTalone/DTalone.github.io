import { volunteers } from "../../assets/constant";
import Section from "../Section";
import VolunteerCard from "../VolunteerCard";

export default function LeadershipSection() {
  return (
    <Section title={"Leadership"}>
      <div className="flex flex-wrap gap-5 justify-center">
        {volunteers.map((volunteer) => (
          <VolunteerCard volunteer={volunteer} key={volunteer.organization} />
        ))}
      </div>
    </Section>
  );
}
