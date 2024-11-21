import React from "react";

const ThreeDVerse = () => {
  return (
    <section id="3d-verse" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="size-[36px] text-white flex items-center justify-center aspect-square rounded-[10px] bg-[#DE0004]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[21px] aspect-square"
              >
                <path
                  fill="currentColor"
                  d="M19.33 5.68 13.06 2.3a2.22 2.22 0 0 0-2.12 0L4.67 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38a2.23 2.23 0 0 0 2.12 0l6.27-3.38c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28Zm-9.42 7.11L4.07 9.87A1.43 1.43 0 0 0 2 11.15v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.43 1.43 0 0 0 2.07-1.28v-5.51a2.45 2.45 0 0 0-1.37-2.24Zm11.41-2.86a1.4 1.4 0 0 0-1.39-.06l-5.83 2.92a2.5 2.5 0 0 0-1.38 2.24v5.51a1.41 1.41 0 0 0 1.43 1.43c.22 0 .44-.05.64-.15l5.83-2.92A2.5 2.5 0 0 0 22 16.66v-5.51c0-.5-.25-.95-.68-1.22Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2.92 2.92 44.17 44.17"
                className="size-[1.273rem] text-black dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M45.83 20.83v10.42c0 10.42-4.16 14.58-14.58 14.58h-12.5c-10.42 0-14.58-4.16-14.58-14.58v-12.5c0-10.42 4.16-14.58 14.58-14.58h10.42"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M45.83 20.83H37.5c-6.25 0-8.33-2.08-8.33-8.33V4.17l16.66 16.66Zm-31.25 6.25h12.5m-12.5 8.34h8.34"
                />
              </svg>
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
