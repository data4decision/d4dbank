import React from 'react'

const ServiceSavingOurSaving = ({darkMode}) => {
    const primaryBg   = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg  = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg      = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border      = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor   = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText     = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  return (
    <div className={` ${bankBg} pb-20 pt-20`}>
        <div className={`text-center flex flex-col gap-2 mb-20 `}>
        <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] font-bold ${textColor}`}>
          Our Savings Account Benefits
        </h1>
        <p className={`text-[12px] sm:text-[20px] md:text-[20px] ${textColor}`}>
          We help businesses and customers achieve more.
        </p>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-3 w-[80%] m-auto gap-4 `}>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4 sm:border-r ${border}`}>
                <img src="/earn.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Earn Interest up to 7%</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>Holds these matters principles selection right some rejects.</p>
            </div>
            <hr className={`${border} mr-4 `} />
        </div>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4 sm:border-r  ${border}`}>
                <img src="/notification.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Free SMS Alerts</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>Business will frequently occur that pleasure have to be repudiated.</p>
            </div>
            <hr className={`${border} mr-4`} />
        </div>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4   ${border}`}>
                <img src="/lock.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Discounts on Locker</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>The wise man therefore always holds these principle of selection.</p>
            </div>
            <hr className={`${border}`}/>
        </div>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4 sm:border-r  ${border}`}>
                <img src="/debit.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>International Debit Cards</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>The wise man therefore always holds these principle of selection.</p>
                </div>
        </div>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4 sm:border-r  ${border}`}>
                <img src="/safe.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Provides Safety</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>These matters principles selection right some rejects holds.</p>
            </div>
        </div>
        <div className="">
            <div className={`flex flex-col items-center justify-center gap-3 p-4  ${border}`}>
                <img src="/paper.png" alt="" className={`w-15 h-15`}/>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[20px] font-bold ${textColor}`}>Paperless Banking</h1>
                <p className={`text-[14px] sm:text-[15px] md:text-[15px] ${textColor} text-center`}>Occur that pleasure have to be repudiated business will frequently .</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default ServiceSavingOurSaving