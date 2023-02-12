import React from "react";
import Cards from "../Cards";
import Members from "../Members";


const StorySection = () => {
  return (
    <section className="flex">
      <Members/>
      <Cards />
    </section>
  );
};

export default StorySection;
