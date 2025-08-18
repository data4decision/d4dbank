import React from 'react'
import { FaSearch, FaArrowRight, FaArrowDown } from "react-icons/fa";

const Questions = ({darkMode, setDarkMode}) => {

    const colors = darkMode
    ? {
        questionBg: 'bg-[#0b0b5c]', // Dark mode background for the section
        questionText: 'text-[#f47b20]', // Text color for dark mode
        heading: 'text-[#f47b20]', // Heading color for dark mode
        link: 'hover:text-[#ffb366]', // Link hover color for dark mode
        border: 'border-[#f47b20]', // Border color for dark mode
        personalBtn: 'bg-blue-400 text-[#0b0b5c] hover:bg-blue-500',
        corperateBtn: 'bg-[#0b0b5c] text-[#ffffff] hover:bg-[#f47b20]',
        text: 'text-[#ffffff]',
        textHeading: 'text-[#f47b20]',
         textHg: 'text-[#f47b20]',
        
      }
    : {
        questionBg: 'bg-[#ffeeff]', // Light mode background for the section
        questionText: 'text-[#0b0cde]', // Text color for light mode
        heading: 'text-white', // Heading color for light mode
        link: 'hover:text-[#0b0b5c] underline', // Link hover color for light mode
        border: 'border-[#0b0b5c]', // Border color for light mode
        personalBtn: 'bg-blue-600 text-white hover:bg-blue-700',
        corperateBtn: 'bg-[#f47b20] text-[#ffffff] hover:bg-[#0b0b5c]', 
        text: 'text-[#f47b20]',
        textHeading: 'text-[#0b0b5c]',
        textHg: 'text-[#0b0b5c]',
      };

  return (
    <div className={`${colors.questionBg} w-full h-auto pt-20`}>
        <div className='flex flex-col sm:flex-row items-center justify-around gap-4 p-4'>
        <div className="">
            <h1 className={`text-[15px] md:text-[40px] sm:text-[40px] font-bold ${colors.text}`}>Questions & Answers</h1>
            <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${colors.questionText}`}>Find answers to all your queries about our service.</p>
        </div>
        <div className="flex flex-col gap-4 ">
  <p className={`text-[15px] md:text-[20px]  sm:text-[20px] ${colors.questionText}`}>Help You to Find</p>

  <div className="relative w-full max-w-sm ">
    <input
      type="text"
      placeholder="Related Keywords..."
      className={`w-full   py-2 ${colors.border} rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47b20]`}
    />
    <FaSearch
      size={18}
      className="absolute left-40 top-1/2 transform -translate-y-1/2 text-gray-500"
    />
  </div>
</div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-around gap-5 p-4 ">
        <div className="w-full ml-20 mt-20 ">
            <img src="/bulb.jpg" alt="" />
        </div>
        <div className="w-full">
            <div className="flex items-center gap-2 border-1 px-2 py-3 mr-20">
                <FaArrowDown size={20}/>
                <p>What is the Minimum Balance</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Questions