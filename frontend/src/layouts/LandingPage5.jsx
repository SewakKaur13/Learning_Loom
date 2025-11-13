import React, { useState, useEffect } from "react";
import book from "../assets/images/book.svg";
import Circle from "../components/Circle";


const LandingPage5 = () => {
  // Array of motivational thoughts
  const thoughts = [
    "Learning never exhausts the mind — it expands it.",
    "Every small effort today builds a stronger tomorrow.",
    "Believe in progress, not perfection — keep going!",
    "Mistakes are proof that you are trying.",
    "Consistency beats talent when talent doesn’t work hard.",
    "Your potential is limitless — explore it every day.",
    "Learn, grow, and glow — one step at a time."
  ];

  const [currentThought, setCurrentThought] = useState(0);

  // Auto-change thought every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [thoughts.length]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-primary py-20">
        {/* Decorative Circles */}
      <Circle
        size="27px"
        color="#ED4883"
        position="bottom-70 left-10 animate-bounce-slow"
      />
      <Circle
        size="16px"
        color="#FFBA00"
        position="bottom-50 right-10 animate-bounce-slow"
      />
      <div className="w-[85%] h-1/2 flex rounded-[25px] overflow-hidden shadow-lg">
        {/* LEFT SECTION */}
        <div className="w-1/2  font-rubik flex flex-col justify-center items-center py-20 bg-[#E54981] text-white text-center">
          <h1 className="text-[42px] font-semibold mb-3">Boost KS2 Results</h1>
          <p className="text-base w-[70%] leading-relaxed">
            Build strong foundations in Maths and English with fun, interactive lessons. 
            Track progress and empower every learner to achieve their best.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/2  flex flex-col justify-center items-center bg-[#220F48] text-white relative">
          <div className="absolute left-[-45px] bg-white rounded-full size-[92px] flex justify-center items-center shadow-lg">
            <img src={book} alt="Book" className="" />
          </div>
          {/* Thought display */}
          <p
            key={currentThought}
            className="text-3xl w-[70%] font-semibold text-center leading-relaxed transition-all duration-700 ease-in-out"
          >
            {thoughts[currentThought]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage5;
