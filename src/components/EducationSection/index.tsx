import constant from "../../assets/constant";
import SchoolCard from "../SchoolCard";
import Section from "../Section";

export default function EducationSection() {
  const {
    education: { title, items },
  } = constant();

  return (
    <Section title={title}>
      <div className="flex base:max-sm:flex-col justify-center items-center gap-5">
        {items.map((education, i, row) => {
          let order: "FIRST" | "LAST" | "SINGLE" | "" = "";
          if (i === 0 && i + 1 === row.length) order = "SINGLE";
          else if (i + 1 === row.length) order = "LAST";
          else if (i === 0) order = "FIRST";
          return (
            <SchoolCard
              school={education}
              itemOrder={order}
              key={education.name}
            />
          );
        })}
      </div>
    </Section>
  );
}
