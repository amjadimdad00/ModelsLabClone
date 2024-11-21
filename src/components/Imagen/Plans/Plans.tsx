import React, { useState } from "react";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";

const Plans = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="flex container mx-auto px-5 md:px-8 flex-col justify-center items-center mt-8 space-y-1">
      <h1 className="font-bold text-2xl md:text-4xl mb-3">
        Get Started with ModelsLab
      </h1>
      <p className="">Choose plan as per your needs, cancel anytime.</p>
      <div className="w-full">
        <div className="w-full col-span-4 gap-5 py-10 my-6 mb-20">
          <div
            className="w-full flex flex-col items-center justify-start gap-5"
            data-rac=""
            data-orientation="horizontal"
          >
            <div
              id="react-aria9292137736-:r7o:"
              aria-label="period"
              role="tablist"
              aria-orientation="horizontal"
              className="flex items-center justify-center  bg-[#F9F9F9] dark:bg-[#F9F9F9]/10 border data-[focus]:outline-none rounded-[14px] p-1"
              data-rac=""
              data-orientation="horizontal"
            >
              <div
                tabIndex={0}
                data-key="monthly"
                id="react-aria9292137736-:r7o:-tab-monthly"
                aria-selected="true"
                role="tab"
                className={`px-4 py-1.5 rounded-[12px] cursor-pointer data-[focused]:outline-none ${
                  plan === "monthly" ? "dark:bg-black bg-white" : ""
                }`}
                data-rac=""
                aria-controls="react-aria9292137736-:r7o:-tabpanel-monthly"
                data-selected="true"
                onClick={() => {
                  setPlan("monthly");
                }}
              >
                Monthly
              </div>
              <div
                tabIndex={-1}
                data-key="yearly"
                id="react-aria9292137736-:r7o:-tab-yearly"
                aria-selected="false"
                role="tab"
                className={`px-4 py-1.5 rounded-[12px] cursor-pointer flex items-center justify-center gap-1 data-[focused]:outline-none ${
                  plan === "yearly" ? "dark:bg-black bg-white" : ""
                }`}
                data-rac=""
                onClick={() => {
                  setPlan("yearly");
                }}
              >
                <span>Yearly</span>
                <span className="text-[8px] text-[#005CF0] p-2 bg-[#E4EAFA] rounded-[8px]">
                  20% off
                </span>
              </div>
            </div>
            {plan === "monthly" ? <MonthlyPlans /> : <YearlyPlans />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
