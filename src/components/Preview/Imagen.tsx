import React from "react";
import SendIcon from "../Svg/Others/send.svg";
import ImagenIcon from "../Svg/AI/imagen.svg";
import DocumentIcon from "../Svg/Others/documentoutline.svg";

const Imagen = () => {
  return (
    <section id="imagen" className="bg-white dark:bg-[#111827]">
      <div className="w-full container mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="size-[36px] aspect-square flex items-center text-white justify-center rounded-[10px] bg-[#005CF0] p-1">
              <ImagenIcon />
            </span>
            <span className="text-[#005CF0] font-semibold text-lg">Imagen</span>
          </h4>
          <h5 className="text-[#111928] dark:text-white font-[700] text-4xl mt-5">
            AI Image Generation &amp; Converter Tools
          </h5>
          <p className="font-normal text-sm mt-4">
            Easily generate and convert stunning images for impressive results.
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://imagen.playground.modelslab.com"
              className="rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 bg-[#005CF0] text-[#E4EAFA] font-semibold text-xs py-3 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Generating Now
            </a>
            <a
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] font-semibold text-xs py-3 px-4 cursor-pointer"
              href="https://modelslab.com/imagen"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/image-generation"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DocumentIcon className="dark:text-white text-white size-[1.273rem]" />
            </a>
          </div>
        </div>
        <div className="md:w-[469px] md:h-[488px] lg:place-self-end w-full h-full rounded-3xl sm:w-2/3  relative">
          <div className="absolute max-w-full flex items-center justify-center inset-0 overflow-hi space-x-2 p-4 md:top-[390px] sm:top-[300px] top-[260px]">
            <span className="index-module_type__E-SaG w-[371px] h-[50px] bg-white/70 text-black/70 whitespace-nowrap border font-[16px] border-white dark:border-black filter backdrop-blur-sm dark:bg-black/70 dark:text-white/70 rounded-lg px-4 flex items-center justify-start focus:outline-none ellipsis overflow-hidden">
              Gothic style Prompt by Myri
            </span>
            <div className="h-[50px] w-[50px] bg-[#005CF0] rounded-lg p-2 justify-center items-center flex cursor-pointer">
              <SendIcon className='w-7 h-7' />
            </div>
          </div>
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/4d281e9c-cf1f-4524-7b8a-7c914aef5700/768"
            className="object-cover w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Imagen;
