import React from "react";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HeroSection />
      <StorySection />
    </div>
  );
};

export default Hero;
