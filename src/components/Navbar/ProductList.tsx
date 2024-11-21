import React from "react";
import ImagenIcon from "../Svg/AI/imagen.svg";
import AudioGenIcon from "../Svg/AI/audiogen.svg";
import ThreeDVerse from "../Svg/AI/3dverse.svg";
import VideoFusion from "../Svg/AI/videofusion.svg";
import LLMaster from "../Svg/AI/llmaster.svg";
import TrainMaster from "../Svg/AI/trainmaster.svg";

const ProductList = ({ productMenu }: { productMenu: boolean }) => {
  const card = [
    {
      icon: "imagen",
      title: "Imagen",
      desc: "AI Image Generation And Tools",
      md: "flex",
      href: "/imagen",
    },
    {
      icon: "audiogen",
      title: "Audio Gen",
      desc: "Work with audio using audio gen",
      md: "flex",
      href: "",
    },
    {
      icon: "3dverse",
      title: "3D Verse",
      desc: "Explore our 3D Modeling solutions",
      md: "flex",
      href: "",
    },
    {
      icon: "videofusion",
      title: "Video Fusion",
      desc: "Create captivating videos effortlessly",
      md: "flex",
      href: "",
    },
    {
      icon: "llmaster",
      title: "LLMaster",
      desc: "Enhance your operations with the LLM",
      md: "flex",
      href: "",
    },
    {
      icon: "trainmaster",
      title: "Train Master",
      desc: "Train easily with Train Master",
      md: "hidden",
      href: "",
    },
  ];
  return (
    <div
      className={`${
        productMenu ? "grid" : "hidden"
      } grid grid-cols-3 gap-6 px-5 border border-gray-600 rounded-2xl py-5 w-fit absolute max-md:hidden md:top-[8.5rem] md:left-3 lg:top-[8.5rem] lg:left-3 xl:top-[4.75rem] xl:left-3 2xl:left-[11.7rem] dark:bg-[#111827] bg-white`}
    >
      {card.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex group gap-2 items-center rounded-md dark:hover:bg-[#191919] p-2 cursor-pointer"
          >
            {item.icon === "imagen" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-imagen/10 dark:group-hover:bg-[#1D2F4D] group-hover:text-imagen bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                <ImagenIcon className="dark:group-hover:text-[#005CF0] w-8 h-8" />
              </span>
            ) : item.icon === "audiogen" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E0E9F8] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <AudioGenIcon className="dark:text-white text-black group-hover:text-[#4C00E1]" />
              </span>
            ) : item.icon === "3dverse" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#F7E0E0] dark:group-hover:bg-[#372020] dark:bg-[#242424] rounded-[10px] p-1.5">
                <ThreeDVerse className="dark:text-white text-black group-hover:text-[#DE0004]" />
              </span>
            ) : item.icon === "videofusion" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E9EFFF] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <VideoFusion className="dark:text-white text-black group-hover:text-[#00D1AF]" />
              </span>
            ) : item.icon === "llmaster" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#F6F2E0] dark:group-hover:bg-[#363220] dark:bg-[#242424] rounded-[10px] p-1.5">
                <LLMaster className="dark:text-white text-black group-hover:text-[#DCB000]" />
              </span>
            ) : item.icon === "trainmaster" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E0F3F5] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <TrainMaster className="group-hover:bg-[#00BCD1]/10  group-hover:text-[#00BCD1]" />
              </span>
            ) : (
              ""
            )}
            <div
              onClick={() => {
                window.location.href = item.href;
              }}
            >
              <h1 className="text-black dark:text-white font-semibold">
                {item.title}
              </h1>
              <p
                className={`font-[600] text-sm text-black/50 dark:text-white/50 max-md:hidden ${
                  item.md === "hidden" ? "max-lg:hidden" : "flex"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
