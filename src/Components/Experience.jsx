import React from "react";
import bgimage from "../assets/images/experiencebg.jpg";
import xpimage1 from "../assets/images/zeplin.png";
import xpimage2 from "../assets/images/graduate-cap.png";
import xpimage3 from "../assets/images/laptop.png";
import xpimage4 from "../assets/images/stevennnnnnnn.webp";
import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/outline";

const ExperienceBlock = (props) => {
  const { jobrole, company, description, url, note } = props;
  return (
    <>
      <div className="lg:w-[550px] p-6 relative bg-background-one border-sm opacity-[0.85]">
        <p className="text-lg font-medium">{jobrole}</p>
        <p>
          <a
            href={url}
            target="_blank"
            className="text-sky-600 font-thin text-lg"
          >
            {company}
          </a>

          <p className="pt-4 text-justify font-thin">
            {description}
            <b style={{ fontWeight: "700" }}> {note}</b>
          </p>
        </p>
      </div>
    </>
  );
};

function Experience() {
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  };
  return (
    <div>
      <div
        className="p-8 md:wrap w-full h-full bg-background-three text-white"
        // style={{
        //   backgroundImage: `url(${bgimage})`,
        //   backgroundSize: "100% 100%",
        // }}
      >
        <h1 className="self-center  text-4xl md:text-7xl font-Rokkitt pb-8 ">
          Some places I've worked 🥱
        </h1>
        <span className="span" />
        <h1 className="text-justify md:text-center md:mx-10 my-10 text-xl font-[230] ">
          I've had the priviledge of completing a six months Internship where I
          worked at as a Software Engineer Intern at SAED INTEGRATED SERVICES,
          Software Intern at Dipole Diamond and IT support Intern at AGPC. Ever
          since I have been freelancing.
        </h1>

        <div className="grid gap-8">
          <div className="flex lg:flex-row  flex-col-reverse">
            <ExperienceBlock
              jobrole="Babcock university"
              company="School of Comuting and Engineering Science"
              url="https://www.babcock.edu.ng/school/"
              description="Candidate of Bachelor of science in Computer Science with a focus in software development"
              note="Graduating 2022"
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <img src={xpimage2} className="w-8 absolute" />
                </div>
              </div>
              <p className=""> 2017-2022</p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse  flex-col-reverse">
            <ExperienceBlock
              jobrole="Graduate Assistant"
              company="NIIT"
              url="https://www.niit.com/nigeria"
              description=" I Assisted the faculty in introducing programming to new students. I facilitated the learning of student and helped prepare them for exams. All 10 student I was in charge of passed thier intro C# certification exams."
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <img src={xpimage1} className="w-8 absolute" />
                </div>
              </div>
              <p className=""> June 2018- October 2018</p>
            </div>
          </div>
          <div className="flex lg:flex-row  flex-col-reverse">
            <ExperienceBlock
              jobrole="Software Engineer Intern"
              company="SAED Integrated Services"
              url="https://www.saed.dev/"
              description="I Attended daily scrum meetings,
                                    designed use case and user story diagrams for serveral project,I also Developed RESTful APIs using ASP.Net(C#) and consumed the API using js libraries axios."
              note="(worked remotely)"
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <img src={xpimage3} className="w-8 absolute" />
                </div>
              </div>
              <p className=""> January 2021- June 2021</p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse  flex-col-reverse">
            <ExperienceBlock
              jobrole="IT Support Intern,"
              company="AGPC"
              url="https://www.seplatenergy.com/our-company/our-operations/midstream-gas/anoh-gas-processing-plant/"
              description="I created an in house travel app using Microsoft PowerApps and Power Automate. I learned better communication and people management in my time in Anoh gas."
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <img src={xpimage4} className="w-8 absolute" />
                </div>
              </div>
              <p className="">January 2021- June 2021</p>
            </div>
          </div>
          <div className="flex lg:flex-row  flex-col-reverse">
            <ExperienceBlock
              jobrole="intern (trainee)"
              company="NIIT"
              url="https://www.dipolediamond.com/"
              description="Worked as an intern on a project to provide solutions to a client"
              note="(worked remotely)"
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <InformationCircleIcon className="w-8 absolute" />
                </div>
              </div>
              <p className=""> January 2021- March 2021</p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse  flex-col-reverse">
            <ExperienceBlock
              jobrole="With You"
              company="🤵👨"
              url="funbiolaore@gmail.com"
              description="Create revolutionary software solutions"
              note="(work remotely)"
            />
            <div className="flex gap-6 items-center m-4">
              <div className="relative">
                <div className="h-[50px] w-[50px] opacity-[0.85] lg:bg-background-one md:rounded-full object-contain flex items-center justify-center transition duration-300 ease-in-out ">
                  <LightBulbIcon className="w-8 absolute" />
                </div>
              </div>
              <p className=""> {formatDate(new Date())}-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
