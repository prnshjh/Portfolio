import React, { useState } from "react";
import logo from "../assets/pk-lg2.png";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="mb-20 flex items-center justify-between py-6 px-6 text-white">

      {/* Logo */}
      <div className="flex items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <div className="space-y-1">
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-6 bg-white transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
       <div className="absolute top-16 left-0 w-full backdrop-blur-lg flex flex-col items-center py-4 space-y-4 md:hidden">

          <a href="https://www.linkedin.com/in/prnshjh/" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/prnshjh" className="hover:text-gray-600"><FaGithub /></a>
          <a href="https://priyanshuwrites.medium.com/" className="hover:text-green-400"><FaMedium /></a>
          <a href="https://leetcode.com/u/prnshjh/" className="hover:text-yellow-400"><SiLeetcode /></a>
          <a href="https://www.geeksforgeeks.org/user/prnshjh/" className="hover:text-green-600"><SiGeeksforgeeks /></a>
          <a href="https://codeforces.com/profile/prnshjh" className="hover:text-blue-500"><SiCodeforces /></a>
          <a href="https://www.codechef.com/users/prnshjh" className="hover:text-orange-400"><SiCodechef /></a>
          <a href="https://www.instagram.com/priyanshujha.19/" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
