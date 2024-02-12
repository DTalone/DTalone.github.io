import constant from "../../assets/constant";
import ProjectCard from "../ProjectCard";
import Section from "../Section";

export default function ProjectSection() {
  const {
    project: { title, items },
  } = constant();

  return (
    <Section title={title}>
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </Section>
  );
}
