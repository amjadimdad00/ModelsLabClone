import React from "react";

const GettingStarted = () => {
  return (
    <section className="w-full bg-white dark:bg-[#111827]">
      <div className=" container mx-auto px-4 md:px-8 grid gap-10 lg:grid-cols-2 pb-[8.26px]">
        <div className="w-full lg:pr-32 pt-20 text-center ">
          <h4 className="font-[700] text-4xl lg:text-left">
            Make Your Own Apps using Models
            <span className="text-[#005CF0]">Lab</span> API
          </h4>
          <p className="font-[400] text-sm lg:text-left mt-2">
            Use Our API to Build apps, Make Great AI Art, Create Awesome Videos
            and generate sound with ease!
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-[20px] gap-2">
            <a
              className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              data-rac=""
              href="https://modelslab.com/login"
            >
              <span className="max-w-min whitespace-nowrap">
                Join 100k Developer
              </span>
            </a>
            <a
              href="https://modelslab.com/playground/text-to-image"
              className="bg-[#000000] dark:bg-white dark:text-black text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
            >
              <span className="max-w-min whitespace-nowrap">Playground</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          {/* Dark mode image */}
          <img
            alt="mac"
            className="lg:w-2/3 hidden dark:block"
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/90925437-103b-4402-a1da-2e6797abaf00/768"
            loading="lazy" // Add lazy loading for better performance
          />
          {/* Light mode image */}
          <img
            alt="mac"
            className="lg:w-2/3 dark:hidden block"
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/90925437-103b-4402-a1da-2e6797abaf00/768"
            loading="lazy" // Add lazy loading for better performance
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
