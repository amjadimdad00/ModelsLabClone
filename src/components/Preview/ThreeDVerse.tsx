import React from "react";

const ThreeDVerse = () => {
  return (
    <section id="3d-verse" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 text-white flex items-center justify-center aspect-square rounded-[10px] bg-[#DE0004]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="m16.109 4.733-5.225-2.816c-.55-.3-1.217-.3-1.767 0L3.892 4.733A1.193 1.193 0 0 0 3.275 5.8c0 .45.234.858.617 1.067l5.225 2.816a1.856 1.856 0 0 0 1.767 0l5.225-2.816c.383-.209.616-.609.616-1.067 0-.458-.233-.858-.616-1.067ZM8.259 10.658 3.392 8.225a1.193 1.193 0 0 0-1.158.05c-.359.225-.567.6-.567 1.017v4.591c0 .792.442 1.509 1.15 1.867l4.858 2.433a1.194 1.194 0 0 0 1.159-.05c.358-.216.566-.6.566-1.016v-4.592a2.045 2.045 0 0 0-1.141-1.867ZM17.766 8.275a1.174 1.174 0 0 0-1.158-.05l-4.858 2.433a2.076 2.076 0 0 0-1.15 1.867v4.592c0 .416.208.8.566 1.016a1.2 1.2 0 0 0 1.159.05l4.858-2.433a2.076 2.076 0 0 0 1.15-1.867V9.292c0-.417-.208-.792-.567-1.017Z"
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
            It's easy to make great 3D models with ModelsLab&apos;s 3D tools{" "}
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg text-white bg-[#005CF0] font-semibold text-xs py-3 px-4"
            >
              Design in 3D
            </a>
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg border-[#EFF0F6] border font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/3d-api/overview"
              target="_blank"
              className="rounded-lg border-[#EFF0F6] stroke-black dark:stroke-white text-transparent border font-semibold text-xs p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={21}
                fill="none"
                viewBox="0 0 21 21"
                className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM size-[1.273rem]"
                focusable="false"
                aria-hidden="true"
                role="img"
              >
                <path
                  stroke="inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.155 8.98v4.239c0 4.24-1.696 5.935-5.936 5.935H8.132c-4.24 0-5.936-1.696-5.936-5.935V8.13c0-4.24 1.696-5.935 5.936-5.935h4.24"
                />
                <path
                  stroke="inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.154 8.98h-3.391c-2.544 0-3.392-.849-3.392-3.393V2.196l6.783 6.783zM6.436 11.523h5.087M6.436 14.915h3.391"
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
