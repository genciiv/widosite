import React from "react";
import heroImage from "../assets/hero-image.png"; // Ensure you have an image at this path

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Left column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
            ⭐
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We don’t just deliver IT{" "}
          <span className="text-blue-600 relative inline-block">
            we build partnerships.
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
          Empowering growth through digital innovation.
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          At WidoLink, we believe IT should be built on discipline, balance, and
          innovation. Our mission is to deliver reliable technology solutions
          that help your business thrive. Get in Touch with WidoLink
        </p>

        <div className="flex-gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-blue-300">
            ➠
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <img
            src={heroImage}
            alt=""
            className="rounded-lg relative z-10 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
