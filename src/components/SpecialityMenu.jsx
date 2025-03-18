import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center py-16 gap-4 text-gray-600"
      id="speciality"
    >
      <h1 className="text-3xl font-medium text-gray-900">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex w-full pt-4 overflow-scroll gap-4 sm:justify-center">
        {specialityData.map((item, index) => (
          <Link onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col flex-shrink-0 items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
