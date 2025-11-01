import React from "react";
import girl from "../assets/images/girl.svg";
import tick from "../assets/images/tick.svg";
import formativeIcon from "../assets/images/lock.svg";
import summativeIcon from "../assets/images/calculator.svg";
import Circle from "../components/Circle";

const LandingPage3 = () => {
  return (
    // Main Container
    <div className="relative w-full min-h-screen bg-primary flex justify-center items-center">
      {/* Decorative Circles */}
      <Circle
        size="27px"
        color="#7D4BC0"
        position="top-10 left-30 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#00C3A5"
        position="bottom-70 left-10 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#ED4883"
        position="top-15 right-10 animate-bounce-slow"
      />
      {/* Inner Container */}
      <div className="w-[85%] flex flex-col justify-center items-center">
        {/* Top Section (Image + Text) */}
        <div className="flex items-center w-full">
          {/* Left Image Section */}
          <div className="flex justify-center items-center w-1/2 relative">
            {/* Yellow  background */}
            <div className="absolute flex justify-center items-center bg-[#FFBA00] w-[85%] h-full rounded-t-full top-1/2 -translate-y-1/2 left-[8%] z-0" />

            {/* Girl image */}
            <img
              src={girl}
              alt="Girl learning"
              className="relative z-10  object-contain mx-auto"
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col justify-center w-1/2 text-left gap-5">
            <h1 className="font-rubik text-[42px] font-semibold text-[#040428] leading-snug">
              All-in-one Assessment Platform for Catching Up and Beyond
            </h1>

            <p className="text-[#504D4E] text-[20px] font-normal font-rubik leading-relaxed">
              LearningLoom helps teachers and parents measure progress, close
              learning gaps, and boost confidence in Maths and English through
              smart, data-driven insights.
            </p>

            <ul className="flex flex-col gap-2 text-[#504D4E] text-[20px] font-rubik">
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center bg-[#7D4BC0] rounded-full size-[22px]">
                  <img src={tick} alt="tick" className="w-4 h-4" />
                </div>
                Personalised progress tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center bg-[#7D4BC0] rounded-full size-[22px]">
                  <img src={tick} alt="tick" className="w-4 h-4" />
                </div>
                Smart recommendations for improvement
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center bg-[#7D4BC0] rounded-full size-[22px]">
                  <img src={tick} alt="tick" className="w-4 h-4" />
                </div>
                Designed to support every learning pace
              </li>
            </ul>

            <p className="text-[#504D4E] text-[16px] font-rubik">
              <span className="font-semibold text-secondary">LearningLoom</span>{" "}
              makes assessments simple, engaging, and tailored to each student’s
              growth path.
            </p>
          </div>
        </div>

        {/* Bottom Section (Formative & Summative Cards) */}
        <div className="w-[95%] flex justify-center items-center bg-gradient-to-r from-[#1E0A45] to-[#3E2E5B] rounded-[20px] py-10  shadow-lg">

          {/* Formative Card */}
          <div className="w-1/2 flex flex-col justify-around items-center  text-white">
            <div className="flex justify-center items-start w-full gap-8">
              <div className="  size-24 rounded-2xl bg-gradient-to-br from-[#5523BD] to-[#6B3AD1] flex justify-center items-center">
                <img src={formativeIcon} alt="formative" className="size-[72px]" />
              </div>
              <div className="flex flex-col w-1/2">
              <h3 className="font-semibold font-rubik text-[32px]">Formative</h3>
              <p className="text-[16px] font-rubik font-light leading-snug">
                Save time preparing assessments for unit tests, homework and
                interventions. Our smart quizzes align with the National
                Curriculum and track understanding for every single topic.
              </p>
              </div>
            </div>
          </div>

          {/* Summative Card */}
          <div className="w-1/2 flex flex-col justify-around items-center  text-white">
            <div className="flex justify-center items-start w-full gap-8">
              <div className="  size-24 rounded-2xl bg-gradient-to-br from-[#5523BD] to-[#6B3AD1] flex justify-center items-center">
                <img src={summativeIcon} alt="formative" className="size-[72px]" />
              </div>
              <div className="flex flex-col w-1/2">
              <h3 className="font-semibold font-rubik text-[32px]">Summative</h3>
              <p className="text-[16px] font-rubik font-light leading-snug">
                Evaluate progress across Maths and English with end-of-term
                assessments. Identify strengths, track growth, and guide every
                learner forward.
              </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default LandingPage3;
