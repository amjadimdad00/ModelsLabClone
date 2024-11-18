import React from "react";

const Imagen = () => {
  return (
    <section id="imagen" className="bg-white dark:bg-[#111827]">
      <div className="w-full container mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex items-center text-white justify-center aspect-square rounded-[10px] bg-[#005CF0] p-1">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                focusable="false"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M26.7891 20.6706L23.1067 12.0588C22.4361 10.4824 21.4361 9.58826 20.295 9.52944C19.1656 9.47061 18.0714 10.2588 17.2361 11.7647L15.0008 15.7765C14.5303 16.6236 13.8597 17.1294 13.1303 17.1883C12.3891 17.2588 11.6479 16.8706 11.0479 16.1059L10.7891 15.7765C9.95379 14.7294 8.9185 14.2236 7.85967 14.3294C6.80085 14.4353 5.89497 15.1647 5.29497 16.353L3.25967 20.4118C2.53026 21.8824 2.60085 23.5883 3.45967 24.9765C4.3185 26.3647 5.81262 27.2 7.44791 27.2H22.4597C24.0361 27.2 25.5067 26.4118 26.3773 25.0941C27.2714 23.7765 27.4126 22.1177 26.7891 20.6706Z"
                  fill="currentColor"
                />
                <path
                  d="M9.08292 10.741C11.2791 10.741 13.0594 8.9607 13.0594 6.76456C13.0594 4.56841 11.2791 2.78809 9.08292 2.78809C6.88677 2.78809 5.10645 4.56841 5.10645 6.76456C5.10645 8.9607 6.88677 10.741 9.08292 10.741Z"
                  fill="currentColor"
                />
              </svg>
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
              className="rounded-lg bg-[#005CF0] text-[#E4EAFA] font-semibold text-xs py-3 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Generating Now
            </a>
            <a
              className="rounded-lg border-[#EFF0F6] border font-semibold text-xs py-3 px-4 cursor-pointer"
              href="https://modelslab.com/imagen"
            >
              Learn More
            </a>
            <a
              href="https://docs.modelslab.com/image-generation"
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
        <div className="md:w-[469px] md:h-[488px] lg:place-self-end w-full h-full rounded-3xl sm:w-2/3  relative">
          <div className="absolute max-w-full flex items-center justify-center inset-0 space-x-2 p-4 md:top-[390px] sm:top-[300px] top-[260px]">
            <span
              className="index-module_type__E-SaG w-[371px] h-[50px] bg-gray-400 opacity-90 text-black/70 border font-[16px] border-white/50 dark:border-none filter backdrop-blur-md dark:bg-[#111827]/70 dark:text-white/70  rounded-lg p-4 focus:outline-none items-center"
              style={{ display: "inline-block" }}
            >
              gothic style Prompt by Myri
            </span>
            <div className="h-[50px] w-[50px] bg-[#005CF0] rounded-lg p-2 justify-center items-center flex cursor-pointer">
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
