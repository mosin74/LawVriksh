// @fileoverview Top navigation bar component for the Law Vriksh landing page.
//
// This component displays the logo, navigation links (Home, About, Contact),
// and user action icons such as search, notifications, and avatar.

import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';
import avatarImg from '../../../assets/avatar.png';
import logo from '../../../assets/logo.png';


const Header = () => {
  return (
    <div className="bg-[#fff8ee]">
      <header className="flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <div className="flex items-center pl-4">
          <img src={logo} alt="Law Vriksh Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6 font-normal text-[20px] leading-[117%] tracking-[7%] font-poppins">
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">Home</a>
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">About us</a>
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">Contact Us</a>
        </nav>

        {/* Right-side icons and avatar */}
        <div className="flex items-center space-x-4">
          {/* Hamburger menu (for small screens) */}
          <button className="sm:hidden p-2 rounded-full text-black hover:bg-gray-200 transition">
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Search, Bell, and Avatar (for sm and up) */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className="bg-button-bg hover:bg-button-bg-hover p-2 rounded-full text-black transition duration-200">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="bg-button-bg hover:bg-button-bg-hover p-2 rounded-full text-black transition duration-200">
              <FiBell className="w-5 h-5" />
            </button>
            <img
              src={avatarImg}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;