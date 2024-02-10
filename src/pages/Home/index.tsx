import AboutSection from "../../components/AboutSection";
import AwardSection from "../../components/AwardSection";
import EducationSection from "../../components/EducationSection";
import ExperienceSection from "../../components/ExperienceSection";
import LeadershipSection from "../../components/LeadershipSection";
import ProjectSection from "../../components/ProjectSection";
import QuoteSection from "../../components/QuoteSecction";
import SelectLanguage from "../../components/SelectLanguage";
import SkillSection from "../../components/SkillSection";
import "./style.css";

function Home() {
  return (
    <div className="pb-10 relative">
      <SelectLanguage />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
      <LeadershipSection />
      <SkillSection />
      <AwardSection />
      <QuoteSection />
    </div>
  );
}

export default Home;
