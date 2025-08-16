import React, { useState } from 'react';
import { FaChevronDown, FaArrowRight, FaDatabase } from 'react-icons/fa';
import Slider from 'react-slick';

// Custom arrow components for the carousel
const NextArrow = ({ onClick, darkMode }) => (
  <button
    className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]'} text-white p-2 rounded-full z-10`}
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </button>
);

const PrevArrow = ({ onClick, darkMode }) => (
  <button
    className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]'} text-white p-2 rounded-full z-10`}
    onClick={onClick}
  >
    <FaArrowRight size={20} className="rotate-180" />
  </button>
);

const Banking = ({ darkMode, setDarkMode }) => {
  // Individual state for each card's range value
  const [rangeValues, setRangeValues] = useState({
    card1: 30,
    card2: 30,
    card3: 30,
    card4: 30,
  });

  // Handle hover for specific card
  const handleHover = (cardKey) => {
    setRangeValues((prev) => ({ ...prev, [cardKey]: 100 }));
  };

  // Handle leave for specific card
  const handleLeave = (cardKey) => {
    setRangeValues((prev) => ({ ...prev, [cardKey]: 30 }));
  };

  // Define color classes based on dark mode, aligned with Home component
  const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-[#0b0b5c]';
  const accentBtnBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const accantBtnText = darkMode ? 'text-[#f47b20]' : 'text-black';
  const accontBtnText = darkMode ? 'text-[#f49c90]' : 'text-[#5c2e8c]';
  const individualBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const individualText = darkMode ? 'text-[#0b0b5c]' : 'text-white';
  const companiesBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const companiesText = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const individualHover = darkMode ? 'hover:bg-[#f47b20]' : 'hover:bg-[#ffb366]';
  const companiesHover = darkMode ? 'hover:bg-[#f47b20]' : 'hover:bg-[#ffffff]';
  const cardHoverText = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const btnColor = darkMode ? 'text-white' : 'text-[#ffffff]';
  const btnHover = darkMode
    ? 'hover:bg-[#0b0b5c] hover:scale-105 hover:shadow-lg'
    : 'hover:bg-[#f47b20] hover:scale-105 hover:shadow-lg';

  // Carousel settings for the first slider (cards)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Carousel settings for the second slider (bank)
  const settingsBank = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of card data
  const cards = [
    { id: 'card1', title: 'Savings & CDs', description: 'Take trivial example which of us ever all undertakes laborious.' },
    { id: 'card2', title: 'Savings Plus', description: 'Explore our premium savings options with higher returns.' },
    { id: 'card3', title: 'CD Special', description: 'Lock in great rates with our certificate of deposit.' },
    { id: 'card4', title: 'High-Yield Savings', description: 'Maximize your savings with competitive interest rates.' },
  ];

  // Array of bank data
  const bank = [
    { id: 'bank1', title: 'Traides FX', description: 'Take trivial example which of us ever all undertakes laborious.', image: '/bank1.jpg' },
    { id: 'bank2', title: 'Multicurrency a/c', description: 'Explore our premium savings options with higher returns.', image: '/bank2.jpg' },
    { id: 'bank3', title: 'Pension Scheme', description: 'Lock in great rates with our certificate of deposit.', image: '/bank3.jpg' },
    { id: 'bank4', title: 'Mutual Funds', description: 'Maximize your savings with competitive interest rates.', image: '/bank4.jpg' },
  ];

  return (
    <div className="relative">
      {/* Background image with responsive classes */}
      <div
        className={`w-full h-[700px] sm:h-[800px] md:h-[800px] lg:h-[600px] bg-cover bg-center opacity-100 ${primaryBg}`}
        style={{ backgroundImage: `url('/bank4.jpg')` }}
      >
        {/* Text content inside the background image */}
        <div className="flex flex-col gap-6 items-center absolute p-6 w-full">
          <div className="flex justify-between items-center text-lg sm:text-xl md:text-2xl font-bold mb-2 w-full">
            <div className="sm:ml-20">
              <h1 className={`text-[25px] md:text-[30px] sm:text-[40px] ${textColor}`}>
                Banking For Your Needs
              </h1>
              <p className={`text-[12px] md:text-[15px] sm:text-[20px] ${textColor}`}>
                The bank that builds better relationships.
              </p>
            </div>
            <div className="mr-0 sm:mr-20">
              <a href="#">
                <img src="1st.png" alt="" className="w-10 h-9" />
              </a>
            </div>
          </div>

          {/* Cards for Individual and Companies */}
          <div className="flex justify-between gap-3 items-center text-lg sm:text-xl md:text-2xl font-bold mb-2 w-full">
            {/* Individual Card */}
            <a
              href="#"
              className={`flex md:flex-row justify-between items-center sm:ml-20 w-[45%] p-4 ${individualBg} ${individualText} ${individualHover} transition-all duration-300 transform hover:translate-y-[-10px]`}
            >
              <div>
                <p className="text-[12px] sm:text-[15px] md:text-[20px]">Banking for</p>
                <h1 className="text-[15px] sm:text-[25px] md:text-[30px]">Individual</h1>
              </div>
              <div className="border-2 p-2">
                <FaChevronDown size={18} />
              </div>
            </a>

            {/* Companies Card */}
            <a
              href="#"
              className={`flex md:flex-row justify-between items-center sm:mr-20 w-[45%] p-4 ${companiesText} ${companiesBg} ${companiesHover} transition-all duration-300 transform hover:translate-y-[-20px]`}
            >
              <div>
                <p className="text-[12px] sm:text-[15px] md:text-[20px]">Banking for</p>
                <h1 className="text-[15px] sm:text-[25px] md:text-[30px]">Companies</h1>
              </div>
              <div className="border-2 p-2">
                <FaChevronDown size={18} />
              </div>
            </a>
          </div>

          {/* Carousel for Savings & CDs Cards */}
          <div className="w-full px-4">
            <Slider {...settings}>
              {cards.map((card) => (
                <div key={card.id} className="px-2">
                  <div
                    className={`relative p-4 h-[270px] border-1 shadow-md hover:shadow-lg ${textColor} ${primaryBg} transition-shadow duration-300`}
                    onMouseEnter={() => handleHover(card.id)}
                    onMouseLeave={() => handleLeave(card.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="mt-8">
                        <FaDatabase size={20} />
                      </div>
                      <a href="#" className="border-1 p-2">
                        <FaArrowRight
                          size={35}
                          className={`transition-all duration-300 ${rangeValues[card.id] === 100 ? cardHoverText : textColor}`}
                        />
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <p
                          className={`transition-all duration-300 ${rangeValues[card.id] === 100 ? `${cardHoverText} font-bold` : ''}`}
                        >
                          {card.title}
                        </p>
                      </div>
                      <div className="w-full h-1 bg-[#ffffff] rounded-full mb-2">
                        <div
                          className={`h-full ${accentBtnBg} rounded-full transition-all duration-300`}
                          style={{ width: `${rangeValues[card.id]}%` }}
                        ></div>
                      </div>
                      <div>
                        <p>{card.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <p className="text-red-700">*</p>
                        <p>Interest rate up to 5% p.a</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className={`${accentBtnBg} ${btnColor} ${btnHover} p-3 transition-all duration-300 translate-y cursor-pointer`}>
            <a href="#" className="block text-center">
              View All Services
            </a>
          </div>
        </div>
      </div>

      {/* Second Slider for Bank Images */}
      <div className={`w-full px-4 pt-20 pb-20 ${bankBg}`}>
        <div className="text-center flex flex-col gap-2 mb-20">
          <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] font-bold ${textColor}`}>
            Grow Your Wealth Secure
          </h1>
          <p className={`text-[12px] md:text-[20px] sm:text-[20px] ${textColor}`}>
            Don’t just make a deposit, make an investment today.
          </p>
        </div>
        <Slider {...settingsBank}>
          {bank.map((bank) => (
            <div key={bank.id} className="px-2">
              <div
                className={`relative w-[90%] mx-auto shadow-md hover:shadow-lg ${textColor} ${primaryBg} transition-shadow duration-300`}
                onMouseEnter={() => handleHover(bank.id)}
                onMouseLeave={() => handleLeave(bank.id)}
              >
                <div className="relative">
                  <img
                    src={bank.image}
                    alt={bank.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full px-2 py-4 flex items-center justify-between ${accentBtnBg} ${individualText} opacity-90`}
                  >
                    <h1
                      className={`text-[16px] sm:text-[18px] md:text-[20px] font-bold ${rangeValues[bank.id] === 100 ? cardHoverText : ''}`}
                    >
                      {bank.title}
                    </h1>
                    <a href="#">
                      <FaArrowRight
                        size={28}
                        className={`transition-all duration-300 ${rangeValues[bank.id] === 100 ? cardHoverText : ''}`}
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4 py-7">
                  <p>{bank.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banking;