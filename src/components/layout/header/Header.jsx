import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';
import avatarImg from '../../../assets/avatar.png';

const Header = () => {
  return (
    <div className="bg-color-img">
      <header className="flex justify-between items-center py-5 px-6 bg-[#fff8ee]">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Law Vriksh" className="w-6 h-6" />
          <h1 className="text-xl text-image-fill brightness-80 hover:brightness-70">Law Vriksh</h1>
        </div>
        <nav className="hidden sm:flex space-x-6 font-normal text-[20px] leading-[117%] tracking-[7%] font-poppins">
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">Home</a>
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">About us</a>
          <a href="#" className="text-image-fill brightness-80 hover:brightness-70">Contact Us</a>
        </nav>

        <div className="flex items-center space-x-4">

          <button className="sm:hidden p-2 rounded-full text-black hover:bg-gray-200 transition">
            <FiMenu className="w-6 h-6" />
          </button>
          <div className="hidden sm:flex items-center space-x-4">
            <button className="bg-button-bg hover:bg-button-bg-hover p-2 rounded-full text-black transition duration-200 custom-sidebar">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="bg-button-bg hover:bg-button-bg-hover p-2 rounded-full text-black transition duration-200 custom-sidebar">
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
