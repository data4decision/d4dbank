import React from 'react'
import { FaArrowDown, FaArrowRight, FaCheck,  FaPlay } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';
import { SiBrex } from "react-icons/si";

import OfferCard from './OfferCard';

const BusinessCard = ({darkMode}) => {
     const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-orange-100";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const Bg = darkMode ? "bg-orange-50" : "bg-gray-50";
  const gridBg = darkMode ? "bg-[#0b0b5c]/30" : "bg-[#f47b20]/20";
   const text = darkMode ? "text-[#f47b20]" : "text-[#0b0b5c]";
  return (
    <div className={`${bankBg} pt-20 pb-20`}>
           <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] w-[90%] m-auto">
            <div className={`flex flex-col gap-2 ${gridBg} h-[800px] h-[850px]`}>
                <div className={`flex items-center gap-3 w-[80%] pl-2 py-4 ml-7`}>
                    <FaPlay size={15} className={`${textColor}`}/>  
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>Card Type</p>          
                </div>
                     <a href="/services/loans/home-loan" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Home Loan</p>
                        </div>
                    </a>
                    <a href="/services/loans/personal" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Personal Loan</p>
                        </div>
                    </a>
                    <a href="/services/loans/vehicle" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Vehicle Loan</p>
                        </div>
                    </a>
                    <a href="/services/loans/education" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Education Loan</p>
                        </div>
                    </a>
                    <a href="/services/loans/gold" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Gold Loan</p>
                        </div>
                    </a>
                    <a href="/services/cards/low-interest" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Low Interest</p>
                        </div>
                    </a>
                    <a href="/services/cards/our-all-cards" className="block w-[80%] ml-7 group">
                        <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                         {/* Square */}
                        <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                        {/* Text */}
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Our All Cards</p>
                        </div>
                    </a>
                    <div className="absolute sm:top-275 top-210 left-30 flex flex-col gap-2 ">
                                <div className="flex items-center">
                                    <img src="/logo.png" alt="" className='w-8 h-4' />
                                    <p className={`text-[15px] md:text-[25px] sm:text-[25px] font-bold  px-4 py-2 font-bold ${BtnText}`}>Smart Bank</p>
                                </div>
                                <div className="">
                                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] font-bold w-40 ${BtnText}`}>Apply for Credit Card Online</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCheck size={17} className={`${textColor}`}/>
                                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  w-40 ${BtnText}`}>The Well Master-Builder</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCheck size={17} className={`${textColor}`}/>
                                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  w-40 ${BtnText}`}>On the other hand</p>
                                </div>
                                <a href="/about-us" className={`relative inline-block px-6 py-2 mt-10 font-semibold text-white overflow-hidden group ${primaryBg}`}>
                                                <span className="relative z-10 ml-10">Apply Now</span>
                                                 {/* Hover background slide up */}
                                                 <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                                            </a>
                            </div>
                            <div className=" flex flex-col gap-2 mt-5 bg-black sm:ml-7 sm:mr-7 ml-7 mr-10">
                                <img src="/ourAll.jpg" alt="" className={` sm:h-[350px] h-[350px] object-cover opacity-10`}/>
                            </div>
            </div>
            <div className="relative mt-10 sm:mt-0 ">
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] font-semibold ${text} ml-10`}>Know About</p>
                <h1 className={`text-[20px] md:text-[30px] sm:text-[40px] font-bold ml-10 py-2 ${textColor}`}>Business Cards</h1>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} ml-10`}>Fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice the claims off duty or the obligations business it will frequently occur that pleasures.</p>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} ml-10 mt-2`}>Through weakness of will which is the same as saying through shrinking from toil and pain cases are per- fectly simple and easy to distinguish in a free hour.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2  pb-2 mt-7">
                    <div className="flex flex-col gap-2">
  <img
    src="/ourAll.jpg"
    alt=""
    className="w-[80%] m-auto border-7 shadow-2xl"
  />
  <img
    src="/ourAll.jpg"
    alt=""
    className="w-[80%] m-auto border-7 shadow-2xl"
  />
