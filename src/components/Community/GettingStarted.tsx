import React from "react";
import Image from "next/image";

const GettingStarted = () => {
  return (
    <section className="w-full bg-white dark:bg-[#111827] pb-20">
      <div className=" pt-10 container mx-auto px-4 md:px-8 grid gap-10 lg:pt-20 lg:grid-cols-2">
        <div className="w-full lg:pr-32 pt-20 text-center ">
          <h4 className="font-[700] text-4xl lg:text-left dark:text-white text-black">
            Make Your Own Apps using Models
            <span className="text-[#005CF0]">Lab</span> API
          </h4>
          <p className="font-[400] text-sm lg:text-left mt-2 dark:text-white text-black">
            Use Our API to Build apps, Make Great AI Art, Create Awesome Videos
            and generate sound with ease!
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-4 gap-2">
            <a
              className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              data-rac=""
              href="https://modelslab.com/login"
            >
              <span className="max-w-min whitespace-nowrap">Try for Free</span>
            </a>
            <a
              href="https://modelslab.com/playground/text-to-image"
              className="bg-[#000000] dark:bg-white dark:text-black text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
            >
              <span className="max-w-min whitespace-nowrap dark:text-black text-white">
                Playground
              </span>
            </a>
          </div>
        </div>
        <div className="md:flex items-center justify-center lg:justify-end hidden">
          <Image
            alt="mac"
            className="lg:w-2/3"
            width={400}
            height={400}
            src={"/mac.avif"}
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
