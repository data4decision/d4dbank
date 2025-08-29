import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const PaginationListGrid = ({ darkMode }) => {
  const location = useLocation();

  const primaryBg  = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const border     = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor  = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";

  const onFirst  = location.pathname === "/news/list";
  const onSecond = location.pathname === "/news/list-two";

  return (
    <div className="flex gap-3 items-center">
      {/* Conditionally show Next or Prev */}
      {onFirst ? (
        <Link
          to="/news/list-two"
          className={`flex gap-3 items-center border w-32 px-3 py-2 transition-all duration-300 hover:${primarysBg} ${border}`}
        >
          <p className={`${textColor}`}>Next Page</p>
          <FaArrowRight size={10} className={`${textColor}`} />
        </Link>
      ) : (
        <Link
          to="/news/list"
          className={`flex gap-3 items-center border w-32 px-3 py-2 transition-all duration-300 hover:${primarysBg} ${border}`}
        >
          <FaArrowLeft size={10} className={`${textColor}`} />
          <p className={`${textColor}`}>Prev Page</p>
        </Link>
      )}

      {/* Page 1 */}
      <Link
        to="/news/list"
        className={`flex justify-center items-center border w-9 h-9 transition-all duration-300 ${
          onFirst ? primarysBg : ""
        } ${border}`}
      >
        <p className={`${textColor}`}>1</p>
      </Link>

      {/* Page 2 */}
      <Link
        to="/news/list-two"
        className={`flex justify-center items-center border w-9 h-9 transition-all duration-300 ${
          onSecond ? primarysBg : ""
        } ${border}`}
      >
        <p className={`${textColor}`}>2</p>
      </Link>
    </div>
  );
};

export default PaginationListGrid;
