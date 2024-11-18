import React from "react";

const AudioGen = () => {
  return (
    <section className="bg-white dark:bg-[#111827]" id="audio-gen">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex text-white items-center justify-center aspect-square rounded-[10px] bg-[#4C01DF]">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                focusable="false"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M17.9993 16.7491C17.8393 16.7491 17.6893 16.6991 17.5493 16.5991C17.2193 16.3491 17.1493 15.8791 17.3993 15.5491C18.9692 13.4592 18.9692 10.5394 17.3993 8.44948C17.1493 8.1195 17.2193 7.64952 17.5493 7.39953C17.8793 7.14955 18.3492 7.21954 18.5992 7.54953C20.5591 10.1694 20.5591 13.8292 18.5992 16.4491C18.4492 16.6491 18.2292 16.7491 17.9993 16.7491Z"
                  fill="currentColor"
                />
                <path
                  d="M19.8293 19.2491C19.6693 19.2491 19.5194 19.1991 19.3794 19.0991C19.0494 18.8491 18.9794 18.3791 19.2294 18.0491C21.8992 14.4893 21.8992 9.50955 19.2294 5.94973C18.9794 5.61974 19.0494 5.14977 19.3794 4.89978C19.7093 4.64979 20.1793 4.71979 20.4293 5.04977C23.4992 9.13957 23.4992 14.8593 20.4293 18.9491C20.2893 19.1491 20.0593 19.2491 19.8293 19.2491Z"
                  fill="currentColor"
                />
                <path
                  d="M14.0194 3.77995C12.8994 3.15998 11.4695 3.31997 10.0096 4.22993L7.08972 6.05984C6.88972 6.17983 6.65974 6.24983 6.42975 6.24983H5.49979H4.99982C2.57993 6.24983 1.25 7.57976 1.25 9.99965V13.9995C1.25 16.4193 2.57993 17.7493 4.99982 17.7493H5.49979H6.42975C6.65974 17.7493 6.88972 17.8193 7.08972 17.9393L10.0096 19.7692C10.8895 20.3191 11.7495 20.5891 12.5494 20.5891C13.0694 20.5891 13.5694 20.4691 14.0194 20.2191C15.1293 19.5992 15.7493 18.3092 15.7493 16.5893V7.40977C15.7493 5.68986 15.1293 4.39992 14.0194 3.77995Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-[#4C01DF] font-semibold text-lg">
              AudioGen
            </span>
          </h4>
          <h5 className="text-[#111928] font-[700] text-4xl mt-5 dark:text-white">
            Generate Audio &amp; Music
          </h5>
          <p className="font-normal text-sm mt-4">
            Enhance Your Sound with ModelsLab’s Audio Tools
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              href="https://modelslab.com/playground/audio"
              className="rounded-lg text-white bg-[#005CF0] font-semibold text-xs py-3 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Generating Now
            </a>
            <a
              className="rounded-lg border-[#EFF0F6] border font-semibold text-xs py-3 px-4"
              href="https://modelslab.com/audio-gen"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/voice-cloning/overview"
              className="rounded-lg border-[#EFF0F6] stroke-black dark:stroke-white text-transparent border font-semibold text-xs p-2.5"
              target="_blank"
              rel="noopener noreferrer"
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
        <div className="md:w-[469px] md:h-[488px] lg:place-self-end w-full h-full rounded-3xl sm:w-2/3 relative bg-[#4C01DF] ">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/ed92d0ba-4cac-401c-678d-51627a5bed00/768"
            className="object-cover w-full dark:hidden"
            alt="DubMaster"
          />
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/2ce52922-1202-4217-7ec2-a7f063205a00/768"
            className="object-cover hidden w-full dark:block"
            alt="DubMaster"
          />
        </div>
      </div>
    </section>
  );
};

export default AudioGen;
