import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto py-32">
        <h1 className="text-6xl font-bold text-white text-center">
          Welcome to ProtoWrite
        </h1>
        <p className="text-lg text-gray-500 text-center my-12">Lorem ipsum</p>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
