import React from "react";

const ResourcesList = ({ resourcesMenu }: { resourcesMenu: boolean }) => {
  const servicesResources = [
    {
      title: "Ticket",
      desc: "Open a ticket to our support team",
    },
    {
      title: "Support",
      desc: "Check out our support center",
    },
  ];

  const educationResources = [
    {
      title: "API Documentation",
      desc: "AI Image Generation & Tools",
    },
    {
      title: "Blog",
      desc: "Engage with our blog",
    },
    {
      title: "Learn",
      desc: "API Documentation that works",
    },

    {
      title: "Changelogs",
      desc: "Track all website updates on a go",
    },
  ];

  const communityResources = [
    {
      title: "Feed",
      desc: "AI Generations feeds",
    },
    {
      title: "Voices",
      desc: "Voices for your AI",
    },
    {
      title: "Monitize Model",
      desc: "Start uploading your models",
    },
    {
      title: "Showcase",
      desc: "Shows product built with our API",
    },
  ];

  return (
    <>
      <div
        className={`${
          resourcesMenu ? "flex" : "hidden"
        } absolute max-md:hidden md:top-[8.5rem] md:left-3 lg:top-[8.5rem] xl:top-[4.75rem] 2xl:left-[19rem] w-fit dark:bg-[#111827] bg-white p-8 rounded-2xl border dark:border-gray-700 border-black/20`}
      >
        {/* Services */}
        <div className="flex flex-col gap-3 border-r dark:border-white/50 border-black/50 pr-12 xl:pr-[4.7rem]">
          <h1 className="text-gray-600 dark:text-gray-300">Services</h1>
          <div className="flex flex-col gap-7">
            {servicesResources.map((item, idx) => {
              return (
                <div key={idx} className="cursor-pointer">
                  <h1 className="font-bold dark:text-white text-black">
                    {item.title}
                  </h1>
                  <p className="text-black/50 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col gap-3 border-r dark:border-white/50 border-black/50 pl-8 pr-[18px] xl:pr-11">
          <h1 className="text-black/50 dark:text-gray-300">Education</h1>
          <div className="flex flex-col gap-7">
            {educationResources.map((item, idx) => {
              return (
                <div key={idx} className="cursor-pointer">
                  <h1 className="font-bold dark:text-[#D1D5DB] text-black">
                    {item.title}
                  </h1>
                  <p className="text-black/50 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Feeds */}
        <div className="flex flex-col gap-3 pl-8 xl:pr-11">
          <h1 className="dark:text-white/70 text-black/50">Community</h1>
          <div className="flex flex-col gap-7">
            {communityResources.map((item, idx) => {
              return (
                <div key={idx} className="cursor-pointer">
                  <h1 className="font-bold dark:text-white text-black">
                    {item.title}
                  </h1>
                  <p className="text-black/50 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesList;
