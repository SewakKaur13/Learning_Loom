import React from "react";

const PrimaryButton = ({ text, bgColor = "bg-blue-600", px = "px-0", py = "py-0",font,textstyle }) => {
  return (
    <button
      className={`${bgColor} ${px} ${py} ${font} ${textstyle} text-white font-rubik whitespace-nowrap rounded-3xl hover:opacity-90 transition duration-200`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
