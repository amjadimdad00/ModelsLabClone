import React from "react";

const CommunitySection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-5 container mx-auto  px-4 md:px-8 lg:px-0 lg:min-w-full sm:grid-cols-7 lg:grid-cols-5 grid-rows-8 w-full py-20 gap-4 max-h-1/2">
        <div className="w-full col-span-full row-span-4 lg:col-span-3 lg:row-span-3 lg:row-start-1 lg:col-start-2 px-4 pb-4 overflow-hidden">
          <h4 className="font-[700] text-4xl text-center">
            Join Our Community!
          </h4>
          <p className="font-[500] text-sm text-center mt-2">
            Try our AI Image Generator Tools to create great art. Find new ideas
            and make your artwork!
          </p>
          <div className="flex items-center justify-center flex-wrap mt-4 gap-2">
            <a
              href="https://discord.gg/modelslab-1033301189254729748"
              className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="max-w-min whitespace-nowrap">
                Join Our Community
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="bg-white rounded-full aspect-square h-4 text-[#005CF0] p-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
            <a
              className="bg-[#000000] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
              href="https://modelslab.com/models"
            >
              <svg
                width={14}
                height={15}
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.83333 0.416748H4.16667C1.6875 0.416748 0.625 1.83341 0.625 3.95841V11.0417C0.625 13.1667 1.6875 14.5834 4.16667 14.5834H9.83333C12.3125 14.5834 13.375 13.1667 13.375 11.0417V3.95841C13.375 1.83341 12.3125 0.416748 9.83333 0.416748ZM4.16667 7.67716H7C7.29042 7.67716 7.53125 7.918 7.53125 8.20841C7.53125 8.49883 7.29042 8.73966 7 8.73966H4.16667C3.87625 8.73966 3.63542 8.49883 3.63542 8.20841C3.63542 7.918 3.87625 7.67716 4.16667 7.67716ZM9.83333 11.573H4.16667C3.87625 11.573 3.63542 11.3322 3.63542 11.0417C3.63542 10.7513 3.87625 10.5105 4.16667 10.5105H9.83333C10.1237 10.5105 10.3646 10.7513 10.3646 11.0417C10.3646 11.3322 10.1237 11.573 9.83333 11.573ZM11.6042 5.55216H10.1875C9.11083 5.55216 8.23958 4.68091 8.23958 3.60425V2.18758C8.23958 1.89716 8.48042 1.65633 8.77083 1.65633C9.06125 1.65633 9.30208 1.89716 9.30208 2.18758V3.60425C9.30208 4.093 9.69875 4.48966 10.1875 4.48966H11.6042C11.8946 4.48966 12.1354 4.7305 12.1354 5.02091C12.1354 5.31133 11.8946 5.55216 11.6042 5.55216Z"
                  fill="white"
                />
              </svg>
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
          className="hidden lg:block row-start-4 row-span-2 col-span-2 col-start-2 w-full h-full min-h-40 rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
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
    </section>
  );
};

export default CommunitySection;
