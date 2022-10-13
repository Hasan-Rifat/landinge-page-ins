import React from "react";
import { default as banner } from "../img/banner-image.png";

const Banner = () => {
  return (
    <section className="bg-[#f8f9f9] body-font py-[40px]">
      <div className="max-w-[1140px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" leading-[55px] sm:text-4xl text-[48px] mb-4 font-bold text-secondary">
            Building the future.
            <br /> Join us Today!
          </h1>
          <p className="mb-8 leading-relaxed text-neutral text-[20px]">
            Design better websites and spend less time without restricting
            creative freedom.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Create A account
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact us
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-slate-400 rounded-2xl">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={banner}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
