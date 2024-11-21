import React from "react";

import TelephoneIcon from "../svg/others/telephone.svg";
import DocumentIcon from "../svg/others/document.svg";
import FilledDownArrow from "../svg/arrows/filleddownarrow.svg";

const Questions = () => {
  return (
    <section className="w-full">
      <div className="mx-auto container px-4 md:px-8 grid lg:grid-cols-2 w-full py-10 gap-8">
        <div className="w-full lg:pr-32">
          <h4 className="font-bold text-4xl text-center dark:text-white text-black">
            Still Have Questions? We have answers
          </h4>
          <p className="font-[500] text-sm text-center mt-2 dark:text-white text-black  ">
            Want to know more? You can email us anytime at{" "}
            <a className="text-[#005CF0]">support@modelslab.com</a>
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <a
              className="bg-[#005CF0] text-white font-[500] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              data-rac=""
              href="https://modelslab.com/support"
              target="_blank"
            >
              <TelephoneIcon className=" aspect-square h-4 text-white" />
              <span className="max-w-min whitespace-nowrap">
                Book A meeting
              </span>
            </a>
            <a
              href="https://docs.modelslab.com/"
              target="_blank"
              className="bg-[#000000] dark:bg-white text-black font-[500] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
            >
              <DocumentIcon />
              <span className="max-w-min whitespace-nowrap dark:text-black">
                View Docs
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <details className="w-full group dark:border-[#4B5563] dark:bg-[#111827] relative border border-[#EFF0F6] rounded-[0.625rem] transition-all duration-700 bg-white px-4 py-5">
            <summary className="marker:indent-[100%] marker:text-[0px] flex items-center cursor-pointer gap-1 justify-between">
              <span className="font-semibold text-[16px] leading-[24px] dark:text-white text-black">
                What Is an Image Editing API?
              </span>
              <span className="group-open:rotate-180  duration-150 text-black dark:text-white transition-all flex-none">
                <FilledDownArrow />
              </span>
            </summary>
            <p className="text-sm pt-3 group-open:animate-fade-down dark:text-white text-black">
              API stands for &quot;application programming interface.&quot; In
              simple terms, an API is a piece of software that integrates with
              your code to perform a particular task. In today&apos;s world,
              &quot;API&quot; usually refers to a hosted solution that exposes
              an HTTP endpoint that you can access via a network request
            </p>
          </details>
          <details className="w-full group dark:border-[#4B5563] dark:bg-[#111827] relative border border-[#EFF0F6] rounded-[0.625rem] transition-all duration-700 bg-white px-4 py-5">
            <summary className="marker:indent-[100%] marker:text-[0px] flex items-center cursor-pointer gap-1 justify-between">
              <span className="font-semibold text-[16px] leading-[24px] dark:text-white text-black">
                Can I get higher resolution or higher quality images?
              </span>
              <span className="group-open:rotate-180  duration-150 text-black dark:text-white transition-all flex-none">
                <FilledDownArrow />
              </span>
            </summary>
            <p className="text-sm pt-3 group-open:animate-fade-down dark:text-white text-black">
              Yes
            </p>
          </details>
          <details className="w-full group dark:border-[#4B5563] dark:bg-[#111827] relative border border-[#EFF0F6] rounded-[0.625rem] transition-all duration-700 bg-white px-4 py-5">
            <summary className="marker:indent-[100%] marker:text-[0px] flex items-center cursor-pointer gap-1 justify-between">
              <span className="font-semibold text-[16px] leading-[24px] dark:text-white text-black">
                Why is an image editing API important?
              </span>
              <span className="group-open:rotate-180  duration-150 text-black dark:text-white transition-all flex-none">
                <FilledDownArrow />
              </span>
            </summary>
            <p className="text-sm pt-3 group-open:animate-fade-down dark:text-white text-black">
              image editing technologies often with just one POST or GET
              request. Adding that functionality to an existing website or a new
              application is simple, yet effective. Image editing APIs are
              essential to businesses that rely on strong visuals to sell or
              educate. For example, online retail marketplace sites may give
              sellers an option to upload and edit images of their items for
              sale. Photo gallery sites are utilizers of APIs too, and any
              application that allows members to upload their profile photos or
              other images. image editing helps businesses build their brand.
              Clear, high-quality images attract customers and motivate them to
              buy.
            </p>
          </details>
          <details className="w-full group dark:border-[#4B5563] dark:bg-[#111827] relative border border-[#EFF0F6] rounded-[0.625rem] transition-all duration-700 bg-white px-4 py-5">
            <summary className="marker:indent-[100%] marker:text-[0px] flex items-center cursor-pointer gap-1 justify-between">
              <span className="font-semibold text-[16px] leading-[24px] dark:text-white text-black">
                What can I use the FaceGen(head Shot) API for?
              </span>
              <span className="group-open:rotate-180  duration-150 text-black dark:text-white transition-all flex-none">
                <FilledDownArrow />
              </span>
            </summary>
            <p className="text-sm pt-3 group-open:animate-fade-down dark:text-white text-black">
              The FaceGen API has a wide range of applications, including
              virtual avatar creation for gaming and virtual reality (VR)
              applications, character generation for animation and film
              production, facial recognition system training, and personalized
              content generation in e-commerce and marketing.{" "}
            </p>
          </details>
          <details className="w-full group dark:border-[#4B5563] dark:bg-[#111827] relative border border-[#EFF0F6] rounded-[0.625rem] transition-all duration-700 bg-white px-4 py-5">
            <summary className="marker:indent-[100%] marker:text-[0px] flex items-center cursor-pointer gap-1 justify-between">
              <span className="font-semibold text-[16px] leading-[24px] dark:text-white text-black">
                What image editing APIs includes?
              </span>
              <span className="group-open:rotate-180  duration-150 text-black dark:text-white transition-all flex-none">
                <FilledDownArrow />
              </span>
            </summary>
            <p className="text-sm pt-3 group-open:animate-fade-down dark:text-white text-black">
              Outpainting,Blip Diffusion,Magic Mix,Depth to Image,Image
              Mixer,Image Guided Editing,Background Removal and Create
              mask,Super Resolution,Multi-view,Fashion,Face
              Generator,,Inpainting,Head shot.
              https://docs.modelslab.com/image-editing/overview
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Questions;
