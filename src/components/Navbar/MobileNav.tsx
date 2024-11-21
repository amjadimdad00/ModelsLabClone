import React, { useState } from "react";
import LeftArrow from "../Svg/Arrows/leftarrow.svg";
import Rightarrow from "../Svg/Arrows/rightarrow.svg";
import DiscordIcon from "../Svg/Social/discord.svg";
import ImagenIcon from "../Svg/AI/imagen.svg";
import AudioGenIcon from "../Svg/AI/audiogen.svg";
import ThreeDVerseIcon from "../Svg/AI/3dverse.svg";
import VideoFusionIcon from "../Svg/AI/videofusion.svg";
import LLMasterIcon from "../Svg/AI/llmaster.svg";
import TrainMasterIcon from "../Svg/AI/trainmaster.svg";

const MobileNav = () => {
  const [menu, setMenu] = useState<number | null>(null);

  const onClose = () => setMenu(null);

  if (menu === 0) return <ProductMenu onClose={onClose} />;
  else if (menu === 1) return <ResourcesMenu onClose={onClose} />;

  return (
    <div className="flex flex-col text-[14px] font-[700] rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={() => setMenu(0)}
      >
        <span>Product</span>
        <Rightarrow className="w-4 h-4 -rotate-90 duration-700" />
      </button>
      <button
        onClick={() => setMenu(1)}
        type="button"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
      >
        <span>Resources</span>
        <Rightarrow className="w-4 h-4 -rotate-90 duration-700" />
      </button>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/pricing"
      >
        <span>Pricing</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/models"
      >
        <span>Models</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/enterprise"
      >
        <span>Enterprise</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/developers"
      >
        <span>For Developers</span>
        <span />
      </a>
      <a
        target="_blank"
        href="https://docs.modelslab.com"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
      >
        <span>API Docs</span>
        <span />
      </a>
      <div className="flex items-center justify-center p-2 gap-2">
        <a
          href="https://discord.com/servers/modelslab-1033301189254729748"
          className="bg-[#5865F2] text-white font-[600] text-[14px] leading-[21px] gap-[4.5px] flex items-center justify-center px-[10px] rounded-[8px] py-[9.5px]"
        >
          <DiscordIcon className="text-white w-[17px] h-[17px]" />
          <span>Join Discord</span>
        </a>
        <a
          href="https://calendly.com/support-lael/30min?month=2024-11"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA]  dark:hover:border-[#BABABA] font-semibold text-xs py-3 px-4"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

const ProductMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-start focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={onClose}
      >
        <LeftArrow className="w-4 h-4 rotate-90 duration-700" />
        <span>Back</span>
      </button>
      <div>
        <div className="w-full text-black">
          <h2 className="text-[14px] px-2 dark:text-white font-[600] text-opacity-50">
            Products
          </h2>
          <div className="flex flex-col  lg:flex-row justify-between w-full gap-6  overflow-y-auto">
            <div className="w-full dark:text-white divide-y divide-[#DDE1E6] ">
              <div className="grid py-5 grid-cols-2 md:grid-cols-3 gap-5">
                <a
                  id="NnpnTwRxQZ"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/imagen"
                >
                  <span className="w-10 h-10 items-center flex justify-center group-hover:bg-imagen/10 dark:group-hover:bg-imagen/20 group-hover:text-imagen bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <ImagenIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Imagen</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      AI Image Generation And Tools
                    </span>
                  </span>
                </a>
                <a
                  id="dwneOHhcZO"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/audio-gen"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#4C00E1]/10 group-hover:text-[#4C00E1] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <AudioGenIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Audio Gen</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      Work with audio using audio gen
                    </span>
                  </span>
                </a>
                <a
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/3d-verse"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#DE0004]/10 group-hover:text-[#DE0004] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <ThreeDVerseIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">3D Verse</span>
                    <span className="font-[600] text-sm hidden lg:inline-block text-black/50 dark:text-white/50">
                      Explore our 3D Modeling solutions
                    </span>
                  </span>
                </a>
                <a
                  id="vWvIMuGFmh"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/video-fusion"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#E9EFFF] group-hover:text-video-fusion bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <VideoFusionIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Video Fusion</span>
                    <span className="font-[600] text-sm hidden lg:inline-block text-black/50 dark:text-white/50">
                      Create captivating videos effortlessly
                    </span>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://modelslab.com/llm-api"
                  id="jJFszEJaJE"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                >
                  <span className="w-10 h-10 items-center flex justify-center  group-hover:bg-[#DCB000]/10 group-hover:text-[#DCB000] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <LLMasterIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">LLMaster</span>
                    <span className="font-[600] hidden lg:inline-block text-sm text-black/50 dark:text-white/50">
                      Enhance your operations with the LLM
                    </span>
                  </span>
                </a>
                <a
                  href="https://modelslab.com/train-model"
                  target="_blank"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#00BCD1]/10  group-hover:text-[#00BCD1] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <TrainMasterIcon />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Train Master</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      Train easily with Train Master
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourcesMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-start focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={onClose}
      >
        <LeftArrow className="w-4 h-4 rotate-90 duration-700" />
        <span>Back</span>
      </button>
      <div>
        <div className="w-full text-black">
          <div className="w-full text-black">
            <h2 className="px-2 text-[14px] dark:text-white font-[600] text-opacity-50">
              Services
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/terms-of-service"
                >
                  <span>Ticket</span>
                </a>
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/refund-policy"
                >
                  <span>Support</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full text-black ">
            <h2 className="text-[14px] font-[600] px-2 dark:text-white  text-opacity-50">
              Education
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  href="https://modelslab.com/terms-of-service"
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Api Documentation</span>
                </a>
                <a
                  href="https://modelslab.com/blog"
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Blog</span>
                </a>
                <a
                  href="https://docs.modelslab.com/"
                  className="w-full flex min-w-max cursor-not-allowed justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Learn</span>
                </a>
                <a
                  href="https://modelslab.canny.io/changelog"
                  className="w-full flex min-w-max cursor-not-allowed justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Changelog</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full text-black">
            <h2 className="text-[14px] px-2 dark:text-white font-[600] text-opacity-50">
              Community
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/feeds"
                >
                  <span>Feed</span>
                </a>
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/showcase"
                >
                  <span>Show Case</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
