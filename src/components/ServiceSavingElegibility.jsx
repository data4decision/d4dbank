import React, { useState, useEffect } from 'react';

// CountUp component to animate the number
const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = target;
    const range = end - start;
    const increment = range / (duration / 100); // Calculate increment for each step

    let current = start;
    const interval = setInterval(() => {
      current += increment; // Increment the count
      if (current >= end) {
        clearInterval(interval); // Stop the animation when it reaches the target
        current = end; // Ensure the count ends at the target value
      }
      setCount(Math.floor(current)); // Update the count state
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts or changes
  }, [target, duration]);

  return <div>{count > 999 ? `${(count / 1000).toFixed(1)}k` : count}</div>; // Format as 'k' for large numbers
};

const ServiceSavingElegibility = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";

  return (
    <div className={`${primaryBg} pt-20`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 w-[80%] m-auto relative`}>
        {/* Left Panel */}
        <div className="flex flex-col gap-3">
          <div>
            <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] font-bold ${BtnText}`}>
              Eligibility to <br /> Open Savings Account
            </h1>
            <p className={`text-[15px] sm:text-[15px] md:text-[15px] ${BtnText}`}>
              Eligibility parameters for saving account.
            </p>
          </div>
          <div>
            <img
              src="/happy.jpg"
              alt=""
              className="transition-all duration-500 filter grayscale hover:grayscale-0 hover:scale-95"
            />
          </div>
        </div>
        <div className={`flex items-center sm:mt-110 mt-125 justify-center gap-4 p-3 ${bankBg} rounded-lg shadow-md sm:w-[80%] w-full sm:ml-20`}>
            {/* Circle with number */}
            <div className={`flex items-center justify-center w-16 h-16 ${primarysBg} ${textColor} text-[22px] font-bold rounded-full shadow-lg`}>
              <CountUp target={2300} />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold text-[#0b0b5c]">Saving account opened</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">in last year</p>
            </div>
          </div>

        {/* Right Panel */}
        <div className={`absolute flex flex-col sm:top-3 bottom-30 sm:right-20 right-0  p-4 rounded-lg shadow-md ${primarysBg} gap-2`}>
          {/* Eligibility Cards */}
          {['1', '2', '3', '4'].map((num, index) => (
            <div key={index} className="flex items-center gap-6 p-4 rounded-lg shadow-md bg-white">
              <div className={`flex items-center justify-center w-12 h-12 ${primarysBg} ${textColor} text-[18px] sm:text-[20px] md:text-[20px] font-bold rounded-full shadow-xl`}>
                {num}
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-[#0b0b5c]">Nationality</h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Indian Residents, and Non-Resident individuals
                </p>
              </div>
            </div>
          ))}

         

          {/* Count Up Card */}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceSavingElegibility;
