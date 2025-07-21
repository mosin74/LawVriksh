import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'; // Outline-style icons

const socialIcons = [
  { icon: <FiFacebook size={26} />, label: 'Facebook' },
  { icon: <FiLinkedin size={26} />, label: 'LinkedIn' },
  { icon: <FiTwitter size={26} />, label: 'Twitter' },
  { icon: <FiMail size={26} />, label: 'Email' },
];

const ProfileSection = () => {
  return (
    <section className="px-10 py-6 bg-[#fff8ee]">
      <div className='flex justify-between '>
        <h2 className=" w-[276px] h-[35px] text-2xl font-semibold text-black">Robert Fox’s Page</h2>
        <h2 className=" w-[22px] h-[22px] text-2xl font-semibold text-black">...</h2>
      </div>
      <p className="h-[69px] mt-2 text-sm text-black max-w-2xl">
        An author is a creator of written works, such as books, articles, or stories, who
        uses words to inform, entertain, or inspire readers. They often draw from 
        imagination.
      </p>
      <div className="bg-color-img w-[213px] h-[59px] p-[1px] rounded-full">
        <div className="flex justify-between items-center w-full h-full px-2 rounded-full bg-[#fff8ee]">
          {socialIcons.map(({ icon, label }, index) => (
            <button
              key={index}
              aria-label={label}
              className="w-[46px] h-[46px] p-2 rounded-full bg-button-bg hover:bg-button-bg-hover"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>


    </section>
  );
};

export default ProfileSection;
