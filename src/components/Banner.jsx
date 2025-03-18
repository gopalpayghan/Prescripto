import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
const navigate = useNavigate();

    return (
      <div className="flex bg-primary rounded-lg sm:px-10 md:px-14 lg:px-12 px-6 my-20 md:mx-10">
        {/* -------LS------- */}
        <div className="flex-1 sm:items-center py-8 sm:py-10 md:py-16 lg:py-28 lg:pl-5">
          <div className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1>Book Appointment</h1>
            <p className="mt-4">With 100+ Trusted Doctors</p>
          </div>
          <button
            onClick={() => {navigate("login"); scrollTo(0, 0)}}
            className="bg-white text-sm sm:text-base mt-6 rounded-full  text-gray-600 py-3 px-8 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            Create Account
          </button>
        </div>
        {/* -------RS------- */}
        <div className="hidden md:block md:w-1/2 lg:w-[400px] relative">
          <img
            className="w-full absolute bottom-0 right-0 max-w-md"
            src={assets.appointment_img}
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;