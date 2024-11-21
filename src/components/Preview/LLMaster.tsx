import React from "react";
import LLMasterIcon from "../Svg/AI/llmaster.svg";
import DocumentIcon from "../Svg/Others/documentoutline.svg";

const LLMaster = () => {
  return (
    <section id="ll-master" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex items-center text-white justify-center aspect-square rounded-[10px] bg-[#DCB000]">
              <LLMasterIcon />
            </span>
            <span className="text-[#DCB000] font-semibold text-lg">
              LLMaster
            </span>
          </h4>
          <h5 className="text-[#111928] dark:text-white font-[700] text-4xl mt-5">
            Connect Easily with Language Model
          </h5>
          <p className="font-normal text-sm mt-4">
            Use our Large Language Model to make your work better.
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://modelslab.com/llm-api"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg text-white bg-[#005CF0] font-semibold text-xs py-3 px-4"
            >
              Start Chatting
            </a>
            <a
              href="https://docs.modelslab.com/llm/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-[#3E3E3E] border font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="#"
              className="rounded-lg border border-[#3E3E3E] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
            >
              <DocumentIcon className="dark:text-white text-white size-[1.273rem]" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] md:h-[488px] w-full h-full rounded-3xl lg:row-start-1 relative bg-[#DCB000] sm:w-2/3">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/7fe83242-79fd-436c-eb68-452f95b09000/768"
            className="object-cover w-full dark:hidden"
            alt="LLMaster"
          />
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/6db48f05-ec40-4ed7-77f0-a6dfae200500/768"
            className="object-cover hidden w-full dark:block"
            alt="LLMaster"
          />
        </div>
      </div>
    </section>
  );
};

export default LLMaster;
