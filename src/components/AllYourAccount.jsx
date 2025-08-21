import React from 'react'
import { FaUserTie } from 'react-icons/fa';


const AllYourAccount = ({darkMode}) => {

    const primaryBg  = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
    const primarysBg  = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const bankBg     = darkMode ? 'bg-gray-300' : 'bg-purple-200';
  const textColor  = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  const accentBtnBg = darkMode ? 'bg-[#ffb366]' : 'bg-[#0b0b5c]';
  const BtnBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
  return (
    <div className={` ${bankBg} pt-20 `}>
        <div className="text-center flex flex-col gap-2 mb-10">
        <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] font-bold ${textColor}`}>
          Your Account In Easy Steps
        </h1>
        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>
          We show our value by serving faithfully.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:gap-8 gap-10 w-[80%] m-auto  pb-10">
         <div className={`relative flex flex-col p-6 gap-3 ${primaryBg} rounded-md shadow-md`}>
          {/* Ribbon corner */}
          <span className={`absolute top-7 right-0 ${bankBg} ${textColor} text-[15px] font-bold px-16 py-1 transform translate-x-[22%] -translate-y-[19%] rotate-45 `}  >
           STEP 01
         </span>

           {/* Icon + text row */}
           <div className={` p-2`}>
               <FaUserTie size={30} className={`${textColor} transition-transform duration-500 group-hover:translate-x-[-10px]`}/>
           </div>

           {/* Title */}
            <div>
           <a href="#" className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">
             Consult With Our Experts
           </a>
        </div>

        <hr className="border-white/40" />

         {/* Description */}
        <div>
           <p className={`text-[15px] md:text-[18px] sm:text-[18px] text-white  `}> The claims off duty or the obligations business it will frequently occur.</p>
        </div>
        </div>

         <div className="">
            <div className={`relative flex flex-col p-6 gap-3 ${primaryBg} rounded-md shadow-md`}>
          {/* Ribbon corner */}
          <span className={`absolute top-7 right-0 ${bankBg} ${textColor} text-[15px] font-bold px-16 py-1 transform translate-x-[22%] -translate-y-[19%] rotate-45 `}  >
           STEP 02
         </span>

           {/* Icon + text row */}
           <div className={` p-2`}>
               <FaUserTie size={30} className={`${textColor} transition-transform duration-500 group-hover:translate-x-[-10px]`}/>
           </div>

           {/* Title */}
            <div>
           <a href="#" className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">
              Submit Required Documents
           </a>
        </div>

        <hr className="border-white/40" />

         {/* Description */}
        <div>
           <p className={`text-[15px] md:text-[18px] sm:text-[18px] text-white  `}> Toil and pain cases are perfectly simple and easy to all our distinguish.</p>
        </div>
        </div>
         </div>
         <div className="">
            <div className={`relative flex flex-col p-6 gap-3 ${primaryBg} rounded-md shadow-md`}>
          {/* Ribbon corner */}
          <span className={`absolute top-7 right-0 ${bankBg} ${textColor} text-[15px] font-bold px-16 py-1 transform translate-x-[22%] -translate-y-[19%] rotate-45 `}  >
           STEP 03
         </span>

           {/* Icon + text row */}
           <div className={` p-2`}>
               <FaUserTie size={30} className={`${textColor} transition-transform duration-500 group-hover:translate-x-[-10px]`}/>
           </div>

           {/* Title */}
            <div>
           <a href="#" className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">
             <p className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">KYC</p> 
             <p className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">Verification</p>
           </a>
        </div>

        <hr className="border-white/40" />

         {/* Description */}
        <div>
           <p className='text-[15px] md:text-[18px] sm:text-[18px] text-white pb-7'> Obligations business it will frequently occur the claims off duty or the.</p>
        </div>
        </div>
         </div>
         <div className="">
            <div className={`relative flex flex-col p-6 gap-3 ${primaryBg} rounded-md shadow-md `}>
          {/* Ribbon corner */}
          <span className={`absolute top-7 right-0 ${bankBg} ${textColor} text-[15px] font-bold px-16 py-1 transform translate-x-[22%] -translate-y-[19%] rotate-45 `}  >
           STEP 04
         </span>

           {/* Icon + text row */}
           <div className={` p-2`}>
               <FaUserTie size={30} className={`${textColor} transition-transform duration-500 group-hover:translate-x-[-10px]`}/>
           </div>

           {/* Title */}
            <div>
           <a href="#" className="text-[15px] md:text-[20px] sm:text-[20px] text-white font-semibold">
             Start Saving For Your Future
           </a>
        </div>

        <hr className="border-white/40" />

         {/* Description */}
        <div>
           <p className={`text-[15px] md:text-[18px] sm:text-[18px] text-white pb-7  `}> Pain cases are perfectly simple and easy to all our toil and distinguish.</p>
        </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default AllYourAccount