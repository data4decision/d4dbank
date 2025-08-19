import React, { useState, useEffect } from "react";
import { FaArrowRight, FaDownload, FaApple } from "react-icons/fa";

const Flexible = ({ darkMode }) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8);
  const [activeLoan, setActiveLoan] = useState("HomeLoan");

  const secondBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const primarysBg = darkMode ? "bg-white" : "bg-pink-100";
  const backBg = darkMode ? "bg-gray-300" : "bg-pink-100";
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const textColor = darkMode ? "text-[#f47b20]" : "text-[#0b0b5c]";
  const accontBorder = darkMode ? "text-[#f49c90]" : "text-[#5c2e8c]";
  const borderColor = darkMode ? "border-[#f47b20]" : "border-[#0b0b5c]";
  const btnHover = darkMode
    ? "hover:bg-[#0b0b5c] hover:scale-105 hover:shadow-lg"
    : "hover:bg-[#f47b20] hover:scale-105 hover:shadow-lg";
  const btnsHover = darkMode
    ? "hover:bg-[#f47b20] hover:scale-105 hover:shadow-lg"
    : "hover:bg-[#0b0b5c] hover:scale-105 hover:shadow-lg";

  const loanConfigs = {
    HomeLoan: {
      loanAmount: { min: 0, max: 1700000, label: "Loan Amount", unit: "$" },
      loanTerm: { min: 0, max: 20, label: "Loan Term (Years)", unit: "Yrs" },
      interestRate: { min: 0, max: 14, label: "Interest Rate", unit: "%" },
    },
    PersonalLoan: {
      loanAmount: { min: 0, max: 500000, label: "Loan Amount", unit: "$" },
      loanTerm: { min: 0, max: 5, label: "Loan Term (Years)", unit: "Yrs" },
      interestRate: { min: 0, max: 20, label: "Interest Rate", unit: "%" },
    },
    VehicleLoan: {
      loanAmount: { min: 0, max: 2000000, label: "Loan Amount", unit: "$" },
      loanTerm: { min: 0, max: 7, label: "Loan Term (Years)", unit: "Yrs" },
      interestRate: { min: 0, max: 12, label: "Interest Rate", unit: "%" },
    },
  };

  const currentConfig = loanConfigs[activeLoan];

  // EMI Calculation
  const calculateEMI = () => {
    const principal = loanAmount;
    const annualRate = interestRate / 100;
    const monthlyRate = annualRate / 12;
    const months = loanTerm * 12;

    if (principal === 0 || months === 0 || monthlyRate === 0) {
      return { emi: 0, totalInterest: 0, totalAmount: 0 };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  const { emi, totalInterest, totalAmount } = calculateEMI();

  useEffect(() => {
    setLoanAmount(
      Math.min(
        Math.max(loanAmount, currentConfig.loanAmount.min),
        currentConfig.loanAmount.max
      )
    );
    setLoanTerm(
      Math.min(
        Math.max(loanTerm, currentConfig.loanTerm.min),
        currentConfig.loanTerm.max
      )
    );
    setInterestRate(
      Math.min(
        Math.max(interestRate, currentConfig.interestRate.min),
        currentConfig.interestRate.max
      )
    );
  }, [activeLoan]);

  // Placeholder functions for button clicks
  const handleDownloadClick = () => {
    alert("Download button clicked!");
    // Add actual download logic here
  };

  const handleAppleClick = () => {
    alert("Contact Us button clicked!");
    // Add actual contact logic here
  };

  return (
    <div className={`${backBg} pt-20`}>
      <div className={`text-center pt-20 ${textColor} py-10 pt-12 pb-20`}>
        <h1 className="text-[25px] sm:text-[30px] md:text-[35px] font-bold">
          Flexible EMI Calculator Online
        </h1>
        <p className="text-[15px] sm:text-[18px] md:text-[25px] mt-4">
          Easily calculate your equated monthly installment online.
        </p>
      </div>

      <div
        className={`flex flex-col sm:flex-row sm:h-[550px] h-[1200px] gap-3 sm:m-auto ${primaryBg} sm:w-[85%] w-full rounded-lg`}
      >
        <div className="flex flex-col sm:w-1/2 w-full items-center sm:items-center rounded-lg shadow-lg relative">
          <div className="w-full sm:w-full">
            <img
              src="/flexible.jpg"
              alt="Loan Options"
              className="w-full sm:w-[400px] h-[550px] opacity-80 object-cover"
            />
          </div>

          <div className="flex sm:flex-col justify-center items-center w-[60%] gap-6 absolute sm:bottom-64 sm:left-68">
            {["HomeLoan", "PersonalLoan", "VehicleLoan"].map((loanType) => (
              <button
                key={loanType}
                onClick={() => setActiveLoan(loanType)}
                className={`sm:w-[70px] sm:h-[70px] w-20 h-17 mt-4 bg-red-500 rounded-full flex items-center justify-center ${
                  activeLoan === loanType ? "ring-4 ring-white" : ""
                }`}
              >
                <img
                  src="home.png" // Change this to individual images for each loan type if needed
                  alt={`${loanType} icon`}
                  className="w-10 h-10"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-[70%] p-4 mt-[40px] sm:mr-15 sm:ml-10">
          <div className="space-y-6">
            {/* Loan Amount Slider */}
            <div>
              <label className="text-xl font-medium">
                {currentConfig.loanAmount.label}
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="range"
                  min={currentConfig.loanAmount.min}
                  max={currentConfig.loanAmount.max}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#0b0b5c] rounded-lg"
                />
                <div
                  className={`ml-4 ${accontBorder} p-2`}
                >{`${currentConfig.loanAmount.unit}${loanAmount.toLocaleString()}`}</div>
              </div>
            </div>

            {/* Loan Term Slider */}
            <div>
              <label className="text-xl font-medium">
                {currentConfig.loanTerm.label}
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="range"
                  min={currentConfig.loanTerm.min}
                  max={currentConfig.loanTerm.max}
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-[#0b0b5c] rounded-lg"
                />
                <div
                  className={`ml-4 ${accontBorder} flex items-center gap-2`}
                >
                  <p>{loanTerm}</p>
                  <p>{currentConfig.loanTerm.unit}</p>
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <label className="text-xl font-medium">
                {currentConfig.interestRate.label}
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="range"
                  min={currentConfig.interestRate.min}
                  max={currentConfig.interestRate.max}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#0b0b5c] rounded-lg"
                />
                <div
                  className={`ml-4 ${accontBorder} flex items-center gap-2`}
                >
                  <p>{interestRate}</p>
                  <p>{currentConfig.interestRate.unit}</p>
                </div>
              </div>
            </div>

            {/* EMI and Additional Info */}
            <div className={`w-full p-2 ${primarysBg} rounded-lg shadow-lg`}>
              <div className="flex gap-10 pt-5 pb-5">
                <div className="flex gap-3">
                  <div>
                    <img
                      src="/hand.png"
                      alt="EMI"
                      className={`w-12 h-12 rounded-full border p-2 mt-5 ${borderColor} ${btnHover}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[15px] sm:text-[15px] md:text-[15px]">
                      Your Monthly EMI
                    </p>
                    <div className="flex items-center">
                      <p className="text-[12px] sm:text-[15px] md:text-[17px]">
                        $
                      </p>
                      <h1 className="text-[15px] sm:text-[18px] md:text-[40px]">
                        {emi}
                      </h1>
                    </div>
                    <button
                      type="button"
                      className={`${textColor} ${primarysBg} rounded-lg px-7 py-2 cursor-pointer mt-3 ${btnHover}`}
                    >
                      Apply Online
                    </button>
                  </div>
                  <div className="border-r h-40"></div>
                </div>
                <div>
                  <div className="flex items-center gap-5 mb-3">
                    <div className="mb-4">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[15px] sm:text-[15px] md:text-[15px] font-bold"
                      >
                        Interest Amount
                      </a>
                      <p>${totalInterest}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center gap-5 mt-3">
                    <div className="mb-4">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[15px] sm:text-[18px] md:text-[15px] font-bold"
                      >
                        Total Amount Payable
                      </a>
                      <p>${totalAmount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center mt-20 bg-black bg-opacity-30">
        <img
          src="/contact.jpg"
          alt="hero"
          className="w-full h-[180px] sm:h-[250px] md:h-[300px] object-cover"
        />
        <div className="flex flex-col md:flex-row justify-around items-center gap-5 absolute left-0 top-0 w-full h-full">
          <div>
            <div>
              <h1
                className={`text-[15px] sm:text-[28px] md:text-[30px] font-bold ${textColor}`}
              >
                Experience a New Digital World.
              </h1>
              <p
                className={`text-[12px] sm:text-[22px] md:text-[20px] ${textColor}`}
              >
                Mobile banking application with new & exciting features.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-6">
              {/* Download Button */}
              <button
                onClick={handleDownloadClick}
                className={`flex items-center justify-center p-4 ${primaryBg} text-white rounded-lg shadow-lg ${btnsHover} cursor-pointer`}
              >
                <FaDownload size={30} />
                <span className="ml-2">Download</span>
              </button>
              {/* Apple Button */}
              <button
                onClick={handleAppleClick}
                className={`flex items-center justify-center p-4 ${secondBg} text-white rounded-lg shadow-lg ${btnsHover} cursor-pointer`}
              >
                <FaApple size={30} />
                <span className="ml-2">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexible;