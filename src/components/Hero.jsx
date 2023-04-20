import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase">
          grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:5xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible financing for
          </p>
          <Typed
            className="md:5xl sm:text-4xl text-xl font-bold m:pl-4 pl-2"
            strings={["BNB", "BTC", "DOGE", "LINK", "ETH", "KISHU"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-6">
          Monitor your Financial analytics to increase revenue for all
          crypto-currency in any trading platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
