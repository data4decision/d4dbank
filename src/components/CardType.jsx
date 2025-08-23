import React from 'react'
import { FaCheck, FaPlay } from 'react-icons/fa';

const CardType = ({darkMode}) => {
    

     const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const Bg = darkMode ? "bg-pink-200" : "bg-gray-200";
  const gridBg = darkMode ? "bg-white" : "bg-[#ffffff]";
  return (
    <div className={`${bankBg} pt-20 pb-20`}>
       <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] w-[90%] m-auto">
        <div className="flex flex-col gap-2">
            <div className={`flex items-center gap-3 w-[80%] px-8 py-4`}>
                <FaPlay size={15} className={`${textColor}`}/>  
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>Card Type</p>          
            </div>
                 <a href="/services/loans/home-loan" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Home Loan</p>
                    </div>
                </a>
                <a href="/services/loans/personal" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Personal Loan</p>
                    </div>
                </a>
                <a href="/services/loans/vehicle" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Vehicle Loan</p>
                    </div>
                </a>
                <a href="/services/loans/education" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Education Loan</p>
                    </div>
                </a>
                <a href="/services/loans/gold" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Gold Loan</p>
                    </div>
                </a>
                <a href="/services/cards/low-interest" className="block w-[80%] group">
                    <div className={`flex items-center gap-3 ${primarysBg} px-8 py-2 transition-all duration-500 ease-in-out group-hover:flex-row-reverse`}>
                     {/* Square */}
                    <span className={`${primaryBg} w-3 h-3 transition-all duration-500 ease-in-out`} ></span>
                    {/* Text */}
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} transition-all duration-500 ease-in-out`}> Low Interest</p>
                    </div>
                </a>
                <a href="/services/cards/our-all-cards">
                <div className={`flex items-center gap-3 w-[80%] ${Bg} px-8 py-4 justify-between`}>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>Our All Cards</p>
                    <span className={` w-3 h-3 ${textColor} ${primaryBg} rotate-45`}/>            
                </div>
                </a>
        </div>
        <div className="relative ">
            <h1 className={`text-[20px] md:text-[30px] sm:text-[40px] font-bold text-center px-4 py-2 ${textColor}`}>Best Cards for Your Needs</h1>
            <div className={`absolute ${primaryBg} px-2 py-1 right-0 top-18`}>
                        <p className={`${accontBorder}`}>Reward</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-1 pb-2 mt-7">
                <div className="flex flex-col gap-2  border-r">
                    <p className={`text-[20px] md:text-[30px] sm:text-[40px] font-semibold text-center px-4 py-2  ${textColor}`}>Platinum Credit Card</p>
                    <img src="/yes.jpg" alt="" className='w-[80%] m-auto'/>
                    <div className="flex gap-3 justify-around mt-3 ">
                    {/* Apply Now */}
                        <a href="/contact-us" className={`relative inline-block px-6 py-2 font-semibold text-white overflow-hidden group ${primarysBg}`}>
                        <span className="relative z-10">Apply Now</span>
                    {/* Hover background slide up */}
                        <span className={`absolute inset-0 ${primaryBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                         </a>
                         {/* Read More */}
                         <a href="/about-us" className={`relative inline-block px-6 py-2  font-semibold text-white overflow-hidden group ${primaryBg}`}>
                            <span className="relative z-10">Read More</span>
                             {/* Hover background slide up */}
                             <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-3  ${textColor}`}>Explore a new world of rewards with the Platinum Credit Card.</p>
                    
                    <div className="">
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2 font-bold  ${textColor}`}>Features & Benefits</p>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>2% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Multi Rewards & Lifestyle Benefits</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>5X TAT Miles on Travel</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Welcome vouchers worth Rs. 2000+</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>1% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
       <div className="relative grid grid-cols-1 sm:grid-cols-[25%_75%] w-[90%] m-auto ">
        <div className="absolute top-20 left-5 flex flex-col gap-2">
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
        <div className=" flex flex-col gap-2 mt-5 bg-black sm:mr-10">
            <img src="/ourAll.jpg" alt="" className={` sm:h-full h-[350px] object-cover opacity-10`}/>
        </div>
        <div className="relative ">
            
            <div className={`absolute ${primaryBg} px-2 py-1 right-0 top-3`}>
                        <p className={`${accontBorder}`}>Cashback</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-1 pb-2 mt-7">
                <div className="flex flex-col gap-2  border-r">
                    <p className={`text-[20px] md:text-[30px] sm:text-[40px] font-semibold text-center px-4 py-2  ${textColor}`}>Millinnia Credit Card</p>
                    <img src="/AtmCard.jpg" alt="" className='w-[80%] m-auto'/>
                    <div className="flex gap-3 justify-around mt-3 ">
                    {/* Apply Now */}
                        <a href="/contact-us" className={`relative inline-block px-6 py-2 font-semibold text-white overflow-hidden group ${primarysBg}`}>
                        <span className="relative z-10">Apply Now</span>
                    {/* Hover background slide up */}
                        <span className={`absolute inset-0 ${primaryBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                         </a>
                         {/* Read More */}
                         <a href="/about-us" className={`relative inline-block px-6 py-2  font-semibold text-white overflow-hidden group ${primaryBg}`}>
                            <span className="relative z-10">Read More</span>
                             {/* Hover background slide up */}
                             <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-3  ${textColor}`}>Righteous indignation and dislike men who are so beguiled and demoralized.</p>
                    
                    <div className="">
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2 font-bold  ${textColor}`}>Features & Benefits</p>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Welcome vouchers worth Rs. 2000+</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>1% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Lifestyle Benefits</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Access to 1000+ global airport lounges</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 


       <div className="relative sm:w-[68%] w-[90%] m-auto sm:ml-93 mt-15">
            <div className={`absolute ${primaryBg} px-2 py-1 right-0 top-[-17px]`}>
                        <p className={`${accontBorder}`}>Rewards</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-1 pb-2 mt-7">
                <div className="flex flex-col gap-2  border-r">
                    <p className={`text-[20px] md:text-[30px] sm:text-[40px] font-semibold text-center px-4 py-2  ${textColor}`}>Money Back Credit Card</p>
                    <img src="/credit.jpg" alt="" className='w-[80%] m-auto'/>
                    <div className="flex gap-3 justify-around mt-3 ">
                    {/* Apply Now */}
                        <a href="/contact-us" className={`relative inline-block px-6 py-2 font-semibold text-white overflow-hidden group ${primarysBg}`}>
                        <span className="relative z-10">Apply Now</span>
                    {/* Hover background slide up */}
                        <span className={`absolute inset-0 ${primaryBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                         </a>
                         {/* Read More */}
                         <a href="/about-us" className={`relative inline-block px-6 py-2  font-semibold text-white overflow-hidden group ${primaryBg}`}>
                            <span className="relative z-10">Read More</span>
                             {/* Hover background slide up */}
                             <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-3  ${textColor}`}>Explore a new world of rewards with the Credit Card.</p>
                    
                    <div className="">
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2 font-bold  ${textColor}`}>Features & Benefits</p>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>2% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Multi Rewards & Lifestyle Benefits</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>5X TAT Miles on Travel</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Welcome vouchers worth Rs. 2000+</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>1% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="relative sm:w-[68%] w-[90%] m-auto sm:ml-93 mt-15">
            <div className={`absolute ${primaryBg} px-2 py-1 right-0 top-[-17px]`}>
                        <p className={`${accontBorder}`}>Cashback</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-1 pb-2 mt-7">
                <div className="flex flex-col gap-2  border-r">
                    <p className={`text-[20px] md:text-[30px] sm:text-[40px] font-semibold text-center px-4 py-2  ${textColor}`}>Easy EMI Credit Card</p>
                    <img src="/credit.jpg" alt="" className='w-[80%] m-auto'/>
                    <div className="flex gap-3 justify-around mt-3 ">
                    {/* Apply Now */}
                        <a href="/contact-us" className={`relative inline-block px-6 py-2 font-semibold text-white overflow-hidden group ${primarysBg}`}>
                        <span className="relative z-10">Apply Now</span>
                    {/* Hover background slide up */}
                        <span className={`absolute inset-0 ${primaryBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                         </a>
                         {/* Read More */}
                         <a href="/about-us" className={`relative inline-block px-6 py-2  font-semibold text-white overflow-hidden group ${primaryBg}`}>
                            <span className="relative z-10">Read More</span>
                             {/* Hover background slide up */}
                             <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-3  ${textColor}`}>Righteous indignation and dislike men who are so beguiled and demoralized.</p>
                    
                    <div className="">
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2 font-bold  ${textColor}`}>Features & Benefits</p>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Welcome vouchers worth Rs. 2000+</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>1% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Lifestyle Benefits</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Access to 1000+ global airport lounges</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>2% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative sm:w-[68%] w-[90%] m-auto sm:ml-93 mt-15">
            <div className={`absolute ${primaryBg} px-2 py-1 right-0 top-[-17px]`}>
                        <p className={`${accontBorder}`}>Rewards</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-1 pb-2 mt-7">
                <div className="flex flex-col gap-2  border-r">
                    <p className={`text-[20px] md:text-[30px] sm:text-[40px] font-semibold text-center px-4 py-2  ${textColor}`}>Diners Club Privilege Card</p>
                    <img src="/credit.jpg" alt="" className='w-[80%] m-auto'/>
                    <div className="flex gap-3 justify-around mt-3 ">
                    {/* Apply Now */}
                        <a href="/contact-us" className={`relative inline-block px-6 py-2 font-semibold text-white overflow-hidden group ${primarysBg}`}>
                        <span className="relative z-10">Apply Now</span>
                    {/* Hover background slide up */}
                        <span className={`absolute inset-0 ${primaryBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                         </a>
                         {/* Read More */}
                         <a href="/about-us" className={`relative inline-block px-6 py-2  font-semibold text-white overflow-hidden group ${primaryBg}`}>
                            <span className="relative z-10">Read More</span>
                             {/* Hover background slide up */}
                             <span className={`absolute inset-0 ${primarysBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}/>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-3  ${textColor}`}>Explore a new world of rewards with the Privilege Card.</p>
                    
                    <div className="">
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2 font-bold  ${textColor}`}>Features & Benefits</p>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Zero Joining and Annual Fees</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Multi Rewards & Lifestyle Benefits</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>5X TAT Miles on Travel</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>Welcome vouchers worth Rs. 2000+</p>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                            <span className={`w-2 h-2 ${primaryBg}`}></span>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold  px-4 py-2  ${textColor}`}>1% Fuel Surcharge waiver at HPCL Petrol Pumps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardType