import React from "react";
import bgimage from "../assets/images/stuffy.jpg";
import { ArrowDownIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import About from "./About";
import WhatIDo from "./WhatIDo";
import SKills from "./SKills";
import Experience from "./Experience";
import Resume from "./Resume";
import SomeOfMyWork from "./SomeOfMyWork";

function Home() {
  return (
    <>
      <div
        className="font-Rokkitt w-screen h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* <div></div> */}
        <div className="px-8">
          <h1 className="text-cyan-900 font-extrabold  text-5xl md:text-7xl ">
            Olaore Oluwafunmibi
          </h1>
          <h3 className="text-cyan-900 font-[500]  text-2xl md:text-4xl">
            Backend Developer
          </h3>
        </div>

        {/* <div className="flex justify-start">
          <ArrowCircleDownIcon className=" justify-end w-14 text-white" />
        </div> */}
      </div>
    </>
  );
}

export default Home;
