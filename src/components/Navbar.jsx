import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 text-sm mb-10 border-b-2 border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer hover:scale-105 transition-all duration-500"
        src={assets.logo}
        alt="logo"
      />
      <ul className="hidden sm:flex gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTERS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex gap-5 items-center">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-3" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 text-gray-600 pt-15 text-base z-20 font-medium hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("login");
              scrollTo(0, 0);
            }}
            className=" font-medium  px-8 py-3 bg-primary text-white rounded-md md:block cursor-pointer hidden"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden fixed top-0 left-0 bottom-0 bg-white z-20 overflow-hidden transition-all`}
        >
          <div className="flex justify-between items-center px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-8"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex text-xl flex-col items-center gap-5 font-medium">
            <NavLink to="/">
              <li onClick={() => setShowMenu(false)}>HOME</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/doctors">
              <li onClick={() => setShowMenu(false)}>ALL DOCTORS</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/about">
              <li onClick={() => setShowMenu(false)}>ABOUT</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/contact">
              <li onClick={() => setShowMenu(false)}>CONTACT</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/login">
              <li className="bg-primary rounded-xl p-2 text-white" onClick={() => setShowMenu(false)}>Create Account</li>
              
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
