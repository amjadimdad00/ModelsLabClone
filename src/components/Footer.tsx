// components/Footer.tsx

import React from "react";

// SVG Icon
import Heart from "./Svg/Others/heart.svg";
import EmailIcon from "./Svg/Others/email.svg";
import ModelsLabIcon from "./Svg/Others/modelslab.svg";

// Social SVG
import Discord from "./Svg/Social/discord.svg";
import Twitter from "./Svg/Social/Twitter.svg";
import Youtube from "./Svg/Social/Youtube.svg";
import Pinterest from "./Svg/Social/Pinterest.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-10  dark:bg-[#111827] border-t border-[#E5E7EB] dark:border-[#3E3E3E] justify-self-end flex flex-col">
      <div className="flex items-center justify-between container px-4 md:px-8 pb-5 mx-auto  gap-5 flex-wrap sm:flex-nowrap">
        <a href="https://modelslab.com/">
          <ModelsLabIcon />
        </a>
        <form className="flex items-center justify-end gap-4 w-full">
          <div
            className="border dark:bg-[#111827] dark:border-[#4B5563] text-lg rounded-lg flex px-4 py-3 items-center max-w-sm w-full gap-2 sm:flex-nowrap hover:border-[#BABABA] dark:hover:border-[#BABABA] focus:border-[#BABABA] dark:focus:border-[#BABABA]"
            data-rac=""
            data-required="true"
          >
            <label
              className="sr-only"
              id="react-aria5872310412-:rf:"
              htmlFor="react-aria5872310412-:re:"
            >
              Email
            </label>
            <span className="inline-block h-5 text-black/50 dark:text-white/50 aspect-square">
              <EmailIcon />
            </span>
            <input
              type="email"
              required
              name="name"
              placeholder="Enter your email to get the latest news..."
              id="react-aria5872310412-:re:"
              aria-label="Email"
              aria-labelledby="react-aria5872310412-:rf:"
              className="border-none bg-transparent text-base placeholder:text-base p-0 focus:outline-0 focus:ring-0 focus:outline-none focus:border-none w-full"
              data-rac=""
              defaultValue=""
              title=""
            />
          </div>
          <button
            type="submit"
            className="text-base px-4 py-3 rounded-lg bg-[#005CF0] text-white hover:bg-opacity-80 dark:hover:bg-opacity-80"
            data-rac=""
            id="react-aria5872310412-:rj:"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="py-5 flex items-start justify-between container px-4 md:px-8 mx-auto gap-8 flex-wrap border-t border-[#E5E7EB] dark:border-[#3E3E3E]">
        <div className="flex flex-col gap-5 w-full max-w-[200px]">
          <h4 className="font-[700] text-lg">Our Product</h4>
          <ul className="flex flex-col gap-2 text-base font-[500]">
            <li>
              <Link id="TlxCgjMcyz" href="/imagen">
                Imagen
              </Link>
            </li>
            <li>
              <a id="IaRKNSjFSM" href="https://modelslab.com/audio-gen">
                Audio Gen
              </a>
            </li>
            <li>
              <a
                href="https://modelslab.com/train-model"
                className="whitespace-nowrap"
              >
                Train Master
              </a>
            </li>
            <li>
              <a
                className="whitespace-nowrap"
                href="https://modelslab.com/video-fusion"
              >
                VideoFusion
              </a>
            </li>
            <li>
              <a
                className=" whitespace-nowrap"
                href="https://modelslab.com/3d-verse"
              >
                3D Verse
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://modelslab.com/llm-api"
                className="whitespace-nowrap"
              >
                LLM Master
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-full max-w-[200px]">
          <h4 className="font-[700] text-lg">Resources</h4>
          <ul className="flex flex-col gap-2 text-base font-[500]">
            <li>
              <a
                className="whitespace-nowrap"
                href="https://modelslab.com/models"
              >
                Models
              </a>
            </li>
            <li>
              <a
                href="https://imagen.playground.modelslab.com/"
                id="WxkToBVWic"
              >
                Playground
              </a>
            </li>
            <li>
              <a id="zmOLveKutv" href="https://modelslab.com/enterprise">
                Enterprise
              </a>
            </li>
            <li>
              <a href="https://docs.modelslab.com/" id="ZUkBbiKAdi">
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://support.modelslab.com/"
                id="ZSCDOSDXqX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create Ticket
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-full max-w-[200px]">
          <h4 className="font-[700] text-lg">About Us</h4>
          <ul className="flex flex-col gap-2 text-base font-[500]">
            <li>
              <a
                href="https://modelslab.com/support"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
            <li>
              <a id="ArnAooaHiI" href="https://modelslab.com/pricing">
                Pricing
              </a>
            </li>
            <li>
              <a id="SrFzPyzgvc" href="https://modelslab.com/blog">
                Blog
              </a>
            </li>
            <li>
              <a href="https://modelslab.canny.io/changelog" id="caLrKDbGRz">
                Changelog
              </a>
            </li>
            <li>
              <a
                target="_blank"
                id="kROvcOMSRl"
                rel="noopener noreferrer"
                href="https://modelslab.com/faq"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-full max-w-[200px]">
          <h4 className="font-[700] text-lg">Join Us</h4>
          <ul className="flex gap-2 text-base font-[500]">
            <li>
              <a
                href="https://www.youtube.com/@modelslab"
                id="TtZbgejnMl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/modelslab-1033301189254729748"
                id="jOvJFKOFQx"
                className=" bg-black items-end justify-center w-5 h-5"
              >
                <Discord className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.reddit.com/user/modelslabai/"
                id="kKtObpVXfv"
                className=" bg-black items-end justify-center w-5 h-5"
              >
                <Pinterest />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href=" https://twitter.com/ModelsLabAi"
                id="ZxlzGcTPGi"
                className=" bg-black items-end justify-center w-5 h-5"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-5 flex flex-wrap items-center justify-between container mx-auto px-5 gap-5 font-[400] border-t border-[#E5E7EB] dark:border-[#3E3E3E] text-[14px]">
        <p className="min-w-max sm:min-w-0 text-center w-full md:w-fit">
          ModelsLab @ 2024. All rights reserved.
        </p>
        <span className="flex items-center justify-center gap-2 w-full lg:w-fit  sm:order-last lg:order-none">
          <span>Made with</span>
          <span>
            <Heart />
          </span>
        </span>
        <div className="flex items-center order-1 sm:order-none flex-wrap min-w-max lg:min-w-0 font-[500] text-[16px] gap-4">
          <a href="https://modelslab.com/terms-of-service">Terms of use</a>
          <a href="https://modelslab.com/refund-policy">Refund Policy</a>
          <a href="https://modelslab.com/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
