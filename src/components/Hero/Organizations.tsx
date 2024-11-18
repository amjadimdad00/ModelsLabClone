import Image from "next/image";
import React from "react";

const Organizations = () => {
  return (
    <div className=" w-full">
      <div className="px-4 md:px-8 py-10 pt-20 container mx-auto">
        <p className="text-sm font-[600] text-center">
          Organizations of all sizes builds with ModelsLab for their production
          of AI applications
        </p>
        <div className="py-10 h-fit snap-x flex items-center gap-8 overflow-x-auto justify-between">
          <div className="snap-center">
            <img
              alt="Google"
              data-dark="false"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/8f6220e5-624f-4243-77e5-c314fe6e6200/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
          <div className="snap-center">
            <img
              alt="Salesforce"
              data-dark="false"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/3b268869-e2e0-4bd9-c3f3-35ca66d44800/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
          <div className="snap-center">
            <img
              alt="Amazon"
              data-dark="true"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/a2ce2715-4f11-40a9-f2af-8f9e50d5fd00/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
          <div className="snap-center">
            <img
              alt="IBM"
              data-dark="false"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/7ba35dff-befb-43ef-226f-6f31ceedfe00/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
          <div className="snap-center">
            <img
              alt="Adobe"
              data-dark="true"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/e10b70d4-a8ec-4f9a-10f8-247dce9da100/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
          <div className="snap-center">
            <img
              alt="Facebook"
              data-dark="true"
              src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/e1ed43b3-52e7-4f18-b0e7-dc76ea542800/768"
              className="snap-center object-cover dark:data-[dark=true]:invert"
            />
          </div>
        </div>
        <div className="py-8 flex items-center w-full">
          <div className="flex flex-col w-full gap-4 dark:bg-[#1f2937] lg:gap-0 lg:bg-white lg:flex-row lg:rounded-[20px] lg:py-4 lg:overflow-hidden dark:border-[#4B5563] border-[#EFF0F6] lg:border">
            <div className="w-full rounded-[8px] lg:rounded-none bg-white dark:bg-[#1f2937] lg:first:border-l-transparent !lg:border-x-transparent lg:last:border-r-transparent flex flex-col items-center justify-center border lg:border-y-0 dark:border-[#4B5563] border-[#EFF0F6] p-4">
              <p className="font-[800] text-2xl">800M+</p>
              <p className="font-[500] text-sm">Images Generated</p>
            </div>
            <div className="w-full rounded-[8px] lg:rounded-none bg-white dark:bg-[#1f2937] lg:first:border-l-transparent !lg:border-x-transparent lg:last:border-r-transparent flex flex-col items-center justify-center border lg:border-y-0 dark:border-[#4B5563] border-[#EFF0F6] p-4">
              <p className="font-[800] text-2xl">300K+</p>
              <p className="font-[500] text-sm">Users</p>
            </div>
            <div className="w-full rounded-[8px] lg:rounded-none bg-white dark:bg-[#1f2937] lg:first:border-l-transparent !lg:border-x-transparent lg:last:border-r-transparent flex flex-col items-center justify-center border lg:border-y-0 dark:border-[#4B5563] border-[#EFF0F6] p-4">
              <p className="font-[800] text-2xl">5K+</p>
              <p className="font-[500] text-sm">Discord Community</p>
            </div>
            <div className="w-full rounded-[8px] lg:rounded-none bg-white dark:bg-[#1f2937] lg:first:border-l-transparent !lg:border-x-transparent lg:last:border-r-transparent flex flex-col items-center justify-center border lg:border-y-0 dark:border-[#4B5563] border-[#EFF0F6] p-4">
              <p className="font-[800] text-2xl">25+</p>
              <p className="font-[500] text-sm">API Calls</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
