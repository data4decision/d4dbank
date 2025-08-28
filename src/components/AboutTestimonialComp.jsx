import React from 'react'
import { FaStar } from 'react-icons/fa6'

const AboutTestimonialComp = ({darkMode}) => {
    const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-[#918151]' : 'bg-[#8C756A]';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const placeholder = darkMode ? 'placeholder-[#f47b20]' : 'placeholder-[#0b0b5c]';
  const text = darkMode ? 'text-[#f47b20]' : 'text-[#fffffff]';
  const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';
  return (
    <div className={`${bankBg} pt-20 pb-20`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 m-w-6xl gap-8 m-auto w-[85%]">
            <div className={`${primaryBg} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/pass.jpg" alt="" className='w-15 h-15 rounded-full object-cover'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${Bgs} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/loans.jpg" alt="" className='w-15 h-15 rounded-full object-cover object-top-center'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${Bgs} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/loans.jpg" alt="" className='w-15 h-15 rounded-full object-cover object-top-center'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${primaryBg} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/pass.jpg" alt="" className='w-15 h-15 rounded-full object-cover'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
             <div className={`${primaryBg} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/pass.jpg" alt="" className='w-15 h-15 rounded-full object-cover'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${Bgs} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/loans.jpg" alt="" className='w-15 h-15 rounded-full object-cover object-top-center'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${Bgs} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/loans.jpg" alt="" className='w-15 h-15 rounded-full object-cover object-top-center'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
            <div className={`${primaryBg} flex flex-col gap-4 w-[100%] m-auto px-9 py-6 rounded-md shadow-lg`}>
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <FaStar size={18} className='text-yellow-400'/>
                     <FaStar size={18} className='text-yellow-400'/>
                      <FaStar size={18} className='text-yellow-400'/>
                       <FaStar size={18} className='text-yellow-400'/>
                        <FaStar size={18} className='text-yellow-400'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${text}`}>September 19, 2022</p>
                </div>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px]  ${BtnText}`}>Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="">
                    <img src="/pass.jpg" alt="" className='w-15 h-15 rounded-full object-cover'/>
                </div>
                <div className="">
                    <p className={`text-[15px] md:text-[18px] sm:text-[18px] font-bold ${BtnText}`}>Nathan Felix</p>
                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${text}`}>California</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTestimonialComp