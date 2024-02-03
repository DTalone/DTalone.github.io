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
          <div className="rounded-full overflow-hidden">
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
      <div className="grow">isi welcome dan aboutme</div>
    </div>
  );
}

export default Home;
