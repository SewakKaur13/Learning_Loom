import React from "react";
import boy from "../assets/images/boy.svg";
import Circle from "../components/Circle";

const LandingPage4 = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-primary">
      {/* Decorative Circles */}
      <Circle
        size="27px"
        color="#ED4883"
        position="top-80 left-10 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#7D4BC0"
        position="top-60 right-180 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#FFBA00"
        position="top-40 right-20 animate-bounce-slow"
      />
      <Circle
        size="27px"
        color="#7D4BC0"
        position="bottom-50 right-37 animate-bounce-slow"
      />

      {/* Main Container */}
      <div className="w-[85%] flex justify-center items-center">
        <div className="w-full flex justify-between gap-12 items-center">
          
          {/* ---------- LEFT CONTENT SECTION ---------- */}
          <div className="w-1/2 flex flex-col gap-3 font-rubik">
            {/* Section Title */}
            <h1 className="text-[42px] font-semibold text-[#040428]">
              Why choose Learning Loom?
            </h1>

            {/* Description Section */}
            <div className="flex flex-col gap-8 text-[16px] font-normal leading-relaxed text-justify text-[#504D4E]">
              <p>
                Learning Loom is designed with one goal — to make learning Maths
                and English simple, structured, and enjoyable. We understand
                that these subjects form the foundation for every child’s
                academic journey, so our platform focuses on building clarity
                and confidence step by step.
              </p>

              <p>
                Each topic starts with clear explanations, followed by
                interactive activities and practice quizzes to strengthen
                understanding. Our progress tracking system ensures that both
                teachers and parents can easily monitor performance, celebrate
                achievements, and provide timely support when needed.
              </p>

              <p>
                What makes us different is our adaptive learning approach — we
                encourage children to learn at their own pace while still being
                challenged to grow. With engaging visuals, practical examples,
                and data-driven insights, Learning Loom transforms traditional
                study into a fun, personalized experience that nurtures every
                learner’s potential.
              </p>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE SECTION ---------- */}
          <div className="flex justify-center items-center w-1/2 relative">
            {/* Gradient background (behind the boy image) */}
            <div className="absolute flex justify-center items-center bg-[#FFD05C] w-[85%] h-full rounded-t-full top-1/2 -translate-y-1/2 z-0" />
            
            {/* Boy Image */}
            <img
              src={boy}
              alt="Boy learning"
              className="relative z-10 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;
