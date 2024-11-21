import { useTheme } from "next-themes";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ResourcesList from "./ResourcesList";
import ProductList from "./ProductList";
import MobileNav from "./MobileNav";
import Dialog from "./Dialog";

// SVG Icons
import ModelsLabIcon from "../Svg/Others/modelslab.svg";
import SunIcon from "../Svg/DarkLight/sun.svg";
import MoonIcon from "../Svg/DarkLight/moon.svg";
import DiscordIcon from "../Svg/Social/discord.svg";
import UpArrow from "../Svg/Arrows/uparrow.svg";
import CloseIcon from "../Svg/Others/cross.svg";
import Hamburger from "../Svg/Others/hamburger.svg";

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
            <ModelsLabIcon />
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
            <CloseIcon className="w-8 h-8" />
          ) : (
            <Hamburger className="w-8 h-8 block group-aria-expanded:hidden" />
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
