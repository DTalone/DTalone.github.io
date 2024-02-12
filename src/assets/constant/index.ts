import { useTranslation } from "react-i18next";

const constant = () => {
  const { t } = useTranslation();
  return {
    welcome: t("welcome"),
    aboutMe: t("aboutMe"),
    experience: {
      title: t("experience"),
      items: [
        {
          name: "BFI FInance Indonesia",
          logo: "bfi.png",
          location: {
            city: t("location.tangsel"),
            province: t("location.banten"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: t("associateFE"),
              dateStart: `${t("month.1")} 2023`,
              dateEnd: t("present"),
              descriptions: [t("bfi.desc1")],
            },
          ],
        },
        {
          name: "Ice House",
          logo: "icehouse.png",
          location: {
            city: t("location.jaksel"),
            province: t("location.jakarta"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: `${t("seIntern")} (Certified Engineer Program)`,
              dateStart: `${t("month.3")} 2022`,
              dateEnd: `${t("month.12")} 2022`,
              descriptions: [t("ih.desc1"), t("ih.desc2")],
            },
          ],
        },
        {
          name: "Menlo Park School",
          logo: "menloparkschool.jpeg",
          location: {
            city: t("location.tangsel"),
            province: t("location.banten"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: "Coding Tutor",
              dateStart: `${t("month.8")} 2021`,
              dateEnd: `${t("month.6")} 2022`,
              descriptions: [t("mps.desc1"), t("mps.desc2")],
            },
          ],
        },
        {
          name: "Bank Negara Indonesia (BNI)",
          logo: "bni.png",
          location: {
            city: t("location.jakpus"),
            province: t("location.jakarta"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: t("itSAIntern"),
              dateStart: `${t("month.6")} 2021`,
              dateEnd: `${t("month.12")} 2021`,
              descriptions: [t("bni.desc1"), t("bni.desc2")],
            },
          ],
        },
        {
          name: "Schoters",
          logo: "schoters.jpeg",
          location: {
            city: t("location.jaksel"),
            province: t("location.jakarta"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: t("seIntern"),
              dateStart: `${t("month.1")} 2023`,
              dateEnd: `${t("month.1")} 2024`,
              descriptions: [
                t("schoters.desc1"),
                t("schoters.desc2"),
                t("schoters.desc3"),
              ],
            },
          ],
        },
      ],
    },
    education: {
      title: t("education"),
      items: [
        {
          name: t("itb.name"),
          major: t("ie"),
          logo: "itb.png",
          location: {
            city: t("location.bandung"),
            province: t("location.jabar"),
            country: t("location.indonesia"),
          },
          dateStart: "",
          dateEnd: `${t("month.10")} 2023`,
          descriptions: [t("itb.desc1"), t("itb.desc2"), t("itb.desc3")],
        },
        {
          name: t("sma8.name"),
          major: "IPA",
          logo: "sma8.png",
          location: {
            city: t("location.jaksel"),
            province: t("location.jakarta"),
            country: t("location.indonesia"),
          },
          dateStart: "",
          dateEnd: `${t("month.8")} 2019`,
          descriptions: [t("sma8.desc1"), t("sma8.desc2")],
        },
      ],
    },
    project: {
      title: t("project"),
      items: [
        {
          name: "Endpoint API 2.0 Salam Cendekia",
          pictures: ["x.png"],
          date: `${t("month.11")} 2021`,
          tech: "Codeigniter 4",
          descriptions: [t("salcen.desc1")],
        },
        {
          name: "E-Tahfidz Darunnajah MAN IC OKI",
          pictures: ["etahfidz_1.png", "etahfidz_2.png"],
          date: `${t("month.8")} 2021`,
          tech: "Vue",
          descriptions: [t("manICOKI.desc1")],
        },
      ],
    },
    leadership: {
      title: t("leadership"),
      items: [
        {
          organization: "HMIF ITB",
          logo: "hmifitb.jpeg",
          location: {
            city: t("location.bandung"),
            province: t("location.jabar"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: t("hmif.jobs1.position"),
              dateStart: `${t("month.4")} 2022`,
              dateEnd: `${t("month.5")} 2023`,
              descriptions: [t("hmif.jobs1.desc1"), t("hmif.jobs1.desc2")],
            },
            {
              position: t("hmif.jobs2.position"),
              dateStart: `${t("month.5")} 2021`,
              dateEnd: `${t("month.8")} 2021`,
              descriptions: [t("hmif.jobs2.desc1"), t("hmif.jobs2.desc2")],
            },
          ],
        },
        {
          organization: "Ganesha IoTech 2022",
          logo: "iotech.jpeg",
          location: {
            city: t("location.bandung"),
            province: t("location.jabar"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: t("iotech.jobs1.position"),
              dateStart: `${t("month.11")} 2021`,
              dateEnd: "April 2022",
              descriptions: [
                "Coordinated event of seminar that attended with over 200 people who are interested in Internet of Things.",
                "Held competition which consist of business model canvas competition and prototype design competition that participated with over 39 person.",
                "Organized virtual exhibition with over 9 company related to the Internet of Things participated.",
              ],
            },
          ],
        },
        {
          organization: "Unit Bola Voli ITB (UBV)",
          logo: "ubv.png",
          location: {
            city: t("location.bandung"),
            province: t("location.jabar"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: "Head of Home Affairs Division",
              dateStart: "April 2021",
              dateEnd: "April 2022",
              descriptions: [
                "Organized all the needs of the volleyball team and organization such as net, ball, and jersey so that all events went smoothly.",
              ],
            },
            {
              position: "Project Manager of Syukuran Wisuda Oktober 2021",
              dateStart: "",
              dateEnd: "October 2021",
              descriptions: [
                "Went smoothly because 80% of graduates feel very proud and happy.",
                "Attended by 70 UBV member to celebrate graduation of 36 members UBV.",
              ],
            },
          ],
        },
        {
          organization: "Parade Wisuda ITB 2021",
          logo: "wisokto21.jpeg",
          location: {
            city: t("location.bandung"),
            province: t("location.jabar"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: "Head of Website Division",
              dateStart: "January 2021",
              dateEnd: "April 2021",
              descriptions: [
                "Developed website for appreciate graduates using Vue.js, Laravel, and MySQL. Total almost 1700 graduates were appreciated in this website.",
                "Developed website virtual final project exhibition Vue.js, Laravel, and MySQL. Total almost 120 graduates submit their final project.",
                "Developed website virtual education fair Vue.js. Total 12 company join this event and held the video conference each day.",
              ],
            },
          ],
        },
        {
          organization: "Pengurus Osis SMAN 8 Jakarta",
          logo: "sma8.png",
          location: {
            city: t("location.jaksel"),
            province: t("location.jakarta"),
            country: t("location.indonesia"),
          },
          jobs: [
            {
              position: "Head of Department I : Religion",
              dateStart: "September 2017",
              dateEnd: "October 2018",
              descriptions: [
                "Was responsible to control and connect organization such as Rohani Islam, Rohani Kristen, Rohani Katolik to Teacher Committee.",
              ],
            },
            {
              position:
                "Project Manager of Pendidikan dan Pelatihan Organisasi (DiOr)",
              dateStart: "",
              dateEnd: "October 2017",
              descriptions: [
                "Attended by over 50 participants from all extracurricular in SMAN 8 Jakarta.",
              ],
            },
          ],
        },
      ],
    },
    skill: {
      title: t("skill"),
      items: [
        {
          topic: t("programming"),
          items: [
            {
              rank: t("intermediate"),
              lists: [
                { name: "C++", logo: "x.png" },
                { name: "C", logo: "x.png" },
                { name: "JAVA", logo: "x.png" },
                { name: "Python", logo: "x.png" },
                { name: "HTML", logo: "x.png" },
                { name: "CSS", logo: "x.png" },
                { name: "Javascript", logo: "x.png" },
              ],
            },
            {
              rank: t("basic"),
              lists: [{ name: `${t("other")}...`, logo: "x.png" }],
            },
          ],
        },
        {
          topic: t("framework"),
          items: [
            {
              rank: t("intermediate"),
              lists: [
                { name: "React", logo: "x.png" },
                { name: "Vue", logo: "x.png" },
                { name: "Codeigniter", logo: "x.png" },
                { name: "Node.js", logo: "x.png" },
              ],
            },
            {
              rank: t("basic"),
              lists: [
                { name: "Angular", logo: "x.png" },
                { name: "Nuxt", logo: "x.png" },
                { name: "Next", logo: "x.png" },
                { name: "Laravel", logo: "x.png" },
              ],
            },
          ],
        },
        {
          topic: t("language"),
          items: [
            {
              rank: t("native"),
              lists: [{ name: t("indonesian"), logo: "x.png" }],
            },
            {
              rank: t("intermediate"),
              lists: [{ name: t("english"), logo: "x.png" }],
            },
            {
              rank: t("basic"),
              lists: [
                { name: t("spanish"), logo: "x.png" },
                { name: t("deutschland"), logo: "x.png" },
              ],
            },
          ],
        },
      ],
    },
    award: {
      title: t("award"),
      items: [
        {
          name: `${t("osn.name")} 2018`,
          highglight: t("osn.highlight"),
          location: {
            city: t("location.padang"),
            province: t("location.sumbar"),
            country: t("location.indonesia"),
          },
          date: `${t("month.7")} 2018`,
          descriptions: [t("osn.desc1"), t("osn.desc2")],
        },
      ],
    },
    motto: t("motto"),
    navigations: [
      {
        name: t("home"),
        id: "home",
      },
      {
        name: t("experience"),
        id: "experience",
      },
      {
        name: t("education"),
        id: "education",
      },
      {
        name: t("project"),
        id: "project",
      },
      {
        name: t("leadership"),
        id: "leadership",
      },
      {
        name: t("skill"),
        id: "skill",
      },
      {
        name: t("award"),
        id: "award",
      },
    ],
  };
};

export default constant;
