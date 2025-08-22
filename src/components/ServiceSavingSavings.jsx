import React from 'react'
import { FaPlay } from 'react-icons/fa6';

const ServiceSavingSavings = ({darkMode}) => {
     const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const Bg = darkMode ? "bg-pink-200" : "bg-gray-200";
  const gridBg = darkMode ? "bg-white" : "bg-[#ffffff]";
  return (
    <div className={`${Bg} pt-20`}>
        <div >
            <h1 className={`text-center text-[25px] m-auto sm:text-[40px] md:text-[40px] font-bold w-[70%] ${textColor}`}>
          Savings A/c Required Documents
        </h1>
        <p className={`text-center m-auto text-[15px] sm:text-[20px] md:text-[20px] w-[70%] ${textColor}`}>
          Basic documents required for opening a savings account.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-[80%] m-auto gap-3 pb-20 pt-10">
            <div className="flex flex-col gap-3">
                <div className={`flex gap-5 items-center ${gridBg} px-4 py-4`}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] font:semi-bold ${textColor}`}>Pan Card <br/>is Madatory</p>
            </div>
            <div className={`flex gap-5 items-center ${gridBg} px-4 py-4`}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] font:semi-bold ${textColor}`}>Duly Fill Application Form</p>
            </div>
            </div>
            <div className={`flex flex-col ${gridBg} gap-1 p-4 sm:h-46 h-40`}>
                <div className={`flex gap-5 items-center `}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Non Resident</p>
                </div>
                 <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Passport</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Driving Licence</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Aadhaar Number</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Voter’s Identity Card</p>
                </div>
                </a>
            </div>
            {/* card 3 */}
            <div className={`flex flex-col ${gridBg} gap-1 p-4 sm:h-46 h-40`}>
                <div className={`flex gap-5 items-center `}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] font-bold ${textColor}`}>For Resident</p>
                </div>
                 <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Passport</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Visa</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Bank Statement (If any)</p>
                </div>
                </a>
                <a href=""> 
                <div className={`flex gap-5 items-center `}>  
                <FaPlay size={30} className={`w-3 h-3 ${textColor}`}/>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] semi-bold ${textColor}`}>Company Proof</p>
                </div>
                </a>
            </div>
            {/* Card 4 */}
            <div className="">
                <div className="flex flex-col gap-3">
                <div className={`flex gap-3 items-center ${gridBg} px-4 py-4`}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] font:semi-bold ${textColor}`}>Color & Passport Size Photographs</p>
            </div>
            <div className={`flex gap-3 items-center ${gridBg} px-4 py-4`}>
                <span className={`w-3 h-3 ${primarysBg}`}></span>
                <p className={`text-[15px] sm:text-[18px] md:text-[18px] font:semi-bold ${textColor}`}>Color & Passport Size Photographs</p>
            </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSavingSavings