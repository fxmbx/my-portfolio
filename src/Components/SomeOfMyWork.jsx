import React from "react";
import mooncake1 from "../assets/images/mooncake1.png";
import mooncake2 from "../assets/images/mooncake3.png";
import mooncake3 from "../assets/images/mooncakemobile1.png";
import bollore1 from "../assets/images/bollore1.png";
import bollore2 from "../assets/images/bolloremobile1.png";
import palpension1 from "../assets/images/palpension.png";
import palpension2 from "../assets/images/palpension1.png";
import adventuretime1 from "../assets/images/Adventuretime2.png";
import adventuretime2 from "../assets/images/AdventuretimeMobe1.png";

import rpg2 from "../assets/images/rpgg.png";
import rpg3 from "../assets/images/rpg_src.png";

import bootcamp1 from "../assets/images/bootcamp.png";
import bootcamp2 from "../assets/images/bootcamp_src.png";

import block from "../assets/images/block.png";
import chain from "../assets/images/chain.png";

import portfolio1 from "../assets/images/portfolio2.png";
import portfolio2 from "../assets/images/portfolio1.png";

const Screenshots = (props) => {
  const { image1, image2, image3 } = props;
  // console.log(image2)
  return (
    <div className="relative overflow-hidden block w-[95%]  ">
      <img className=" z-[1] lg:w-[65%]  left-0" src={image1} />
      <img
        className="hidden lg:block absolute z-[2] w-[20%] right-[20%] bottom-[0] rounded-md shadow-sm shadow-white"
        src={image3}
      />
      {/* <img className='img-sm' src={image3} /> */}
    </div>
  );
};

const ScreenshotAbout = (props) => {
  const { title, url, code, text, stack } = props;
  //   console.log(stack);
  return (
    <div className="flex flex-col my-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-md md:text-3xl self-center font-thin ">
          {title}
        </h1>

        <a
          className="p-2 uppercase border-2 rounded-sm border-portfolio-blue text-sm md:text-xl text-cyan-500 "
          href={url}
          target="_blank"
        >
          {code}
        </a>
      </div>
      <p className="text-justify py-6 font-thin max-w-[90%]">{text}</p>
    </div>
  );
};
function SomeOfMyWork() {
  return (
    <div className="font-hattori font-lg h-full w-full  bg-background-one text-white">
      <div className="p-8 md:wrap">
        <h1 className="self-center  text-3xl md:text-5xl font-Rokkitt  pb-8 ">
          Somethings i've done 😁.
        </h1>
        <span className="span mb-5" />

        <div className="grid ">
          <div className="flex flex-col">
            <Screenshots image1={palpension1} image3={palpension2} />
            <ScreenshotAbout
              title="PALPensions Competency Assessment Tool"
              url="https://www.palpensionscompetencytool.com/"
              code="visit"
              text="This platform allows in house staff of palpension take a self assessment which is then sent to their respective line manager to assess them then  automatically generate a report that can be used for staff appraisal."
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">Html</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">JavaScript</li>
              <li className="stack-item">.Net Core Web APi</li>
              <li className="stack-item">Asp.Net MVC</li>
              <li className="stack-item">Azure</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Screenshots image1={bollore1} image3={bollore2} />
            <ScreenshotAbout
              title="Bollore Competency Assessment Tool"
              url="https://btlnigeria.com/"
              code="visit"
              text="Bollore Competency Assessment Tool is a proficiency assessment platform that allows in house staff of Bollore logistics Nigeria assess themselves and generate report for the admin in both excel and pdf."
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">React</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">JavaScript</li>
              <li className="stack-item">.Net Core Web APi</li>
              <li className="stack-item">Azure</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Screenshots image1={bootcamp2} image3={bootcamp1} />
            <ScreenshotAbout
              title="Bootcamp ApI"
              url="https://github.com/fxmbx/bootcamp-api"
              code="code"
              text=" Bootcamp is an api that allows users register either as tutor or students where tutors are able to register a bootcamp and offer a variety of courses in which students can register, drop ratings and download documents"
              stack={["Node.js", "Express.js", "Javascript"]}
            />
          </div>
          <div className="flex flex-col">
            <Screenshots image1={rpg3} image3={rpg2} />
            <ScreenshotAbout
              title=".net rpg"
              url="https://github.com/fxmbx/dotnet-RPG"
              code="code"
              text=" This is an RPG API that allows user register and create character, where each character can only have one weapon but many skills and each weapon has some attack moves attached to it. The api allows user request battle royale fight, select particular attack be it weapon or skill attack, see highscore, number of wins and losses, etc."
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">.Net Core Web APi</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Screenshots image1={block} image3={chain} />
            <ScreenshotAbout
              title="yo-coin be"
              url="https://github.com/fxmbx/blockchain-ds"
              code="code"
              text="The Youcoin B.E was developed for my final year project. I made use of the blockchain datastructure to create a blockchain scenerio to demo transaction on the blockchain, I implemented bitcoins longest chain consensus, POW, and some other algorithms, I also made an api to serve calls to the blockchain from the frontend web app"
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">JavaScript</li>
              <li className="stack-item">Node.js</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Screenshots image1={mooncake1} image3={mooncake3} />
            <ScreenshotAbout
              title="Mooncake"
              url="https://github.com/fxmbx/singlePage"
              code="code"
              text=" Mooncake is a project created to fine tune my frontend skills. built this maily to play around with ccs gradient ."
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">Html</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">JavaScript</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Screenshots image1={adventuretime1} image3={adventuretime2} />
            <ScreenshotAbout
              title="Adventure Time 😆"
              url="https://github.com/fxmbx/AdventureTIme"
              code="code"
              text=" Adventure Time is a project built just for fun"
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">React</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">JavaScript</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Screenshots image1={portfolio1} image3={portfolio2} />
            <ScreenshotAbout
              title="Portfolio v1"
              url="https://github.com/fxmbx/my-portfolio"
              code="code"
              text="Initial build of my portfolio. not mobile responsive"
            />
            <ul className="gap-6 mb-8">
              <li className="stack-item">React</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomeOfMyWork;
