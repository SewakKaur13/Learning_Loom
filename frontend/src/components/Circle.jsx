import React from "react";

const Circle = ({ size, color, position }) => {
  return (
    <div
      className={`absolute rounded-full ${position} z-10`}
      style={{ width: size, height: size, backgroundColor: color }}
    ></div>
  );
};

export default Circle;
