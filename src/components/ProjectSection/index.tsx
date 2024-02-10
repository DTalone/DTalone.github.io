import { projects } from "../../assets/constant";
import ProjectCard from "../ProjectCard";
import Section from "../Section";

export default function ProjectSection() {
  return (
    <Section title={"Project"}>
      <div className="flex flex-wrap gap-5 justify-center">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </Section>
  );
}
