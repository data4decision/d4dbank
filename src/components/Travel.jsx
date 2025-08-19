import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Travel({ darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Desktop and tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const colors = darkMode
    ? {
        questionBg: "bg-[#0b0b5c]",
        questionText: "text-[#f47b20]",
        heading: "text-[#f47b20]",
        link: "hover:text-[#ffb366]",
        border: "border-[#f47b20]",
        personalBtn: "bg-blue-400 text-[#0b0b5c] hover:bg-blue-500",
        corperateBtn: "bg-[#f47b20] text-[#ffffff] hover:bg-[#0b4b7d]",
        text: "text-[#ffffff]",
        textHeading: "text-[#f47b20]",
        textHg: "text-[#f47b20]",
      }
    : {
        questionBg: "bg-[#ffeeff]",
        questionText: "text-[#0b0cde]",
        heading: "text-white",
        link: "hover:text-[#0b0b5c] underline",
        border: "border-[#0b0b5c]",
        personalBtn: "bg-blue-600 text-white hover:bg-blue-700",
        corperateBtn: "bg-[#0b0b5c] text-[#ffffff] hover:bg-[#f47b20]",
        text: "text-[#f47b20]",
        textHeading: "text-[#0b0b5c]",
        textHg: "text-[#0b0b5c]",
      };

  return (
    <div className="slider-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Slider {...settings}>
        {["/offer1.png", "/offer2.png"].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Offer ${index + 1}`}
              className="w-[full] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <button
              type="button"
              className={`absolute top-[80%] sm:top-[25%] md:top-[30%] left-4 sm:left-6 md:left-8 lg:left-10 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold text-center cursor-pointer rounded-md shadow-md transition duration-300 ${colors.text} ${colors.personalBtn} hover:opacity-90`}
            >
              Grab Your Deal
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Travel;