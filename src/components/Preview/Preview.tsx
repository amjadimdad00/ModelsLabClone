import AudioGen from "./AudioGen";
import AutoAI from "./AutoAI";
import Imagen from "./Imagen";
import LLMaster from "./LLMaster";
import ThreeDVerse from "./ThreeDVerse";
import VideoFusion from "./VideoFusion";

const Preview = () => {
  return (
    <>
      <Imagen />
      <VideoFusion />
      <AudioGen />
      <ThreeDVerse />
      <AutoAI />
      <LLMaster />
    </>
  );
};

export default Preview;
