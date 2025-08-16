import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Hero = ({ darkMode, setDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const images = [
    { src: '/bank4.jpg', alt: 'First image' },
    { src: '/bank5.jpg', alt: 'Second image' },
  ];

  const content = [
    {
      header: 'A system designed to foster innovation in financial services.',
      paragraph: 'The inability to act due to a lack of will is akin to avoiding duty by evading effort.',
    },
    {
      header: 'A model for advancing innovation in financial services.',
      paragraph: 'The failure of willpower is essentially the avoidance of duty by stepping back from labor.',
    },
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % content.length);
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, [images.length, content.length]);

  // Theme-aware tokens
  const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const textColor = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const accentBtnBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const accentBtnText = darkMode ? 'text-[#0b0b5c]' : 'text-white';
  const playIconBg = 'bg-red-600 text-white';

  return (
    <div className={`relative w-full h-[500px] overflow-hidden flex items-center justify-center ${textColor}`}>
      {/* Background Images */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-backgroundZoomInOut"
        style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
      ></div>

      {/* Right Sliding Images */}
      <div className="absolute right-0 h-[500px] w-1/4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`absolute right-0 h-[500px] w-full transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100 animate-slideInRight' : 'opacity-0'
            }`}
            alt={image.alt}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        {content.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentTextIndex ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <h1 className="text-[25px] md:text-[35px] w-[70%] font-bold animate-slideInFromTop">{item.header}</h1>
            <p className="text-[15px] md:text-[25px] w-[70%] ml-4 mb-20 animate-slideInFromBottom">{item.paragraph}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className={`flex gap-2 absolute left-10 sm:left-20 sm:bottom-30 bottom-25 sm:p-3 p-1 ${accentBtnBg}`}>
        <a href="/" className={`flex gap-2 items-center font-semibold px-4 py-2 rounded ${accentBtnBg} ${accentBtnText}`}>
          Make Payment
          <FaPlay size={20} className={`inline-flex items-center ${playIconBg} p-1 rounded-full`} />
        </a>
      </div>

      <div className={`flex gap-2 absolute left-10 sm:left-20 bottom-10 sm:p-3 p-1 ${primaryBg}`}>
        <a href="/" className={`flex gap-2 items-center font-semibold px-4 py-2 rounded ${primaryBg} ${accentBtnText}`}>
          Make An Enquiry
          <FaPlay size={20} className={`inline-flex items-center ${playIconBg} p-1 rounded-full`} />
        </a>
      </div>
    </div>
  );
};

export default Hero;