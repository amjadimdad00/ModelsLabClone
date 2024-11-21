import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import Preview from "@/components/Home/Preview/Preview";
import Community from "@/components/Home/Community/Community";

const Index = () => {
  return (
    <div className="h-full">
      <Hero />
      <Preview />
      <Community />
    </div>
  );
};

export default Index;
