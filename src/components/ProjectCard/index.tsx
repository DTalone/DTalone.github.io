import { useEffect, useState } from "react";
import { Project } from "../../types";
import Typography from "../Typography";

interface ProjectcardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectcardProps) {
  const { name, date, tech, pictures, descriptions } = project;
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timeout: number;
    if (countdown < pictures.length) {
      timeout = setTimeout(() => {
        if (countdown + 1 >= pictures.length) setCountdown(0);
        else setCountdown(countdown + 1);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [countdown]);

  return (
    <div
      className={`border-2 border-neutral-900 rounded p-2 md:p-5 text-neutral-100 
            w-60 
            md:max-lg:w-72 
            lg:w-96 
            flex flex-col gap-5 relative my-2
            base:max-md:col-span-2
            `}
    >
      <div className="flex justify-center">
        <div
          className="border-2 border-neutral-900 
          w-[90%] h-24 sm:h-28 lg:h-40 overflow-hidden flex items-center justify-center"
        >
          <img
            src={pictures[countdown]}
            className="object-cover"
            alt={`${name}-${pictures[countdown]}`}
            onClick={() => setCountdown((countdown + 1) % pictures.length)}
          />
        </div>
      </div>
      <div className="text-center">
        <Typography type="p" className="font-bold">
          {name}
        </Typography>
        <Typography type="p" className="font-semibold">
          {date}
        </Typography>
      </div>
      <div>
        <Typography type="p">Tech : {tech}</Typography>
      </div>
      <div>
        {descriptions.map((description) => (
          <Typography type="p">- {description}</Typography>
        ))}
      </div>
    </div>
  );
}
