import React from "react";
import RightArrowRounded from "../Svg/Arrows/rightarrowrounded.svg";

const Hero = () => {
  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "none" }}
    >
      <div className="w-full h-full bg-white/90 dark:bg-[#111827]/90">
        <div className="w-full py-10 container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 gap-4 place-content-stretch lg:grid-cols-2">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
              <h4 className="flex items-center justify-start gap-2">
                <span className="h-8 flex items-center text-white justify-center aspect-square rounded-[10px] bg-[#005CF0] p-1">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <span className="text-[#005CF0] font-semibold text-lg">
                  Imagen
                </span>
              </h4>
              <div className="w-fit flex items-center bg-[#E9EFFF] text-[#005CF0] px-2.5 py-1 rounded-full my-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  className="w-6 h-6 animate-pulse"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.37,16.18c0.65-0.03,1.2-0.28,1.65-0.75c0.45-0.47,0.68-1.03,0.68-1.68c0,0.65,0.22,1.21,0.67,1.68
	c0.45,0.47,1,0.72,1.65,0.75c-0.65,0.03-1.2,0.28-1.65,0.75c-0.45,0.47-0.67,1.03-0.67,1.68c0-0.65-0.22-1.21-0.68-1.68
	C6.57,16.46,6.02,16.21,5.37,16.18z M7.7,8.98c1.26-0.06,2.33-0.55,3.21-1.47c0.88-0.92,1.32-2.01,1.32-3.28
	c0,1.27,0.44,2.36,1.32,3.28s1.95,1.4,3.22,1.47c-0.83,0.04-1.59,0.27-2.29,0.71c-0.69,0.43-1.24,1.01-1.65,1.73
	c-0.4,0.72-0.6,1.49-0.6,2.33c0-1.27-0.44-2.37-1.32-3.29C10.03,9.53,8.96,9.04,7.7,8.98z M11.02,19.75
	c0.95-0.04,1.76-0.41,2.42-1.1c0.66-0.69,0.99-1.51,0.99-2.47c0,0.96,0.33,1.78,0.99,2.47c0.66,0.69,1.46,1.06,2.41,1.1
	c-0.95,0.04-1.75,0.41-2.41,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.99-2.47C12.77,20.16,11.97,19.8,11.02,19.75z
	 M17.83,15.01c0.95-0.04,1.75-0.41,2.41-1.1c0.66-0.69,0.98-1.51,0.98-2.48c0,0.96,0.33,1.78,0.99,2.47s1.47,1.06,2.42,1.1
	c-0.95,0.04-1.76,0.41-2.42,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.98-2.47C19.58,15.42,18.78,15.05,17.83,15.01z"
                  />
                </svg>
                <span>Flux is Live on ModelsLab</span>
              </div>
              <p className="font-[800] text-[32px] sm:text-[48px]">
                Create Stunning AI Images with
                <br />
                <span className="after:content-[''] relative after:absolute after:-bottom-1 after:h-4 after:w-full after:border-b-transparent after:border-l-0 after:border-r-0 after:border-t-4 after:left-0 after:border-t-[#005CF0] after:rounded-[50%]">
                  Stable Diffusion &amp; Flux
                </span>
              </p>
              <p className="text-[#00000080] text-base mt-2 dark:text-white/50">
                Turn your ideas into stunning visuals easily and boost your
                creative projects!
              </p>
              <div className="flex items-center justify-start mt-4 gap-2">
                <a
                  className="bg-[#005CF0] text-white font-[500] text-[14px] rounded-full px-5 py-3 flex items-center justify-center gap-2"
                  href="https://modelslab.com/register"
                >
                  <span className="max-w-min whitespace-nowrap">
                    Join 100K Developers
                  </span>
                  <RightArrowRounded className="bg-white rounded-full aspect-square h-4 text-[#005CF0] p-1" />
                </a>
                <button
                  type="button"
                  aria-expanded="false"
                  id="react-aria9032862083-:rf:"
                  className="bg-black text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2 focus:outline-none"
                  data-rac=""
                >
                  <span className="max-w-min whitespace-nowrap">
                    Watch Video
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-end">
              <img
                src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/27e19acc-caad-4436-aae4-4b95be949700/768"
                className="object-center animate-fade-right dark:hidden"
                alt="Airship"
              />
              <img
                src="https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/03267ac2-57bd-49b2-36f1-4e2ab707b900/768"
                className="object-center animate-fade-right dark:block hidden"
                alt="Airship"
              />
            </div>
            <div className="col-span-full md:flex items-center justify-center pt-10 hidden">
              <label className="h-12 gap-2 rounded-full border-[#005CF0B2] border mx-auto w-full max-w-4xl flex items-center px-0.5 py-0.5">
                <div
                  className="bg-black rounded-full h-full text-white"
                  data-rac=""
                >
                  <button
                    id="react-aria9032862083-:rk:"
                    type="button"
                    aria-labelledby="react-aria9032862083-:rp:"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    className="bg-black rounded-full h-full px-2 w-36 flex items-center justify-between text-sm"
                    data-rac=""
                  >
                    <span
                      id="react-aria9032862083-:rp:"
                      className="react-aria-SelectValue"
                      data-rac=""
                      data-placeholder="true"
                    >
                      Select an item
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="h-4 w-4"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={48}
                        d="m112 184 144 144 144-144"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  aria-hidden="true"
                  data-react-aria-prevent-focus="true"
                  data-a11y-ignore="aria-hidden-focus"
                  data-testid="hidden-select-container"
                  style={{
                    border: 0,
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(50%)",
                    height: 1,
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  <input type="text" tabIndex={-1} style={{ fontSize: 16 }} />
                  <label>
                    <select tabIndex={-1} title="">
                      <option />
                      <option value="react-aria-1">Text to Image</option>
                      <option value="react-aria-2">Image to Image</option>
                      <option value="react-aria-3">Background Removal</option>
                    </select>
                  </label>
                </div>
                <div className="w-full grow text-xs">
                  <span
                    className="index-module_type__E-SaG text-s"
                    style={{ display: "inline-block" }}
                  >
                    Ultra detailed shot of a dark sculpture made of stone
                  </span>
                </div>
                <a
                  href="https://imagen.playground.modelslab.com"
                  className="bg-[#005CF0] text-white font-[400] text-[14px] rounded-full px-5 py-2.5 flex items-center justify-center gap-2"
                >
                  <span className="max-w-min whitespace-nowrap">Generate</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    className="w-6 h-6 animate-pulse"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.37,16.18c0.65-0.03,1.2-0.28,1.65-0.75c0.45-0.47,0.68-1.03,0.68-1.68c0,0.65,0.22,1.21,0.67,1.68
	c0.45,0.47,1,0.72,1.65,0.75c-0.65,0.03-1.2,0.28-1.65,0.75c-0.45,0.47-0.67,1.03-0.67,1.68c0-0.65-0.22-1.21-0.68-1.68
	C6.57,16.46,6.02,16.21,5.37,16.18z M7.7,8.98c1.26-0.06,2.33-0.55,3.21-1.47c0.88-0.92,1.32-2.01,1.32-3.28
	c0,1.27,0.44,2.36,1.32,3.28s1.95,1.4,3.22,1.47c-0.83,0.04-1.59,0.27-2.29,0.71c-0.69,0.43-1.24,1.01-1.65,1.73
	c-0.4,0.72-0.6,1.49-0.6,2.33c0-1.27-0.44-2.37-1.32-3.29C10.03,9.53,8.96,9.04,7.7,8.98z M11.02,19.75
	c0.95-0.04,1.76-0.41,2.42-1.1c0.66-0.69,0.99-1.51,0.99-2.47c0,0.96,0.33,1.78,0.99,2.47c0.66,0.69,1.46,1.06,2.41,1.1
	c-0.95,0.04-1.75,0.41-2.41,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.99-2.47C12.77,20.16,11.97,19.8,11.02,19.75z
	 M17.83,15.01c0.95-0.04,1.75-0.41,2.41-1.1c0.66-0.69,0.98-1.51,0.98-2.48c0,0.96,0.33,1.78,0.99,2.47s1.47,1.06,2.42,1.1
	c-0.95,0.04-1.76,0.41-2.42,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.98-2.47C19.58,15.42,18.78,15.05,17.83,15.01z"
                    />
                  </svg>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
