import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'



const AboutKnow = ({darkMode}) => {

  const primaryBg   = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg  = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg      = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border      = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor   = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText     = darkMode ? "text-[#ffffff]" : "text-[#ffffff]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const placeholder = darkMode ? "placeholder-[#0b0b5c]" : "placeholder-[#f47b20]";  

  return (
    <div className={`${bankBg}`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 w-[90%] m-auto ${bankBg} pt-20 pb-20`}>
            <div className="relative">
                <div className="absolute z-10 left-70 top-80">
                    <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer">
                <div className="relative">
                    <FaPlay size={70} className="text-black p-6 transition-colors duration-300 bg-red-500 hover:text-red-600"/>
                <div className="absolute inset-0 bg-white p-6 animate-ping"></div>
                  </div>
                    </a>
                </div>

                <div className="relative">
                    <img src="/company.jpg" alt="" className={`w-full h-[700px]`}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className={`text-[25px] md:text-[50px] sm:text-[50px] font-bold ml-10 ${textColor}`}>Known for Trust, Honesty & Customer Support</h1>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] ml-10 ${textColor}`}>Belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] ml-10 ${textColor}`}>Choice is untrammelled and when nothing prevents our being able to do what we like best every pleasure is to be welcomed.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-10">
                <div className="relative group">
                   <div className="absolute z-10 w-[50%] left-25 top-47">
                    <h2 className={`text-[15px] md:text-[20px] sm:text-[20px] ${accontBorder} ${primaryBg}  px-3 py-2`}>Our Journey</h2>
                   </div>
                   <div className=" w-[80%] h-[250px]  relative">
                     <img src="/businesses.jpg" alt="" className='h-[250px] w-full object-cover group-hover:scale-105 transition-all ease-in-out object-bottom'/>
                     <a href="#" className='group-hover:opacity-100 opacity-60 transition-all ease-in-out'>
                     <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-semibold`}>For Over Four Decades Our Bank</p>
                     </a>
                   </div>
                </div>
                <div className="relative group">
                   <div className="absolute z-10 w-[40%] left-32 top-47">
                    <h2 className={`text-[15px] md:text-[20px] sm:text-[20px] ${accontBorder} ${primaryBg}  px-3 py-2`}>Our Team</h2>
                   </div>
                   <div className=" w-[80%] h-[250px]  relative">
                     <img src="/team.jpg" alt="" className='h-[250px] w-full object-cover object-bottom group-hover:scale-105 transition-all ease-in-out'/>
                     <a href="#" className='group-hover:opacity-100 opacity-70 transition-all ease-in-out '>
                     <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-semibold`}>Passion & Professional Management</p>
                     </a>
                   </div>
                </div>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-[80%] m-auto pb-20 pt-20">
            <div className="  flex flex-col gap-3 items-center relative  sm:border-r px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Community</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Must explain to you how work mistaken give you complete guide they cannot foresee pain.</p>
               <div className="absolute bottom-55 ">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>01</span>
            </div>
            </div>
            <div className="  flex flex-col gap-3 items-center relative  sm:border-r px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Commitment</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
               <div className="absolute bottom-55 ">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>02</span>
            </div>
            </div>
            <div className="  flex flex-col gap-3 items-center relative  px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Consistency</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Being able to do what we like best every pleasure is to be welcomed and pain avoided but in certain.</p>
               <div className="absolute bottom-55 ">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>03</span>
            </div>
            </div>
        </div>

        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] m-auto pt-20 pb-20 gap-8">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="">
                    <div className="flex gap-2 relative group ">
                    <div className="absolute z-10 left-15 top-70 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[30px]  md:text-[40px] sm:text-[40px] ${textColor} font-bold`}> Mission</p>
                    </div>
                    <div className=" relative">
                        <img src="/Mission.jpg" alt="" className={`w-full h-[420px] object-cover group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                    </div>

                    <div className="flex flex-col gap-3">
                       <div className="1">
                        <div className=" relative group ">
                    <div className="absolute z-10 left-20 top-40 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[20px]  md:text-[30px] sm:text-[30px] ${textColor} font-bold`}> Vision</p>
                    </div>
                    <div className=" relative">
                        <img src="/vision.jpg" alt="" className={`w-full h-[200px]  group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                       </div>
                       <div className="">
                        <div className=" relative group ">
                    <div className="absolute z-10 left-20 top-40 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[20px]  md:text-[30px] sm:text-[30px] ${textColor} font-bold`}> Core Value</p>
                    </div>
                    <div className=" relative">
                        <img src="/core.jpg" alt="" className={`w-full h-[210px] object-cover group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                       </div>
                    </div>
                </div>
                <div className={`flex flex-col gap-3 ${primaryBg} pb-10`}>
                    <h1 className={`text-[25px] md:text-[50px] sm:text-[50px] font-bold ml-10 ${BtnText}`}>A Great Mission Statement</h1>
                    <p className={`text-[15px]  md:text-[20px] sm:text-[20px] pl-10 ${BtnText}`}>Obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man always holds these matters to this principle of selection rejects pleasures to secure other greater pleasures.</p>
                    <div className={`w-[30%] ml-10 ${primarysBg} px-4 py-3`}>
                        <a href="#" className={`flex gap-3 items-center   `}>
                            <FaArrowRight size={20} className={`${BtnText}`}/>
                            <p className={` ${BtnText}`}>Read More</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutKnow