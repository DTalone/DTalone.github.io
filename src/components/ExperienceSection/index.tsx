import { experiences } from "../../assets/constant";
import CompanyCard from "../CompanyCard";
import Section from "../Section";

export default function ExperienceSection() {
  return (
    <Section title={"Experience"}>
      <div className="flex flex-col items-center origin-center rotate-0 ease-in-out duration-[250ms]">
        {experiences.map((experience, i, row) => {
          let order: "FIRST" | "LAST" | "SINGLE" | "" = "";
          if (i === 0 && i + 1 === row.length) order = "SINGLE";
          else if (i + 1 === row.length) order = "LAST";
          else if (i === 0) order = "FIRST";

          if (i % 2 === 0)
            return (
              <CompanyCard
                company={experience}
                position="left"
                key={experience.name}
                itemOrder={order}
              />
            );
          return (
            <CompanyCard
              company={experience}
              position="right"
              key={experience.name}
              itemOrder={order}
            />
          );
        })}
      </div>
    </Section>
  );
}