</div>

                    <div className="">
                        <div className="flex flex-col gap-1">
                        <IoShieldCheckmark size={30} className={` ml-2 ${textColor}`}/>
                        <p className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-3  ${textColor}`}>Welcome Bonus</p>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px]   px-4 py-2  ${textColor}`}>Holds these matters principles selection right some rejects.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                        <IoShieldCheckmark size={30} className={` ml-2 ${textColor}`}/>
                        <p className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-3  ${textColor}`}>Accelerated Rewards</p>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px]   px-4 py-2  ${textColor}`}>Business will frequently occur that pleasure have to be repudiated.</p>
                        </div>
                         <div className="flex flex-col gap-1">
                        <IoShieldCheckmark size={30} className={` ml-2 ${textColor}`}/>
                        <p className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-3  ${textColor}`}>Fuel Surcharge Waiver</p>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px]   px-4 py-2  ${textColor}`}>The wise man therefore always holds these principle of selection.</p>
                        </div>
                    </div>
                </div>
                <div className="sm:ml-7">
                        <p className={`text-[20px] md:text-[30px] sm:text-[30px] font-semibold  px-4 py-2  ${textColor}`}>Features</p>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px]   px-4 py-2  ${textColor}`}>Same as saying through shrinking from toil and pain cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice the claims off duty or the obligations.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4">
                            <div className=" ">
                                <img src="/earn.png" alt="" className='w-15 h-15 ml-5 '/>
                                <h1 className={`text-[15px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-2  ${textColor}`}>Earn Interest up to 7%</h1>
                                <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>Holds these matters principles selection right some rejects.</p>
                            </div>
                            <div className="">
                                <img src="/notification.png" alt="" className='w-15 h-15 ml-5'/>
                                <h1 className={`text-[15px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-2  ${textColor}`}>Free SMS Alerts</h1>
                                <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>Business will frequently occur that pleasure have to be repudiated.</p>
                            </div>
                            <div className="">
                                <img src="/debit.png" alt="" className='w-15 h-15 ml-5'/>
                                <h1 className={`text-[15px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-2  ${textColor}`}>International Debit Cards</h1>
                                <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>The wise man therefore always holds these principle of selection.</p>
                            </div>
                            <div className="">
                                <img src="/safe.png" alt="" className='w-15 h-15 ml-5'/>
                                <h1 className={`text-[15px] md:text-[25px] sm:text-[25px] font-semibold  px-4 py-2  ${textColor}`}>Provides Safety</h1>
                                <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>These matters principles selection right some rejects holds.</p>
                            </div>
                        </div>
                       <div className="mt-10">
                        <h1 className={`text-[20px] md:text-[30px] sm:text-[30px] font-semibold  px-4 py-2  ${textColor}`}>Exciting Offers for You</h1>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>Toil and pain cases are perfectly simple and easy to distinguish a free hour.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                            
                            <div className="">
                                <OfferCard brand="Brex"  category="Entertainment" title="Get 20% Cashback on Xfinity Restaurant." expires="Till: 10th Jul'22" logo={<SiBrex className="text-2xl text-gray-400" />}/>
                            </div>
                            <div className="">
                            <OfferCard brand="xfinity" category="Medical" title="Get 10% Cashback on Xfinity Restaurant." expires="Till: 25th Jun'22"/>
                            </div>
                        </div>
                       </div>
                       <div className={`mt-10 ${gridBg} shadow-lg`}>
                        <a href="#">
                       <div className={`flex items-center justify-between px-8 py-2 ${primaryBg}`}>
                         <p className={`text-[20px] md:text-[30px] sm:text-[30px] font-semibold  px-4 py-2  ${text}`}>Elegible to Apply</p>
                         <FaArrowDown size={20} className={` ${text}`}/>
                       </div>
                       </a>
                       <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ml-8 px-4 py-2 font-semibold ${textColor}`}>To apply for a Credit Card</p>
                        <div className="flex gap-2 items-center ml-10">
                            <FaPlay size={15} className={`${textColor}`}/>
                            <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>You will need to be minimum 18 years of age.</p>
                        </div>
                        <div className="flex gap-2 items-center ml-10">
                            <FaPlay size={15} className={`${textColor}`}/>
                            <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>For salary person net annual income of Rs 4.5 lakh or more</p>
                        </div>
                        <div className="flex gap-2 items-center ml-10">
                            <FaPlay size={15} className={`${textColor}`}/>
                            <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>Consider a credit score between 750 and 900 to be adequate for a Credit Card.</p>
                        </div>
                        <div className="flex gap-2 items-center ml-10">
                            <FaPlay size={15} className={`${textColor}`}/>
                            <p className={`text-[15px] md:text-[20px] sm:text-[20px]  px-4 py-2  ${textColor}`}>Location is also another factor</p>
                        </div>
                       </div>
                    </div>
                    <div className="mt-10">
                         <a href="#">
                       <div className={`flex items-center justify-between px-8 py-2 ${primaryBg}`}>
                         <p className={`text-[20px] md:text-[30px] sm:text-[30px] font-semibold  px-4 py-2  ${text}`}>Fee & Charges</p>
                         <FaArrowRight size={20} className={` ${text}`}/>
                       </div>
                       </a>
                       </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default BusinessCard