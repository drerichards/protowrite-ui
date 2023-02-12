import React from "react";
import Cards from "../Cards";
import Members from "../Members";


const StorySection = () => {
  return (
    <section className="container flex px-3 justify-center relative h-auto">
      <Members/>
      <Cards />
    </section>
  );
};

export default StorySection;
