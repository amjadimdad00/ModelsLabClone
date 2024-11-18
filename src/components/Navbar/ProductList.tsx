import React from "react";

const ProductList = ({ productMenu }: { productMenu: boolean }) => {
  const card = [
    {
      icon: "imagen",
      title: "Imagen",
      desc: "AI Image Generation And Tools",
      md: "hidden",
    },
    {
      icon: "audiogen",
      title: "Audio Gen",
      desc: "Work with audio using audio gen",
      md: "hidden",
    },
    {
      icon: "3dverse",
      title: "3D Verse",
      desc: "Explore our 3D Modeling solutions",
      md: "flex",
    },
    {
      icon: "videofusion",
      title: "Video Fusion",
      desc: "Create captivating videos effortlessly",
      md: "flex",
    },
    {
      icon: "llmaster",
      title: "LLMaster",
      desc: "Enhance your operations with the LLM",
      md: "flex",
    },
    {
      icon: "trainmaster",
      title: "Train Master",
      desc: "Train easily with Train Master",
      md: "hidden",
    },
  ];
  return (
    <div
      className={`${
        productMenu ? "grid" : "hidden"
      } grid grid-cols-3 gap-6 px-5 border border-gray-600 rounded-2xl py-5 w-fit absolute max-md:hidden md:top-36 md:left-3 lg:top-16 lg:left-3 xl:top-[4.75rem] xl:left-[11.7rem] dark:bg-[#111827] bg-white`}
    >
      {card.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex group gap-2 items-center rounded-md dark:hover:bg-[#191919] p-2 cursor-pointer"
          >
            {item.icon === "imagen" ? (
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
            ) : item.icon === "audiogen" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E0E9F8] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                  focusable="false"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    className="dark:text-white text-black group-hover:text-[#4C00E1]"
                    d="M17.9993 16.7491C17.8393 16.7491 17.6893 16.6991 17.5493 16.5991C17.2193 16.3491 17.1493 15.8791 17.3993 15.5491C18.9692 13.4592 18.9692 10.5394 17.3993 8.44948C17.1493 8.1195 17.2193 7.64952 17.5493 7.39953C17.8793 7.14955 18.3492 7.21954 18.5992 7.54953C20.5591 10.1694 20.5591 13.8292 18.5992 16.4491C18.4492 16.6491 18.2292 16.7491 17.9993 16.7491Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#4C00E1]"
                    d="M19.8293 19.2491C19.6693 19.2491 19.5194 19.1991 19.3794 19.0991C19.0494 18.8491 18.9794 18.3791 19.2294 18.0491C21.8992 14.4893 21.8992 9.50955 19.2294 5.94973C18.9794 5.61974 19.0494 5.14977 19.3794 4.89978C19.7093 4.64979 20.1793 4.71979 20.4293 5.04977C23.4992 9.13957 23.4992 14.8593 20.4293 18.9491C20.2893 19.1491 20.0593 19.2491 19.8293 19.2491Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#4C00E1]"
                    d="M14.0194 3.77995C12.8994 3.15998 11.4695 3.31997 10.0096 4.22993L7.08972 6.05984C6.88972 6.17983 6.65974 6.24983 6.42975 6.24983H5.49979H4.99982C2.57993 6.24983 1.25 7.57976 1.25 9.99965V13.9995C1.25 16.4193 2.57993 17.7493 4.99982 17.7493H5.49979H6.42975C6.65974 17.7493 6.88972 17.8193 7.08972 17.9393L10.0096 19.7692C10.8895 20.3191 11.7495 20.5891 12.5494 20.5891C13.0694 20.5891 13.5694 20.4691 14.0194 20.2191C15.1293 19.5992 15.7493 18.3092 15.7493 16.5893V7.40977C15.7493 5.68986 15.1293 4.39992 14.0194 3.77995Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            ) : item.icon === "3dverse" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#F7E0E0] dark:group-hover:bg-[#372020] dark:bg-[#242424] rounded-[10px] p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    className="dark:text-white text-black group-hover:text-[#DE0004]"
                    fill="currentColor"
                    d="m16.109 4.733-5.225-2.816c-.55-.3-1.217-.3-1.767 0L3.892 4.733A1.193 1.193 0 0 0 3.275 5.8c0 .45.234.858.617 1.067l5.225 2.816a1.856 1.856 0 0 0 1.767 0l5.225-2.816c.383-.209.616-.609.616-1.067 0-.458-.233-.858-.616-1.067ZM8.259 10.658 3.392 8.225a1.193 1.193 0 0 0-1.158.05c-.359.225-.567.6-.567 1.017v4.591c0 .792.442 1.509 1.15 1.867l4.858 2.433a1.194 1.194 0 0 0 1.159-.05c.358-.216.566-.6.566-1.016v-4.592a2.045 2.045 0 0 0-1.141-1.867ZM17.766 8.275a1.174 1.174 0 0 0-1.158-.05l-4.858 2.433a2.076 2.076 0 0 0-1.15 1.867v4.592c0 .416.208.8.566 1.016a1.2 1.2 0 0 0 1.159.05l4.858-2.433a2.076 2.076 0 0 0 1.15-1.867V9.292c0-.417-.208-.792-.567-1.017Z"
                  ></path>
                </svg>
              </span>
            ) : item.icon === "videofusion" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E9EFFF] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                  focusable="false"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    className="dark:text-white text-black group-hover:text-[#00D1AF]"
                    d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM15.192 14.076L13.656 14.964L12.12 15.852C10.14 16.992 8.52 16.056 8.52 13.776V12V10.224C8.52 7.932 10.14 7.008 12.12 8.148L13.656 9.036L15.192 9.924C17.172 11.064 17.172 12.936 15.192 14.076Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            ) : item.icon === "llmaster" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#F6F2E0] dark:group-hover:bg-[#363220] dark:bg-[#242424] rounded-[10px] p-1.5">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM"
                  focusable="false"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M21.1609 12.7301C20.7909 12.7301 20.4809 12.4501 20.4409 12.0801C20.2009 9.88007 19.0209 7.90007 17.2009 6.64007C16.8709 6.41007 16.7909 5.96007 17.0209 5.63007C17.2509 5.30007 17.7009 5.22007 18.0309 5.45007C20.2009 6.96007 21.6009 9.32007 21.8909 11.9301C21.9309 12.3301 21.6409 12.6901 21.2409 12.7301C21.2109 12.7301 21.1909 12.7301 21.1609 12.7301Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M4.54107 12.78C4.52107 12.78 4.49107 12.78 4.47107 12.78C4.07107 12.74 3.78107 12.38 3.82107 11.98C4.09107 9.36996 5.47107 7.00996 7.62107 5.48996C7.94107 5.25996 8.40107 5.33996 8.63107 5.65996C8.86107 5.98996 8.78107 6.43996 8.46107 6.66996C6.66107 7.94996 5.49107 9.92996 5.27107 12.12C5.23107 12.5 4.91107 12.78 4.54107 12.78Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M16.7904 21.1001C15.5604 21.6901 14.2404 21.9901 12.8604 21.9901C11.4204 21.9901 10.0504 21.6701 8.77039 21.0201C8.41039 20.8501 8.27039 20.4101 8.45039 20.0501C8.62039 19.6901 9.06039 19.5501 9.42039 19.7201C10.0504 20.0401 10.7204 20.2601 11.4004 20.3901C12.3204 20.5701 13.2604 20.5801 14.1804 20.4201C14.8604 20.3001 15.5304 20.0901 16.1504 19.7901C16.5204 19.6201 16.9604 19.7601 17.1204 20.1301C17.3004 20.4901 17.1604 20.9301 16.7904 21.1001Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M12.8513 2.01001C11.3013 2.01001 10.0312 3.27001 10.0312 4.83001C10.0312 6.39001 11.2913 7.65001 12.8513 7.65001C14.4113 7.65001 15.6713 6.39001 15.6713 4.83001C15.6713 3.27001 14.4113 2.01001 12.8513 2.01001Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M5.85125 13.8701C4.30125 13.8701 3.03125 15.1301 3.03125 16.6901C3.03125 18.2501 4.29125 19.5101 5.85125 19.5101C7.41125 19.5101 8.67125 18.2501 8.67125 16.6901C8.67125 15.1301 7.40125 13.8701 5.85125 13.8701Z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="dark:text-white text-black group-hover:text-[#DCB000]"
                    d="M19.7507 13.8701C18.2007 13.8701 16.9307 15.1301 16.9307 16.6901C16.9307 18.2501 18.1907 19.5101 19.7507 19.5101C21.3107 19.5101 22.5707 18.2501 22.5707 16.6901C22.5707 15.1301 21.3107 13.8701 19.7507 13.8701Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            ) : item.icon === "trainmaster" ? (
              <span className="w-10 h-10 items-center flex justify-center group-hover:bg-[#E0F3F5] dark:group-hover:bg-[#000E34] dark:bg-[#242424] rounded-[10px] p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    className="dark:text-white text-black group-hover:text-[#00BCD1]"
                    fill="currentColor"
                    d="M14.394 4.6c-1.368 0-3 .52-3 3v4.8c0 2.48 1.632 3 3 3s3-.52 3-3V7.6c0-2.48-1.632-3-3-3ZM6.106 4.6c-1.368 0-3 .52-3 3v4.8c0 2.48 1.632 3 3 3s3-.52 3-3V7.6c0-2.48-1.632-3-3-3ZM11.394 9.4H9.106v1.2h2.288V9.4ZM18.65 12.6a.604.604 0 0 1-.6-.6V8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v4c0 .328-.272.6-.6.6ZM1.85 12.6a.604.604 0 0 1-.6-.6V8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v4c0 .328-.272.6-.6.6Z"
                  ></path>
                </svg>
              </span>
            ) : (
              ""
            )}
            <div>
              <h1 className="text-black dark:text-white font-semibold">
                {item.title}
              </h1>
              <p
                className={`font-[600] text-sm text-black/50 dark:text-white/50 max-md:hidden flex max-lg:${
                  item.md === "hidden" ? "hidden" : "flex"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
