import React from "react";

const AutoAI = () => {
  return (
    <section className="bg-white dark:bg-[#111827]" id="auto-ai">
      <div className="w-full mx-auto container px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="flex items-center justify-start gap-2">
            <span className="h-8 flex text-white items-center justify-center aspect-square rounded-[10px] bg-[#00BCD1]">
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                focusable="false"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M15.8019 22.75C15.5319 22.75 15.2819 22.6 15.1519 22.37C15.0219 22.14 15.0219 21.85 15.1619 21.62L16.2119 19.87C16.4219 19.51 16.8819 19.4 17.2419 19.61C17.6019 19.82 17.7119 20.28 17.5019 20.64L17.2319 21.09C19.9919 20.44 22.0619 17.96 22.0619 15C22.0619 14.59 22.4019 14.25 22.8119 14.25C23.2219 14.25 23.5619 14.59 23.5619 15C23.5519 19.27 20.0719 22.75 15.8019 22.75Z"
                  fill="currentColor"
                />
                <path
                  d="M2.80176 9.75C2.39176 9.75 2.05176 9.41 2.05176 9C2.05176 4.73 5.53176 1.25 9.80176 1.25C10.0718 1.25 10.3218 1.4 10.4518 1.63C10.5818 1.86 10.5818 2.15 10.4418 2.38L9.39176 4.14C9.18176 4.49 8.72176 4.61 8.36176 4.39C8.01176 4.18 7.89176 3.72 8.11176 3.36L8.38176 2.91C5.61176 3.56 3.55176 6.04 3.55176 9C3.55176 9.41 3.21176 9.75 2.80176 9.75Z"
                  fill="currentColor"
                />
                <path
                  d="M11.4717 13.8499L8.33172 12.1599C8.00172 11.9799 7.60172 11.9799 7.27172 12.1599L4.13172 13.8499C3.90172 13.9699 3.76172 14.2199 3.76172 14.4899C3.76172 14.7599 3.90172 15.0099 4.13172 15.1299L7.27172 16.8199C7.44172 16.9099 7.62172 16.9499 7.80172 16.9499C7.98172 16.9499 8.16172 16.9099 8.33172 16.8199L11.4717 15.1299C11.7017 15.0099 11.8417 14.7599 11.8417 14.4899C11.8417 14.2199 11.6917 13.9799 11.4717 13.8499Z"
                  fill="currentColor"
                />
                <path
                  d="M6.75176 17.4099L3.83176 15.9499C3.61176 15.8399 3.35176 15.8499 3.13176 15.9799C2.93176 16.1099 2.80176 16.3399 2.80176 16.5899V19.3499C2.80176 19.8299 3.06176 20.2599 3.49176 20.4699L6.41176 21.9299C6.51176 21.9699 6.62176 21.9999 6.73176 21.9999C6.86176 21.9999 6.99176 21.9599 7.11176 21.8899C7.32176 21.7599 7.45176 21.5299 7.45176 21.2799V18.5199C7.45176 18.0499 7.18176 17.6199 6.75176 17.4099Z"
                  fill="currentColor"
                />
                <path
                  d="M12.4614 15.9799C12.2514 15.8499 11.9914 15.8399 11.7614 15.9499L8.84137 17.4099C8.41137 17.6199 8.15137 18.0499 8.15137 18.5299V21.2899C8.15137 21.5399 8.28137 21.7699 8.49137 21.8999C8.61137 21.9599 8.74137 21.9999 8.87137 21.9999C8.98137 21.9999 9.09137 21.9699 9.19137 21.9199L12.1114 20.4599C12.5414 20.2499 12.8014 19.8199 12.8014 19.3399V16.5799C12.8014 16.3399 12.6714 16.1099 12.4614 15.9799Z"
                  fill="currentColor"
                />
                <path
                  d="M21.4717 3.82988L18.3317 2.13988C18.0017 1.95988 17.6017 1.95988 17.2717 2.13988L14.1317 3.82988C13.9017 3.94988 13.7617 4.19988 13.7617 4.46988C13.7617 4.73988 13.9017 4.98988 14.1317 5.10988L17.2717 6.79988C17.4417 6.88988 17.6217 6.92988 17.8017 6.92988C17.9817 6.92988 18.1617 6.88988 18.3317 6.79988L21.4717 5.10988C21.7017 4.98988 21.8417 4.73988 21.8417 4.46988C21.8417 4.18988 21.6917 3.94988 21.4717 3.82988Z"
                  fill="currentColor"
                />
                <path
                  d="M16.7518 7.38011L13.8318 5.92011C13.6118 5.81011 13.3518 5.82011 13.1318 5.95011C12.9318 6.08011 12.8018 6.31011 12.8018 6.56011V9.32011C12.8018 9.80011 13.0618 10.2301 13.4918 10.4401L16.4118 11.9001C16.5118 11.9501 16.6218 11.9801 16.7318 11.9801C16.8618 11.9801 16.9918 11.9401 17.1118 11.8701C17.3218 11.7401 17.4518 11.5101 17.4518 11.2601V8.50011C17.4518 8.02011 17.1818 7.59011 16.7518 7.38011Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4614 5.95011C22.2514 5.82011 21.9914 5.81011 21.7614 5.92011L18.8414 7.38011C18.4114 7.59011 18.1514 8.02011 18.1514 8.50011V11.2601C18.1514 11.5101 18.2814 11.7401 18.4914 11.8701C18.6114 11.9401 18.7414 11.9801 18.8714 11.9801C18.9814 11.9801 19.0914 11.9501 19.1914 11.9001L22.1114 10.4401C22.5414 10.2201 22.8014 9.79011 22.8014 9.32011V6.56011C22.8014 6.31011 22.6714 6.08011 22.4614 5.95011Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-[#00BCD1] font-semibold text-lg">
              Auto AI
            </span>
          </h4>
          <h5 className="text-[#111928] font-[700] text-4xl mt-5 dark:text-white">
            Boost Your Productivity with Auto AI
          </h5>
          <p className="font-normal text-sm mt-4 dark:text-white/70">
            Make your tasks easier with ModelsLab’s AI Agent.
          </p>
          <div className="mt-8 flex items-center justify-start gap-2">
            <a
              to="#"
              className="rounded-lg bg-[#005CF0] text-white font-semibold text-xs py-3 px-4"
            >
              Coming Soon
            </a>
            <a
              to="#"
              className="rounded-lg border-[#3E3E3E] border font-semibold text-xs py-3 px-4"
            >
              Learn More
            </a>
            <a
              href="#"
              className="rounded-lg border border-[#E5E7EB] dark:border-[#3E3E3E] hover:border-[#BABABA] dark:hover:border-[#BABABA] stroke-black dark:stroke-white text-transparent font-semibold text-xs p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2.92 2.92 44.17 44.17"
                className="size-[1.273rem] text-black dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M45.83 20.83v10.42c0 10.42-4.16 14.58-14.58 14.58h-12.5c-10.42 0-14.58-4.16-14.58-14.58v-12.5c0-10.42 4.16-14.58 14.58-14.58h10.42"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M45.83 20.83H37.5c-6.25 0-8.33-2.08-8.33-8.33V4.17l16.66 16.66Zm-31.25 6.25h12.5m-12.5 8.34h8.34"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-[469px] lg:place-self-end md:h-[488px] w-full h-full rounded-3xl relative bg-[#00BCD1] sm:w-2/3">
          <img
            src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/0a725564-ba62-46d2-037d-a269152e0b00/768"
            className="object-cover w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AutoAI;
