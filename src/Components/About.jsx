import React from "react";
import headshot from "../assets/images/about_me.jpg";

function About() {
  return (
    <div className="font-Rokkitt w-full h-full text-black bg-white  ">
      <div className="p-8 md:wrap flex flex-col-reverse lg:flex-row w-full h-full justify-between ">
        {/* About me Text  */}
        <div className="flex  mr-8 flex-col gap-6 items-center justify-center sm:justify-start sm:items-start ">
          <div className="lg:max-w-[1200px]  text-justify">
            <h1 className="text-2xl sm:text-5xl pb-4 ">Hi, i'm Funmibi 👋.</h1>
            <p className="sm:text-xl font-hattori">
              I'm a design-minded, detail oriented software engineer passionate
              about writing beautiful code to solve perplexing problems.
            </p>
          </div>
          <span className="span" />

          <div className="lg:max-w-[1200px] text-justify font-hattori">
            <p className="text-justify ">
              I am a self motivated, new but growing backend developer who is
              always willing to learn new things improve myself. I have a little
              experience building API's and services. I also dabble a little
              into Frontend development and Mobile development. I am that guy
              you want on your team not just cause his zeal but his willing to
              help as much as he can 😁.
            </p>

            <p className="pt-4 ">
              I love learning new technologies and better ways to create clean,
              efficient, and scalable code. I consider work an ongoing
              education, and I'm always looking for opportunities to work with
              those who are willing to share their knowledge as much as I want
              to learn.
            </p>

            <p className="pt-4">
              When I'm not in front of my Laptop, I'm probably looking for a way
              to get infront it 😩. I watch anime, series or listen to music to
              relax
            </p>
          </div>
        </div>
        {/* About me Image  */}
        <div className="flex w-full justify-center lg:justify-center lg:items-center ">
          <img
            src={headshot}
            className="pb-8 lg:pb-0 lg:h-[70%] lg:w-[70%] lg:rounded-full  "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
