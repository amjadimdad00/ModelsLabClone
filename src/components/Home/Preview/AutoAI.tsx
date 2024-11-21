import React from "react";
import AutoAiIcon from "../../Svg/AI/autoai.svg";
import DocumentIcon from "../../Svg/Others/documentoutline.svg";

const AutoAI = () => {
  return (
    <section className="bg-white dark:bg-[#111827]" id="auto-ai">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex text-white items-center justify-center aspect-square rounded-[10px] bg-[#00BCD1]">
              <AutoAiIcon />
            </span>
            <span className="text-[#00BCD1] font-semibold text-lg">
              Auto AI
            </span>
          </h4>
          <h5 className="text-[#111928] font-[700] text-4xl mt-5 dark:text-white">
            Boost Your Productivity with Auto AI
          </h5>
          <p className="font-normal text-sm mt-4 dark:text-white/70">
            Make your tasks easier with ModelsLab’s AI Agent.
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="#"
              className="rounded-lg bg-[#005CF0] text-white font-semibold text-xs py-3 px-4"
            >
              Coming Soon
            </a>
            <a
              href="#"
              className="rounded-lg border-[#3E3E3E] border font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="#"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
            >
              <DocumentIcon className="dark:text-white text-white size-[1.273rem]" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] lg:place-self-end md:h-[488px] w-full h-full rounded-3xl relative bg-[#00BCD1] sm:w-2/3">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/0a725564-ba62-46d2-037d-a269152e0b00/768"
            className="object-cover w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AutoAI;
