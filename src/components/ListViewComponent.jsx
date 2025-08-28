import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight, FaClock, FaLink, FaMessage, FaPlay, FaShare } from 'react-icons/fa6';
import Slider from "react-slick";

const ListViewComponent = ({darkMode}) => {

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
    { id: '/pass.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..." },
    { id: '/unity.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..."  },
    { id: '/reach.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..."  },
    { id: '/vision.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..."  },
    { id: '/happy.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..."  },
    { id: '/bank4.jpg', name: 'Rose Tailor', date: 'Corporate Marketing', description:"How Non-US Citizens can Open a Bank Account", message:"Don’t just save money, make more money with a checking account from us. – Franklin Every citizens ..."  },
   
  ];

  const Post =[
    {id: "/unity.jpg", date: "September 16, 2022", description:"How Non-US Citizens can Open a Bank Account"},
    {id: "/bank4.jpg", date: "September 16, 2022", description:"How Non-US Citizens can Open a Bank Account"},
    {id: "/unity.jpg", date: "September 16, 2022", description:"How Non-US Citizens can Open a Bank Account"},
    {id: "/vision.jpg", date: "September 16, 2022", description:"How Non-US Citizens can Open a Bank Account"},
    {id: "/unity.jpg", date: "September 16, 2022", description:"How Non-US Citizens can Open a Bank Account"}
  ]

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 4, // ✅ scroll 4 images
  nextArrow: <nextArrow darkMode={darkMode} />,
  prevArrow: <prevArrow darkMode={darkMode} />,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1, // ✅ keep 1 showing
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
};


  return (
    <div className={`${bankBg} pt-20 pb-20`}>
        <div className="grid grid-cols-1 md:grid-cols-[75%_25%] sm:grid-cols-[70%_30%] w-[85%] m-auto gap-8">
           <div className={`grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 ${border}`}>
            {News.map((News, index)=>(
                <div key={index} className="relative groups grid grid-cols-1 md:grid-cols-[45%_55%] border-1">
                    <a href="">
                        <img  src={(News.id).replace(/\.$/, '')} alt="" className={`w-full   h-[300px] object-cover  transition-all duration-300 group-hover:grayscale-0  group-hover:black`}  />
                        <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[300px]">
                        <FaArrowRight size={25} className='text-red-500 absolute top-30 left-40 opacity-0 group-hover:opacity-100' />
                        </span>
                    </a>
                    <div className={`flex ${bankBg}  px-4 py-4 gap-4 justify-between absolute top-54 left-5 z-10 w-[45%] shadow-lg`}>
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
                        <div className=" flex flex-col gap-3 px-6 py-6 ">
                            <a href="#">
                                <h1 className={`text-[20px] md:text-[25px] sm:text-[25px] font-semibold ${textColor} hover:text-red-500 transition-all duration-300 py-3 px-1 `}>{News.description}</h1>
                            </a>
                            <div className="">
                                <p className={`text-[18px] md:text-[18px] sm:text-[18px] ${textColor} border-b pb-4 mt-2`}>{News.message}</p>
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-5">
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
                        
                       </div>
                    
                 
                ))}
           </div>
            
            <div className="">
                <div className="flex flex-col   gap-4">
                    <div className="flex items-center gap-2 ">
                    <FaPlay size={12} className={`${textColor}`}/>
                   <h1 className={`text-[20px] md:text-[20x] sm:text-[20px] font-semibold ${textColor}`}>Search</h1>
                    </div>
                    <div className={`flex ${Bg} items-center justify-between px-4`}>
                    <input type="text" placeholder='Keywords' className={`${placeholder} px-2 py-2 ${textColor} outline-none w-full`}/>
                    <FaSearch size={18} className={` ${textColor}`}/>
                    </div>
                    <div className="mt-10">
                        <div className="flex items-center gap-2 ">
                            <FaPlay size={12} className={`${textColor}`}/>
                            <h1 className={`text-[20px] md:text-[20x] sm:text-[20px] font-semibold ${textColor}`}>Categories</h1>
                        </div>
                        <div className="">
                            <a href="" className={`flex items-center gap-2  border-b ${border}  py-4 group`}>
                                <span className={`${primaryBg} w-2 h-2 rounded-full group-hover:bg-red-500 transition-all duration-300`}></span>
                                <p className={`text-[15px] md:text-[18px] sm:text-[18px] group-hover:text-red-500 transition-all duration-300 ${textColor}`}>Banking</p>
                            </a>
                            <a href="" className={`flex items-center gap-2  border-b ${border}  py-4 group`}>
                                <span className={`${primaryBg} w-2 h-2 rounded-full group-hover:bg-red-500 transition-all duration-300`}></span>
                                <p className={`text-[15px] md:text-[18px] sm:text-[18px] group-hover:text-red-500 transition-all duration-300 ${textColor}`}>Finance</p>
                            </a>
                            <a href="" className={`flex items-center gap-2  border-b ${border}  py-4 group`}>
                                <span className={`${primaryBg} w-2 h-2 rounded-full group-hover:bg-red-500 transition-all duration-300`}></span>
                                <p className={`text-[15px] md:text-[18px] sm:text-[18px] group-hover:text-red-500 transition-all duration-300 ${textColor}`}>Press Release</p>
                            </a>
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center gap-5 pb-4 ">
                    <FaPlay size={12} className={`${textColor}`}/>
                   <h1 className={`text-[20px] md:text-[20x] sm:text-[20px] font-semibold ${textColor}`}>Popular Post</h1>
                    </div>
                            <Slider {...settings}>
                                {Post.map((Post, index) => (
                                 <a href="" className='group relative'>   
                                <div key={index} className="px-2">
                                <img src={Post.id} alt={Post.alt || ""} className="w-full h-64 object-cover relative"/>
                                <span className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity  duration-300 h-64">
                                    <FaLink size={25} className='text-red-500 absolute top-30 left-35 opacity-0 group-hover:opacity-100' />
                                </span>
                                <div className="flex flex-col gap-3 py-6 px-2">
                                    <p className={`text-[15px] md:text-[15px] sm:text-[15px]  ${textColor}`}>{Post.date}</p>
                                    <h1 className={`text-[15px] md:text-[18px] sm:text-[18px] font:semibold  ${textColor}`}>{Post.description}</h1>
                                </div>
                                </div>
                                </a>
                            ))}
                           </Slider>
                            </div>
                            
                            {/* <div className={``}>
                                <Slider {...settings}>
                                     <div >
                                    {Post.map((Post, index)=>(
                                        <img key={index} src={Post.id} alt="" />
                                    ))}
                                    </div>
                                    </Slider>
                                </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListViewComponent