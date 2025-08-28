import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'

const AboutCareerDetailComponent = ({darkMode}) => {
     const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const placeholder = darkMode ? 'placeholder-[#0b0b5c]' : 'placeholder-[#f47b20]';
  const text = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
  const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  return (
    <div className={`${bankBg} pt-20 pb-20`}>
        <div className={`grid grid-cols-1 sm:grid-cols-[65%_35%] md:grid-cols-[65%_35%] w-[85%] m-auto gap-10`}>
           <div className="">
             <div className={`flex items-center justify-between ${primaryBg} px-10 py-2`}>
                <div className={`flex flex-col gap-2`}>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${accontBorder}`}>Marketing</p>
                    <h1 className={`text-[25px] md:text-[30px] sm:text-[30px] ${accontBorder}`}>Regional Head Officer</h1>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={20} className={`${texts} `}/>
                        <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${accontBorder}`}> Bellflower, Los Angeles</p>
                    </div>
                </div>
                <div className="">
                    <div className={``}>
                        <a href=""className={`${primarysBg}  relative group inline-block overflow-hidden px-4 py-2`}>
                            <span className={`${textColor} relative z-10 text-[15px] md:text-[15px] font-semibold sm:text-[15px]`}>Save This Job</span>
                            <span className={`absolute inset-0 group-hover:translate-y-0 transform translate-y-full duration-300 ${bankBg}`}></span>
                        </a>
                    </div>
                    <div className={``}>
                        <a href=""className={`${bankBg}  relative group inline-block overflow-hidden px-6 py-2`}>
                            <span className={`${textColor} relative z-10 text-[15px] md:text-[15px] font-semibold sm:text-[15px]`}>Apply Now</span>
                            <span className={`absolute inset-0 group-hover:translate-y-0 transform translate-y-full duration-300 ${primarysBg}`}></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col gap-3">
                    <h1 className={`text-[25px] md:text-[30px] sm:text-[30px] font-semibold mt-10 ${textColor}`}>Job Description</h1>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>To take a trivial example, which of us ever undertake laborious physical exercise except to obtain some to advantage from it? But who has any right to find off fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>Exercise except to obtain some advantage from it? But who has any right to find fault with a man who all chooses to enjoy a pleasure that has no annoying consequences.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className={`text-[25px] md:text-[30px] sm:text-[30px] font-semibold mt-10 ${textColor}`}>Responsibilities</h1>
                    <div className="flex gap-6 items-center ">
                        <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>Don’t just make a deposit, make an investment today</p>
                    </div>
                    <div className="flex gap-6 items-center ">
                        <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>Known for trust, honesty, and customer care</p>
                    </div>
                    <div className="flex gap-6 items-center ">
                        <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>We’re more than just someone’s ATM. We’re here for life’s big moments.</p>
                    </div>
                    <div className="flex gap-6 items-center ">
                        <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>A bank for people who want to live life better</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className={`text-[25px] md:text-[30px] sm:text-[30px] font-semibold mt-10 ${textColor}`}>Requirements</h1>
                    <div className="flex items-center gap-21">
                        <div className="flex gap-6 items-center ">
                             <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                             <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>AGE</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>:</p>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>28+</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex gap-6 items-center ">
                             <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                             <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>PRONOUN</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>:</p>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>MALE/FEMALE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-6 items-center ">
                             <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                             <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>EDUCATION</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>:</p>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>Bachelor’s Degree in Related Field</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-6 items-center ">
                             <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                             <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>EXPERIENCE</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>:</p>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>1-3 Yrs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-18">
                        <div className="flex gap-6 items-center ">
                             <span className={`${primaryBg} w-2 h-2 rotate-45`}></span>
                             <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>SKILLS</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>:</p>
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] ${textColor}`}>Something Related this Job</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
                <a href="https://facebook.com" aria-label="Facebook" className={`relative inline-block overflow-hidden group flex  ${primarysBg} px-6 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaFacebook size={20} className={`${accontBorder} z-10`}/>
                    <span className={`${accontBorder} z-10 relative text-[15px] md:text-[15px] font-semibold sm:text-[15px] `}>FaceBook</span>
                    <span className={`${primaryBg} group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className={`relative inline-block overflow-hidden group flex  ${primarysBg} px-6 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaTwitter size={20} className={`${accontBorder} z-10`}/>
                    <span className={`${accontBorder} z-10 relative text-[15px] md:text-[15px] font-semibold sm:text-[15px] `}>Twitter</span>
                    <span className={`bg-blue-400 group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                <a href="https://google.com" aria-label="Google" className={`relative inline-block overflow-hidden group flex  ${primarysBg} px-6 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaGoogle size={20} className={`text-red-600 z-10`}/>
                    <span className={`text-red-600 z-10 relative text-[15px] md:text-[15px] font-semibold sm:text-[15px] `}>Google</span>
                    <span className={`bg-white group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className={`relative inline-block overflow-hidden group flex  ${primarysBg} px-6 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaLinkedin size={20} className={`${accontBorder} z-10`}/>
                    <span className={`${accontBorder} z-10 relative text-[15px] md:text-[15px] font-semibold sm:text-[15px] `}>LinkedIn</span>
                    <span className={`bg-blue-900 group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
            </div>
           </div>


            <div className= {`flex flex-col gap-8`}>
                <div className={`flex flex-col gap-8`}>
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[20px] font-semibold ${textColor} ${primarysBg} text-center py-3`}>Upload Your Resuming</h1>
                    <div className={`${primaryBg} px-7 py-5 flex flex-col gap-3 shadow-lg`}>
                       <div className="">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold ${texts}`}>Salary</p>
                            <p className={`text-[18px] md:text-[20px] sm:text-[20px] font-semibold border-b pb-4 ${texts}`}>$85,000 - $90,000 Per Year</p>
                       </div>
                       <div className="">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold ${texts}`}>Vacancy</p>
                            <p className={`text-[18px] md:text-[20px] sm:text-[20px] font-semibold border-b pb-4 ${texts}`}>2 Vacancy Available</p>
                       </div>
                       <div className="">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold ${texts}`}>Allowances</p>
                            <p className={`text-[18px] md:text-[20px] sm:text-[20px] font-semibold border-b pb-4 ${texts}`}>Medical Expenses & Travel</p>
                       </div>
                       <div className="">
                            <p className={`text-[15px] md:text-[15px] sm:text-[15px] font-semibold ${texts}`}>Paid Leaves</p>
                            <p className={`text-[18px] md:text-[20px] sm:text-[20px] font-semibold border-b pb-4 ${texts}`}>26 Days of Annual Leave</p>
                       </div>
                    </div>
                </div>
                 <div className={`${Bg} px-7 py-5 flex flex-col gap-3 shadow-lg`}>
                    <div className="flex flex-col items-center justify-center pt-5 gap-3">
                        <img src="/pass.jpg" alt="" className='rounded-full w-32  h-30 object-cover m-auto'/>
                       <div className="">
                         <p className={`text-[18px] md:text-[20px] sm:text-[20px] font-semibold text-center ${textColor}`}>John Doe</p>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] text-center ${textColor}`}>Corporate Marketing</p>
                       </div>
                       <div className="">
                         <p className={`text-[15px] md:text-[15px] sm:text-[15px] text-center  ${textColor}`}>Call: (0804)-456-1234</p>
                        <p className={`text-[15px] md:text-[15px] sm:text-[15px] text-center ${textColor}`}>Mail: vanis@finbank.com</p>
                       </div>
                       <div className=" flex gap-4 items-center">
                        <a href="https://facebook.com" aria-label="Facebook" className={`relative inline-block overflow-hidden group flex  ${primarysBg} px-3 py-3 rounded-full`}>
                    <div className="flex gap-3 items-center">
                        <FaFacebook size={20} className={`${accontBorder} z-10`}/>
                   
                    <span className={`${primaryBg} group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className={`relative inline-block overflow-hidden group flex  ${primarysBg} rounded-full px-3 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaInstagram size={20} className={`${accontBorder} z-10`}/>
                   
                    <span className={`bg-red-500 group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                <a href="https://Twitter.com" aria-label="Twitter" className={`relative inline-block overflow-hidden group flex  ${primarysBg} rounded-full px-3 py-3`}>
                    <div className="flex gap-3 items-center">
                        <FaTwitter size={20} className={`${accontBorder} z-10`}/>
                    
                    <span className={`bg-blue-300 group-hover:translate-y-0 absolute inset-0 transition translate-y-full duration-300`}></span>
                    </div>
                </a>
                       </div>
                    </div>
                 </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default AboutCareerDetailComponent