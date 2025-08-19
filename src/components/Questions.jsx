


import React, { useState } from "react";
import { FaSearch, FaArrowRight, FaArrowDown } from "react-icons/fa";

const Questions = ({ darkMode }) => {
  // State to track open/closed state of each accordion item
  const [openItems, setOpenItems] = useState({});

  // Function to toggle accordion item by index
  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Accordion data
  const faqs = [
    {
      question: "What is the Minimum Balance?",
      answer:
        "The minimum balance varies by account type. For personal accounts, it’s typically $100, while corporate accounts may require $500.",
    },
    {
      question: "How do I open an account?",
      answer:
        "You can open an account online via our website or visit a branch with valid ID and proof of address.",
    },
    {
      question: "What are the fees involved?",
      answer: "Fees depend on the account type. Personal accounts have no monthly fees, while corporate accounts may incur a $10 monthly maintenance fee.",
    },
    {
      question: "Can I transfer money internationally?",
      answer:
        "Yes, international transfers are supported with a small fee based on the destination and amount.",
    },
    {
      question: "How secure is my account?",
      answer:
        "We use industry-standard encryption and two-factor authentication to ensure your account’s security.",
    },
  ];

  
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
    <div className={`${colors.questionBg} w-full h-auto pt-20`}>
      {/* Header and Search Section */}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-4 p-4">
        <div>
          <h1 className={`text-[15px] sm:text-[40px] font-bold ${colors.heading}`}>
            Questions & Answers
          </h1>
          <p className={`text-[15px] sm:text-[20px] ${colors.questionText}`}>
            Find answers to all your queries about our service.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`text-[15px] sm:text-[20px] ${colors.questionText}`}>
            Help You to Find
          </p>
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Related Keywords..."
              className={`w-full pl-9 pr-3 py-2 border ${colors.border} rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47b20]`}
            />
            <FaSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Accordion and Image Section */}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-5 p-4 ">
        <div className="w-full sm:ml-20 mt-10 sm:mt-20">
          <img src="/bulb.jpg" alt="Bulb" className="w-full h-auto" />
        </div>

        {/* Accordion List */}
        <div className="w-full sm:ml-5 mt-20" >
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4" >
              <button
                type="button"
                className={`flex items-center gap-5 border ${colors.border} px-2 py-3 mr-0 sm:mr-20 w-full text-left ${colors.text} cursor-pointer `}
                onClick={() => toggleItem(index)}
                aria-expanded={!!openItems[index]}
                aria-controls={`q${index}-content`}
                
              >
                {openItems[index] ? <FaArrowDown size={20} /> : <FaArrowRight size={20} />}
                <p>{faq.question} </p>
              </button>
              {openItems[index] && (
                <div id={`q${index}-content`} className={`mt-2 sm:mr-20 ${colors.text}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className={`text-[15px] sm:text-[20px] font-bold text-center mt-10`}>Didn’t get, Click below button to more answers or <a href="/get-in-touch" className={`${colors.text} ${colors.link}`}>Contact Us</a></h1>
      </div>
      <div className="flex justify-center">
        <button
  type="button"
  className={`items-center mt-7 px-6 py-3 text-[15px] sm:text-[20px] font-bold text-center mb-20 cursor-pointer rounded-md shadow-md transition duration-300 ${colors.text} ${colors.corperateBtn} hover:opacity-90`}
>
  Grab Your Deal
</button>
      </div>
    </div>
  );
};

export default Questions;