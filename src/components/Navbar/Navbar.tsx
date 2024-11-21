import { useTheme } from "next-themes";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ResourcesList from "./ResourcesList";
import ProductList from "./ProductList";
import MobileNav from "./MobileNav";
import Dialog from "./Dialog";

// SVG Icons
import SunIcon from "../Svg/DarkLight/sun.svg";
import MoonIcon from "../Svg/DarkLight/moon.svg";
import DiscordIcon from "../Svg/Social/discord.svg";
import UpArrow from "../Svg/Arrows/uparrow.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [resourcesMenu, setResourcesMenu] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full bg-white/50 dark:bg-[#111827] backdrop-blur sticky top-0 z-10">
      <nav className="w-full flex md:flex-wrap gap-1 sm:gap-4 md:gap-8 items-center container mx-auto justify-between px-4 md:px-8 py-4">
        <div className="flex items-center justify-start gap-6">
          <a className="flex items-center">
            <svg
              fill="none"
              height={20}
              width={112}
              viewBox="0 0 112 20"
              xmlns="http://www.w3.org/2000/svg"
              className="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeM inline-block h-[20px] dark:text-white text-black"
              focusable="false"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M72.3793 7.31467L69.3768 7.49945C69.3254 7.24282 69.2151 7.01185 69.0457 6.80655C68.8763 6.59611 68.6531 6.4293 68.3759 6.30612C68.1039 6.1778 67.7779 6.11364 67.3981 6.11364C66.89 6.11364 66.4614 6.22143 66.1124 6.437C65.7634 6.64743 65.5889 6.92973 65.5889 7.28388C65.5889 7.56617 65.7018 7.80484 65.9276 7.99988C66.1535 8.19492 66.541 8.35146 67.0902 8.46951L69.2305 8.90065C70.3802 9.13675 71.2373 9.51656 71.8019 10.0401C72.3665 10.5636 72.6488 11.2514 72.6488 12.1034C72.6488 12.8784 72.4204 13.5585 71.9636 14.1436C71.5119 14.7287 70.8909 15.1855 70.1005 15.514C69.3152 15.8374 68.4093 15.999 67.3827 15.999C65.8173 15.999 64.5701 15.6731 63.6411 15.0213C62.7172 14.3643 62.1757 13.4712 62.0166 12.3421L65.2424 12.1727C65.34 12.65 65.5761 13.0144 65.9507 13.2659C66.3254 13.5123 66.8053 13.6355 67.3904 13.6355C67.9653 13.6355 68.4272 13.5251 68.7762 13.3044C69.1304 13.0786 69.31 12.7886 69.3152 12.4344C69.31 12.1368 69.1843 11.893 68.9379 11.7031C68.6916 11.508 68.3117 11.3592 67.7985 11.2565L65.7506 10.8485C64.5957 10.6175 63.736 10.2172 63.1714 9.64744C62.612 9.07772 62.3323 8.35146 62.3323 7.46865C62.3323 6.70903 62.5376 6.05462 62.9482 5.50543C63.3639 4.95624 63.9465 4.5328 64.6958 4.23511C65.4503 3.93742 66.3331 3.78857 67.3442 3.78857C68.8378 3.78857 70.0132 4.10423 70.8703 4.73554C71.7326 5.36685 72.2356 6.22656 72.3793 7.31467Z"
                fill="currentColor"
              />
              <path
                d="M60.5629 0.000976563V15.7683H57.2832V0.000976562L60.5629 0.000976563Z"
                fill="currentColor"
              />
              <path
                d="M50.3656 15.999C49.1492 15.999 48.1021 15.7527 47.2244 15.2599C46.3519 14.7621 45.6795 14.0589 45.2073 13.1504C44.7351 12.2368 44.499 11.1564 44.499 9.9092C44.499 8.69278 44.7351 7.6252 45.2073 6.70646C45.6795 5.78772 46.3442 5.07172 47.2013 4.55846C48.0636 4.0452 49.0747 3.78857 50.2347 3.78857C51.0149 3.78857 51.7411 3.91432 52.4135 4.16582C53.091 4.41219 53.6813 4.7843 54.1842 5.28216C54.6924 5.78002 55.0876 6.4062 55.3699 7.16069C55.6522 7.91006 55.7933 8.78773 55.7933 9.79372V10.6945L45.8078 10.6945V8.66198H52.7061C52.7061 8.18978 52.6034 7.77148 52.3981 7.40706C52.1928 7.04265 51.9079 6.75779 51.5435 6.55248C51.1842 6.34204 50.7659 6.23683 50.2886 6.23683C49.7907 6.23683 49.3493 6.35231 48.9644 6.58328C48.5846 6.80911 48.2869 7.1145 48.0713 7.49945C47.8557 7.87926 47.7454 8.3027 47.7403 8.76977V10.7022C47.7403 11.2873 47.848 11.7929 48.0636 12.2189C48.2843 12.6449 48.5948 12.9734 48.9952 13.2043C49.3955 13.4353 49.8703 13.5508 50.4195 13.5508C50.7839 13.5508 51.1175 13.4995 51.4203 13.3968C51.7232 13.2942 51.9824 13.1402 52.1979 12.9349C52.4135 12.7296 52.5777 12.4781 52.6907 12.1804L55.724 12.3806C55.5701 13.1094 55.2544 13.7458 54.7771 14.2899C54.3049 14.8288 53.6941 15.2497 52.9447 15.5525C52.2005 15.8502 51.3408 15.999 50.3656 15.999Z"
                fill="currentColor"
              />
              <path
                d="M36.2017 15.9608C35.3035 15.9608 34.49 15.7298 33.7611 15.2679C33.0374 14.8008 32.4626 14.1156 32.0366 13.2123C31.6157 12.3038 31.4053 11.1901 31.4053 9.87098C31.4053 8.51597 31.6234 7.38936 32.0597 6.49116C32.496 5.58782 33.0759 4.91288 33.7996 4.46634C34.5285 4.01467 35.3266 3.78884 36.194 3.78884C36.8561 3.78884 37.4079 3.90176 37.8493 4.12759C38.2958 4.34829 38.6551 4.62545 38.9271 4.95907C39.2043 5.28756 39.4147 5.61091 39.5584 5.92913H39.6585V0.000976563L42.9305 0.000976563V15.7683H39.697V13.8744H39.5584C39.4044 14.2029 39.1863 14.5288 38.904 14.8522C38.6269 15.1704 38.265 15.4347 37.8185 15.6452C37.3771 15.8556 36.8381 15.9608 36.2017 15.9608ZM37.241 13.3509C37.7697 13.3509 38.2162 13.2072 38.5807 12.9197C38.9502 12.6272 39.2325 12.2191 39.4275 11.6956C39.6277 11.1721 39.7278 10.5587 39.7278 9.85558C39.7278 9.15241 39.6303 8.54163 39.4352 8.02324C39.2402 7.50484 38.9579 7.1045 38.5884 6.82221C38.2188 6.53992 37.7697 6.39877 37.241 6.39877C36.7021 6.39877 36.2479 6.54505 35.8783 6.83761C35.5088 7.13016 35.2291 7.53564 35.0392 8.05403C34.8493 8.57243 34.7543 9.17294 34.7543 9.85558C34.7543 10.5433 34.8493 11.1516 35.0392 11.6802C35.2342 12.2037 35.5139 12.6144 35.8783 12.912C36.2479 13.2046 36.7021 13.3509 37.241 13.3509Z"
                fill="currentColor"
              />
              <path
                d="M24.5411 15.999C23.3452 15.999 22.311 15.745 21.4384 15.2368C20.571 14.7236 19.9012 14.0102 19.429 13.0966C18.9568 12.1778 18.7207 11.1128 18.7207 9.90151C18.7207 8.67995 18.9568 7.61236 19.429 6.69876C19.9012 5.78002 20.571 5.06659 21.4384 4.55846C22.311 4.0452 23.3452 3.78857 24.5411 3.78857C25.737 3.78857 26.7686 4.0452 27.636 4.55846C28.5086 5.06659 29.181 5.78002 29.6532 6.69876C30.1254 7.61236 30.3615 8.67995 30.3615 9.90151C30.3615 11.1128 30.1254 12.1778 29.6532 13.0966C29.181 14.0102 28.5086 14.7236 27.636 15.2368C26.7686 15.745 25.737 15.999 24.5411 15.999ZM24.5565 13.4584C25.1005 13.4584 25.5548 13.3044 25.9192 12.9965C26.2836 12.6834 26.5582 12.2574 26.743 11.7184C26.9329 11.1795 27.0278 10.5662 27.0278 9.87841C27.0278 9.19064 26.9329 8.57729 26.743 8.03837C26.5582 7.49945 26.2836 7.07344 25.9192 6.76035C25.5548 6.44726 25.1005 6.29072 24.5565 6.29072C24.0073 6.29072 23.5454 6.44726 23.1707 6.76035C22.8011 7.07344 22.5214 7.49945 22.3315 8.03837C22.1467 8.57729 22.0543 9.19064 22.0543 9.87841C22.0543 10.5662 22.1467 11.1795 22.3315 11.7184C22.5214 12.2574 22.8011 12.6834 23.1707 12.9965C23.5454 13.3044 24.0073 13.4584 24.5565 13.4584Z"
                fill="currentColor"
              />
              <path
                d="M0.0722656 0.000976562L4.18348 0.000976563L8.52567 10.5947H8.71044L13.0526 0.000976563L17.1638 0.000976563L17.1638 15.7683L13.9303 15.7683L13.9303 5.50569L13.7994 5.50569L9.719 15.6913H7.51711L3.43669 5.4672H3.30581L3.30581 15.7683H0.0722656L0.0722656 0.000976562Z"
                fill="currentColor"
              />
              <path
                d="M99.5391 15.7683V0.000976562H102.819V5.92913H102.919C103.063 5.61091 103.27 5.28756 103.542 4.95907C103.82 4.62545 104.179 4.34829 104.62 4.12759C105.067 3.90176 105.621 3.78884 106.283 3.78884C107.146 3.78884 107.941 4.01467 108.67 4.46634C109.399 4.91288 109.981 5.58782 110.418 6.49116C110.854 7.38936 111.072 8.51597 111.072 9.87098C111.072 11.1901 110.859 12.3038 110.433 13.2123C110.012 14.1156 109.437 14.8008 108.708 15.2679C107.985 15.7298 107.174 15.9608 106.276 15.9608C105.639 15.9608 105.098 15.8556 104.651 15.6452C104.21 15.4347 103.848 15.1704 103.566 14.8522C103.283 14.5288 103.068 14.2029 102.919 13.8744H102.773V15.7683H99.5391ZM102.75 9.85558C102.75 10.5587 102.847 11.1721 103.042 11.6956C103.237 12.2191 103.519 12.6272 103.889 12.9197C104.258 13.2072 104.708 13.3509 105.236 13.3509C105.77 13.3509 106.222 13.2046 106.591 12.912C106.961 12.6144 107.241 12.2037 107.43 11.6802C107.625 11.1516 107.723 10.5433 107.723 9.85558C107.723 9.17294 107.628 8.57243 107.438 8.05403C107.248 7.53564 106.969 7.13016 106.599 6.83761C106.229 6.54505 105.775 6.39877 105.236 6.39877C104.702 6.39877 104.251 6.53992 103.881 6.82221C103.517 7.1045 103.237 7.50484 103.042 8.02324C102.847 8.54163 102.75 9.15241 102.75 9.85558Z"
                fill="#005CF0"
              />
              <path
                d="M90.2731 15.9913C89.5186 15.9913 88.8463 15.8605 88.256 15.5987C87.6658 15.3318 87.1987 14.9392 86.8548 14.4208C86.5161 13.8972 86.3467 13.2454 86.3467 12.4652C86.3467 11.8083 86.4673 11.2565 86.7085 10.81C86.9498 10.3634 87.2782 10.0042 87.694 9.73213C88.1097 9.4601 88.5819 9.2548 89.1106 9.11622C89.6444 8.97764 90.2038 8.88012 90.7889 8.82366C91.4767 8.7518 92.031 8.68508 92.4519 8.62349C92.8728 8.55676 93.1782 8.45924 93.3681 8.33093C93.558 8.20261 93.6529 8.01271 93.6529 7.76121V7.71502C93.6529 7.22742 93.499 6.85017 93.191 6.58328C92.8882 6.31638 92.457 6.18293 91.8976 6.18293C91.3073 6.18293 90.8377 6.31381 90.4887 6.57558C90.1397 6.83221 89.9087 7.15556 89.7958 7.54564L86.7624 7.29928C86.9164 6.58071 87.2192 5.95967 87.6709 5.43614C88.1226 4.90748 88.7051 4.502 89.4185 4.21971C90.1371 3.93229 90.9686 3.78857 91.913 3.78857C92.57 3.78857 93.1987 3.86556 93.7992 4.01954C94.4049 4.17352 94.9412 4.41218 95.4083 4.73554C95.8805 5.05889 96.2526 5.47463 96.5246 5.98276C96.7967 6.48576 96.9327 7.08884 96.9327 7.792V15.7681H93.8223V14.1282H93.7299C93.54 14.4978 93.286 14.8237 92.9677 15.106C92.6495 15.3831 92.2671 15.6013 91.8206 15.7604C91.3741 15.9144 90.8582 15.9913 90.2731 15.9913ZM91.2124 13.7279C91.6949 13.7279 92.1209 13.6329 92.4904 13.443C92.86 13.248 93.1499 12.9862 93.3604 12.6577C93.5708 12.3292 93.676 11.9571 93.676 11.5414V10.2865C93.5734 10.3532 93.4322 10.4148 93.2526 10.4712C93.0781 10.5226 92.8805 10.5713 92.6598 10.6175C92.4391 10.6586 92.2184 10.6971 91.9977 10.733C91.777 10.7638 91.5768 10.792 91.3972 10.8177C91.0122 10.8741 90.676 10.964 90.3886 11.0871C90.1012 11.2103 89.8779 11.3771 89.7188 11.5876C89.5597 11.7929 89.4801 12.0495 89.4801 12.3575C89.4801 12.804 89.6418 13.1453 89.9652 13.3814C90.2937 13.6124 90.7094 13.7279 91.2124 13.7279Z"
                fill="#005CF0"
              />
              <path
                d="M74.6621 15.7683V0.000976562H77.9957V13.0198H84.7554V15.7683H74.6621Z"
                fill="#005CF0"
              />
            </svg>
          </a>
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          type="button"
          aria-expanded="false"
          id="react-aria1507398811-:r1:"
          className="focus:outline-none mr-2 order-first group md:hidden data-[pressed]:outline-none"
          data-rac=""
        >
          {openMenu ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="w-8 h-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="w-8 h-8 block group-aria-expanded:hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336M88 256h336M88 360h336"
              />
            </svg>
          )}
        </button>

        {/* Nav List */}
        <div className="flex items-center min-w-max justify-center lg:w-fit md:order-last lg:order-none grow lg:justify-start gap-8">
          {/* Product Menu Btn */}
          <div className="md:flex items-center justify-start hidden">
            <button
              type="button"
              aria-expanded="false"
              id="react-aria1507398811-:r3:"
              className="focus:border-none group dark:text-white text-[#005CF0] font-[500] text-sm focus:outline-none flex items-center gap-2"
              data-rac=""
              onClick={() => {
                setProductMenu(!productMenu);
                setResourcesMenu(false);
              }}
            >
              <span>Product</span>
              <UpArrow
                className={`w-4 h-4 duration-700 ${
                  productMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {/* Resources Menu Btn */}
          <div className="md:flex items-center justify-start hidden">
            <button
              type="button"
              id="react-aria1507398811-:r5:"
              className="focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none flex items-center gap-2 hover:text-[#005CF0]"
              data-rac=""
              onClick={() => {
                setResourcesMenu(!resourcesMenu);
                setProductMenu(false);
              }}
            >
              <span>Resources</span>
              <UpArrow
                className={`w-4 h-4 duration-700 ${
                  resourcesMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <a
            className="hidden md:flex focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none items-center gap-2 hover:text-[#005CF0]"
            href="https://modelslab.com/models"
          >
            <span className="max-w-min whitespace-nowrap">Models</span>
          </a>
          <a
            className="hidden md:flex focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none items-center gap-2 hover:text-[#005CF0]"
            href="https://modelslab.com/pricing"
          >
            <span className="max-w-min whitespace-nowrap">Pricing</span>
          </a>
          <a
            className="hidden md:flex focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none items-center gap-2 hover:text-[#005CF0]"
            href="https://modelslab.com/enterprise"
          >
            <span className="max-w-min whitespace-nowrap">Enterprise</span>
          </a>
          <a
            target="_blank"
            className="hidden md:flex focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none items-center gap-2 hover:text-[#005CF0]"
            href="https://modelslab.com/developers"
          >
            <span className="max-w-min whitespace-nowrap">For Developers</span>
          </a>
          <a
            href="https://docs.modelslab.com"
            target="_blank"
            className="hidden md:flex focus:border-none group dark:text-white text-gray-700 font-[500] text-sm focus:outline-none items-center gap-2 hover:text-[#005CF0]"
          >
            <span className="max-w-min whitespace-nowrap">API Docs</span>
          </a>
        </div>

        {openMenu &&
          createPortal(
            <Dialog onClose={() => setOpenMenu(false)}>
              <section
                role="dialog"
                tabIndex={-1}
                className="fixed w-full max-w-[90vw] overflow-hidden focus:outline-none left-5 right-10 top-16 z-10 bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#E5E7EB]/70 rounded-xl p-2 mt-2"
              >
                <MobileNav />
              </section>
            </Dialog>,
            document.body
          )}

        {/* Accessibility */}
        <div className="flex items-center justify-end gap-2">
          {/* Dark & Light Mode Toggle */}
          <button
            type="button"
            className="block focus:outline-none"
            data-rac=""
            id="react-aria3852071988-:rc:"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <SunIcon className="w-6 h-6 dark:block hidden" />
            <MoonIcon className="w-6 h-6 block dark:hidden" />
          </button>

          {/* Discord */}
          <a
            className="focus:outline-none cursor-pointer min-w-max min-h-10 text-white rounded-[8px] text-center items-center justify-center gap-2 hover:bg-opacity-85 dark:hover:bg-opacity-85 data-[variant=outline]:border data-[variant=outline]:border-[#E5E7EB] data-[variant=outline]:bg-transparent data-[variant=outline]:hover:bg-[#005CF0]/10 data-[variant=outline]:hover:border-transparent data-[variant=outline]:hover:text-[#005CF0] data-[variant=outline]:text-black dark:data-[variant=outline]:text-white dark:data-[variant=outline]:hover:text-[#005CF0] font-[400] text-[14px] leading-[21px] data-[variant=text]:bg-transparent data-[variant=text]:border-none data-[variant=text]:text-black data-[variant=text]:px-0 dark:data-[variant=text]:bg-transparent dark:data-[variant=text]:border-none dark:data-[variant=text]:text-white hidden md:flex px-[11px] bg-[#5865F2]"
            href="https://discord.gg/modelslab-1033301189254729748"
          >
            <DiscordIcon className="w-[17px] h-[12px]" />
          </a>

          {/* Book Call & Sign Up */}
          <a
            className="focus:outline-none cursor-pointer min-w-max min-h-10 bg-[#005CF0] text-white px-4 rounded-[8px] text-center items-center justify-center gap-2 hover:bg-opacity-85 dark:hover:bg-opacity-85 data-[variant=outline]:border data-[variant=outline]:border-[#E5E7EB] data-[variant=outline]:bg-transparent data-[variant=outline]:hover:bg-[#005CF0]/10 data-[variant=outline]:hover:border-transparent data-[variant=outline]:hover:text-[#005CF0] data-[variant=outline]:text-black dark:data-[variant=outline]:text-white dark:data-[variant=outline]:hover:text-[#005CF0] font-[400] text-[14px] leading-[21px] data-[variant=text]:bg-transparent data-[variant=text]:border-none data-[variant=text]:text-black data-[variant=text]:px-0 dark:data-[variant=text]:bg-transparent dark:data-[variant=text]:border-none dark:data-[variant=text]:text-white hidden md:flex"
            data-variant="outline"
            href="https://calendly.com/support-lael/30min?month=2024-11"
            target="_blank"
          >
            Book a Call
          </a>
          <a
            className="focus:outline-none cursor-pointer min-w-max min-h-10 bg-[#005CF0] text-white px-4 rounded-[8px] text-center flex items-center justify-center gap-2 hover:bg-opacity-85 dark:hover:bg-opacity-85 data-[variant=outline]:border data-[variant=outline]:border-[#E5E7EB] data-[variant=outline]:bg-transparent data-[variant=outline]:hover:bg-[#005CF0]/10 data-[variant=outline]:hover:border-transparent data-[variant=outline]:hover:text-[#005CF0] data-[variant=outline]:text-black dark:data-[variant=outline]:text-white dark:data-[variant=outline]:hover:text-[#005CF0] font-[400] text-[14px] leading-[21px] data-[variant=text]:bg-transparent data-[variant=text]:border-none data-[variant=text]:text-black data-[variant=text]:px-0 dark:data-[variant=text]:bg-transparent dark:data-[variant=text]:border-none dark:data-[variant=text]:text-white"
            data-variant="outline"
            href="https://modelslab.com/register"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Product Items */}
      <ProductList productMenu={productMenu} />

      {/* Resources Items */}
      <ResourcesList resourcesMenu={resourcesMenu} />
    </div>
  );
};

export default Navbar;
