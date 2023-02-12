import React from "react";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-screen overflow-auto">
      <HeroSection />
      <StorySection />
    </div>
  );
};

export default Hero;
