import React, { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState<number | null>(null);

  const onClose = () => setMenu(null);

  if (menu === 0) return <ProductMenu onClose={onClose} />;
  else if (menu === 1) return <ResourcesMenu onClose={onClose} />;

  return (
    <div className="flex flex-col text-[14px] font-[700] rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={() => setMenu(0)}
      >
        <span>Product</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="w-4 h-4 -rotate-90 duration-700"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      </button>
      <button
        onClick={() => setMenu(1)}
        type="button"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
      >
        <span>Resources</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="w-4 h-4 -rotate-90 duration-700"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      </button>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/pricing"
      >
        <span>Pricing</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/models"
      >
        <span>Models</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/enterprise"
      >
        <span>Enterprise</span>
        <span />
      </a>
      <a
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
        href="https://modelslab.com/developers"
      >
        <span>For Developers</span>
        <span />
      </a>
      <a
        target="_blank"
        href="https://docs.modelslab.com"
        className="w-full flex min-w-max justify-between focus:outline-none px-2 py-1.5 items-center "
      >
        <span>API Docs</span>
        <span />
      </a>
      <div className="flex items-center justify-center p-2 gap-2">
        <a
          href="https://discord.com/servers/modelslab-1033301189254729748"
          className="bg-[#5865F2] text-white font-[600] text-[14px] leading-[21px] gap-[4.5px] flex items-center justify-center px-[10px] rounded-[8px] py-[9.5px]"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 640 512"
            className="text-white h-[17px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
          </svg>
          <span>Join Discord</span>
        </a>
      </div>
    </div>
  );
};

const ProductMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-start focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={onClose}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="w-4 h-4 rotate-90 duration-700"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
        <span>Back</span>
      </button>
      <div>
        <div className="w-full text-black">
          <h2 className="text-[14px] px-2 dark:text-white font-[600] text-opacity-50">
            Products
          </h2>
          <div className="flex flex-col  lg:flex-row justify-between w-full gap-6  overflow-y-auto">
            <div className="w-full dark:text-white divide-y divide-[#DDE1E6] ">
              <div className="grid py-5 grid-cols-2 md:grid-cols-3 gap-5">
                <a
                  id="NnpnTwRxQZ"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/imagen"
                >
                  <span className="w-10 h-10 items-center flex justify-center group-hover:bg-imagen/10 dark:group-hover:bg-imagen/20 group-hover:text-imagen bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                      focusable="false"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M26.7891 20.6706L23.1067 12.0588C22.4361 10.4824 21.4361 9.58826 20.295 9.52944C19.1656 9.47061 18.0714 10.2588 17.2361 11.7647L15.0008 15.7765C14.5303 16.6236 13.8597 17.1294 13.1303 17.1883C12.3891 17.2588 11.6479 16.8706 11.0479 16.1059L10.7891 15.7765C9.95379 14.7294 8.9185 14.2236 7.85967 14.3294C6.80085 14.4353 5.89497 15.1647 5.29497 16.353L3.25967 20.4118C2.53026 21.8824 2.60085 23.5883 3.45967 24.9765C4.3185 26.3647 5.81262 27.2 7.44791 27.2H22.4597C24.0361 27.2 25.5067 26.4118 26.3773 25.0941C27.2714 23.7765 27.4126 22.1177 26.7891 20.6706Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.08292 10.741C11.2791 10.741 13.0594 8.9607 13.0594 6.76456C13.0594 4.56841 11.2791 2.78809 9.08292 2.78809C6.88677 2.78809 5.10645 4.56841 5.10645 6.76456C5.10645 8.9607 6.88677 10.741 9.08292 10.741Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Imagen</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      AI Image Generation And Tools
                    </span>
                  </span>
                </a>
                <a
                  id="dwneOHhcZO"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/audio-gen"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#4C00E1]/10 group-hover:text-[#4C00E1] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                      focusable="false"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M17.9993 16.7491C17.8393 16.7491 17.6893 16.6991 17.5493 16.5991C17.2193 16.3491 17.1493 15.8791 17.3993 15.5491C18.9692 13.4592 18.9692 10.5394 17.3993 8.44948C17.1493 8.1195 17.2193 7.64952 17.5493 7.39953C17.8793 7.14955 18.3492 7.21954 18.5992 7.54953C20.5591 10.1694 20.5591 13.8292 18.5992 16.4491C18.4492 16.6491 18.2292 16.7491 17.9993 16.7491Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.8293 19.2491C19.6693 19.2491 19.5194 19.1991 19.3794 19.0991C19.0494 18.8491 18.9794 18.3791 19.2294 18.0491C21.8992 14.4893 21.8992 9.50955 19.2294 5.94973C18.9794 5.61974 19.0494 5.14977 19.3794 4.89978C19.7093 4.64979 20.1793 4.71979 20.4293 5.04977C23.4992 9.13957 23.4992 14.8593 20.4293 18.9491C20.2893 19.1491 20.0593 19.2491 19.8293 19.2491Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.0194 3.77995C12.8994 3.15998 11.4695 3.31997 10.0096 4.22993L7.08972 6.05984C6.88972 6.17983 6.65974 6.24983 6.42975 6.24983H5.49979H4.99982C2.57993 6.24983 1.25 7.57976 1.25 9.99965V13.9995C1.25 16.4193 2.57993 17.7493 4.99982 17.7493H5.49979H6.42975C6.65974 17.7493 6.88972 17.8193 7.08972 17.9393L10.0096 19.7692C10.8895 20.3191 11.7495 20.5891 12.5494 20.5891C13.0694 20.5891 13.5694 20.4691 14.0194 20.2191C15.1293 19.5992 15.7493 18.3092 15.7493 16.5893V7.40977C15.7493 5.68986 15.1293 4.39992 14.0194 3.77995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Audio Gen</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      Work with audio using audio gen
                    </span>
                  </span>
                </a>
                <a
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/3d-verse"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#DE0004]/10 group-hover:text-[#DE0004] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="m16.109 4.733-5.225-2.816c-.55-.3-1.217-.3-1.767 0L3.892 4.733A1.193 1.193 0 0 0 3.275 5.8c0 .45.234.858.617 1.067l5.225 2.816a1.856 1.856 0 0 0 1.767 0l5.225-2.816c.383-.209.616-.609.616-1.067 0-.458-.233-.858-.616-1.067ZM8.259 10.658 3.392 8.225a1.193 1.193 0 0 0-1.158.05c-.359.225-.567.6-.567 1.017v4.591c0 .792.442 1.509 1.15 1.867l4.858 2.433a1.194 1.194 0 0 0 1.159-.05c.358-.216.566-.6.566-1.016v-4.592a2.045 2.045 0 0 0-1.141-1.867ZM17.766 8.275a1.174 1.174 0 0 0-1.158-.05l-4.858 2.433a2.076 2.076 0 0 0-1.15 1.867v4.592c0 .416.208.8.566 1.016a1.2 1.2 0 0 0 1.159.05l4.858-2.433a2.076 2.076 0 0 0 1.15-1.867V9.292c0-.417-.208-.792-.567-1.017Z"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">3D Verse</span>
                    <span className="font-[600] text-sm hidden lg:inline-block text-black/50 dark:text-white/50">
                      Explore our 3D Modeling solutions
                    </span>
                  </span>
                </a>
                <a
                  id="vWvIMuGFmh"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                  href="https://modelslab.com/video-fusion"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#E9EFFF] group-hover:text-video-fusion bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                      focusable="false"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM15.192 14.076L13.656 14.964L12.12 15.852C10.14 16.992 8.52 16.056 8.52 13.776V12V10.224C8.52 7.932 10.14 7.008 12.12 8.148L13.656 9.036L15.192 9.924C17.172 11.064 17.172 12.936 15.192 14.076Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Video Fusion</span>
                    <span className="font-[600] text-sm hidden lg:inline-block text-black/50 dark:text-white/50">
                      Create captivating videos effortlessly
                    </span>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://modelslab.com/llm-api"
                  id="jJFszEJaJE"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                >
                  <span className="w-10 h-10 items-center flex justify-center  group-hover:bg-[#DCB000]/10 group-hover:text-[#DCB000] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
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
                        d="M21.1609 12.7301C20.7909 12.7301 20.4809 12.4501 20.4409 12.0801C20.2009 9.88007 19.0209 7.90007 17.2009 6.64007C16.8709 6.41007 16.7909 5.96007 17.0209 5.63007C17.2509 5.30007 17.7009 5.22007 18.0309 5.45007C20.2009 6.96007 21.6009 9.32007 21.8909 11.9301C21.9309 12.3301 21.6409 12.6901 21.2409 12.7301C21.2109 12.7301 21.1909 12.7301 21.1609 12.7301Z"
                        fill="currentColor"
                      />
                      <path
                        d="M4.54107 12.78C4.52107 12.78 4.49107 12.78 4.47107 12.78C4.07107 12.74 3.78107 12.38 3.82107 11.98C4.09107 9.36996 5.47107 7.00996 7.62107 5.48996C7.94107 5.25996 8.40107 5.33996 8.63107 5.65996C8.86107 5.98996 8.78107 6.43996 8.46107 6.66996C6.66107 7.94996 5.49107 9.92996 5.27107 12.12C5.23107 12.5 4.91107 12.78 4.54107 12.78Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.7904 21.1001C15.5604 21.6901 14.2404 21.9901 12.8604 21.9901C11.4204 21.9901 10.0504 21.6701 8.77039 21.0201C8.41039 20.8501 8.27039 20.4101 8.45039 20.0501C8.62039 19.6901 9.06039 19.5501 9.42039 19.7201C10.0504 20.0401 10.7204 20.2601 11.4004 20.3901C12.3204 20.5701 13.2604 20.5801 14.1804 20.4201C14.8604 20.3001 15.5304 20.0901 16.1504 19.7901C16.5204 19.6201 16.9604 19.7601 17.1204 20.1301C17.3004 20.4901 17.1604 20.9301 16.7904 21.1001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.8513 2.01001C11.3013 2.01001 10.0312 3.27001 10.0312 4.83001C10.0312 6.39001 11.2913 7.65001 12.8513 7.65001C14.4113 7.65001 15.6713 6.39001 15.6713 4.83001C15.6713 3.27001 14.4113 2.01001 12.8513 2.01001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.85125 13.8701C4.30125 13.8701 3.03125 15.1301 3.03125 16.6901C3.03125 18.2501 4.29125 19.5101 5.85125 19.5101C7.41125 19.5101 8.67125 18.2501 8.67125 16.6901C8.67125 15.1301 7.40125 13.8701 5.85125 13.8701Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.7507 13.8701C18.2007 13.8701 16.9307 15.1301 16.9307 16.6901C16.9307 18.2501 18.1907 19.5101 19.7507 19.5101C21.3107 19.5101 22.5707 18.2501 22.5707 16.6901C22.5707 15.1301 21.3107 13.8701 19.7507 13.8701Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">LLMaster</span>
                    <span className="font-[600] hidden lg:inline-block text-sm text-black/50 dark:text-white/50">
                      Enhance your operations with the LLM
                    </span>
                  </span>
                </a>
                <a
                  href="https://modelslab.com/train-model"
                  target="_blank"
                  className="inline-flex group items-center justify-start dark:hover:bg-[#242424] gap-2 hover:bg-[#F9F9F9] p-2 hover: rounded-[20px] border border-transparent dark:hover:border-[#242424] hover:border-[#EFF0F6]"
                >
                  <span className="w-10 h-10 items-center flex justify-center dark:group-hover:bg-[#000E34] group-hover:bg-[#00BCD1]/10  group-hover:text-[#00BCD1] bg-[#EFF0F6] dark:bg-[#242424] rounded-[10px] p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M14.394 4.6c-1.368 0-3 .52-3 3v4.8c0 2.48 1.632 3 3 3s3-.52 3-3V7.6c0-2.48-1.632-3-3-3ZM6.106 4.6c-1.368 0-3 .52-3 3v4.8c0 2.48 1.632 3 3 3s3-.52 3-3V7.6c0-2.48-1.632-3-3-3ZM11.394 9.4H9.106v1.2h2.288V9.4ZM18.65 12.6a.604.604 0 0 1-.6-.6V8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v4c0 .328-.272.6-.6.6ZM1.85 12.6a.604.604 0 0 1-.6-.6V8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v4c0 .328-.272.6-.6.6Z"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-[600] text-base">Train Master</span>
                    <span className="font-[600] hidden lg:block text-sm text-black/50 dark:text-white/50">
                      Train easily with Train Master
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourcesMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col rounded-md text-black dark:text-white">
      <button
        type="button"
        className="w-full flex min-w-max justify-start focus:outline-none px-2 py-1.5 items-center"
        data-rac=""
        onClick={onClose}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="w-4 h-4 rotate-90 duration-700"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
        <span>Back</span>
      </button>
      <div>
        <div className="w-full text-black">
          <div className="w-full text-black">
            <h2 className="px-2 text-[14px] dark:text-white font-[600] text-opacity-50">
              Services
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/terms-of-service"
                >
                  <span>Ticket</span>
                </a>
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/refund-policy"
                >
                  <span>Support</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full text-black ">
            <h2 className="text-[14px] font-[600] px-2 dark:text-white  text-opacity-50">
              Education
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  href="https://modelslab.com/terms-of-service"
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Api Documentation</span>
                </a>
                <a
                  href="https://modelslab.com/blog"
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Blog</span>
                </a>
                <a
                  href="https://docs.modelslab.com/"
                  className="w-full flex min-w-max cursor-not-allowed justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Learn</span>
                </a>
                <a
                  href="https://modelslab.canny.io/changelog"
                  className="w-full flex min-w-max cursor-not-allowed justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                >
                  <span>Changelog</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full text-black">
            <h2 className="text-[14px] px-2 dark:text-white font-[600] text-opacity-50">
              Community
            </h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-6  overflow-y-auto">
              <div className="w-full dark:text-white font-[600] text-[16px]">
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/feeds"
                >
                  <span>Feed</span>
                </a>
                <a
                  className="w-full flex min-w-max justify-start focus:bg-[#E5E7EB] dark:focus:bg-[#E5E7EB]/10 rounded-xl focus:outline-none px-4 py-2.5 items-center "
                  href="https://modelslab.com/showcase"
                >
                  <span>Show Case</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;