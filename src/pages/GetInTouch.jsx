import React from 'react';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { FaMapMarkerAlt, FaRegClock, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const GetInTouch = ({ darkMode, setDarkMode }) => {
  const [selectedLocation, setSelectedLocation] = useState('branch');
  const [selectedService, setSelectedService] = useState("personal");


  const colors = darkMode
    ? {
        GetInTouchBg: "bg-[#0b0b5c]", // Dark mode background for the section
        GetInTouchText: "text-[#f47b20]", // Text color for dark mode
        heading: "text-[#ffb366]", // Heading color for dark mode
        link: "hover:text-[#ffb366]", // Link hover color for dark mode
        border: "border-[#ffffff]", // Border color for dark mode
         personalBtn: "bg-blue-400 text-[#0b0b5c] hover:bg-blue-500",
        corperateBtn: "bg-[#0b0b5c] text-[#ffffff] hover:bg-[#f47b20]",
      }
    : {
        GetInTouchBg: "bg-[#ffeeff]", // Light mode background for the section
        GetInTouchText: "text-[#0b0b5c]", // Text color for light mode
        heading: "text-white", // Heading color for light mode
        link: "hover:text-[#0b0b5c] underline", // Link hover color for light mode
        border: "border-[#ffffff]", // Border color for light mode
         personalBtn: "bg-blue-600 text-white hover:bg-blue-700",
        corperateBtn: "bg-[#f47b20] text-[#ffffff] hover:bg-[#0b0b5c]",
      };
      
  return (
    <div>
      <HeroSection />
      <div className="mt-10">
        <div className="max-w-6xl sm:h-160 mx-auto grid grid-cols-1 sm:grid-cols-2 p-6 sm:mb-20">

          {/* Support Section */}
          <div className={`shadow-lg p-6 rounded-lg items-center relative ${colors.GetInTouchBg}`}>
            <div className="flex flex-col justify-between gap-100 sm:gap-120">
              <div>
                <h1 className={`w-[70%] sm:text-3xl text-2xl font-bold ml-5 ${colors.GetInTouchText}`}>
                  Get Support for
                </h1>
                <h1 className={`w-full text-2xl font-bold sm:text-3xl ml-5 ${colors.GetInTouchText}`}>
                  any Queries or Complaints
                </h1>
                <h3 className={`sm:text-[15px] text-[12px] ml-5  ${colors.GetInTouchText}`}>Committed to helping you meet all your banking needs.</h3>
              </div>
              <div className="bg-gray-50 p-5 absolute w-[90%] left-10 sm:left-20 sm:w-full mt-25">

                {/* Office Hours */}
                <div className="flex gap-5 ml-2 sm:ml-5 mb-5">
                  <FaRegClock className="bg-[#0b0b5c] p-2 rounded-full w-9 h-8  sm:w-12 sm:h-12 mt-5 inline-block text-[#f47b20] sm:mr-2 transition-all duration-300 transform hover:bg-pink-300 hover:text-white hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500" size={22} />
                  <div className="w-full sm:w-[75%]">
                    <p className={`text-[15px] sm:text-[20px]  ${colors.GetInTouchText}`}>Office Hours</p>
                    <h1 className={`text-1xl sm:text-2xl font-bold ${colors.GetInTouchText}`}>Mon - Fri: 9.00am to 5.00pm</h1>
                    <p className={`text-[20px] ${colors.GetInTouchText}`}>[2nd Sat Holiday]</p>
                  </div>
                </div>

                {/* Front Desk */}
                <div className="flex gap-5 ml-2 sm:ml-5 mb-5">
                  <FaPhoneAlt className="bg-[#0b0b5c] p-2 rounded-full w-8 h-8  sm:w-12 sm:h-12 mt-5 inline-block text-[#f47b20] sm:mr-2 transition-all duration-300 transform hover:bg-pink-300 hover:text-white hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500" size={22} />
                  <div className="w-[75%]">
                    <p className={`text-[15px] sm:text-[20px] ${colors.GetInTouchText}`}>Front Desk</p>
                    <h1 className={`text-[15px] sm:text-[22px] font-bold ${colors.GetInTouchText}`}>+234-806-951-7707</h1>
                    <h1 className={`text-[15px] sm:text-[22px] font-bold ${colors.GetInTouchText}`}>supportyou@D4DBank.com</h1>
                  </div>
                </div>

                {/* Corporate Office */}
                <div className="flex gap-5 ml-2 sm:ml-5">
                  <FaMapMarkerAlt className="bg-[#0b0b5c] p-2 rounded-full w-9 h-8  sm:w-12 sm:h-12 mt-5 inline-block text-[#f47b20] sm:mr-2 transition-all duration-300 transform hover:bg-pink-300 hover:text-white hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500" size={22} />
                  <div className="w-full sm:w-[75%]">
                    <p className={`text-[15px] sm:text-[22px] ${colors.GetInTouchText}`}>Corporate Office</p>
                    <h1 className={`text-[15px] sm:text-[22px] font-bold ${colors.GetInTouchText}`}>141, First Floor, 12 St RootsTerrace, Los Angeles USA 90010.</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <Link to="" className={`flex gap-2 ${colors.link}`}>
                    <FaChevronDown size={24} className={colors.GetInTouchText} /> Customer Care
                  </Link>
                </div>
                <div className="flex justify-between gap-2">
                  <a href="https://facebook.com/Data4Decision_International" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={colors.link}>
                    <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a href="https://instagram.com/data4decision_intl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={colors.link}>
                    <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a href="https://X.com/Data4_Decision" target="_blank" rel="noopener noreferrer" aria-label="X" className={colors.link}>
                    <img src="/x.png" alt="X" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f47b20]/50 flex text-white text-1xl font-bold">
            <form className="w-[70%] mx-auto space-y-4 p-6">
              <div>
                <label htmlFor="name" className={`block ${colors.GetInTouchText} font-semibold mb-1`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full px-3 py-2 rounded border ${colors.border} ${colors.GetInTouchText} focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${colors.GetInTouchText} font-semibold mb-1`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full px-3 py-2 rounded border ${colors.border} ${colors.GetInTouchText} focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />
              </div>
              <div>
                <label htmlFor="phone" className={`block ${colors.GetInTouchText} font-semibold mb-1`}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className={`w-full px-3 py-2 rounded border ${colors.border} ${colors.GetInTouchText} focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />
              </div>
              <div>
                <label htmlFor="subject" className={`block ${colors.GetInTouchText} font-semibold mb-1`}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full px-3 py-2 rounded border ${colors.border} ${colors.GetInTouchText} focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${colors.GetInTouchText} font-semibold mb-1`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  rows={4}
                  className={`w-full px-3 py-2 rounded border ${colors.border} ${colors.GetInTouchText} focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0b0b5c] text-white font-bold py-2 px-4 rounded hover:bg-[#f47b20] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Selector Bar */}
      <div className="flex flex-col">
        <div
        className={`flex relative w-full sm:w-[90%] sm:mx-auto mt-10 h-20 text-[15px] sm:text-[22px] ${colors.GetInTouchBg} ${colors.GetInTouchText} items-center justify-between gap-26 `}
      >
        {/* Left: Radios */}
        <div className="flex gap-6 items-center ml-10">
          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              name="locationType"
              checked={selectedLocation === 'branch'}
              onChange={() => setSelectedLocation('branch')}
            />
            <span>Branch</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              name="locationType"
              checked={selectedLocation === 'atm'}   
              onChange={() => setSelectedLocation('atm')}
            />
            <span>ATM</span>
          </label>
        </div>

        {/* Right: Search */}
        <div className=" ">
          <input
            type="text"
            placeholder="Search"
            className={`border ${colors.border} w-[50%] rounded px-2 py-1 text-[#ffffff]`}
          />
        </div>
      </div>

     

      <div className=' sm:mb-[30px] relative'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.175234582852!2d4.59306124631042!3d8.521977664161758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d55f8ab5c77%3A0xb00ee51d52919afa!2sAyotmide%20Petrol%20Station!5e1!3m2!1sen!2sng!4v1755249320713!5m2!1sen!2sng"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Data4Decision International"
    className=' w-full h-[500px] sm:h-[500px] sm:w-full '
  ></iframe>
</div>
 {/* Details (conditional) */}
      <div className="mt-40 absolute sm:w-[30%] w-[55%] sm:ml-30 ml-5">
        {selectedLocation === 'branch' && (
          <div className={`flex flex-col p-5 border-t-[5px]  ${colors.GetInTouchBg} ${colors.GetInTouchText}`}>
            <div>
              <h1 className="text-[15px] sm:text-[24px] font-bold">D4dbank,</h1>
              <h1 className="text-[15px] sm:text-[24px] font-bold">Nigeria</h1>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Data4Decision International</h1>
                <p className="text-[10px] sm:text-[20px]">D4DBin1234</p>
              </div>
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Address</h1>
                <p className="text-[10px] sm:text-[20px]">24/7, 2nd Floor Nipco Filling Station, Sango Road.</p>
                <p>SF 94112.</p>
              </div>
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Phone & Email</h1>
                <p className="text-[10px] sm:text-[20px]">+415-67-890-10</p>
                <p className="text-[10px] sm:text-[20px]">support@d4dbank1234.com</p>
              </div>
            </div>
          </div>
          
        )}

        {selectedLocation === 'atm' && (
          <div className={`flex flex-col p-5 border-t-[5px]  ${colors.GetInTouchBg} ${colors.GetInTouchText}`}>
            <div>
              <h1 className="text-[15px] sm:text-[24px] font-bold">Sango, 23/8</h1>
              <h1 className="text-[15px] sm:text-[24px] font-bold">Ilorin South Central</h1>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Data4Decision</h1>
                <p className="text-[10px] sm:text-[20px]">D4DBin1234</p>
              </div>
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Address</h1>
                <p className="text-[10px] sm:text-[20px]">24/7, 2nd Floor Nipco Filling Station, Sango Road.</p>
                <p>SF 94112.</p>
              </div>
              <div>
                <h1 className="text-[15px] sm:text-[24px] font-bold">Phone & Email</h1>
                <p className="text-[10px] sm:text-[20px]">+415-67-890-10</p>
                <p className="text-[10px] sm:text-[20px]">support@d4dbank1234.com</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <div className={` text-center text-[25px] font-bold my-5 sm:mb-20 sm:text-[40px] ${colors.GetInTouchText}`}>
        <h1>Customer Care Numbers</h1>
      </div>
      {/* table btn */}
      <div className="flex gap-3 items-center ml-10 sm:ml-20">
        <div className="">
        <button className={`px-4 py-2 sm:px-4 sm:py-2 ${colors.personalBtn} transition duration-300 transform hover:scale-105`} onClick={()=> setSelectedService ('personal')}>Personal Banking</button>
      </div>
      <div className="">
        <button className={`px-4 py-2 sm:px-4 sm:py-2 ${colors.corperateBtn} transition duration-300 transform hover:scale-105`} onClick={()=> setSelectedService ('corperate')}>Corperate Banking</button>
      </div>
      </div>
      {/* table */}
      {selectedService=== "personal" && (
      <div className='w-[90%] m-auto shadow-2xl rounded-2xl  opacity-100 transition-opacity duration-500 ease-in-out'>
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="text-10 sm:text-15 font-bold px-4 py-2 border border-gray-300 p-4">Personal Service</th>
        <th className="text-10 sm:text-15 font-bold px-4 py-2 border border-gray-300 py-4">Contact Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">General Query/Complaint</td>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">
          +844-123-4567-89 (Toll Free)
          <div className="border-t border-gray-300 mt-2 pt-2 py-4">
            info@data4decision.org
          </div>
        </td>
      </tr>
      <tr>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">Credit Card</td>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">
          +844-789-0123-45
          <div className="border-t border-gray-300 mt-2 pt-2 py-4">
            info@data4decision.org
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div className="flex gap-2 justify-center py-6 mb-8">
      <h1>To Submit Complain</h1>
      <Link to="/" className={`${colors.link}`}>Click Here</Link>
    </div>
</div>
)}
{selectedService=== "corperate" && (
<div className='w-[90%] m-auto shadow-2xl rounded-2xl opacity-100 transition-opacity duration-500 ease-in-out transition-opacity duration-500 ease-in-out'>
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="text-10 sm:text-15 px-4 py-2 border border-gray-300 p-4">Corporate Service</th>
        <th className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">Contact Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">General Query/Complaint</td>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">
          +844-123-4567-89 (Toll Free)
          <div className="border-t border-gray-300 mt-2 pt-2 py-4">
            info@data4decision.org
          </div>
        </td>
      </tr>
      <tr>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">Credit Card</td>
        <td className="text-10 sm:text-15 px-4 py-2 border border-gray-300 py-4">
          +844-789-0123-45
          <div className="border-t border-gray-300 mt-2 pt-2 py-4">
            info@data4decision.org
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div className="flex gap-2 justify-center py-6 mb-8">
      <h1>To Submit Complain</h1>
      <Link to="/" className={`${colors.link}`}>Click Here</Link>
    </div>
</div>
)}

      </div>
  
  );
};

export default GetInTouch;
