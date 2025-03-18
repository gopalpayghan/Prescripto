import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 sm:px-10 md:px-16 w-full bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        {/* Company Info */}
        <div className="space-y-3">
          <img src={assets.logo} alt="Prescripto" className="w-32 sm:w-40" />
          <p className="text-sm sm:text-base">Health Care Sector</p>
          <p className="text-xs sm:text-sm leading-relaxed">
            We are a team of healthcare professionals dedicated to providing the
            best possible care. Our goal is to help you achieve optimal health
            and wellness through personalized treatment plans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg sm:text-xl font-semibold mb-4">COMPANY</h1>
          <ul className="space-y-2 text-sm sm:text-base">
            <li onClick={()=>{navigate('/'); scrollTo(0,0)}} className="hover:underline cursor-pointer">Home</li>
            <li onClick={()=>{navigate('doctors'); scrollTo(0,0)}} className="hover:underline cursor-pointer">Services</li>
            <li onClick={()=>{navigate('about'); scrollTo(0,0)}} className="hover:underline cursor-pointer">About Us</li>
            <li onClick={()=>{navigate('contact'); scrollTo(0,0)}} className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h1 className="text-lg sm:text-xl font-semibold mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-sm sm:text-base font-semibold">
            PRESCRIPTO CLINIC PVT. LTD.
          </p>
          <p className="text-xs sm:text-sm">
            123, XYZ Road, Near ABC Park, New Delhi, India-123456
          </p>
          <p className="text-xs sm:text-sm mt-2 flex items-center gap-2">
            <i className="fas fa-phone text-blue-600"></i> +91 1234567890
          </p>
          <p className="text-xs sm:text-sm flex items-center gap-2">
            <i className="fas fa-envelope text-blue-600"></i>{" "}
            prescriptoclinic@gmail.com
          </p>
          <p className="text-xs sm:text-sm mt-2 font-semibold">
            Weekly Timing:
          </p>
          <p className="text-xs sm:text-sm">
            Monday-Friday: 10:00 AM - 7:00 PM
          </p>
          <p className="text-xs sm:text-sm">Saturday-Sunday: Closed</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-10 border-t pt-4">
        <p>&copy; 2025 PRESCRIPTO. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
