import React from "react";
import { FaCheck, FaRegCreditCard } from "react-icons/fa";

const ServiceSavingGetMore = ({ darkMode }) => {
  const primaryBg   = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg  = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg      = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border      = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor   = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText     = darkMode ? "text-[#ffffff]" : "text-[#f47b20]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";

  // Re-usable hover/active helpers
  const btnHover  = darkMode ? "group-hover:bg-[#0b0b5c]" : "group-hover:bg-[#f47b20]";
  const textHover = darkMode ? "group-hover:text-[#f47b20]" : "group-hover:text-[#0b0b5c]";

  return (
    <div className={`${bankBg}`}>
      <div className="text-center flex flex-col gap-2 mb-20 pt-20">
        <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] font-bold ${textColor}`}>
          Get More From Your Money
        </h1>
        <p className={`text-[12px] sm:text-[20px] md:text-[20px] ${textColor}`}>
          Access your money anytime and anywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Left panel */}
        <div className={`${bankBg}  ml-20 mr-20`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 shadow-lg">
            {/* Card 1 */}
            <div className={`border-r border-b pt-3 ${border}`}>
              <a
                href="#"
                className={`group flex flex-col gap-1 items-center p-2 ${accontBorder}`}
              >
                <FaCheck
                  size={30}
                  className={`border ${border} rounded-full p-1 transition-all duration-300 ${textColor} ${textHover} group-active:scale-95`}
                />
                <p
                  className={`text-[15px] sm:text-[20px] md:text-[20px] p-4 text-center transition-colors duration-300 ${textColor} ${textHover}`}
                >
                  Instant Account
                  <br />
                  Opening
                </p>
              </a>
            </div>

            {/* Card 2 */}
            <div className={`border-b ${border}`}>
              <a
                href="#"
                className={`group flex flex-col gap-1 items-center p-2 ${accontBorder}`}
              >
                <FaCheck
                  size={30}
                  className={`border ${border} rounded-full p-1 transition-all duration-300 ${textColor} ${textHover} group-active:scale-95`}
                />
                <p
                  className={`text-[15px] sm:text-[20px] md:text-[20px] p-4 text-center transition-colors duration-300 ${textColor} ${textHover}`}
                >
                  Exciting Offers &
                  <br />
                  Discount
                </p>
              </a>
            </div>

            {/* Card 3 */}
            <div>
              <a
                href="#"
                className={`group flex flex-col gap-1 items-center p-2 ${accontBorder}`}
              >
                <FaCheck
                  size={30}
                  className={`border ${border} rounded-full p-1 transition-all duration-300 ${textColor} ${textHover} group-active:scale-95`}
                />
                <p
                  className={`text-[15px] sm:text-[20px] md:text-[20px] p-4 text-center transition-colors duration-300 ${textColor} ${textHover}`}
                >
                  Secure Internet &
                  <br />
                  Mob Banking
                </p>
              </a>
            </div>

            {/* Card 4 */}
            <div className={`border-l ${border}`}>
              <a
                href="#"
                className={`group flex flex-col gap-1 items-center p-2 ${accontBorder}`}
              >
                <FaCheck
                  size={30}
                  className={`border ${border} rounded-full p-1 transition-all duration-300 ${textColor} ${textHover} group-active:scale-95`}
                />
                <p
                  className={`text-[15px] sm:text-[20px] md:text-[20px] p-4 text-center transition-colors duration-300 ${textColor} ${textHover}`}
                >
                  Earn
                  <br />
                  Reward Point
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-[15px] sm:text-[20px] md:text-[20px]">Know About</p>
                <h1 className={`text-[25px] sm:text-[40px] md:text-[40px] ${textColor}`}>
                  Savings Account
                </h1>
              </div>

              <p className={`text-[15px] sm:text-[20px] md:text-[20px] ${textColor}`}>
                Fail in their duty through weakness of will which is the same as saying
                through shrinking from toil and pain cases are perfectly simple and easy
                to distinguish. In a free hour, when our power of choice.
              </p>
              <p className={`text-[15px] sm:text-[20px] md:text-[20px] ${textColor}`}>
                The claims off duty or the obligations business it will frequently occur
                that pleasures be repudiated to distinguish nothing prevents.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 mb-6">
              <a
                href="#"
                className={`group relative inline-flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden ${primaryBg} text-white transition-colors duration-300`}
              >
                {/* Sliding overlay behind content */}
                <span className={`absolute inset-0 ${primarysBg} ${BtnText} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-50`} />

                {/* Content stays above */}
                <span className="relative z-10 flex items-center gap-3">
                  <FaRegCreditCard
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span className={`text-[15px] sm:text-[20px] md:text-[20px]`}>Open Account</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSavingGetMore;
