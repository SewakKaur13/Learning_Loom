import React from "react";
import Logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import Circle from "../components/Circle";
import kid1 from "../assets/images/kid1.svg";
import kid2 from "../assets/images/kid2.svg";
import kid3 from "../assets/images/kid3.svg";
import kid4 from "../assets/images/kid4.svg";

const LandingPage1 = () => {
  return (
    <div className="relative w-full min-h-screen bg-primary flex flex-col items-center">
      {/* Decorative Circles */}
      <Circle
        size="40px"
        color="#417CD4"
        position="top-30 left-30 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#ED4883"
        position="bottom-85 left-5 animate-bounce-slow"
      />
      <Circle
        size="40px"
        color="#FFBA00"
        position="bottom-15 left-65  animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#00C3A5"
        position="top-95 right-105  animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#7D4BC0"
        position="bottom-25 right-85  animate-bounce-slow"
      />
      <Circle
        size="40px"
        color="#FFBA00"
        position="top-50 right-30  animate-bounce-slow"
      />
      <Circle
        size="40px"
        color="#DD3F3F"
        position="bottom-50 right-5  animate-bounce-slow"
      />

      {/* Navbar */}
      <div className="w-[85%] flex justify-between items-center py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <p className="font-inter text-3xl font-light">
            <span className="font-semibold text-[#E54981]">Learning</span>Loom
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-sm font-rubik text-[#473A59]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-[#FFBA00]"
                  : "text-[#473A59] hover:text-[#E54981]"
              }`
            }
          >
            Standard
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-[#FFBA00]"
                  : "text-[#473A59] hover:text-[#E54981]"
              }`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-[#FFBA00]"
                  : "text-[#473A59] hover:text-[#E54981]"
              }`
            }
          >
            About Us
          </NavLink>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center flex-1 pt-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#040428] font-rubik mb-6 text-center leading-tight">
          Boost Maths and English <br className="hidden md:block" />
          <span className="block md:inline">skills</span>
        </h1>

        <p className="text-[#504D4E] font-rubik font-normal text-[20px] mb-[54px]">
          Learn. Play. Grow every day.
        </p>

        {/* Kids Image Section */}
        <div className="flex justify-center gap-16 flex-wrap relative">
          {[kid1, kid2, kid3, kid4].map((kid, index) => (
            <div
              key={index}
              className={`w-72 h-[444px] bg-cover bg-center transition-transform duration-300 hover:scale-105`}
              style={{
                backgroundImage: `url(${kid})`,
                borderRadius: "50% / 25%", // capsule shape
                transform:
                  index === 0 || index === 3
                    ? "translateY(-60px)" // lift outer ones
                    : "translateY(20px)", // lower middle ones
              }}
            ></div>
          ))}
        </div>

        <p className="mt-10 font-normal text-[20px] font-rubik text-[#504D4E]">
          Building the base for kids
        </p>
      </div>
    </div>
  );
};

export default LandingPage1;
