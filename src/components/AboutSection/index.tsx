import { aboutMe } from "../../assets/constant";
import Google from "../Google";
import Instagram from "../Instagram";
import LinkedIn from "../LinkedIn";
import SocialMediaButton from "../SocialMediaButton";
import Typography from "../Typography";

export default function AboutSection() {
  return (
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
  );
}
