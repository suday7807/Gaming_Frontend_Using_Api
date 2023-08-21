import React, { useContext } from "react";
import logo from "../assets/Images/logo.png";
import { useState } from "react";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="flex items-center w-full px-1 ">
      <img src={logo} alt="" width={60} height={60} />
      <div className="flex items-center w-full mx-2 bg-slate-200 p-2 rounded-full ">
        <HiMagnifyingGlass />
        <input
          type="text"
          className=" bg-transparent mx-1 outline-none w-full"
          placeholder="Search here"
        />
      </div>
      <div className=" align-center bg-slate-200 rounded-full cursor-pointer">
        {theme=='dark' ? (
          <HiSun size={35} className="" onClick={() => setTheme(!dark)} />
        ) : (
          <HiMoon size={35} className="" onClick={() => setTheme(!light)} />
        )}
      </div>
    </div>
  );
};

export default Header;
