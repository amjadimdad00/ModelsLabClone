import React from "react";

const Cases = () => {
  return (
    <div className="mx-auto container px-4 md:px-8 grid w-full py-8 gap-8">
      <div className="flex flex-col sm:flex-row w-full items-center justify-between">
        <div>
          <h4 className="font-[700] text-4xl text-center sm:text-left">
            Use Cases
          </h4>
          <p className="font-[400] text-sm sm:text-base text-center sm:text-left text-white text-black/50 mt-2">
            Unleash Your Creativity in Our Sandbox of Voices and Languages
          </p>
        </div>
        <div className="flex items-center justify-between sm:justify-end">
          <button className="bg-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-2xl text-black/50 rotate-180"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </button>
          <button className="bg-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-2xl text-black/50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start overflow-x-scroll gap-4 no-scrollbar">
        <div className="flex flex-col w-full min-w-[340px] rounded-2xl dark:border-gray-500/50 bg-white dark:bg-[#111827] border p-2">
          <div className="rounded-xl bg-gray-500/50 w-full aspect-video overflow-hidden">
            <img
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/415a481e-c375-4c3d-89bb-4cb74a65ef00/768"
              alt="Use case"
              className="w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full py-2">
            <h5 className="line-clamp-1 text-base font-semibold">
              Interior Design
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              Redesign Your Space Effortlessly with ModelsLab&apos;s Interior
              Design Feature
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full min-w-[340px] rounded-2xl dark:border-gray-500/50 bg-white dark:bg-[#111827] border p-2">
          <div className="rounded-xl bg-gray-500/50 w-full aspect-video overflow-hidden">
            <img
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/0dcca649-c167-45ed-8113-f4fbe728fa00/768"
              alt="Use case"
              className="w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full py-2">
            <h5 className="line-clamp-1 text-base font-semibold">
              Object Removal
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              Effortlessly Remove Unwanted Objects with ModelsLab&apos;s AI
              Object Remover
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full min-w-[340px] rounded-2xl dark:border-gray-500/50 bg-white dark:bg-[#111827] border p-2">
          <div className="rounded-xl bg-gray-500/50 w-full aspect-video overflow-hidden">
            <img
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/e8d57781-4969-423e-be9f-ac49f209dc00/768"
              alt="Use case"
              className="w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full py-2">
            <h5 className="line-clamp-1 text-base font-semibold">
              Logo Generator
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              Design Stunning Logos Instantly with ModelsLab&apos;s AI Logo
              Generator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
