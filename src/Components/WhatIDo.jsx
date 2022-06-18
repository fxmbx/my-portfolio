import React from "react";
import bgimage from "../assets/images/experiencebg.jpg";
import {
  GlobeIcon,
  CodeIcon,
  SunIcon,
  ServerIcon,
} from "@heroicons/react/outline";

const Card = ({ icon, text, title, iconcolor }) => {
  return (
    <div className="flex flex-col p-8 justify-center items-center bg-white border rounded-xl shadow-2xl relative gap-6">
      <div
        className={`h-[50px] w-[50px] border ${iconcolor} flex items-center text-white  justify-center  rounded-full`}
      >
        {icon}
      </div>
      <h3 className="font-hattorri text-3xl uppercase">{title}</h3>
      <p className="text-justify font-Rokkitt ">{text}</p>
    </div>
  );
};
// const WhatIDoTag = ({ title, content, icon, borderPos }) => {
//   return (
//     <div className={`lg:${borderPos} border-white p-4 text-justify`}>
//       <div className="flex gap-4 uppercase ">
//         {icon}
//         <p>{title}</p>
//       </div>
//       <p className="pt-4">{content}</p>
//     </div>
//   );
// };
function WhatIDo() {
  return (
    <div
      className="font-Poppins border-t-2 font-ld  p-16 h-full w-full bg-background-three "
      // style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h1 className="self-center  text-5xl md:text-7xl  pb-8 font-Rokkitt">
        What I Do
      </h1>
      <span className="span" />
      <div className=" md:wrap grid lg:grid-cols-2 gap-4 my-8 lg:p-8 ">
        <Card
          icon={<CodeIcon className="w-6" />}
          iconcolor="bg-yellow-400"
          title={"Web Development"}
          text=" Using HTML, CSS, and JavaScript with pre-processors and build tools such
        as bootstrap and Material UI, I develop websites and apps while
        maintaining a semantic, modular, and DRY code base."
        />
        <Card
          title="API"
          icon={<ServerIcon className="w-6" />}
          text=" Using C# and Javascript I develop fast, reliable, efficient and scalable  backend apis. I believe apis are the backbone of any project making it important to follow best practice."
          iconcolor={"bg-cyan-400"}
        />

        <Card
          title="EXPERIENCE DESIGN"
          icon={<SunIcon className="w-6" />}
          text=" There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product."
          iconcolor={"bg-indigo-900"}
        />

        <Card
          title="Diversity in tech"
          icon={<GlobeIcon className="w-6" />}
          text="I try to be as inclined in tech as much as I can. Apart from developing web aplications, I dabble a little into PenTesting, Networking, Mobile Development, Photo editing using Photoshop, etc."
          iconcolor={"bg-pink-400"}
        />
      </div>
    </div>
  );
}

export default WhatIDo;
{
  /* <div className="p-8 md:wrap">
        <h1 className="self-center  text-5xl md:text-7xl  pb-8 font-Rokkitt">
          What I Do
        </h1>
        <span className="span" />

        <div className="grid lg:grid-cols-2 md:p-8">
          <WhatIDoTag
            title="Web Development"
            icon={<CodeIcon className="w-6" />}
            content=" Using HTML, CSS, and JavaScript with pre-processors and build tools such as bootstrap and Material UI, I develop  websites and apps while maintaining a semantic, modular, and DRY code base."
            borderPos={"border-r-2"}
          />
          <WhatIDoTag
            title="APi"
            icon={<ServerIcon className="w-6" />}
            content=" Using C# and Javascript I develop fast, reliable, efficient and scalable  backend apis. I believe apis are the backbone of any project making it important to follow best practice."
            borderPos={"border-b-2"}
          />
          <WhatIDoTag
            title="EXPERIENCE DESIGN"
            icon={<SunIcon className="w-6" />}
            content=" There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product."
            borderPos={"border-t-2"}
          />
          <WhatIDoTag
         
            borderPos={"border-l-2"}
          />
        </div>
      </div> */
}
