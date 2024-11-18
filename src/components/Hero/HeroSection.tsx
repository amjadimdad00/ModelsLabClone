import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/others/herobg.jpeg")' }}
      >
        <div className="w-full h-full bg-white/90 dark:bg-[#111827]/90">
          <div className="w-full py-[5rem] xl:py-[6.7rem] 2xl:py-[9.6rem] px-4 md:px-8 container mx-auto">
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
                    className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-3 flex items-center justify-center gap-2"
                    href="https://modelslab.com/register"
                  >
                    <span className="max-w-min whitespace-nowrap">
                      Start free trial
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="bg-white rounded-full aspect-square h-4 text-[#005CF0] p-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                  <a
                    href="https://docs.modelslab.com"
                    target="_blank"
                    className="bg-[#000000] dark:bg-white  dark:text-black text-white font-[400] text-[14px] rounded-full px-5 py-3 flex items-center justify-center gap-2"
                  >
                    <svg
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                      focusable="false"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M9.83333 0.416748H4.16667C1.6875 0.416748 0.625 1.83341 0.625 3.95841V11.0417C0.625 13.1667 1.6875 14.5834 4.16667 14.5834H9.83333C12.3125 14.5834 13.375 13.1667 13.375 11.0417V3.95841C13.375 1.83341 12.3125 0.416748 9.83333 0.416748ZM4.16667 7.67716H7C7.29042 7.67716 7.53125 7.918 7.53125 8.20841C7.53125 8.49883 7.29042 8.73966 7 8.73966H4.16667C3.87625 8.73966 3.63542 8.49883 3.63542 8.20841C3.63542 7.918 3.87625 7.67716 4.16667 7.67716ZM9.83333 11.573H4.16667C3.87625 11.573 3.63542 11.3322 3.63542 11.0417C3.63542 10.7513 3.87625 10.5105 4.16667 10.5105H9.83333C10.1237 10.5105 10.3646 10.7513 10.3646 11.0417C10.3646 11.3322 10.1237 11.573 9.83333 11.573ZM11.6042 5.55216H10.1875C9.11083 5.55216 8.23958 4.68091 8.23958 3.60425V2.18758C8.23958 1.89716 8.48042 1.65633 8.77083 1.65633C9.06125 1.65633 9.30208 1.89716 9.30208 2.18758V3.60425C9.30208 4.093 9.69875 4.48966 10.1875 4.48966H11.6042C11.8946 4.48966 12.1354 4.7305 12.1354 5.02091C12.1354 5.31133 11.8946 5.55216 11.6042 5.55216Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="max-w-min whitespace-nowrap">
                      How to use
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-end h-full max-h-96">
                <Image
                  src="/others/heroimg-light.png"
                  className="object-center animate-fade-right w-4/5"
                  alt="Airship"
                  width={300}
                  height={300}
                />
                {/* <Image
                  src="/others/heroimg-dark.png"
                  className="object-center animate-fade-right dark:block w-4/5 hidden"
                  alt="Airship"
                  width={300}
                  height={300}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
