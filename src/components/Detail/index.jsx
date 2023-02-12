import React from "react";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import MembersMenu from "./MembersMenu";

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-screen overflow-auto relative">
      <HeroSection />
      <StorySection />
      <MembersMenu/>
    </div>
  );
};

export default Hero;
