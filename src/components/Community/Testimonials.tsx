import React from "react";
import Star from "../svg/others/star.svg";

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
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
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
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
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
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
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
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
                </span>
                <span className="text-[#005CF0]">
                  <Star />
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
        <span className="max-w-[70%] relative overflow-hidden w-full rounded-full h-[3px] bg-[#EFF0F6] mx-auto dark:bg-[#FFFFFF80] before:h-full" />
      </div>
    </section>
  );
};

export default Testimonials;
