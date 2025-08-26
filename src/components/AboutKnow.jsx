import React from 'react'
import { FaArrowRight, FaFilePdf, FaMoneyCheck, FaPlay, FaUser, FaUserTie } from 'react-icons/fa'
import { FaBuildingCircleXmark, FaHouse } from 'react-icons/fa6';



const AboutKnow = ({darkMode}) => {

  const primaryBg   = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg  = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const Bgs  = darkMode ? "bg-white" : "bg-gray-200";
  const Bg  = darkMode ? "bg-purple-300" : "bg-orange-200";
  const bankBg      = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border      = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor   = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText     = darkMode ? "text-[#ffffff]" : "text-[#ffffff]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";
  const placeholder = darkMode ? "placeholder-[#0b0b5c]" : "placeholder-[#f47b20]";  
  const text  = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const hoverBg  = darkMode ? "hoverBg-[#ffffff]" : "hoverBg-[#f47b20]";
  const textHover  = darkMode ? "text-hover-[#f47b20]" : "text-hover-[#ffffff]";
  const texts  = darkMode ? "text-[#f47b20]" : "text-[#0b0b5c]";

  return (
    <div className={`${bankBg}`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 w-[90%] m-auto ${bankBg} pt-20 pb-20`}>
            <div className="relative">
                <div className="absolute z-10 sm:left-70 left-40 sm:top-80 top-45">
                    <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer">
                <div className="relative">
                    <FaPlay size={70} className="text-black p-6 transition-colors duration-300 bg-red-500 hover:text-red-600"/>
                <div className="absolute inset-0 bg-white p-6 animate-ping"></div>
                  </div>
                    </a>
                </div>

                <div className="relative">
                    <img src="/company.jpg" alt="" className={`w-full sm:h-[700px] h-[500px]`}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className={`text-[25px] md:text-[50px] sm:text-[50px] font-bold ml-10 sm:text-left text-center ${textColor}`}>Known for Trust, Honesty & Customer Support</h1>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] sm:ml-10 ${textColor}`}>Belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                <p className={`text-[15px] md:text-[20px] sm:text-[20px] sm:ml-10 ${textColor}`}>Choice is untrammelled and when nothing prevents our being able to do what we like best every pleasure is to be welcomed.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 gap-10 sm:ml-10 mt-10 sm:mt-2">
                <div className="relative group">
                   <div className="absolute z-10 sm:w-[50%] sm:left-25  top-47">
                    <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] ${accontBorder} ${primaryBg}  px-3 py-2`}>Our Journey</h2>
                   </div>
                   <div className=" sm:w-[80%] w-[90%] ml-5 sm:ml-0 h-[250px]  relative">
                     <img src="/businesses.jpg" alt="" className='h-[250px] w-full object-cover group-hover:scale-105 transition-all ease-in-out object-bottom'/>
                     <a href="#" className='group-hover:opacity-100 opacity-60 transition-all ease-in-out'>
                     <p className={`text-[20px] md:text-[20px] sm:text-[20px] sm:text-left text-center ${textColor} font-semibold`}>For Over Four Decades Our Bank</p>
                     </a>
                   </div>
                </div>
                <div className="relative group">
                   <div className="absolute z-10 sm:w-[50%] sm:left-25  top-47">
                    <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] ${accontBorder} ${primaryBg}  px-3 py-2`}>Our Team</h2>
                   </div>
                   <div className="sm:w-[80%] w-[90%] ml-5 sm:ml-0 h-[250px] relative">
                     <img src="/team.jpg" alt="" className='h-[250px] w-full object-cover object-bottom group-hover:scale-105 transition-all ease-in-out'/>
                     <a href="#" className='group-hover:opacity-100 opacity-70 transition-all ease-in-out '>
                     <p className={`text-[20px] md:text-[20px] sm:text-[20px] sm:text-left text-center ${textColor} font-semibold`}>Passion & Professional Management</p>
                     </a>
                   </div>
                </div>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-[80%] gap-12 sm:gap-1 m-auto pb-20 sm:pt-20 pt-15">
            <div className="  flex flex-col gap-3 items-center relative  sm:border-r px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Community</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Must explain to you how work mistaken give you complete guide they cannot foresee pain.</p>
               <div className="absolute sm:bottom-55 bottom-42 ">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>01</span>
            </div>
            </div>
            <div className="  flex flex-col gap-3 items-center relative  sm:border-r px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Commitment</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
               <div className="absolute sm:bottom-55 bottom-42">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>02</span>
            </div>
            </div>
            <div className="  flex flex-col gap-3 items-center relative  px-3 py-2"> 
               <img src="/community.png" alt="" className={`w-[60px] h-[60px] ${primarysBg} p-3 rounded-tr-[20px] shadow-md rounded-bl-[20px] items-center  grayscale hover:grayscale-0 transition-all`}/>
               <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${textColor} font-bold`}>Consistency</p>
               <p  className={`text-[15px] md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Being able to do what we like best every pleasure is to be welcomed and pain avoided but in certain.</p>
               <div className="absolute sm:bottom-55 bottom-42">
                <span className={`text-[15px]  md:text-[20px] sm:text-[20px] mr-26  ${accontBorder} ${primaryBg} p-3 rounded-tr-[30px] rounded-bl-[30px]`}>03</span>
            </div>
            </div>
        </div>

        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] m-auto pt-20 pb-20 gap-8">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="">
                    <div className="flex gap-2 relative group ">
                    <div className="absolute z-10 sm:left-15 left-35 top-70 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[30px]  md:text-[40px] sm:text-[40px] ${textColor} font-bold`}> Mission</p>
                    </div>
                    <div className=" relative">
                        <img src="/Mission.jpg" alt="" className={`w-full h-[420px] object-cover opacity-60 group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                    </div>

                    <div className="flex flex-col gap-3">
                       <div className="1">
                        <div className=" relative group ">
                    <div className="absolute z-10 sm:left-20 left-35 top-40 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[20px]  md:text-[30px] sm:text-[30px] ${textColor} font-bold`}> Vision</p>
                    </div>
                    <div className=" relative">
                        <img src="/vision.jpg" alt="" className={`w-full h-[200px] opacity-60  group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                       </div>
                       <div className="">
                        <div className=" relative group ">
                    <div className="absolute z-10 sm:left-12 left-35 top-40 group-hover:translate-y-[-200%] transition-all ease-in-out">
                        <p className={`text-[20px]  md:text-[30px] sm:text-[30px] ${textColor} font-bold`}> Core Value</p>
                    </div>
                    <div className=" relative">
                        <img src="/core.jpg" alt="" className={`w-full h-[210px] object-cover opacity-60 group-hover:scale-105 transition-all grayscale-95`}/>
                    </div>
                    </div>
                       </div>
                    </div>
                </div>
                <div className={`flex flex-col gap-3 ${primaryBg} pb-10`}>
                    <h1 className={`text-[25px] md:text-[50px] sm:text-[50px] font-bold sm:ml-10 ml-5 ${BtnText}`}>A Great Mission Statement</h1>
                    <p className={`text-[15px]  md:text-[20px] sm:text-[20px] sm:pl-10 pl-5 pr-5 ${BtnText}`}>Obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man always holds these matters to this principle of selection rejects pleasures to secure other greater pleasures.</p>
                    <div className={`sm:w-[30%] w-[40%] sm:ml-10 ml-5 ${primarysBg} px-4 py-3`}>
                        <a href="#" className={`flex gap-3 items-center   `}>
                            <FaArrowRight size={20} className={`${BtnText}`}/>
                            <p className={` ${BtnText}`}>Read More</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative">
            <div className="relative">
               <img src="/interest.jpg" alt="" className='w-full sm:h-[650px] h-[1050px] object-cover grayscale-95 opacity-50'/>
            </div>
            <div className="absolute   sm:top-20 top-15 z-10 w-full sm:h-full h-[700px]">
                <h1 className={`text-[25px] md:text-[50px] sm:text-[50px] font-bold text-center ${text}`}>Few Interesting Numbers</h1>
                <p className={`text-[17px]  md:text-[25px] sm:text-[25px] text-center font-semibold ${text}`}>Numbers that speak about banking service.</p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 w-[80%] m-auto mt-20">
                    <div className="flex flex-col items-center gap-3 group">
                        <FaHouse size={100} className={`border-1 rounded-full p-6 ${text} group-hover:${hoverBg} ${textHover} transition-all ease-in-out translate-y`}/>
                        <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] font-bold text-center ${text} mt-5`}>Our Network</h2>
                        <p className={`text-[15px]  md:text-[15px] sm:text-[15px] text-center font-semibold ${text}`}>86 Branches around the country</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 group">
                        <FaUser size={100} className={`border-1 rounded-full p-6 ${text} group-hover:${hoverBg} ${textHover} transition-all ease-in-out translate-y`}/>
                        <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] font-bold text-center ${text} mt-5`}>Our Network</h2>
                        <p className={`text-[15px]  md:text-[15px] sm:text-[15px] text-center font-semibold ${text}`}>86 Branches around the country</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 group">
                        <FaUserTie size={100} className={`border-1 rounded-full p-6 ${text} group-hover:${hoverBg} ${textHover} transition-all ease-in-out translate-y`}/>
                        <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] font-bold text-center ${text} mt-5`}>Our Network</h2>
                        <p className={`text-[15px]  md:text-[15px] sm:text-[15px] text-center font-semibold ${text}`}>86 Branches around the country</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 group">
                        <FaMoneyCheck size={100} className={`border-1 rounded-full p-6 ${text} group-hover:${hoverBg} ${textHover} transition-all ease-in-out translate-y`}/>
                        <h2 className={`text-[20px] md:text-[20px] sm:text-[20px] font-bold text-center ${text} mt-5`}>Our Network</h2>
                        <p className={`text-[15px]  md:text-[15px] sm:text-[15px] text-center font-semibold ${text}`}>86 Branches around the country</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={`pt-10 pb-20 ${Bg}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] m-auto items-center">
                <div className="flex flex-col gap-3 px-3 py-2 mr-8">
                    <div className="pt-4 ">
                        <h1 className={`text-[20px] md:text-[40px] sm:text-[40px] font-bold  ${textColor}`}>Better Value </h1>
                        <h1 className={`text-[20px] md:text-[40px] sm:text-[40px] font-bold ${textColor}`}>Banking Experience</h1>
                    </div>
                    <div className="">
                        <p className={`text-[15px]  md:text-[20px] sm:text-[20px]  font-semibold ${textColor}`}>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds these matters to this principle of selection.</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="">
                            <FaFilePdf size={30} className={`text-red-500`}/>
                        </div>
                        <div className="">
                            <a href="" className={`text-[15px]  md:text-[20px] sm:text-[20px] ${texts}`}>Download</a>
                            <p className={`text-[15px]  md:text-[20px] sm:text-[20px] ${textColor}`}>Report for the Year 2024</p>
                        </div>
                    </div>
                </div>
                <div className=" bg">
                    <img src="/chart.jpg" alt="" className='p-4'/>
                </div>
             </div>
        </div>
        <div className="pt-20 relative">
            <div className=" relative mt-20">
                <img src="/Awards.png" alt="" className='w-full sm:h-[600px] h-[1000px] object-contain'/>
            </div>
            <div className="absolute z-10 w-full top-10 ">
                <h1 className={`text-[20px] md:text-[40px] sm:text-[40px] font-bold text-center ${textColor}`}>Awards & Major Achievements </h1>
            <p className={`text-[15px]  md:text-[20px] sm:text-[20px] text-center ${textColor}`}>Outstanding performance and achievements.</p>
            
            <div className="flex flex-col sm:flex-row justify-between w-[90%] m-auto ">
                <div className="grid grid-cols-1 sm:grid-cols-1 ">
                    <div className={`flex flex-col gap-4 ${Bgs} w-[100%] px-10 py-8 shadow-lg mt-13`}>
                       <div className={`flex gap-3 items-center `}>
                        <img src="/certificate.png" alt="" className='w-10 h-13' />
                       <h1 className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold leading-tight ${textColor}`}>Bank of the<br/> Year </h1>

                       </div>
                       <hr className={` ${textColor}`}/>
                       <div className="flex items-center gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Year</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ml-10 ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>2021-2022</p>
                       </div>
                       <div className="flex items-center  gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Award by</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}> Los Vegas Business Time</p>
                       </div>
                    </div>

                    <div className={`flex flex-col gap-4 ${Bgs} w-[100%] px-10 py-8 shadow-lg mt-10`}>
                       <div className={`flex gap-3 items-center `}>
                        <img src="/certificate.png" alt="" className='w-10 h-13' />
                       <h1 className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold leading-tight ${textColor}`}>Best Private Bank<br/> Award </h1>

                       </div>
                       <hr className={` ${textColor}`}/>
                       <div className="flex items-center gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Year</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ml-10 ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>2017-2019</p>
                       </div>
                       <div className="flex items-center  gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Award by</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}> Los Vegas Business Time</p>
                       </div>
                    </div>
                    
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1">
                    <div className={`flex flex-col gap-4 ${Bgs} w-[100%] px-10 py-8 shadow-lg mt-10`}>
                       <div className={`flex gap-3 items-center `}>
                        <img src="/certificate.png" alt="" className='w-10 h-13' />
                       <h1 className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold leading-tight ${textColor}`}>Bank of the Year<br/> Europe </h1>

                       </div>
                       <hr className={` ${textColor}`}/>
                       <div className="flex items-center gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Year</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ml-10 ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>2018-2021</p>
                       </div>
                       <div className="flex items-center  gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Award by</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}> Los Vegas Business Time</p>
                       </div>
                    </div>

                    <div className={`flex flex-col gap-4 ${Bgs} w-[100%] px-10 py-8 shadow-lg mt-10`}>
                       <div className={`flex gap-3 items-center `}>
                        <img src="/certificate.png" alt="" className='w-10 h-13' />
                       <h1 className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold leading-tight ${textColor}`}>Best Commercial<br/> Bank Award </h1>

                       </div>
                       <hr className={` ${textColor}`}/>
                       <div className="flex items-center gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Year</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ml-10 ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>2017-2019</p>
                       </div>
                       <div className="flex items-center  gap-4">
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>Award by</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}>:</p>
                           <p className={`text-[15px] md:text-[18px] sm:text-[18px] ${textColor}`}> Los Vegas Business Time</p>
                       </div>
                    </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutKnow