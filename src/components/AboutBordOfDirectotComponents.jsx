import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa';

const AboutBordOfDirectotComponents = ({ darkMode }) => {
  const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const placeholder = darkMode ? 'placeholder-[#0b0b5c]' : 'placeholder-[#f47b20]';
  const text = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
  const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';

  const team = [
    { id: '/team.jpg', name: 'Rose Tailor', role: 'Corporate Marketing' },
    { id: '/team.jpg', name: 'John Doe', role: 'Product Manager' },
    { id: '/team.jpg', name: 'Jane Smith', role: 'UI/UX Designer' },
    { id: '/team.jpg', name: 'David Lee', role: 'Software Engineer' },
  ];

  const [openMember, setOpenMember] = useState(null);

  const SocialMediaIcons = (name) => {
    setOpenMember((prev) => (prev === name ? null : name)); // Toggle visibility based on name
  };

  return (
    <div className={`${bankBg} pt-20 pb-20`}>
      <div className={`${bankBg}`}>
        <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] font-bold text-center mt-15 ${textColor}`}>
          Our Management Team
        </h1>
        <p className={`text-[20px] md:text-[25px] sm:text-[25px] text-center ${textColor}`}>
          Team of diverse and talented leaders.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 w-[90%] m-auto">
          {team.map((member, index) => (
            <div key={index} className={`group`}>
              <div className="overflow-hidden relative rounded-lg">
                <img
                  src={(member.id || '').replace(/\.$/, '')}
                  alt=""
                  className={`w-full h-[300px] object-cover  transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105`}
                />
                <button
                  onClick={() => SocialMediaIcons(member.name)} // Pass member's name to toggle visibility
                  type="button"
                  aria-label={`more about ${member.name}`}
                  className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md ring-1 ring-black/10 group-hover:ring-2 group-hover:ring-pink-500`}
                >
                  <FaPlus size={25} />
                </button>

                {/* Show social media icons if isOpen matches the current member's name */}
                {openMember === member.name && (
                  <div className="absolute flex flex-col gap-3 bottom-15 left-1/2 transform -translate-x-1/2">
                    <a href="https://twitter.com" aria-label="Twitter">
                      <FaTwitter size={25} />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                      <FaInstagram size={25} />
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook">
                      <FaFacebook size={25} />
                    </a>
                  </div>
                )}
              </div>

              {/* Name and Role */}
              <div className={`text-center group-hover:${primarysBg} transition-all duration-300 ease-in-out`}>
                <h3 className={`text-lg font-semibold ${textColor}`}>{member.name}</h3>
                <p className={`text-xs font-semibold tracking-wide ${textColor}`}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBordOfDirectotComponents;
