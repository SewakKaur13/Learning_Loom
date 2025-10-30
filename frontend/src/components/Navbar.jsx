import React from "react";
import facebookIcon from "../assets/images/facebook_white.svg";
import twitterIcon from "../assets/images/twitter_white.svg";
import instagramIcon from "../assets/images/instagram_white.svg";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-secondary py-4">
      <div className="w-[85%] flex justify-between">
        <div className="flex justify-between items-center text-white font-rubik text-sm w-[20%] cursor-pointer">
          <PrimaryButton
            text="Student Login"
            bgColor="bg-[#FFBA00]"
            py="py-2"
            px="px-2"
          />

          <PrimaryButton
            text="Student Register"
            bgColor="bg-[#FFBA00]"
            py="py-2"
            px="px-2"
          />
        </div>
        <div className="flex justify-between w-[8%] items-center">
          <img
            src={facebookIcon}
            alt="Facebook"
            className="size-5 cursor-pointer"
          />
          <img
            src={twitterIcon}
            alt="Twitter"
            className="size-5 cursor-pointer"
          />
          <img
            src={instagramIcon}
            alt="Instagram"
            className="size-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
