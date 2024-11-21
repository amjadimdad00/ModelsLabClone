import React from "react";

const Community = () => {
  return (
    <div className="gap-5 py-20 flex flex-col w-full">
      <div className="w-full container mx-auto px-5 overflow-hidden">
        <h4 className="font-[700] text-4xl text-center mx-auto  lg:w-2/3">
          Community is waiting for you
        </h4>
        <p className="font-[500] text-sm text-center mt-2 mx-auto lg:w-2/3">
          Explore Our AI Image Generator Tools for Creating Captivating AI
          Generated Art. Explore a world of infinite inspiration and take your
          artworks to new heights with our AI image generator tools.
        </p>
        <div className="flex items-center justify-center flex-wrap mt-20 gap-2">
          <a
            href="https://discord.gg/modelslab-1033301189254729748"
            target="_blank"
            className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
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
            className="bg-[#000000] dark:bg-white dark:text-black text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
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
                fill="currentColor"
              />
            </svg>
            <span className="max-w-min whitespace-nowrap">
              Monetize Models (soon)
            </span>
          </a>
        </div>
      </div>

      {/* Feed Button */}
      <div className="flex items-center justify-center w-full">
        <a
          className="text-base px-4 py-3 rounded-lg bg-[#005CF0] text-white dark:bg-[#0062FF]"
          href="https://modelslab.com/feeds"
        >
          Check Our Feed
        </a>
      </div>
    </div>
  );
};

export default Community;
