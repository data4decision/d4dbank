// Hero.jsx
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const images = [
    { src: 'bank4.jpg', alt: 'First image' },
    { src: 'bank5.jpg', alt: 'Second image' },
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
    // Cycle through images
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    // Cycle through text content
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % content.length);
    }, 4000); // Change text every 4 seconds

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, [images.length, content.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Images Zoom In/Out */}
      <div className="absolute inset-0 bg-cover bg-center animate-backgroundZoomInOut"></div>
      
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

      {/* Content Section */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center">
        {content.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentTextIndex ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <h1 className="text-4xl font-bold animate-slideInFromTop">{item.header}</h1>
            <p className="text-lg animate-slideInFromBottom mt-4">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;