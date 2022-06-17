import React from "react";
import {
  TerminalIcon,
  BriefcaseIcon,
  CheckIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
function SKills() {
  return (
    <div className=" font-hattori w-full h-full bg-background-one text-white">
      <div className="p-8 md:wrap">
        <h1 className="self-center  text-5xl md:text-7xl  pb-8  font-Rokkitt">
          Skills
        </h1>
        <span className="span" />

        <div className="grid lg:grid-cols-3 pt-8 gap-8">
          <div className=" ">
            <div className="flex gap-4 text-2xl font-thin">
              <TerminalIcon className="w-6 " />
              <p className="uppercase ">Development</p>
            </div>
            <ul className="grid grid-cols-3 gap-6 mt-6">
              <li className="skills">C#</li>
              <li className="skills">Js</li>
              {/* <li className="skills">Go</li> */}

              <li className="skills">Node.js</li>
              <li className="skills">.Net Core</li>
              <li className="skills">React</li>
              <li className="skills">MSSQL</li>
              <li className="skills">MySQL</li>
              <li className="skills">MongoDb</li>
              {/* <li className='skills'>Nest.js</li> */}

              <li className="skills">Html5</li>
              <li className="skills">Css</li>
              <li className="skills">Tailwindcss</li>
              <li className="skills">React-native</li>
            </ul>
          </div>

          <div className="  justify-center">
            <div className="flex gap-4 text-2xl font-thin">
              <BriefcaseIcon className="w-6" />
              <p className="uppercase ">Tools</p>
            </div>
            <ul className="mt-8 p-4 ">
              <li className="flex gap-4 ">
                <CheckIcon className="w-6" />
                Git + GitHub
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Visual Studio Code
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Atlas
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Postman
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Command Line
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6 font-bold" />
                Azure
              </li>
            </ul>
          </div>

          <div className="">
            <div className="flex gap-4 text-2xl font-thin">
              <BookOpenIcon className="w-6" />
              <p className="uppercase ">Knowledge</p>
            </div>
            <ul className="mt-8 p-4 ">
              <li className="flex gap-4 ">
                <CheckIcon className="w-6" />
                ECMAScript 6
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Object Oriented Programming
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Functional Programming
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                MicroService Architecture
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Event Driven Programming
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Agile Development
              </li>
              <li className="flex gap-4 mt-4">
                <CheckIcon className="w-6" />
                Unit Testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SKills;
