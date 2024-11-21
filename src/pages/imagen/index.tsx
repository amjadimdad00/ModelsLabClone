import Community from "@/components/Imagen/Community/Community";
import GettingStarted from "@/components/Home/Community/GettingStarted";
import Questions from "@/components/Home/Community/Questions";
import Testimonials from "@/components/Home/Community/Testimonials";
import Plans from "@/components/Imagen/Plans/Plans";
import React from "react";
import Cases from "@/components/Imagen/Cases";
import Models from "@/components/Imagen/Models";
import Hero from "@/components/Imagen/Hero";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Imagen - AI Text to Image, Image Editing & Avatar Creation
        </title>
      </Head>
      <div className="h-full">
        <Hero />
        <Models />
        <Cases />
        <Community />
        <Testimonials />
        <Plans />
        <Questions />
        <GettingStarted />
      </div>
    </>
  );
};

export default page;
