import CardSection from "../../components/CardSection";
import LightBoard from "../../components/LightBoard";
import "./style.css";

function Home() {
  return (
    <div className="background bg-black-dark p-8">
      <div className="flex justify-center items-center">
        <LightBoard height="200px" width="500px" />
      </div>
      <div className="flex flex-col gap-8">
        <CardSection title="Summary">
          <div className="md:flex md:items-center gap-5">
            <div className="w-full md:w-1/2">
              <p className="font-krub text-white text-3xl text-justify py-5">
                A final-year college student in Bandung Institute of Technology.
                I am passionate about leadership, web development, and social
                activity. Practical, adventurous, adaptable are three words to
                describe my personality. My team members always counts on me to
                coordinate the project.
              </p>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2 py-5">
              <div className="p-8">
                <img
                  className="pointer-events-none"
                  src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                  alt="Faziz's Picture"
                />
              </div>
            </div>
          </div>
        </CardSection>
      </div>
    </div>
  );
}

export default Home;
