import React from 'react';

const ServicesSavingAccountInterest = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const border = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const container =darkMode ?  "bg-orange-200":"bg-pink-100" 

  return (
    <div className={`text-center flex flex-col gap-4 mb-20 pt-20 pb-20 ${container}`}>
      <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] font-bold ${textColor}`}>
        Get More From Your Money
      </h1>
      <p className={`text-[12px] sm:text-[20px] md:text-[20px] ${textColor}`}>
        Access your money anytime and anywhere.
      </p>

      <div className="overflow-x-auto mt-8">
        <table className={`table-auto w-[80%] m-auto text-sm md:text-lg border-1 ${border}`}>
          
          <tbody className="">
            {/* First Row (Account Interest Rates) */}
            <tr className="border-r">
              <td className={`border-r  px-4 py-2 font-bold ${textColor} ${border}`}></td>
              <td className={`border-r border-b px-4 py-2 ${textColor}  ${border}`}>Balance in Account</td>
              <td className={`border-r border-b px-4 py-2 ${textColor}  ${border}`}>Interest</td>
            </tr>
            {/* Second Row */}
            <tr className="border-r">
              <td className={`border-r px-4 py-2  ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2  ${textColor} ${border}`}>Up to Rs. 1 Lakh</td>
              <td className={`border-r px-4 py-2  ${textColor} ${border}`}>3.00%</td>
            </tr>
            {/* Third Row */}
            <tr className="border-r">
              <td className={`border-r px-4 py-2 font-bold ${textColor} ${border}`}>Account Interest Rates Per Annum</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Above 1 Lakh to 5 Lakh</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>5.00%</td>
            </tr>
            {/* Fourth Row */}
            <tr>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Above 5 Lakh to 10 Lakh</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>8.25%</td>
            </tr>
             <tr>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Above 10 Lakh</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>10.00%</td>
            </tr>
          </tbody>
          <tbody className={``}>
            {/* First Row (Account Interest Rates) */}
            <tr className="border-r">
              <td className={`border-r border-t px-4 py-2 font-bold ${textColor} ${border}`}>Debit Card</td>
              <td className={`border-r border-t px-4 py-2 ${textColor} ${border}`}>Annual Fees</td>
              <td className={`border-r border-t px-4 py-2 ${textColor} ${border}`}>Nill</td>
            </tr>
            {/* Second Row */}
            <tr className="border-r">
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Transaction Limit</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>20 Lakh / Annum</td>
            </tr>
            {/* Third Row */}
            <tr className="border-r">
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Card Replacement</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Rs.600+Taxes</td>
            </tr>
            
          </tbody>
           <tbody className={``}>
            {/* First Row (Account Interest Rates) */}
            <tr className="border-r">
              <td className={`border-r border-t px-4 py-2 font-bold ${textColor} ${border}`}>Credit Card</td>
              <td className={`border-r border-t px-4 py-2 ${textColor} ${border}`}>Annual Fees</td>
              <td className={`border-r border-t px-4 py-2 ${textColor} ${border}`}>Rs.1500</td>
            </tr>
            {/* Second Row */}
            <tr className="border-r">
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}></td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Card Replacement</td>
              <td className={`border-r px-4 py-2 ${textColor} ${border}`}>Rs.600+Taxes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesSavingAccountInterest;
