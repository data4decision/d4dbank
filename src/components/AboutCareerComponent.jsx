import React from 'react'
import { FaCheck, FaFile } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6';

const AboutCareerComponent = ({darkMode}) => {
    const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  return (
    <div className={`${bankBg} pt-20 pb-20`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-[90%] m-auto gap-8 items-center">
            <div className="">
                <img src="/unity.jpg" alt="" className='p-4 rounded-md shadow-md'/>
            </div>
            <div className="flex flex-col gap-5">
                <div className="">
                    <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] ${textColor} leading-none font-semibold`}>Mountains Move <br/> for a Determined Team</h1>
                </div>
                <div className="flex flex-col gap-3 ">
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>Desire that they cannot foresee the pain & trouble that are bound too ensue equal blame belongs through shrinking.</p>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} `}>To enjoy a pleasure that has no annoying consequences.</p>
                </div>
                <div className="">
                    <div className=" flex gap-3 items-center">
                        <FaCheck size={15} className={`${textColor}`}/>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} `}>Great explorer of the master-builder</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <FaCheck size={15} className={`${textColor}`}/>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor}`}>On the other hand</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaFile size={40} className={`p-2 rounded-full ${primarysBg} ${textColor}`}/>
                    <div>
                        <a href="#" className="group block">
                            <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} group-hover:${texts}`}>Send Resuming</p>
                            <h1 className={`text-[20px] md:text-[30px] sm:text-[30px] ${textColor} group-hover:${texts}`}>info@example.com</h1>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <div className="overflow-x-auto mt-8 pt-20">
            <table className={` w-[80%] m-auto text-sm md:text-lg border-1 ${border}`}>
                <tBody>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2 font-bold ${textColor} ${border}`}>Department</td>
                        <td className={`border-r border-b px-4 py-2 font-bold ${textColor} ${border}`}>Job Role</td>
                        <td className={`border-r border-b px-4 py-2 font-bold ${textColor} ${border}`}>Location </td>
                        <td className={`border-r border-b px-4 py-2 font-bold ${textColor} ${border}`}>Last Date</td>
                        <td className={`border-r border-b px-4 py-2 font-bold ${textColor} ${border}`}></td>
                    </tr>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Marketing</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Regional Head</td>
                        <td className={`border-r border-b px-4 py-2 ] ${textColor} ${border}`}>Los Angeles </td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>18th Jul, 2022</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>
                            <a href="#" className={`${primaryBg}  px-6 py-2 ml-10 relative inline-block overflow-hidden group`}>
                            <span className={` ${accontBorder} relative z-10  m-auto`}>Apply Now</span>
                            <span className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${primarysBg}`}></span>
                            </a>
                        </td>
                    </tr>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Marketing</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Team Leader</td>
                        <td className={`border-r border-b px-4 py-2 ${textColor} ${border}`}>Los Angeles </td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>25th Jul, 2022</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>
                            <a href="#" className={`${primaryBg}  px-6 py-2 ml-10 relative inline-block overflow-hidden group`}>
                            <span className={` ${accontBorder} relative z-10  m-auto`}>Apply Now</span>
                            <span className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${primarysBg}`}></span>
                            </a>
                        </td>
                    </tr>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Finance</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Assistant Manager</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Canifonia </td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>10th Aug, 2022</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>
                            <a href="#" className={`${primaryBg}  px-6 py-2 ml-10 relative inline-block overflow-hidden group`}>
                            <span className={` ${accontBorder} relative z-10  m-auto`}>Apply Now</span>
                            <span className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${primarysBg}`}></span>
                            </a>
                        </td>
                    </tr>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Office</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Office Executive</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>New York </td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>10th Oct, 2022</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>
                            <a href="#" className={`${primaryBg}  px-6 py-2 ml-10 relative inline-block overflow-hidden group`}>
                            <span className={` ${accontBorder} relative z-10  m-auto`}>Apply Now</span>
                            <span className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${primarysBg}`}></span>
                            </a>
                        </td>
                    </tr>
                    <tr className='border-r border-b'>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Customer Care</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>Help Desk Job</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>San Fransisco </td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>23rd Sept, 2022</td>
                        <td className={`border-r border-b px-4 py-2  ${textColor} ${border}`}>
                            <a href="#" className={`${primaryBg}  px-6 py-2 ml-10 relative inline-block overflow-hidden group`}>
                            <span className={` ${accontBorder} relative z-10  m-auto`}>Apply Now</span>
                            <span className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${primarysBg}`}></span>
                            </a>
                        </td>
                    </tr>
                </tBody>
            </table>
        </div>
        <div className="pt-25">
            <div className="flex flex-col items-center justify-center gap-8  ">
                <img src="/email.png" alt="" className={`sm:w-50 sm:h-50 w-35 h-35`}/>
                <h1 className={`text-[25px] md:text-[40px] sm:text-[40px] text-center ${textColor} leading-none font-semibold`}>Subscribe us to<br/>Receive Career Updates</h1>
               <div className={`flex items-center justify-between  ${primaryBg} w-[35%] px-6 py-4`}>
                 <input type="Email" name='Email' placeholder='Enter Your Email Address' className={`${textHover} w-[100%] outline-none text-[15px] md:text-[20px] sm:text-[20px]`}  />
                 <FaEnvelope size={20}  className={`${textHover}`}/>
               </div>
               <div className="">
                <a href="#" className={`relative group ${primaryBg} px-6 py-3 overflow-hidden inline-block`}>
                    <span className={`relative ${accontBorder} text-[15px] md:text-[20px] sm:text-[20px] z-10`}>Subscribe</span>
                    <span className={`${primarysBg} group-hover:translate-y-0 inset-0  absolute transform translate-y-full duration-300`}></span>
                </a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCareerComponent