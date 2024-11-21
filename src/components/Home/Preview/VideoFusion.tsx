import React from "react";
import SendIcon from "../../Svg/Others/send.svg";
import VideoFusionIcon from "../../Svg/AI/videofusion.svg";
import DocumentIcon from "../../Svg/Others/documentoutline.svg";

const VideoFusion = () => {
  return (
    <section id="video-fusion" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="size-[36px] aspect-square flex p-2 items-center text-white justify-center rounded-[10px] bg-[#00D1AF]">
              <VideoFusionIcon />
            </span>
            <span className="text-[#00D1AF] font-semibold text-lg">
              Video Fusion
            </span>
          </h4>
          <h5 className="text-[#111928] dark:text-white font-[700] text-4xl mt-5">
            AI Video Creation Tools
          </h5>
          <p className="font-normal text-sm mt-4">
            Transform your video production with our AI tools today.
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://modelslab.com/playground/video"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#005CF0] hover:bg-opacity-80 dark:hover:bg-opacity-80 text-white font-semibold text-xs py-3 px-4"
            >
              Start Generating Now
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] font-semibold text-xs py-3 px-4"
              href="https://modelslab.com/video-fusion"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/video-api/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
            >
              <DocumentIcon className="dark:text-white text-white size-[1.273rem]" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] md:h-[488px] w-full h-full py-4 rounded-3xl sm:w-2/3 lg:row-start-1 relative">
          <div className="absolute max-w-full flex items-center justify-center inset-0 space-x-2 p-4 md:top-[390px] sm:top-[300px] top-[260px]">
            <span className="index-module_type__E-SaG w-[371px] h-[50px] bg-white/70 text-black/70 whitespace-nowrap border font-[16px] border-white dark:border-black filter backdrop-blur-sm dark:bg-black/70 dark:text-white/70 rounded-lg px-4 flex items-center justify-start focus:outline-none ellipsis overflow-hidden">
              Moving train in night light, street reflection
            </span>
            <div className="h-[50px] w-[50px] bg-[#00D1AF] rounded-lg p-2 justify-center items-center flex cursor-pointer">
              <SendIcon className="w-7 h-7" />
            </div>
          </div>
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/aebcb774-23d4-428a-5b5d-857ebbff5c00/768"
            className="object-cover object-center w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default VideoFusion;
