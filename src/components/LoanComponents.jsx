import React from 'react'
import StepsProcess from './StepsProcess';
import { FaEnvelope, FaPhone, FaPhoneAlt, FaUser } from 'react-icons/fa';

const LoanComponents = ({darkMode}) => {
     const primaryBg   = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg  = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg      = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border      = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor   = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText     = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const placeholder = darkMode ? "placeholder-[#0b0b5c]" : "placeholder-[#f47b20]";  

  // Re-usable hover/active helpers
  const btnHover  = darkMode ? "group-hover:bg-[#0b0b5c]" : "group-hover:bg-[#f47b20]";
  const textHover = darkMode ? "group-hover:text-[#f47b20]" : "group-hover:text-[#0b0b5c]";


  return (
    <div className={`${bankBg}`}>
        <div className="text-center flex flex-col gap-2 pt-20 ">
        <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] font-bold ${textColor}`}>
         Explore and Apply Now
        </h1>
        <p className={`text-[15px] sm:text-[20px] md:text-[20px] ${textColor}`}>
          Customized solutions for all your banking needs.
        </p>
      </div>
      <StepsProcess darkMode={darkMode}  />
      <div className="relative pb-20 h-[820px] sm:h-full">
  <div className={`${primaryBg} w-[90%] sm:w-[50%] absolute sm:top-[20px] top-75 sm:left-120 left-57 transform -translate-x-1/2 text-center p-4 z-10`}>
    <h1 className={`text-white text-[25px] sm:text-[40px] font-bold text-left ml-10 mt-7 ${accontBorder}`}>Send Your Request & Get Call Back</h1>
    <p className={`text-[15px] sm:text-[20px] text-left ml-10 mt-5 mb-5`}>Fill all the necessary details and Get call from experts.</p>
    <div className="grid grid-cols-1 grid-cols-2 gap-6">
        <div className={`flex justify-between w-[80%] ${bankBg} items-center px-3 py-2 ml-10 ${textColor}`}>
            <input type="text" placeholder="Your Name" className={`text-[15px] sm:text-[20px] md:text-[20px] w-[90%] border-0 focus:outline-none ${placeholder}`} />
            <FaUser size={20} className={`ml-2 ${textColor}`} />
        </div>
        <div className={`flex justify-between w-[80%] ${bankBg} items-center px-3 py-2 `}>
            <input type="email" placeholder="Email" className={`text-[15px] sm:text-[20px] md:text-[20px] w-[90%] border-0  focus:outline-none ${placeholder} ${textColor}`} />
            <FaEnvelope size={20} className={`ml-2 ${textColor}`} />
        </div>
         <div className={`flex justify-between w-[80%] ${bankBg} items-center px-3 py-2 ml-10`}>
            <input type="text" placeholder="Phone Number" className={`text-[15px] sm:text-[20px] md:text-[20px] w-[90%] border-0  focus:outline-none ${placeholder} ${textColor}`} />
            <FaPhoneAlt size={20} className={`ml-2 ${textColor}`} />
        </div>
        <div className="flex items-center space-x-4">
            <select name="state" id="state" className={`p-2 text-[15px] sm:text-[20px] md:text-[20px] ${bankBg} ${textColor} focus:outline-none w-[80%] px-3 py-2`}>
                <option value=""disable selected>State</option>
                <option value="alaska">Alaska</option>
                <option value="georgia">Georgia</option>
                <option value="florida">Florida</option>
                <option value="indiana">Indiana</option>
            </select>
        </div>
        <div className="flex items-center space-x-4 ml-10 w-full">
            <select name="city" id="city" className={` text-[15px] sm:text-[20px] md:text-[20px] ${bankBg} ${textColor} focus:outline-none w-[80%] px-3 py-2`}>
                <option value=""disable selected>City</option>
                <option value="alaska">Alaska</option>
                <option value="georgia">Georgia</option>
                <option value="florida">Florida</option>
                <option value="indiana">Indiana</option>
            </select>
        </div>

        <div className={`flex justify-between w-[80%] ${bankBg} items-center px-3 py-2`}>
            <input type="date" placeholder="Date" className={`text-[15px] sm:text-[20px] md:text-[20px] w-[90%] border-0  focus:outline-none ${placeholder} ${textColor}`}/>
        </div>
        <div className="sm:w-[80%] w-full ml-5 sm:ml-0">
            <a href="#" className={`relative inline-block px-6 py-4  font-semibold overflow-hidden group ${bankBg}`}>
                <span className={`relative z-10 text-[15px] sm:text-[20px] md:text-[20px] ${textColor}`}>Send Request</span>
                {/* Hover background slide up */}
                <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
            </a>
        </div>
    </div>
  </div>
  <div className="w-full relative">
    <img src="/cont.jpg" alt="" className="w-[90%] sm:h-[600px] m-auto object-cover grayscale-95"/>
  </div>
</div>
<div className="bg-white">
    <h1 className={`text-[25px] sm:text-[30px] md:text-[30px] text-center ${textColor} pt-30  mb-10 font-bold`}>Corporate Partnership With</h1>
    
   <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center items-center w-[90%] m-auto pb-30">
  <div className="flex justify-center items-center">
    <a
      href="#"
      className="p-4 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src="/infinity-logo.png"
        alt="Infinity Logo"
        className="sm:w-[180px] w-[120px] h-[80px] object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <a href="#" className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src="/sysco-logo.png"
        alt="Sysco Logo"
        className="sm:w-[180px] w-[120px] h-[80px] object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <a href="#" className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src="/progress-logo.png"
        alt="Progress Logo"
        className="sm:w-[180px] w-[120px] h-full object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <a href="#" className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src="/laren-logo.png"
        alt="Laren Logo"
        className="sm:w-[180px] w-[120px] h-[80px] object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <a href="#" className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src="/brex-logo.png"
        alt="Brex Logo"
        className="sm:w-[180px] w-[120px] h-[80px] object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
  <div className="flex justify-center items-center">
    <a href="#" className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src="/makeit-logo.png"
        alt="Makeit Logo"
        className="sm:w-[180px] w-[120px] h-[80px] object-contain grayscale hover:grayscale-0 transition-all"
      />
    </a>
  </div>
</div>
</div>
    </div>
  )
}

export default LoanComponents