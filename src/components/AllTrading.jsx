import React from 'react'
import { FaChartLine, FaCheck, FaCoins, FaRegMoneyBillAlt } from 'react-icons/fa'
import HeroBanner from './HeroBanner';

const AllTrading = ({darkMode}) => {
    const primaryBg  = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
    const texte  = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
    const primarysBg  = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
    const Text = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
    const tText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
    const Bg = darkMode ? 'text-[#ffffff]' : 'text-white';
    const Bgs  = darkMode ? 'bg-[#ffffff]' : 'bg-[#ffffff]';
     const hover  = darkMode ? 'group-hover:text-[#0b0b5c]' : 'group-hover:text-[#f47b20]';
  return (
    <div>
        <div className={`${primaryBg}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${primaryBg}`} >
            <div className="">
                <img src="/TRADE.jpg" alt="" className=' h-full' />
            </div>
            <div className="">
                <div className="flex flex-col gap-2 p-4 sm:p-10">
                    <p className={`text-[15px] md:text-[15px] sm:text-[20px] ${Text}`}>Trading & Demat a/c</p>
                    <h1 className={`text-[15px] md:text-[40px] font-bold sm:text-[40px] ${Bg}`}>Step to Make Your Dreams Possible</h1>
                    <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>The claims off duty or the obligations business it will frequently pleasures repudiated to distinguish nothing.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>Explorer of the master-builder</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>On the other hand</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>Perfectly simple & easy</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>Explorer of the master-builder</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>On the other hand</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaCheck size={15} className={`${Text}`} />
                      <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${tText}`}>Perfectly simple & easy</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-1 pb-2 sm:gap-0 sm:pb-0 lg:grid-cols-3 w-[80%] m-auto justify-arround">
            <div className="">
                <a
                  href="#"
                   className={`group flex items-center gap-6 ${Bgs} p-4  transition-all duration-500 relative overflow-hidden`}>
                     {/* Icon */}
                   <div>
                       <FaChartLine size={50} className={`${Text} transition-transform duration-500 ${hover} group-hover:translate-x-[-10px]`}/>
                    </div>

                    {/* Text */}
                    <div className={`transition-transform duration-500 ${hover} translate-x-2`}>
                       <p className={`text-[15px] md:text-[15px] sm:text-[20px] `}>Smart Bank</p>
                       <h3 className="text-[15px] md:text-[20px] sm:text-[20px]">Trading & Demat a/c</h3>
                    </div>
                    {/* Hover background effect (comes from right to left) */}
                     <span className={`absolute inset-0 ${primarysBg}  opacity-30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}></span>
                </a>
            </div>
            <div className="">
                <a
                  href="#"
                   className={`group flex items-center gap-6 ${Bgs} p-4  transition-all duration-500 relative overflow-hidden`}>
                     {/* Icon */}
                   <div>
                       <FaRegMoneyBillAlt size={50} className={`${Text} transition-transform duration-500 ${hover} group-hover:translate-x-[-10px]`}/>
                    </div>

                    {/* Text */}
                    <div className={`transition-transform duration-500 ${hover} translate-x-2`}>
                       <p className={`text-[15px] md:text-[15px] sm:text-[20px] `}>Smart Bank</p>
                       <h3 className="text-[15px] md:text-[20px] sm:text-[20px]">Tax Savings a/c</h3>
                    </div>
                    {/* Hover background effect (comes from right to left) */}
                     <span className={`absolute inset-0 ${primarysBg}  opacity-30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}></span>
                </a>
            </div>
            <div className="">
                <a
                  href="#"
                   className={`group flex items-center gap-6 ${Bgs} p-4  transition-all duration-500 relative overflow-hidden`}>
                     {/* Icon */}
                   <div>
                       <FaCoins size={50} className={`${Text} transition-transform duration-500 ${hover} group-hover:translate-x-[-10px]`}/>
                    </div>

                    {/* Text */}
                    <div className={`transition-transform duration-500 ${hover} translate-x-2`}>
                       <p className={`text-[15px] md:text-[15px] sm:text-[20px] `}>Smart Bank</p>
                       <h3 className="text-[15px] md:text-[20px] sm:text-[20px]">GOld Savings a/c</h3>
                    </div>
                    {/* Hover background effect (comes from right to left) */}
                     <span className={`absolute inset-0 ${primarysBg}  opacity-30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}></span>
                </a>
                </div>
        </div>
        </div>
    </div>
    
  )
}

export default AllTrading