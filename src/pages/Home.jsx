import React from 'react';
import Hero from '../components/Hero';
import { FaPlus } from 'react-icons/fa';
import Banking from '../components/Banking';

const Home = ({ darkMode, setDarkMode }) => {
  // Dynamically set background and text colors based on darkMode
  const primaryBg = darkMode ? 'bg-white' : 'bg-pink-100';
  const textColor = darkMode ? 'text-[#F47b20]' : 'text-[#0b0b5c]';
  const accentBtnBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const accentBtnText = darkMode ? 'text-white' : 'text-[#0reek]'
  const accantBtnText = darkMode ? 'text-[#f47b20]' : 'text-black';
  const accontBtnText = darkMode ? 'text-[#f49c90]' : 'text-[#5c2e8c]';
  const playIconBg = 'bg-red-600 text-white';

  return (
    <div>
      {/* Hero Section */}
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
     
      
      {/* Main Content Section */}
      <div className={`text-center ${textColor} py-10 ${primaryBg}`}>
        <h1 className="text-[25px] sm:text-[30px] md:text-[35px] font-bold">
          Creating Opportunities for Tomorrow
        </h1>
        <p className="text-[15px] sm:text-[18px] md:text-[25px] mt-4">
          Here to help our customers achieve their goals.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-10 md:px-15 px-10 my-30">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-3">
            <img src="/1st.png" alt="Card 1" className="w-25 h-20" />
            <p className={`${accentBtnText} text-[15px] sm:text-[18px] md:text-[20px] font-bold`}>
              Fixed Deposit
            </p>
            <h1 className={`${accantBtnText} text-[20px] sm:text-[25px] md:text-[35px]`}>
              Fixed Returns with Peace of Mind
            </h1>
            <p className={`${accontBtnText} text-[12px] sm:text-[14px] md:text-[16px]`}>
              Must explain to you how work mistaken give you complete guide.
            </p>
            <div className={`${accentBtnBg} ${accentBtnText} rounded-tl-4xl rounded-br-[40px] hover:text-[#ffffff]`}>
              <a href="/" className="flex gap-2 items-center py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-7 text-white">
                Read More
                <FaPlus size={12} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-3">
            <img src="/2nd.png" alt="Card 2" className="w-25 h-20" />
            <p className={`${accentBtnText} text-[15px] sm:text-[18px] md:text-[20px] font-bold`}>
              Fixed Deposit
            </p>
            <h1 className={`${accantBtnText} text-[20px] sm:text-[25px] md:text-[35px]`}>
              Fixed Returns with Peace of Mind
            </h1>
            <p className={`${accontBtnText} text-[12px] sm:text-[14px] md:text-[16px]`}>
              Must explain to you how work mistaken give you complete guide.
            </p>
            <div className={`${accentBtnBg} ${accentBtnText} rounded-tl-4xl rounded-br-[40px] hover:text-[#ffffff]`}>
              <a href="/" className="flex gap-2 items-center py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-7 text-white">
                Read More
                <FaPlus size={12} />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-3">
            <img src="/3rd.png" alt="Card 3" className="w-25 h-20" />
            <p className={`${accentBtnText} text-[15px] sm:text-[18px] md:text-[20px] font-bold`}>
              Fixed Deposit
            </p>
            <h1 className={`${accantBtnText} text-[20px] sm:text-[25px] md:text-[35px]`}>
              Fixed Returns with Peace of Mind
            </h1>
            <p className={`${accontBtnText} text-[12px] sm:text-[14px] md:text-[16px]`}>
              Must explain to you how work mistaken give you complete guide.
            </p>
            <div className={`${accentBtnBg} ${accentBtnText} rounded-tl-4xl rounded-br-[40px] hover:text-[#ffffff]`}>
              <a href="/" className="flex gap-2 items-center py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-7 text-white">
                Read More
                <FaPlus size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
       <Banking darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Home;