import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg bg-primary px-6 md:px-10 lg:px-20">
      {/* ------Left Side-------- */}
      <div className="md:w-1/2 flex flex-col justify-center items-start py-10 gap-4 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight text-white">
          Book Appointment <br />
          with Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-center text-white text-sm ">
          <img
            className="w-28 drop-shadow-2xl"
            src={assets.group_profiles}
            alt=""
          />
          <p>This is sample paragragh make for the website</p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 md:m-0 text-sm text-gray-500 bg-white px-8 py-3 rounded-full m-auto hover:scale-105 duration-300 transition-all">
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --------Right Side-------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full rounded-lg h-auto bottom-0 md:absolute"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
