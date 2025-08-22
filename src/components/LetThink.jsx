import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

// data...
const bank = [
  { id: '/Saving.jpg',  title: 'Savings Account',       description: 'Open an account and earn upto 8%.' },
  { id: '/current.jpg', title: 'Current Account',       description: 'Open an account and earn upto 5%.' },
  { id: '/Fixed.jpg',   title: 'Fixed Deposit Acount',  description: 'Open an account and earn upto 10%.' },
];

// no-ops kept
const handleHover = () => {};
const handleLeave = () => {};
const individualText = '';
const cardHoverText = '';
const rangeValues = {};

const LetThink = ({ darkMode = false }) => {
  // ✅ Coerce to real boolean (covers true/false and "true"/"false")
  const isDark = darkMode === true || darkMode === 'true';
  const primaryBg  = isDark ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const bankBg     = isDark ? 'bg-gray-300' : 'bg-[#0b0b5c]';
  const textColor  = isDark ? 'text-white' : 'text-[#ffffff]';
  const accentBtnBg = isDark ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const BtnBg = isDark ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const BtnText = isDark ? 'text-[#ffffff]' : 'text-[#f47b20]';

  return (
    <div className={`w-full px-4 pt-20 pb-20 ${bankBg}`}>
      <div className="text-center flex flex-col gap-2 mb-20">
        <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] font-bold ${textColor}`}>
          Grow Your Wealth Secure
        </h1>
        <p className={`text-[12px] md:text-[20px] sm:text-[20px] ${textColor}`}>
          Don’t just make a deposit, make an investment today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {bank.map((item) => (
          <div key={item.id} className="px-2">
            <div
              className={`relative w-full mx-auto shadow-md hover:shadow-lg ${textColor} ${primaryBg} transition-shadow duration-300`}
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={() => handleLeave(item.id)}
            >
              <div className="relative">
                <img
                  src={item.id}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className={`absolute top-40 left-7 w-full px-2 py-4 flex items-center justify-between ${accentBtnBg} ${individualText} opacity-90`}>
                  <h1 className={`text-[16px] sm:text-[18px] md:text-[20px] font-bold ${rangeValues[item.id] === 100 ? cardHoverText : ''}`}>
                    {item.title}
                  </h1>
                  <a href="#">
                    <FaArrowRight
                      size={28}
                      className={`transition-all duration-300 ${rangeValues[item.id] === 100 ? cardHoverText : ''}`}
                    />
                  </a>
                </div>
              </div>

              <div className="px-4 py-7 h-[100px]">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center">
        <button
  type="button"
  className={`flex gap-2 items-center mt-7 px-6 py-3 text-[15px] ${BtnBg} ${BtnText} sm:text-[20px] font-bold text-center mb-20 cursor-pointer rounded-md shadow-md transition duration-300  hover:opacity-90`}
>
 View All Accounts
 <FaArrowRight size={20} className="mt-1" />
</button>
</div>
    </div>
  )
}

export default LetThink;
