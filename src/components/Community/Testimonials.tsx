import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto container px-4 md:px-8 grid w-full py-8 gap-8">
        <div className="w-full">
          <h4 className="font-[700] text-4xl text-center">
            Join 300K+ users creating art using ModelsLab
          </h4>
          <p className="font-[500] text-sm text-center mt-2">
            User Testimonials
          </p>
        </div>
        <div className="flex w-full gap-4 overflow-x-scroll no-scrollbar mt-5">
          <div className="w-full max-w-[340px] dark:border-[#4B5563] dark:bg-[#111827] dark:text-white rounded-2xl flex-none bg-white border border-[#EFF0F6] p-4">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center justify-start gap-2">
                <div
                  className="h-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat bg-[image:var(--bg-img)]"
                  style={{
                    backgroundImage:
                      'url("https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/testimonials/01JBPDBTXZRB82RM0TD7XEYMH3.jpg")',
                  }}
                />
                <div className="flex-col items-start justify-start flex">
                  <h5 className="text-sm font-semibold">John H.</h5>
                  <p className="text-xs text-black/50 dark:text-white/50">
                    Developer Enthusiast
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <blockquote className="prose mt-4">
              <p className="font-[600] dark:text-white text-sm text-left">
                &quot;The LLM Chat API has dramatically helped me in how I
                approach chat integration. It&apos;s like giving an unfiltered
                voice to my application, making it truly engaging. Thanks,
                ModelsLab!&quot;
              </p>
            </blockquote>
          </div>
          <div className="w-full max-w-[340px] dark:border-[#4B5563] dark:bg-[#111827] dark:text-white rounded-2xl flex-none bg-white border border-[#EFF0F6] p-4">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center justify-start gap-2">
                <div
                  className="h-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat bg-[image:var(--bg-img)]"
                  style={{
                    backgroundImage:
                      'url("https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/testimonials/01HR97D3PTHJWHYBQ07MEXSQ02.png")',
                  }}
                />
                <div className="flex-col items-start justify-start flex">
                  <h5 className="text-sm font-semibold">Alex Rivera</h5>
                  <p className="text-xs text-black/50 dark:text-white/50">
                    Game Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <blockquote className="prose mt-4">
              <p className="font-[600] dark:text-white text-sm text-left">
                &quot;ModelsLab&apos;s Voice Cloning API has revolutionized how
                we approach character development in our games. It&apos;s like
                having a studio full of voice actors at our fingertips!&quot;
              </p>
            </blockquote>
          </div>
          <div className="w-full max-w-[340px] dark:border-[#4B5563] dark:bg-[#111827] dark:text-white rounded-2xl flex-none bg-white border border-[#EFF0F6] p-4">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center justify-start gap-2">
                <div
                  className="h-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat bg-[image:var(--bg-img)]"
                  style={{
                    backgroundImage:
                      'url("https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/testimonials/01HR97CEPPVTPVG0BQT3Z0V9E9.png")',
                  }}
                />
                <div className="flex-col items-start justify-start flex">
                  <h5 className="text-sm font-semibold">Priya Singh</h5>
                  <p className="text-xs text-black/50 dark:text-white/50">
                    Instructional Designer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <blockquote className="prose mt-4">
              <p className="font-[600] dark:text-white text-sm text-left">
                &quot;The ease of creating lifelike voiceovers for our
                e-learning courses has dramatically increased engagement. A real
                breakthrough for educational content!&quot;
              </p>
            </blockquote>
          </div>
          <div className="w-full max-w-[340px] dark:border-[#4B5563] dark:bg-[#111827] dark:text-white rounded-2xl flex-none bg-white border border-[#EFF0F6] p-4">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center justify-start gap-2">
                <div
                  className="h-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat bg-[image:var(--bg-img)]"
                  style={{
                    backgroundImage:
                      'url("https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/testimonials/01HR97BXBD1ZMVAXJHF29HQZN1.png")',
                  }}
                />
                <div className="flex-col items-start justify-start flex">
                  <h5 className="text-sm font-semibold">Michael Chen</h5>
                  <p className="text-xs text-black/50 dark:text-white/50">
                    Digital Marketing Manager
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[#005CF0]">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34963 0.421436C6.59025 -0.140479 7.40978 -0.140479 7.6504 0.421437L9.07054 3.73796C9.17204 3.97485 9.40141 4.13671 9.66469 4.15721L13.3509 4.44426C13.9755 4.49289 14.2287 5.24994 13.7529 5.64586L10.9444 7.9826C10.7438 8.14954 10.6561 8.41145 10.7174 8.66097L11.5755 12.1549C11.7208 12.7469 11.0578 13.2148 10.5231 12.8976L7.36719 11.0252C7.14177 10.8915 6.85827 10.8915 6.63285 11.0252L3.4769 12.8976C2.94219 13.2148 2.27917 12.7469 2.42455 12.1549L3.2826 8.66097C3.34389 8.41145 3.25628 8.14954 3.05569 7.9826L0.247144 5.64586C-0.228703 5.24994 0.0245476 4.49289 0.649105 4.44426L4.33536 4.15721C4.59866 4.13671 4.82802 3.97485 4.92946 3.73796L6.34963 0.421436Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <blockquote className="prose mt-4">
              <p className="font-[600] dark:text-white text-sm text-left">
                &quot;Voice Cloning from ModelsLab gave our marketing campaigns
                a unique edge with custom, realistic voiceovers. It&apos;s
                incredibly easy to use and effective.&quot;{" "}
              </p>
            </blockquote>
          </div>
        </div>
        <span className="max-w-[70%] relative overflow-hidden w-full rounded-full h-[3px] bg-[#EFF0F6] mx-auto before:absolute before:top-0 before:left-0 before:w-[30%] before:bg-[#0024FF] dark:bg-[#FFFFFF80] before:h-full" />
      </div>
    </section>
  );
};

export default Testimonials;