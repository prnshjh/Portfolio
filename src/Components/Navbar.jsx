import React, { useState } from "react";
import logo from "../assets/pk-lg2.png";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram, FaFileAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 text-white relative">

      {/* Logo */}
      <div className="flex items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none relative z-50">
          <div className="space-y-1">
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "rotate-45 translate-y-2 bg-black" : ""}`}></span>
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "-rotate-45 -translate-y-2 bg-black" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/prnshjh/" className="hover:text-blue-400"><FaLinkedin /></a>
        <a href="https://github.com/prnshjh" className="hover:text-gray-400"><FaGithub /></a>
        <a href="https://priyanshuwrites.medium.com/" className="hover:text-green-400"><FaMedium /></a>
        <a href="https://leetcode.com/u/prnshjh/" className="hover:text-yellow-400"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/prnshjh/" className="hover:text-green-600"><SiGeeksforgeeks /></a>
        <a href="https://codeforces.com/profile/prnshjh" className="hover:text-blue-500"><SiCodeforces /></a>
        <a href="https://www.codechef.com/users/prnshjh" className="hover:text-orange-400"><SiCodechef /></a>
        <a href="https://www.instagram.com/priyanshujha.19/" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="https://drive.google.com/file/d/1s0EYI07_AfWDgBWKGXPSOWMpKHzUrWOW/view?usp=drivesdk" className=" hover:text-blue-500" target="_blank"><FaFileAlt /> </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-lg flex flex-col items-center justify-center space-y-6 md:hidden z-40">
          {/* Close button inside the menu */}


          <a href="https://www.linkedin.com/in/prnshjh/" className="hover:text-blue-400 text-4xl"><FaLinkedin /></a>
          <a href="https://github.com/prnshjh" className="hover:text-gray-600 text-4xl"><FaGithub /></a>
          <a href="https://priyanshuwrites.medium.com/" className="hover:text-green-400 text-4xl"><FaMedium /></a>
          <a href="https://leetcode.com/u/prnshjh/" className="hover:text-yellow-400 text-4xl"><SiLeetcode /></a>
          <a href="https://www.geeksforgeeks.org/user/prnshjh/" className="hover:text-green-600 text-4xl"><SiGeeksforgeeks /></a>
          <a href="https://codeforces.com/profile/prnshjh" className="hover:text-blue-500 text-4xl"><SiCodeforces /></a>
          <a href="https://www.codechef.com/users/prnshjh" className="hover:text-orange-400 text-4xl"><SiCodechef /></a>
          <a href="https://www.instagram.com/priyanshujha.19/" className="hover:text-pink-500 text-4xl"><FaInstagram /></a>
          <a href="https://drive.google.com/file/d/1s0EYI07_AfWDgBWKGXPSOWMpKHzUrWOW/view?usp=drivesdk" className=" hover:text-blue-500 text-4xl"><FaFileAlt /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
