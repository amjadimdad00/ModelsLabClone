import React from "react";
import ThreeDVerseIcon from "../Svg/AI/3dverse.svg";
import DocumentIcon from "../Svg/Others/documentoutline.svg";

const ThreeDVerse = () => {
  return (
    <section id="3d-verse" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="size-[36px] text-white flex items-center justify-center aspect-square rounded-[10px] bg-[#DE0004]">
              <ThreeDVerseIcon />
            </span>
            <span className="text-[#DE0004] font-semibold text-lg">
              3D Verse
            </span>
          </h4>
          <h5 className="text-[#111928] dark:text-white font-[700] text-4xl mt-5">
            Create 3D Models with 3DVerse
          </h5>
          <p className="font-normal text-sm mt-4">
            It&apos;s easy to make great 3D models with ModelsLab&apos;s 3D
            tools{" "}
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg text-white hover:bg-opacity-80 dark:hover:bg-opacity-80 bg-[#005CF0] font-semibold text-xs py-3 px-4"
            >
              Design in 3D
            </a>
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
            >
              <DocumentIcon className="dark:text-white text-white size-[1.273rem]" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] md:h-[488px] w-full h-full rounded-3xl lg:row-start-1 relative bg-[#DE0004] sm:w-2/3 ">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/7f802edd-61aa-46f7-3b9d-5234d0b28600/768"
            className="object-cover w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeDVerse;
