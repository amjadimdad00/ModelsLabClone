import React from "react";

const VideoFusion = () => {
  return (
    <section id="video-fusion" className="bg-[#F2F4F8] dark:bg-[#1f2937]">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex p-2 items-center text-white justify-center aspect-square rounded-[10px] bg-[#00D1AF]">
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
                  d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM15.192 14.076L13.656 14.964L12.12 15.852C10.14 16.992 8.52 16.056 8.52 13.776V12V10.224C8.52 7.932 10.14 7.008 12.12 8.148L13.656 9.036L15.192 9.924C17.172 11.064 17.172 12.936 15.192 14.076Z"
                  fill="currentColor"
                />
              </svg>
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
              className="rounded-lg bg-[#005CF0] text-white font-semibold text-xs py-3 px-4"
            >
              Start Generating Now
            </a>
            <a
              href="https://modelslab.com/playground/video"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-[#EFF0F6] border font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/video-api/overview"
              target="_blank"
              rel="noopener noreferrer"
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
        <div className="md:w-[469px] md:h-[488px] w-full h-full rounded-3xl sm:w-2/3 lg:row-start-1 relative">
          <div className="absolute max-w-full flex items-center justify-center inset-0 space-x-2 p-4 md:top-[390px] sm:top-[300px] top-[260px]">
            <span
              className="index-module_type__E-SaG w-[371px] h-[50px] bg-gray-400 opacity-90 text-black/70 border font-[16px] border-white/50 dark:border-none filter backdrop-blur-md dark:bg-[#111827]/70 dark:text-white/70 overflow-auto rounded-lg p-4 focus:outline-none"
              style={{ display: "inline-block" }}
            >
              gothic style Prompt by Myri
            </span>
            <div className="h-[50px] w-[50px] bg-[#00D1AF] rounded-lg p-2 justify-center items-center flex cursor-pointer">
              <svg
                className="w-7 h-7"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7493 4.44434L10.2077 8.61101C1.77713 11.4305 1.77713 16.0277 10.2077 18.8332L13.9299 20.0693L15.166 23.7916C17.9716 32.2221 22.5827 32.2221 25.3882 23.7916L29.5688 11.2638C31.4299 5.63879 28.3743 2.56934 22.7493 4.44434ZM23.1938 11.9166L17.916 17.2221C17.7077 17.4305 17.4438 17.5277 17.1799 17.5277C16.916 17.5277 16.6521 17.4305 16.4438 17.2221C16.041 16.8193 16.041 16.1527 16.4438 15.7499L21.7216 10.4443C22.1243 10.0416 22.791 10.0416 23.1938 10.4443C23.5966 10.8471 23.5966 11.5138 23.1938 11.9166Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/2bf5de76-0276-4fe4-d54c-6266ffac1200/768"
            className="object-cover w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default VideoFusion;
