import Google from "../../components/Google";
import Instagram from "../../components/Instagram";
import LinkedIn from "../../components/LinkedIn";
import SocialMediaButton from "../../components/SocialMediaButton";
import "./style.css";

function Home() {
  return (
    <div className="flex">
      <div className="p-10">
        <div className="">
          <div className="rounded-full overflow-hidden border-2 border-neutral-600">
            <img src="/foto.png" alt="foto-faziz" />
          </div>
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
          <h1 className="font-kronaone text-neutral-100 text-9xl">Welcome</h1>
        </div>
        <div className="p-5 flex justify-center">
          <div className="max-w-md min-w-64 min-h-20 rounded bg-neutral-600 py-5 px-10 text-justify indent-5 shadow-card">
            <p className="font-krub text-2xl text-neutral-100">
              I am passionate about leadership, web development, and social
              activity. Practical, adventurous, adaptable are three words to
              describe my personality. My team members always counts on me to
              coordinate the project.
            </p>
          </div>
        </div>
        <div className="p-5 text-center">
          <h2 className="font-kronaone text-neutral-100 text-6xl">
            F<span className="text-neutral-600">aris</span> Aziz
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
