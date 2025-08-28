import React from 'react'
import { useState } from 'react';
import { FaArrowRight, FaClock, FaMessage, FaPlay, FaShare } from 'react-icons/fa6';
import Pagination from './Pagination';

const GridViewComponents = ({darkMode}) => {
    const [activePage, setActivePage] = useState(1);
    
  const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
  const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
  const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
  const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
  const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
  const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
  const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
  const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
  const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
  const placeholder = darkMode ? 'placeholder-[#0b0b5c]' : 'placeholder-[#f47b20]';
  const text = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
  const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
  const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
  const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';

    const News = [
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
    { id: '/team.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account" },
   
  ];

  return (
    <div className={`m-0 p-0 pb-20 pt-20 ${bankBg}`}>
        <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-12 w-[85%] m-auto relative`}>
            {News.map((News, index)=>(
                 <div key={index} className="relative group">
                    <a href="">
                    <img
                  src={(News.id || '').replace(/\.$/, '')}
                  alt=""
                  className={`w-full h-[300px] object-cover  transition-all duration-300 group-hover:grayscale-0  group-hover:black`} 
                />
                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[300px]">
                    <FaArrowRight size={25} className='text-red-500 absolute top-30 left-40 opacity-0 group-hover:opacity-100' />
                </span>
                </a>
                <div className={`flex ${bankBg}  px-4 py-4 gap-8 justify-between absolute top-54 left-7 z-10 w-full shadow-lg`}>
                    <a href="">
                        <div className="flex items-center gap-2">
                        <FaPlay size={10} className={`${textColor}`}/>
                        <p className={`${textColor}`}>{News.name}</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-2">
                        <span className={`${primaryBg} w-2 h-2 rounded-full`}></span>
                        <p className={`${textColor}`}>{News.date}</p></div>
                    </div>
                    <div className="">
                        <a href="#">
                            <h1 className={`text-[20px] md:text-[20px] sm:text-[20px] font-semibold ${textColor} hover:text-red-500 transition-all duration-300 py-4 px-1 border-b`}>{News.description}</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-4">
                        <div className="flex items-center gap-2">
                            <FaClock size={18} className={`${textColor}`}/>
                            <div className="flex items-center gap-1">
                                <p className={`${textColor}`}>Posted</p>
                                <p className={`${textColor}`}>:</p>
                                <p className={`${textColor}`}>6:11pm</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMessage size={18} className={`${textColor}`}/>
                            <div className="flex items-center gap-1">
                                <p className={`${textColor}`}>1 Comment</p>
                                
                                <p><FaShare size={10} className={`${textColor}`}/></p>
                            </div>
                        </div>
                    </div>
                </div>
                 
            ))}
           <Pagination darkMode={darkMode}/>
        </div>
        
    </div>
  )
}

export default GridViewComponents



// import React, { useEffect, useState } from 'react';
// import { FaArrowRight, FaClock, FaMessage, FaPlay, FaShare } from 'react-icons/fa6';

// const GridViewComponents = ({ darkMode }) => {
//   const primaryBg = darkMode ? 'bg-[#0b0b5c]' : 'bg-[#f47b20]';
//   const primarysBg = darkMode ? 'bg-[#f47b20]' : 'bg-[#0b0b5c]';
//   const Bgs = darkMode ? 'bg-white' : 'bg-gray-200';
//   const Bg = darkMode ? 'bg-purple-300' : 'bg-orange-200';
//   const bankBg = darkMode ? 'bg-gray-300' : 'bg-[#ffffff]';
//   const border = darkMode ? 'border-[#0b0b5c]' : 'border-[#f47b20]';
//   const textColor = darkMode ? 'text-[#0b0b5c]' : 'text-[#f47b20]';
//   const BtnText = darkMode ? 'text-[#ffffff]' : 'text-[#ffffff]';
//   const accontBorder = darkMode ? 'text-gray-300' : 'text-[#ffffff]';
//   const placeholder = darkMode ? 'placeholder-[#0b0b5c]' : 'placeholder-[#f47b20]';
//   const text = darkMode ? 'text-[#ffffff]' : 'text-[#f47b20]';
//   const hoverBg = darkMode ? 'hoverBg-[#ffffff]' : 'hoverBg-[#f47b20]';
//   const textHover = darkMode ? 'text-hover-[#f47b20]' : 'text-hover-[#ffffff]';
//   const texts = darkMode ? 'text-[#f47b20]' : 'text-[#0b0b5c]';

//   const [News, setNews] = useState([
//     // optional placeholders to avoid layout shift on first render
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//     { id: '/team.jpg', name: 'Loading…', date: '', description: 'Fetching banking headlines…', link: '#' },
//   ]);

//   useEffect(() => {
//     let active = true;

//     async function load() {
//       try {
//         const r = await fetch('/api/banking-news');
//         const data = await r.json();
//         if (active && Array.isArray(data) && data.length) {
//           setNews(data);
//         }
//       } catch {
//         // keep placeholders on error
//       }
//     }

//     load();

//     // optional: refresh every 5 minutes for "real-time" feel
//     const id = setInterval(load, 5 * 60 * 1000);
//     return () => {
//       active = false;
//       clearInterval(id);
//     };
//   }, []);

//   // helper to format time for your "Posted" area without changing structure
//   const fmtTime = (iso) => {
//     try {
//       const d = new Date(iso);
//       return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } catch {
//       return '—';
//     }
//   };

//   return (
//     <div className={`m-0 p-0 pb-20 ${bankBg}`}>
//       <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-12 w-[85%] m-auto relative`}>
//         {News.map((News, index) => (
//           <div key={index} className="relative group">
//             <img
//               src={(News.id || '').replace(/\.$/, '')}
//               alt=""
//               className={`w-full h-[300px] object-cover  transition-all duration-300 group-hover:grayscale-0  group-hover:black`}
//             />
//             <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[300px]">
//               <FaArrowRight size={25} className='text-red-500 absolute top-30 left-40 opacity-0 group-hover:opacity-100' />
//             </span>

//             <div className={`flex ${bankBg}  px-4 py-4 gap-8 justify-between absolute top-54 left-7 z-10 w-full shadow-lg`}>
//               <a href={News.link || '#'} target="_blank" rel="noopener noreferrer">
//                 <div className="flex items-center gap-2">
//                   <FaPlay size={10} className={`${textColor}`} />
//                   <p className={`${textColor}`}>{News.name}</p>
//                 </div>
//               </a>
//               <div className="flex items-center gap-2">
//                 <span className={`${primaryBg} w-2 h-2 rounded-full`}></span>
//                 <p className={`${textColor}`}>{News.date ? new Date(News.date).toDateString() : ''}</p>
//               </div>
//             </div>

//             <div className="">
//               <a href={News.link || '#'} target="_blank" rel="noopener noreferrer">
//                 <h1 className={`text-[20px] md:text-[20px] sm:text-[20px] font-semibold ${textColor} hover:text-red-500 transition-all duration-300 py-4 px-1 border-b`}>
//                   {News.description}
//                 </h1>
//               </a>
//             </div>

//             <div className="flex items-center justify-between gap-2 mt-4">
//               <div className="flex items-center gap-2">
//                 <FaClock size={18} className={`${textColor}`} />
//                 <div className="flex items-center gap-1">
//                   <p>Posted</p>
//                   <p>:</p>
//                   <p>{fmtTime(News.date)}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaMessage size={18} className={`${textColor}`} />
//                 <div className="flex items-center gap-1">
//                   <p>1 Comment</p>
//                   <p></p>
//                   <p><FaShare size={10} className={`${textColor}`} /></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridViewComponents;
