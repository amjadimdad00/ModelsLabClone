import React from "react";

// Icon SVG
import DocumentIcon from "../Svg/Others/document.svg"
import RightArrowRounded from "../Svg/Arrows/rightarrowrounded.svg";

const CommunitySection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-5 container mx-auto  px-4 md:px-8 lg:px-0 lg:min-w-full sm:grid-cols-7 lg:grid-cols-5 grid-rows-8 w-full gap-4 max-h-1/2">
        <div className="w-full col-span-full row-span-4 lg:col-span-3 lg:row-span-3 lg:row-start-1 lg:col-start-2 px-4 pb-4 overflow-hidden">
          <h4 className="font-[800] text-[36px] text-center">
            Community is waiting for you
          </h4>
          <p className="font-[500] text-sm text-center mt-7 text-black/80 dark:text-white/80 mx-auto max-w-2xl">
            Explore Our AI Image Generator Tools for Creating Captivating AI
            Generated Art. Explore a world of infinite inspiration and take your
            artworks to new heights with our AI image generator tools.
          </p>
          <div className="flex items-center justify-center flex-wrap mt-10 gap-2">
            <a
              href="https://discord.gg/modelslab-1033301189254729748"
              className="bg-[#005CF0] text-white font-[400] hover:bg-opacity-80 dark:hover:bg-opacity-80 text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="max-w-min whitespace-nowrap">
                Join Our Community
              </span>
              <RightArrowRounded className="bg-white rounded-full aspect-square h-4 text-[#005CF0] p-1" />
            </a>
            <a
              className="bg-black dark:bg-white dark:text-black hover:bg-opacity-80 dark:hover:bg-opacity-80 text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              href="https://modelslab.com/models"
            >
              <DocumentIcon />
              <span className="max-w-min whitespace-nowrap">
                Monetize Models
              </span>
            </a>
          </div>
        </div>
        <div
          className="col-start-4 col-span-2 row-start-6 row-span-3 sm:col-span-2 min-h-60 sm:col-start-6 lg:block lg:col-start-1 lg:col-span-1 lg:row-span-4 lg:row-start-1 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/3e5cbabd-154e-462e-2049-ad653fb1b500/768")',
          }}
        />
        <div
          className="bg-gray-500 hidden lg:block row-start-1 row-span-4 col-start-5 col-span-1 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/f2cf2be9-c8c6-4442-91e1-0eb33d638e00/768")',
          }}
        />
        <div
          className="bg-red-500 hidden lg:block row-start-5 row-span-4 col-start-1 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/edb2a1be-64cb-4b7a-c91b-5eefe79a0a00/768")',
          }}
        />
        <div
          className="bg-red-500 col-start-2 -z-0 col-span-3 sm:col-span-3 sm:col-start-3 row-start-5 row-span-4 lg:block lg:row-start-5 lg:col-span-1 lg:row-span-4 lg:col-start-5 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/3df101e7-db7f-4d8d-7a35-d8c6a20d0b00/768")',
          }}
        />
        <div
          className="hidden lg:block row-start-4 row-span-2 col-span-2 col-start-2 w-full h-full min-h-[230px] rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/8b16e890-c395-44ea-36ff-f1ffa94ba000/768")',
          }}
        />
        <div
          className="bg-green-500 row-span-3  col-start-1 col-span-2 row-start-6 lg:block lg:row-start-4 lg:row-span-5 lg:col-span-1 lg:col-start-4 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/0b1585a0-3cff-41f2-d79a-b34831e23e00/768")',
          }}
        />
        <div
          className="bg-green-500 hidden lg:block row-start-6 row-span-3 col-span-1 col-start-2 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/eafd718c-a2ae-44ce-4c32-ad9374dc9100/768")',
          }}
        />
        <div
          className="bg-green-500 hidden lg:block row-start-6 row-span-3 col-span-1 col-start-3 w-full h-full rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/8afa082f-0b10-42c8-81b5-2517e4b71500/768")',
          }}
        />
      </div>
      <div className="flex items-center justify-center w-full ">
        <a
          className="text-base px-4 py-3 rounded-lg bg-[#005CF0] text-white dark:bg-[#0062FF] mt-[25px] hover:bg-opacity-80 dark:hover:bg-opacity-80 mx-auto"
          href="https://modelslab.com/feeds"
        >
          Check Our Feeds
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
