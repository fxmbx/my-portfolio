import React from "react";
import { BookmarkAltIcon, DownloadIcon } from "@heroicons/react/outline";

import ResumeF from "../assets/Resume/Olaore_Oluwafunmibi_Olumuyiwa_Resume_14-06-2022-09-40-53.pdf";

function Resume() {
  return (
    <div className="bg-cyan-900 w-full h-[100px] justify-center hover:scale-105 ease-in-out ">
      <a
        className=" w-full h-full flex items-center justify-center"
        rel="noreferrer noreferrer"
        href={ResumeF}
        download={"Olaore_Oluwafunmibi Olumuyiwa_Resume_14-06-2022-09-40-53"}
        target="_blank"
      >
        <p className="text-3xl text-white flex justify-center  items-center gap-4">
          Download my resume
          <DownloadIcon className="w-6" />
        </p>
      </a>
    </div>
  );
}

export default Resume;
