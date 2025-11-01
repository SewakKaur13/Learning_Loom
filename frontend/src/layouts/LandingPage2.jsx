import React from "react";
import primaryReport from "../assets/images/primary_report.svg";
import std6Report from "../assets/images/std6_report.svg";
import std7Report from "../assets/images/std7_report.svg";
import std8Report from "../assets/images/std8_report.svg";
import Circle from "../components/Circle";

const cardData = [
  {
    image: primaryReport,
    title: "Std 1 to 5",
    bgColor: "#9747FF",
    text: "Foundational learning with fun-based maths and English activities to build strong basics and curiosity.",
  },
  {
    image: std6Report,
    title: "Std 6",
    bgColor: "#417CD4",
    text: "Engaging lessons to sharpen comprehension, logic, and problem-solving through practical examples.",
  },
  {
    image: std7Report,
    title: "Std 7",
    bgColor: "#EC732F",
    text: "Develop analytical and creative thinking with balanced focus on academics and real-world application.",
  },
  {
    image: std8Report,
    title: "Std 8",
    bgColor: "#ED4883",
    text: "Advanced skill-building to prepare students for secondary level success with confidence and curiosity.",
  },
];

const LandingPage2 = () => {
  return (
    <div className="relative w-full min-h-screen bg-primary flex flex-col items-center justify-center gap-20">
      {/* Decorative Circles */}
      <Circle
        size="40px"
        color="#FFBA00"
        position="top-50 left-30 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#ED4883"
        position="top-60 right-30 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#7D4BC0"
        position="bottom-30 right-5 animate-bounce-slow"
      />
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-rubik text-4xl md:text-[42px] font-semibold text-[#040428] leading-snug">
          KS2 All-Through Reporting
        </h1>
        <p className="font-rubik text-[20px]  font-normal text-[#504D4E] max-w-[555px]">
          Monitor every student’s progress with insightful reports that track
          learning growth in Maths and English, ensuring consistent improvement
          at every stage.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center items-stretch gap-8 w-[90%]">
        {cardData?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between bg-white rounded-[24px] shadow-md hover:shadow-lg transition-all duration-300 w-[280px] min-h-[360px] flex-1"
          >
            {/* Image Section */}
            <div
              className="flex items-center justify-center size-[76px] rounded-[15px] mx-[34px] my-8"
              style={{ backgroundColor: card.bgColor }}
            >
              <img src={card.image} alt={card.title} className="size-10" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-start items-start px-[34px] flex-1">
              <h3 className="font-rubik text-[22px] font-semibold text-[#2F2E51] mb-2">
                {card.title}
              </h3>
              <p className="text-[#504D4E] font-rubik font-normal text-[16px] leading-8">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage2;
