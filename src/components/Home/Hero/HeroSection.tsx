import Image from "next/image";
import React from "react";

import DocumentIcon from "../../Svg/Others/document.svg";
import RightArrowRounded from "../../Svg/Arrows/rightarrowrounded.svg";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full relative bg-center bg-no-repeat bg-cover"
        // style={{ backgroundImage: 'url("/others/herobg.jpeg")' }}
      >
        <div className="w-full h-full bg-white/90 dark:bg-[#111827]/90">
          <div className="w-full py-[5rem] xl:py-[6.65rem] 2xl:py-[9.6rem] px-4 md:px-8 container mx-auto">
            <div className="grid grid-cols-1 gap-10 place-content-stretch lg:grid-cols-2">
              <div className="w-full flex flex-col justify-center lg:items-start">
                <p className="text-center font-[800] text-[40px] sm:text-[48px] lg:text-left">
                  Supercharge <br />
                  Your Business <br />
                  <span className="after:content-[''] relative after:absolute after:-bottom-1 after:h-4 after:w-full after:border-b-transparent after:border-l-0 after:border-r-0 after:border-t-4 after:left-0 after:border-t-[#005CF0] after:rounded-[50%]">
                    with Our AI API
                  </span>
                </p>
                <p className="text-[#00000080] text-base mt-2 text-center lg:text-left dark:text-white/50">
                  Build smart AI products that shape the future 💫
                </p>
                <div className="flex items-center justify-center mt-12 gap-4 lg:justify-start">
                  <a
                    className="bg-[#005CF0] text-white font-[500] text-[14px] rounded-full px-5 py-3 flex items-center justify-center gap-2"
                    href="https://modelslab.com/register"
                  >
                    <span className="max-w-min whitespace-nowrap">
                      Join 100K Developers
                    </span>
                    <RightArrowRounded className="bg-white rounded-full aspect-square h-4 text-[#005CF0] p-1" />
                  </a>
                  <a
                    href="https://docs.modelslab.com"
                    target="_blank"
                    className="bg-[#000000] dark:bg-white  dark:text-black text-white font-[400] text-[14px] rounded-full px-5 py-3 flex items-center justify-center gap-2"
                  >
                    <DocumentIcon />
                    <span className="max-w-min whitespace-nowrap font-[500]">
                      How to use
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-end h-full max-h-96">
                <Image
                  src="/others/heroimg-light.png"
                  className="object-center animate-fadeRight w-4/5 duration-300"
                  alt="Airship"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
