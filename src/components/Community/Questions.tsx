import React from "react";

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
              className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              data-rac=""
              href="https://modelslab.com/support"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className=" aspect-square h-4 text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
              </svg>
              <span className="max-w-min whitespace-nowrap">
                Book A meeting
              </span>
            </a>
            <a
              href="https://docs.modelslab.com/"
              target="_blank"
              className="bg-[#000000] dark:bg-white text-black font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
            >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark:text-black"
                  d="M9.83333 0.416748H4.16667C1.6875 0.416748 0.625 1.83341 0.625 3.95841V11.0417C0.625 13.1667 1.6875 14.5834 4.16667 14.5834H9.83333C12.3125 14.5834 13.375 13.1667 13.375 11.0417V3.95841C13.375 1.83341 12.3125 0.416748 9.83333 0.416748ZM4.16667 7.67716H7C7.29042 7.67716 7.53125 7.918 7.53125 8.20841C7.53125 8.49883 7.29042 8.73966 7 8.73966H4.16667C3.87625 8.73966 3.63542 8.49883 3.63542 8.20841C3.63542 7.918 3.87625 7.67716 4.16667 7.67716ZM9.83333 11.573H4.16667C3.87625 11.573 3.63542 11.3322 3.63542 11.0417C3.63542 10.7513 3.87625 10.5105 4.16667 10.5105H9.83333C10.1237 10.5105 10.3646 10.7513 10.3646 11.0417C10.3646 11.3322 10.1237 11.573 9.83333 11.573ZM11.6042 5.55216H10.1875C9.11083 5.55216 8.23958 4.68091 8.23958 3.60425V2.18758C8.23958 1.89716 8.48042 1.65633 8.77083 1.65633C9.06125 1.65633 9.30208 1.89716 9.30208 2.18758V3.60425C9.30208 4.093 9.69875 4.48966 10.1875 4.48966H11.6042C11.8946 4.48966 12.1354 4.7305 12.1354 5.02091C12.1354 5.31133 11.8946 5.55216 11.6042 5.55216Z"
                  fill="currentColor"
                ></path>
              </svg>
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
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" dark:text-white text-black"
                    d="M8.22287 -1.21392e-07L2.71507 -3.62146e-07C0.0581627 -4.78283e-07 -0.833902 1.833 0.872724 4.12426L3.62657 8.02857C3.83989 8.32185 4.13084 8.57849 4.46053 8.74347C4.79022 8.90844 5.17805 9 5.56592 9C5.95379 9 6.32228 8.90844 6.67136 8.74347C7.00105 8.57849 7.29194 8.32185 7.50526 8.02857L10.2786 4.12426C11.7719 1.85133 10.8798 -5.25493e-09 8.22287 -1.21392e-07Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" dark:text-white text-black"
                    d="M8.22287 -1.21392e-07L2.71507 -3.62146e-07C0.0581627 -4.78283e-07 -0.833902 1.833 0.872724 4.12426L3.62657 8.02857C3.83989 8.32185 4.13084 8.57849 4.46053 8.74347C4.79022 8.90844 5.17805 9 5.56592 9C5.95379 9 6.32228 8.90844 6.67136 8.74347C7.00105 8.57849 7.29194 8.32185 7.50526 8.02857L10.2786 4.12426C11.7719 1.85133 10.8798 -5.25493e-09 8.22287 -1.21392e-07Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" dark:text-white text-black"
                    d="M8.22287 -1.21392e-07L2.71507 -3.62146e-07C0.0581627 -4.78283e-07 -0.833902 1.833 0.872724 4.12426L3.62657 8.02857C3.83989 8.32185 4.13084 8.57849 4.46053 8.74347C4.79022 8.90844 5.17805 9 5.56592 9C5.95379 9 6.32228 8.90844 6.67136 8.74347C7.00105 8.57849 7.29194 8.32185 7.50526 8.02857L10.2786 4.12426C11.7719 1.85133 10.8798 -5.25493e-09 8.22287 -1.21392e-07Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" dark:text-white text-black"
                    d="M8.22287 -1.21392e-07L2.71507 -3.62146e-07C0.0581627 -4.78283e-07 -0.833902 1.833 0.872724 4.12426L3.62657 8.02857C3.83989 8.32185 4.13084 8.57849 4.46053 8.74347C4.79022 8.90844 5.17805 9 5.56592 9C5.95379 9 6.32228 8.90844 6.67136 8.74347C7.00105 8.57849 7.29194 8.32185 7.50526 8.02857L10.2786 4.12426C11.7719 1.85133 10.8798 -5.25493e-09 8.22287 -1.21392e-07Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" dark:text-white text-black"
                    d="M8.22287 -1.21392e-07L2.71507 -3.62146e-07C0.0581627 -4.78283e-07 -0.833902 1.833 0.872724 4.12426L3.62657 8.02857C3.83989 8.32185 4.13084 8.57849 4.46053 8.74347C4.79022 8.90844 5.17805 9 5.56592 9C5.95379 9 6.32228 8.90844 6.67136 8.74347C7.00105 8.57849 7.29194 8.32185 7.50526 8.02857L10.2786 4.12426C11.7719 1.85133 10.8798 -5.25493e-09 8.22287 -1.21392e-07Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
