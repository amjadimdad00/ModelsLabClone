import React from "react";

// Icons SVG
import ImagenIcon from "../svg/ai/imagen.svg";
import VideoFusionIcon from "../svg/ai/videofusion.svg";
import ThreeDVerseIcon from "../svg/ai/3dverse.svg";
import AudioGenIcon from "../svg/ai/audiogen.svg";
import AutoAiIcon from "../svg/ai/autoai.svg";
import LLMasterIcon from "../svg/ai/llmaster.svg";

const AI = () => {
  return (
    <div className="bg-white dark:bg-[#111827] w-full">
      <div className="container px-4 md:px-8 py-12 flex justify-between lg:justify-between md:justify-center flex-wrap gap-1 w-full mx-auto">
        <a
          href="#imagen"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 p-2 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#E9EFFF] group-hover:text-[#0056E1] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px]">
            <ImagenIcon />
          </span>
          <span className="font-[600] text-[16px]">Imagen</span>
        </a>
        <a
          href="#video-fusion"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 flex items-center justify-center group-hover:bg-[#E4FFFB] group-hover:text-[#00D1AF] bg-[#EFF0F6] dark:bg-[#242424] dark:group-hover:bg-[#003A31] rounded-[10px] p-1.5">
            <VideoFusionIcon />
          </span>
          <span className="font-[600] text-[16px]">VideoFusion</span>
        </a>
        <a
          href="#3d-verse"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 flex items-center justify-center aspect-square group-hover:bg-[#DE0004]/10 group-hover:text-[#DE0004] bg-[#EFF0F6] dark:bg-[#242424] dark:group-hover:bg-[#DE0004]/10 rounded-[10px] p-1.5">
            <ThreeDVerseIcon />
          </span>
          <span className="font-[600] text-[16px]">3D Verse</span>
        </a>
        <a
          href="#audio-gen"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 items-center justify-center group-hover:bg-[#4C00E1]/10 group-hover:text-[#4C00E1] bg-[#EFF0F6] dark:bg-[#242424] dark:group-hover:bg-[#3A02AC]/10 rounded-[10px] p-2">
            <AudioGenIcon />
          </span>
          <span className="font-[600] text-[16px]">AudioGen</span>
        </a>
        <a
          href="#auto-ai"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 flex items-center justify-center group-hover:bg-[#00BCD1]/10  group-hover:text-[#00BCD1] bg-[#EFF0F6] dark:bg-[#242424] dark:group-hover:bg-[#00BCD1]/10 rounded-[10px] p-1.5">
            <AutoAiIcon />
          </span>
          <span className="font-[600] text-[16px]">Auto AI</span>
        </a>
        <a
          href="#ll-master"
          className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
        >
          <span className="w-10 h-10 p-2 items-center justify-center flex group-hover:bg-[#DCB000]/10 group-hover:text-[#DCB000] bg-[#EFF0F6] dark:bg-[#242424] dark:group-hover:bg-[#DCB000]/10 rounded-[10px]">
            <LLMasterIcon />
          </span>
          <span className="font-[600] text-[16px]">LLMaster</span>
        </a>
      </div>
    </div>
  );
};

export default AI;
