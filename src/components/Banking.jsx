import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaArrowRight, FaDatabase, FaCheck } from 'react-icons/fa';
import Slider from 'react-slick';
import Foreign from './Foreign';
import Questions from './Questions';
import Travel from './Travel';
import Flexible from './Flexible';

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
  const primarysBg = darkMode ? 'bg-white' : 'bg-pink-100';
  const textsColor = darkMode ? 'text-[#F47b20]' : 'text-[#0b0b5c]';
 const secondBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const accantText = darkMode ? 'text-white' : 'text-[#f47b20]';
  const accontBorder = darkMode ? 'text-[#f49c90]' : 'text-[#5c2e8c]';
  const individualBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const individualText = darkMode ? 'text-[#0b0b5c]' : 'text-white';
  const companiesBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const companiesText = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const individualHover = darkMode ? 'hover:bg-[#f47b20]' : 'hover:bg-[#ffb366]';
  const companiesHover = darkMode ? 'hover:bg-[#f47b20]' : 'hover:bg-[#ffffff]';
  const cardHoverText = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const btnColor = darkMode ? 'text-white' : 'text-[#ffffff]';
    const atmBg = darkMode ? 'bg-white' : 'bg-[#0b0b5c]';
    const primaryseBg = darkMode ? 'bg-orange-300' : 'bg-gray-100';
  
  const btnHover = darkMode 
    ? 'hover:bg-[#0b0b5c] hover:scale-105 hover:shadow-lg' 
    : 'hover:bg-[#f47b20] hover:scale-105 hover:shadow-lg';
    const linkHover = darkMode 
    ? 'hover:text-[#f47b20] hover:scale-105 hover:shadow-lg' 
    : 'hover:text-pink-800 hover:scale-105 hover:shadow-lg';
    const textHover = darkMode 
    ? 'hover:text-[#f47b20] hover:scale-105 hover:shadow-lg' 
    : 'hover:text-pink-800 hover:scale-105 hover:shadow-lg';

  // Carousel settings for both sliders
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 cards for desktop
    slidesToScroll: 1,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Tablets and mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  // Emergenxy
   const [emmergencySliderSettings, setEmmergencySliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Adjust emmergency slider settings based on screen width
  const adjustSliderSettings = () => {
    const width = window.innerWidth;

    if (width <= 1024) {
      setSliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 1, // Show 1 slide on mobile and tablet
        slidesToScroll: 1,
      }));
    } else {
      setSliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 3, // Show 3 slides on desktop
        slidesToScroll: 1,
      }));
    }
  };


  // Adjust emmergency slider settings based on screen width
  const adjustEmmergencySliderSettings = () => {
    const width = window.innerWidth;

    if (width <= 1024) {
      setEmmergencySliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 1, // Show 1 slide on mobile and tablet
        slidesToScroll: 1,
      }));
    } else {
      setEmmergencySliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 4, // Show 3 slides on desktop
        slidesToScroll: 1,
      }));
    }
  };

  useEffect(() => {
    // Call on component mount
    adjustSliderSettings();

    // Add event listener for window resize to dynamically adjust settings
    window.addEventListener("resize", adjustSliderSettings);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", adjustSliderSettings);
    };
  }, []);

  // Emmergency useEffect
  useEffect(() => {
    // Call on component mount
    adjustEmmergencySliderSettings();

    // Add event listener for window resize to dynamically adjust settings
    window.addEventListener("resize", adjustEmmergencySliderSettings);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", adjustEmmergencySliderSettings);
    };
  }, []);

  // Array of card data
  const cards = [
    { id: 'card1', title: 'Savings & CDs', description: 'Take trivial example which of us ever all undertakes laborious.' },
    { id: 'card2', title: 'Savings Plus', description: 'Explore our premium savings options with higher returns.' },
    { id: 'card3', title: 'CD Special', description: 'Lock in great rates with our certificate of deposit.' },
    { id: 'card4', title: 'High-Yield Savings', description: 'Maximize your savings with competitive interest rates.' },
  ];

  // Array of bank data
  const bank = [
    { id: '/bank1.jpg', title: 'Traides FX', description: 'Take trivial example which of us ever all undertakes laborious.' },
    { id: '/bank2.jpg', title: 'Multicurrency a/c', description: 'Explore our premium savings options with higher returns.' },
    { id: '/bank3.jpg', title: 'Pension Scheme', description: 'Lock in great rates with our certificate of deposit.' },
    { id: '/bank4.jpg', title: 'Mutual Funds', description: 'Maximize your savings with competitive interest rates.' },
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
            <Slider {...sliderSettings}>
              {cards.map((card) => (
                <div key={card.id} className="px-2 ">
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
      
      <div className={`w-full px-4 pt-20 pb-20 ${bankBg}`}>
        <div className="text-center flex flex-col gap-2 mb-20">
                <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] font-bold ${textColor}`}>Grow Your Wealth Secure</h1>
                <p className={`text-[12px] md:text-[20px] sm:text-[20px] ${textColor}`}>Don’t just make a deposit, make an investment today.</p>
            </div>
        <Slider {...sliderSettings}>
  {bank.map((bank) => (
    <div key={bank.id} className="px-2">
      <div
        className={`relative w-[90%] mx-auto  shadow-md hover:shadow-lg ${textColor} ${primaryBg} transition-shadow duration-300`}
        onMouseEnter={() => handleHover(bank.id)}
        onMouseLeave={() => handleLeave(bank.id)}
      >
        <div className="relative">
          <img
            src={bank.id}
            alt={bank.title}
            className="w-full h-[250px] object-cover"
          />
          <div
            className={`absolute top-40 left-7 w-full px-2 py-4 flex items-center justify-between ${accentBtnBg} ${individualText} opacity-90`}
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
    
          <div className='px-4 py-7 h-[100px]'>
            <p>{bank.description}</p>
          </div>
          
        </div>
      </div>
  
  ))}
</Slider>
      </div>
      <div className={`text-center pt-20 ${textsColor} py-10 ${primarysBg}`}>
        <h1 className="text-[25px] sm:text-[30px] md:text-[35px] font-bold">Emergency Service Requests</h1>
        <p className="text-[15px] sm:text-[18px] md:text-[25px] mt-4">List of banking service requests all in one place.</p>
        <div className="flex flex-col">
         
    <div className="slider-container pt-30 ml-18 mr-18">
      <Slider {...emmergencySliderSettings}>
        <div className={`  ${primarysBg}`}>
          <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers1.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
        </div>
        <div>
          <div className={`  ${primarysBg}`}>
             <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers2.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
          </div>
        </div>
        <div>
          <div className={`  ${primarysBg}`}>
             <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers3.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
          </div>
        </div>
        <div>
          <div className={`  ${primarysBg}`}>
             <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers4.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
          </div>
        </div>
        <div>
          <div className={`  ${primarysBg}`}>
             <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers5.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
          </div>
        </div>
        <div className="">
          <div className={`  ${primarysBg}`}>
             <div className={`flex flex-col gap-5 items-center ${primarysBg} border-l border-r px-4 py-6 group`}>
            <div className="relative">
              <img src="/Emmers2.png" alt="" className={`w-20 h-20 transition duration-300 px-3 py-3 rounded-full border cursor-pointer ${accontBorder} ${individualHover}`}/>
            </div>
            <div className={`text-[15px] md:text-[25px] sm:text-[30px] ${textsColor}`}>
              <p>Mobile Banking</p>
            </div>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <FaChevronDown size={28}/>
            </div>
          </div>
          </div>
        </div>
      </Slider>
    </div>


          <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-20 pb-30 mx-5 md:mx-20 gap-4">
  {/* Left column */}
  <div className="w-full md:w-1/2 border-1 h-[290px]">
    <a href="#" className="block">
      <div className="flex items-center justify-between px-6 md:px-10  group">
        {/* Left Text */}
        <p className=" transition-colors duration-300 group-hover:text-red-600">
          Block Deposit / ATM Card
        </p>
        {/* Right Arrow with left border */}
        <div className="border-l h-15 flex items-center pl-3">
          <FaArrowRight
            size={24}
            className=" transition-colors duration-300 group-hover:text-red-600"
          />
        </div>
      </div>
      <hr />
    </a>

    <a href="#" className="block">
      <div className="flex items-center justify-between px-6 md:px-10 group">
        <p className="transition-colors duration-300 group-hover:text-red-600">
          Block Deposit / ATM Card
        </p>
        <div className="border-l h-14 flex items-center pl-3">
          <FaArrowRight size={24} className="transition-colors duration-300 group-hover:text-red-600" />
        </div>
      </div>
      <hr />
    </a>

    <a href="#" className="block">
      <div className="flex items-center justify-between px-6 md:px-10 group">
        <p className="transition-colors duration-300 group-hover:text-red-600">
          Block Deposit / ATM Card
        </p>
        <div className="border-l h-14 flex items-center pl-3">
          <FaArrowRight size={24} className="transition-colors duration-300 group-hover:text-red-600" />
        </div>
      </div>
      <hr />
    </a>

    <a href="#" className="block">
      <div className="flex items-center justify-between px-6 md:px-10 group">
        <p className="transition-colors duration-300 group-hover:text-red-600">
          Block Deposit / ATM Card
        </p>
        <div className="border-l h-14 flex items-center pl-3">
          <FaArrowRight size={24} className="transition-colors duration-300 group-hover:text-red-600" />
        </div>
      </div>
      <hr />
    </a>
    <a href="#" className="block">
      <div className="flex items-center justify-between px-6 md:px-10 group">
        <p className="transition-colors duration-300 group-hover:text-red-600">
          Block Deposit / ATM Card
        </p>
        <div className="border-l h-14 flex items-center pl-3">
          <FaArrowRight size={24} className="transition-colors duration-300 group-hover:text-red-600" />
        </div>
      </div>
    </a>
  </div>

  {/* Right column */}
  <div className="w-full md:w-1/2 relative">
    <img src="/22.png" alt="" className="w-full h-[240px] sm:h-[280px] md:h-[290px] object-cover" />
    <div className={`absolute flex flex-col items-center gap-3  bottom-4 md:bottom-15 md:left-17 ${accantText}`}>
      <p className="text-[15px] md:text-[18px] sm:text-[18px] font-bold">Call For</p>
      <h1 className="text-[17px] md:text-[20px] sm:text-20px] font-bold">Private Banking</h1>
      <a href="#" className={`text-[17px] md:text-[18px] sm:text-20px] font-bold ${linkHover}`}>+234 913 1234 000</a>
    </div>
  </div>
</div>
</div>
</div>
<div className={`flex flex-col md:flex-row justify-around ${primaryBg}`}>
  <div className={`${primaryBg} w-full h-[400px] sm:h-[600px] relative`}>
   
   <div className={`w-[50%] h-[400px] mx-auto h-full ${atmBg}`}></div>
   <div className="absolute top-20 left-15 sm:top-27 sm:left-25 w-[70%] h-[60%] flex items-center justify-center">
      <img src="/ATM.png" alt="" className='w-full '/>
     </div>
  </div>
  <div className={`flex flex-col gap-5 w-full px-4 py-10 ${primaryseBg} ${accantText}`}>
    <div className="w-[70%] mx-auto text-left">
      <h1 className='text-[20px] md:text-[50px] sm:text-[40px]'>Personalize Your Card and Stand Out From Crowd</h1>
    </div>
    <div className="flex flex-col gap-3 ml-25 text-[15px] md:text-[20px] sm:text-[20px]">
      <div className="flex gap-3 items-center">
      <p><FaCheck size={18}/></p>
      <p>Great explorer of the master-builder</p>
    </div>
    <div className="flex gap-3 items-center">
      <p><FaCheck size={18}/></p>
      <p>The master-builder of great explorer</p>
    </div>
    </div>
    <div className="flex flex-col gap-4 ml-25">
      <h1 className="text-[15px] md:text-[20px] sm:text-[20px] font-bold ">Apply for Credit Card</h1>
      <input type="text" placeholder='Name' className='border-1 w-[50%] px-2 py-2'/>
      <button className={`${accentBtnBg} ${btnHover} text-white px-2 py-4 w-40 shadow-lg rounded-lg`}>Apply Now</button>
    </div>
  </div>
</div>
<Foreign darkMode={darkMode} setDarkMode={setDarkMode} />
<Questions darkMode={darkMode} setDarkMode={setDarkMode} />
<Travel darkMode={darkMode} setDarkMode={setDarkMode} />
<Flexible darkMode={darkMode} setDarkMode={setDarkMode} />
</div>
  );
};

export default Banking;