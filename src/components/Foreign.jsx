import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Foreign = ({ darkMode, setDarkMode }) => {
  const [selectedCountry, setSelectedCountry] = useState('money');

  const colors = darkMode
    ? {
        ForeignBg: 'bg-[#0b0b5c]', // Dark mode background for the section
        ForeignText: 'text-[#f47b20]', // Text color for dark mode
        heading: 'text-[#f47b20]', // Heading color for dark mode
        link: 'hover:text-[#ffb366]', // Link hover color for dark mode
        border: 'border-[#ffffff]', // Border color for dark mode
        personalBtn: 'bg-blue-400 text-[#0b0b5c] hover:bg-blue-500',
        corperateBtn: 'bg-[#0b0b5c] text-[#ffffff] hover:bg-[#f47b20]',
        text: 'text-[#ffffff]',
        textHeading: 'text-[#f47b20]',
         textHg: 'text-[#f47b20]',
         bankBg:'bg-gray-300'
        
      }
    : {
        ForeignBg: 'bg-[#ffeeff]', // Light mode background for the section
        ForeignText: 'text-[#0b0cde]', // Text color for light mode
        heading: 'text-white', // Heading color for light mode
        link: 'hover:text-[#0b0b5c] underline', // Link hover color for light mode
        border: 'border-[#ffffff]', // Border color for light mode
        personalBtn: 'bg-blue-600 text-white hover:bg-blue-700',
        corperateBtn: 'bg-[#f47b20] text-[#ffffff] hover:bg-[#0b0b5c]', 
        text: 'text-[#f47b20]',
        textHeading: 'text-[#0b0b5c]',
        textHg: 'text-[#0b0b5c]',
        bankBg: 'bg-[#ffffff]'
      };

  return (
    <div className={`${colors.bankBg} h-[1900px] sm:h-[700px]`}>
        <h1 className={`text-[12px] md:text-[50px] sm:text-[20px] font-bold text-center pt-20 ${colors.textHg}`}>Foreign Exchange Rates</h1>
        <p className={`text-[12px] md:text-[20px] sm:text-[20px] font-bold text-center ${colors.text}`}>Denouncing pleasure & praising pain was born.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-around relative mt-20 mb-20">
      <div className="flex gap-2   ">
        <button
  className={`px-2 border-r border-l border-b border-t-0 hover:border-t hover:border-l hover:border-r hover:border-b-0 ${selectedCountry === 'money' ? 'active' : ''}`}
  onClick={() => setSelectedCountry('money')}
>
          <h1 className={`text-[12px] md:text-[15px] sm:text-[20px] font-bold ${colors.textHeading}`}>Money Send & Receive</h1>
        </button>
        <button
  className={`border-r border-l border-b border-t-0 hover:border-t hover:border-l hover:border-r hover:border-b-0 ${selectedCountry === 'money' ? 'active' : ''}`}
  onClick={() => setSelectedCountry('load')}
>
          <h1 className={`text-[12px] md:text-[15px] sm:text-[20px] font-bold p-2 ${colors.textHeading}`}>Load & Redeem Forex Card</h1>
        </button>
      </div>
      <div className=''>
        <a href="#" className='flex items-center gap-3  '>
        <FaBars size={20} className={`${colors.textHeading}`}/>
        <h1 className={`text-[12px] md:text-[15px] sm:text-[20px] font-bold ${colors.textHeading}`}>Click to Get Assitant</h1>
        </a>
      </div>

      {/* Conditional Content */}
      <div className="absolute top-20 sm:left-0 left-0 right-0">
        {selectedCountry === 'money' && (
          <div className='flex flex-col items-center sm:flex-row sm:items-center gap-2 p-4 sm:ml-14 sm:mr-14'>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>  
            </div>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>  
            </div>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#f47b20] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ci.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p>Send</p>
                    </div>
                    <div className="">
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>62.82</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            
          </div>
        )}
        {selectedCountry === 'load' && (
          <div  className='flex flex-col items-center sm:flex-row sm:items-center gap-2 p-4 sm:ml-14 sm:mr-14' >
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/lr.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px] font-bold ${colors.text}`}>USD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>62.86</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>58.46</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ml.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px] font-bold ${colors.text}`}>AUD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>57.52</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>54.21</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ne.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px] font-bold ${colors.text}`}>CAD</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>63.41</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>59.75</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/ng.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px] font-bold ${colors.text}`}>NIG</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>79.89</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>76.54</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/sl.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px]font-bold ${colors.text}`}>SEK</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>8.20</p>
                    </div>
                </div>
                <hr />
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>7.25</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg-[#0b0b5c] flex flex-col justify-between items-center gap-3 border-2 px-10 py-8 '>
                <div className="">
                    <img src="/sn.png" alt="" className='w-15 h-15 rounded-full border-1 ' />
                </div>
                <div className="">
                    <h1 className={`text-[15px] md:text-[20px] sm:text-[25px] font-bold ${colors.text}`}>SEN</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Send</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>101.88</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>Receive</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>:</p>
                    </div>
                    <div className="">
                        <p className={`text-[15px] md:text-[20px] sm:text-[25px] ${colors.text}`}>96.55</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Foreign;