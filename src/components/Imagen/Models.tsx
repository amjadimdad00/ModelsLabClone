import React from "react";

const Models = () => {
  return (
    <div className="w-full flex-col sm:flex-row py-10 mx-auto container px-4 md:px-8 flex items-center justify-between gap-4 flex-wrap">
      <div>
        <h4 className="font-[700] text-4xl">Explore the Models</h4>
        <p className="font-[400] text-sm sm:text-base text-black/50 mt-2 dark:text-white/50">
          Unleash Your Creativity in Our Sandbox of Voices and Languages
        </p>
      </div>
      <div className="order-last sm:order-none">
        <a
          className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#005CF0] text-white dark:bg-[#0062FF] text-sm"
          href="/models"
        >
          <span className="max-w-min whitespace-nowrap">Explore Models</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="w-4 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
          </svg>
        </a>
      </div>
      <div className="basis-full w-full grid grid-cols-1 sm:grid-cols-3 grid-rows-[auto_1fr_40px] lg:grid-cols-5 gap-2 justify-between space-center">
        <div className="w-full col-span-1 border row-span-3 border-[#EFF0F6] dark:border-gray-500/50 dark:bg-[#111827] even:hidden lg:even:grid grid-rows-subgrid grid bg-white rounded-3xl p-2">
          <div className="rounded-xl bg-gray-500 w-full">
            <img
              src="https://assets.modelslab.com/generations/4da21580-ac6c-477b-a3ca-9e02fbfc7686-0.png"
              alt="MidJourney V4"
              className="w-full aspect-auto object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5 className="line-clamp-1 text-base font-semibold">
              {" "}
              <a href="https://modelslab.com/models/midjourney">
                MidJourney V4
              </a>
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              Openjourney is an open source Stable Diffusion fine tuned model on
              Midjourney images, by PromptHero
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] text-[#005CF0] bg-[#E4EAFA] rounded-xl px-2 py-0.5">
              stable_diffusion
            </span>
          </div>
        </div>
        <div className="w-full col-span-1 border row-span-3 border-[#EFF0F6] dark:border-gray-500/50 dark:bg-[#111827] even:hidden lg:even:grid grid-rows-subgrid grid bg-white rounded-3xl p-2">
          <div className="rounded-xl bg-gray-500 w-full">
            <img
              src="https://assets.modelslab.com/generations/2d46241c-8ba7-4d0f-98cb-e47698c7a133-0.png"
              alt="Anything V3"
              className="w-full aspect-auto object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5 className="line-clamp-1 text-base font-semibold">
              {" "}
              <a href="https://modelslab.com/models/anything-v3">Anything V3</a>
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              This model is intended to produce high-quality, highly detailed
              anime style with just a few prompts.
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] text-[#005CF0] bg-[#E4EAFA] rounded-xl px-2 py-0.5">
              stable_diffusion
            </span>
          </div>
        </div>
        <div className="w-full col-span-1 border row-span-3 border-[#EFF0F6] dark:border-gray-500/50 dark:bg-[#111827] even:hidden lg:even:grid grid-rows-subgrid grid bg-white rounded-3xl p-2">
          <div className="rounded-xl bg-gray-500 w-full">
            <img
              src="https://assets.modelslab.com/generations/858d06ab-37e9-4e00-a6d7-fd21d740f9fd-0.png"
              alt="Wifu Diffusion"
              className="w-full aspect-auto object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5 className="line-clamp-1 text-base font-semibold">
              {" "}
              <a href="https://modelslab.com/models/wifu-diffusion">
                Wifu Diffusion
              </a>
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              waifu-diffusion is a latent text-to-image diffusion model that has
              been conditioned on high-quality anime images through fine-tuning.
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] text-[#005CF0] bg-[#E4EAFA] rounded-xl px-2 py-0.5">
              stable_diffusion
            </span>
          </div>
        </div>
        <div className="w-full col-span-1 border row-span-3 border-[#EFF0F6] dark:border-gray-500/50 dark:bg-[#111827] even:hidden lg:even:grid grid-rows-subgrid grid bg-white rounded-3xl p-2">
          <div className="rounded-xl bg-gray-500 w-full">
            <img
              src="https://assets.modelslab.com/generations/fca5b2ef-4564-427d-948c-95828bebd1e2-0.png"
              alt="Arcane Diffusion"
              className="w-full aspect-auto object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5 className="line-clamp-1 text-base font-semibold">
              {" "}
              <a href="https://modelslab.com/models/arcane-diffusion">
                Arcane Diffusion
              </a>
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              This is the fine-tuned Stable Diffusion model trained on images
              from the TV Show Arcane.
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] text-[#005CF0] bg-[#E4EAFA] rounded-xl px-2 py-0.5">
              stable_diffusion
            </span>
          </div>
        </div>
        <div className="w-full col-span-1 border row-span-3 border-[#EFF0F6] dark:border-gray-500/50 dark:bg-[#111827] even:hidden lg:even:grid grid-rows-subgrid grid bg-white rounded-3xl p-2">
          <div className="rounded-xl bg-gray-500 w-full">
            <img
              src="https://assets.modelslab.com/generations/70677d4f-7e4b-4acb-81f3-bb8fbe256f7d-0.png"
              alt="Tron Legacy Diffusion"
              className="w-full aspect-auto object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5 className="line-clamp-1 text-base font-semibold">
              {" "}
              <a href="https://modelslab.com/models/tron-legacy-diffusion">
                Tron Legacy Diffusion
              </a>
            </h5>
            <p className="line-clamp-2 text-xs text-black/50 dark:text-white/50 font-[500]">
              This is a fine-tuned Stable Diffusion model trained on screenshots
              from the film Tron: Legacy (2010).
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] text-[#005CF0] bg-[#E4EAFA] rounded-xl px-2 py-0.5">
              stable_diffusion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
