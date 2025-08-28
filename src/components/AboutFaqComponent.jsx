import React, { useRef, useState, useEffect } from "react";
import { FaArrowDown, FaArrowRight, FaSearch } from "react-icons/fa";

const AccordionItem = ({ item, isOpen, onToggle, textColor, border }) => {
  const bodyRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    setMaxH(isOpen && bodyRef.current ? bodyRef.current.scrollHeight : 0);
  }, [isOpen, item.answer]);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center gap-7 border ${border} px-4 py-3 text-left transition-colors`}
      >
        {isOpen ? (
          <FaArrowDown className="text-[#e11d48]" /> // red arrow
        ) : (
          <FaArrowRight className={`${textColor}`} />
        )}
        <span
          className={`font-medium ${
            isOpen ? "text-[#e11d48]" : textColor
          }`}
        >
          {item.question}
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{ maxHeight: maxH, transition: "max-height 250ms ease" }}
        className="overflow-hidden"
      >
        <div className={`px-4 py-3 ${textColor}`}>{item.answer}</div>
      </div>
    </div>
  );
};

const AboutFaqComponent = ({ darkMode }) => {
const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const placeholder = darkMode ? 'placeholder-[#f47b20]' : 'placeholder-[#0b0b5c]';
  const text = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
  const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  

  const faqs = [
    { question: "What is the minimum balance?", answer: "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire." },
    { question: "What is the rate of interest?", answer: "There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again." },
    { question: "When will I receive my account statement?", answer: "Consequences that are extremely painful again there anyone rationally encounter who loves or pursues desire." },
    { question: "Can I use any branch across India?", answer: "Extremely painful again there anyone who rationally encounter consequences that are loves or pursues desire." },
    { question: "How safe/secure is our net banking a/c?", answer: "Anyone who loves or pursues desire rationally encounter consequences that are extremely painful again there." },
    { question: "How you safe/secure is our net banking a/c?", answer: "Pursues desire rationally encounter consequences that are anyone who loves or extremely painful again there." },
    { question: "Who loves or extremely painful again there?", answer: "Anyone who loves or extremely painful again there pursues desire rationally encounter consequences that are." },
    { question: "Encounter who loves or pursues desire", answer: "That are extremely painful again there anyone rationally encounter who loves or pursues desire consequences." },
  ];

  // split into 2 independent columns
  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  // states: first open in col1, all closed in col2
  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(null);

  const toggleCol1 = (i) => setOpen1((prev) => (prev === i ? null : i));
  const toggleCol2 = (i) => setOpen2((prev) => (prev === i ? null : i));

  return (
    <div className={`${bankBg} pb-20 pt-20`}>
        <div className="flex flex-col items-center justify-center gap-8">
        <h1 className={`text-[25px] md:text-[40px] text-center ${textColor} leading-none font-semibold`}>
          Frequently Asked Questions
        </h1>
        <p className={`text-[15px] md:text-[20px] text-center ${textColor}`}>
          Find answers to all your queries about our service.
        </p>

        <div className={`flex items-center gap-3 ${primaryBg} w-full max-w-md px-4 py-3 rounded`}>
          <input
            type="text"
            name="keyword"
            placeholder="Related Keywords"
            className={`w-full outline-none text-[15px] md:text-[18px] ${placeholder} ${texts}`}
          />
          <FaSearch size={18} className={`${texts} `} />
        </div>
      </div>
      
      <div className="mx-auto  max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-10 pt-20">
        {/* Left column */}
        <div className={`flex flex-col gap-6`}>
          {col1.map((item, i) => (
            <AccordionItem
              key={`c1-${i}`}
              item={item}
              isOpen={open1 === i}
              onToggle={() => toggleCol1(i)}
              textColor={textColor}
              border={border}
              
            />
          ))}
        </div>

        {/* Right column */}
        <div className={`flex flex-col gap-6 `}>
          {col2.map((item, i) => (
            <AccordionItem
              key={`c2-${i}`}
              item={item}
              isOpen={open2 === i}
              onToggle={() => toggleCol2(i)}
              textColor={textColor}
              border={border}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFaqComponent;
