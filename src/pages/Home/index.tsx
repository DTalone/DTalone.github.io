import {
  aboutMe,
  awards,
  educations,
  experiences,
  projects,
  skills,
  volunteers,
} from "../../assets/constant";
import AwardCard from "../../components/AwardCard";
import CompanyCard from "../../components/CompanyCard";
import Google from "../../components/Google";
import Instagram from "../../components/Instagram";
import LinkedIn from "../../components/LinkedIn";
import ProjectCard from "../../components/ProjectCard";
import SchoolCard from "../../components/SchoolCard";
import Section from "../../components/Section";
import SkillCard from "../../components/SkillCard";
import SocialMediaButton from "../../components/SocialMediaButton";
import Typography from "../../components/Typography";
import VolunteerCard from "../../components/VolunteerCard";
import "./style.css";

function Home() {
  return (
    <div className="pb-10 relative">
      <div className="absolute right-10 -top-10" id="home">
        <select
          name="language"
          id="language"
          className="bg-transparent text-neutral-100 border-2 border-neutral-100 rounded px-5 py-1"
        >
          <option value="ENGLISH">EN</option>
          <option value="INDONESIA">ID</option>
        </select>
      </div>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex  flex-col justify-center items-center p-10 sm:w-[50%]">
          <div className="rounded-full overflow-hidden border-2 border-neutral-600 sm:max-md:w-[70%] md:max-lg:w-[80%]">
            <img
              src="/selfie.png"
              alt="foto-faziz"
              style={{ pointerEvents: "none" }}
            />
          </div>
          <div className="flex justify-center gap-5 p-5">
            <SocialMediaButton
              icon={<LinkedIn />}
              url="https://www.linkedin.com/in/faziz14/"
            />
            <SocialMediaButton
              icon={<Google />}
              url="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=farisaziz22@gmail.com"
            />
            <SocialMediaButton
              icon={<Instagram />}
              url="https://instagram.com/f_aziz14"
            />
          </div>
        </div>
        <div className="grow flex flex-col ">
          <div className="text-center  p-5">
            <Typography type="h1">Welcome</Typography>
          </div>
          <div className="p-5 flex justify-center">
            <div
              className={`max-w-md min-w-64 min-h-20 rounded bg-neutral-600 py-5 px-10 text-justify indent-5 shadow-card
                          base:max-sm:px-5`}
            >
              <Typography type="p">{aboutMe}</Typography>
            </div>
          </div>
          <div className="p-5 text-center">
            <Typography type="h2" className="font-kronaone">
              F<span className="text-neutral-600">aris</span> Aziz
            </Typography>
          </div>
        </div>
      </div>
      <Section title={"Experience"}>
        <div className="flex flex-col items-center">
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
      <Section title={"Education"}>
        <div className="flex base:max-sm:flex-col justify-center items-center gap-5">
          {educations.map((education, i, row) => {
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
      <Section title={"Project"}>
        <div className="flex flex-wrap gap-5 justify-center">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </Section>
      <Section title={"Leadership"}>
        <div className="flex flex-wrap gap-5 justify-center">
          {volunteers.map((volunteer) => (
            <VolunteerCard volunteer={volunteer} key={volunteer.organization} />
          ))}
        </div>
      </Section>
      <Section title={"Skill"}>
        <div className="flex flex-wrap gap-5 justify-center">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.topic} />
          ))}
        </div>
      </Section>
      <Section title={"Award"}>
        <div className="flex base:max-sm:flex-col justify-center items-center gap-5">
          {awards.map((award) => (
            <AwardCard award={award} key={award.name} />
          ))}
        </div>
      </Section>
      <div className="flex flex-col items-center text-center py-10" id="motto">
        <div className="pb-5">
          <Typography type="h3" className="text-center">
            <span> . . . </span> نُوْرٌ عَلٰى نُوْرٍۗ <span> . . . </span>
          </Typography>
        </div>
        <div className="base:max-md:px-10 md:w-1/2">
          <Typography type="p">"... Light upon light! ..."</Typography>
          <Typography type="p">(Q24:35)</Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;
