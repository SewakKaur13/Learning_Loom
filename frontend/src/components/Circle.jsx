import React from "react";

const Circle = ({ size, color, position = "", className = "" }) => {
  return (
    <div
      className={`absolute rounded-full z-10 ${position} ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
    ></div>
  );
};

export default Circle;
