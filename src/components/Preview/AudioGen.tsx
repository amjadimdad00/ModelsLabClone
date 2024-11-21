import React from "react";
import AudioGenIcon from "../Svg/AI/audiogen.svg";
import DocumentIcon from "../Svg/Others/documentoutline.svg";

const AudioGen = () => {
  return (
    <section className="bg-white dark:bg-[#111827]" id="audio-gen">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="size-[36px] flex text-white items-center justify-center aspect-square rounded-[10px] bg-[#4C01DF]">
              <AudioGenIcon />
            </span>
            <span className="text-[#4C01DF] font-semibold text-lg">
              AudioGen
            </span>
          </h4>
          <h5 className="text-[#111928] font-[700] text-4xl mt-5 dark:text-white">
            Generate Audio &amp; Music
          </h5>
          <p className="font-normal text-sm mt-4">
            Enhance Your Sound with ModelsLab’s Audio Tools
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://modelslab.com/playground/audio"
              className="rounded-lg  text-white bg-[#005CF0] hover:bg-opacity-80 dark:hover:bg-opacity-80 font-semibold text-xs py-3 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Generating Now
            </a>
            <a
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] font-semibold text-xs py-3 px-4"
              href="https://modelslab.com/audio-gen"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/voice-cloning/overview"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DocumentIcon className="size-[1.273rem] dark:text-white text-black" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] md:h-[488px] lg:place-self-end w-full h-full rounded-3xl sm:w-2/3 relative bg-[#4C01DF] ">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/ed92d0ba-4cac-401c-678d-51627a5bed00/768"
            className="object-cover w-full dark:hidden"
            alt="DubMaster"
          />
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/2ce52922-1202-4217-7ec2-a7f063205a00/768"
            className="object-cover hidden w-full dark:block"
            alt="DubMaster"
          />
        </div>
      </div>
    </section>
  );
};

export default AudioGen;
