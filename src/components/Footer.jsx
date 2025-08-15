import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode, setDarkMode }) => {
  // Colors based on Navbar palette for consistency
  const colors = darkMode
    ? {
        footBg: "bg-[#0b0b5c]",
        footText: "text-white",
        heading: "text-[#ffb366]",
        link: "hover:text-[#ffb366]",
        border: "border-[#23237a]",
        button:
          "bg-[#b3b3ff] text-[#1a1a1a] border-[#b3b3ff] hover:bg-[#ffb366] hover:text-[#1a1a1a]",
        downloadBtn: "bg-blue-400 text-[#0b0b5c] hover:bg-blue-500",
        complaintBtn: "bg-green-400 text-[#0b0b5c] hover:bg-green-500",
      }
    : {
        footBg: "bg-[#f47b20]",
        footText: "text-[#0b0b5c]",
        heading: "text-white",
        link: "hover:text-[#0b0b5c] underline",
        border: "border-[#f7cfa1]",
        button:
          "bg-[#0b0b5c] text-white border-[#0b0b5c] hover:bg-[#f47b20] hover:text-white",
        downloadBtn: "bg-blue-600 text-white hover:bg-blue-700",
        complaintBtn: "bg-green-600 text-white hover:bg-green-700",
        
      };

  return (
    <footer className={`${colors.footBg} ${colors.footText} py-10 px-4 transition-colors duration-300`}>
      {/* Top 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8 mt-8 rounded-t-lg shadow-inner text-center">
        {/* Column 1: Loans */}
        <div>
          <h4 className={`font-semibold mb-3 ${colors.heading}`}>Loans</h4>
          <ul className="space-y-2">
            <li><Link to="/services/loans/home-loans" className={colors.link}>Home Loan</Link></li>
            <li><Link to="/services/loans/personal" className={colors.link}>Personal Loan</Link></li>
            <li><Link to="/services/loans/vehicle" className={colors.link}>Vehicle Loan</Link></li>
            <li><Link to="/services/loans/education" className={colors.link}>Education Loan</Link></li>
            <li><Link to="/services/loans/gold" className={colors.link}>Gold Loan</Link></li>
            <li><Link to="/services/cards/low" className={colors.link}>Low Interest</Link></li>
            <li><Link to="/services/cards/our-all-cards" className={colors.link}>Our All Cards</Link></li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className={`font-semibold mb-3 ${colors.heading}`}>Rate & Charges</h4>
          <ul className="space-y-2">
            <li><Link to="/about/about-us" className={colors.link}>About Us</Link></li>
            <li><Link to="/about/testimonials" className={colors.link}>Testimonials</Link></li>
            <li><Link to="/about/careers" className={colors.link}>Careers</Link></li>
            <li><Link to="/about/career-detail" className={colors.link}>Career Detail</Link></li>
            <li><Link to="/about/faqs" className={colors.link}>Faq's</Link></li>
            <li><Link to="/news/list" className={colors.link}>List View</Link></li>
            <li><Link to="/get-in-touch" className={colors.link}>Get In Touch</Link></li>
          </ul>
        </div>

        {/* Column 3: About Us */}
        <div>
          <h4 className={`font-semibold mb-3 ${colors.heading}`}>About Us</h4>
          <ul className="space-y-2">
            <li><Link to="/about/about-us" className={colors.link}>About Us</Link></li>
            <li><Link to="/about/board" className={colors.link}>Board of Director</Link></li>
            <li><Link to="/about/career" className={colors.link}>Careers</Link></li>
            <li><Link to="/about/career-detail" className={colors.link}>Career Detail</Link></li>
            <li><Link to="/services/cards/business" className={colors.link}>Business</Link></li>
            <li><Link to="/about/faqs" className={colors.link}>Business</Link></li>
            <li><Link to="/about/testimonials" className={colors.link}>Business</Link></li>
          </ul>
        </div>

        {/* Column 4: Our Services + Dark Mode Button */}
        <div>
          <h4 className={`font-semibold mb-3 ${colors.heading}`}>Our Services</h4>
          <ul className="space-y-2">
            <li><Link to="/services/account/all-account" className={colors.link}>All Account</Link></li>
            <li><Link to="/services/loans/home-loans" className={colors.link}>Home Loan</Link></li>
            <li><Link to="/services/loans/personal" className={colors.link}>Personal Loan</Link></li>
            <li><Link to="/services/loans/vehicle" className={colors.link}>Vehicle Loan</Link></li>
            <li><Link to="/services/loans/education" className={colors.link}>Education Loan</Link></li>
            <li><Link to="/services/loans/gold" className={colors.link}>Gold Loan</Link></li>
            <li><Link to="/services/cards/our-all-cards" className={colors.link}>Our All Cards</Link></li>
          </ul>
          {/* Dark/Light Mode Toggle */}
          {setDarkMode && (
            <div className="mt-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-full px-3 py-2 rounded border text-sm transition-colors duration-200 mt-2 ${colors.button}`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t pt-8 mt-8 rounded-t-lg shadow-inner">
        {/* Column 1: Logo & About */}
        <div>
          <div className="flex flex-col items-center gap-2 mb-3">
            <img src="/logo.png" alt="D4DBank Logo" className="h-15 w-25" />
            <span className={`font-bold text-lg ${colors.heading}`}>D4DBank</span>
          </div>
          <p className="text-sm opacity-80 text-center">
            D4DBank is committed to providing secure, innovative, and customer-focused banking solutions for everyone.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <div className="text-center">
            <h1 className="font-bold">(+234)-806-951-7707</h1>
            <p>Customer Care</p>
          </div>
          <div className="text-center mt-6">
            <h1 className="font-bold">Mon - Fri: 9.00am to 5.00pm</h1>
            <p>Banking Hours</p>
          </div>
        </div>

        {/* Column 3: Form */}
        <div>
          {/* Download Forms Button */}
          <div className="text-center">
            <a
              href="your-file-url" // Replace with actual URL to the downloadable form
              className={`py-2 px-4 rounded inline-block mb-2 transition-colors duration-200 ${colors.downloadBtn}`}
              download="Download Form"
            >
              Download Forms
            </a>
          </div>
          {/* Register Complaint Button */}
          <div className="text-center mt-6">
            <button
              className={`py-2 px-4 rounded transition-colors duration-200 ${colors.complaintBtn}`}
              onClick={() => alert("Redirecting to complaint form...")}
            >
              Register Your Complaint
            </button>
          </div>
        </div>
      </div>

      {/* Social Links & Footer Text */}
      <div className="max-w-7xl flex md:flex gap-3 justify-between border-t pt-8 mt-8 rounded-t-lg shadow-inner">
        <div>
          <ul className="flex text-[12px]  md:flex gap-1 ml-5">
            <li><Link to="/services/account/all-account" className={colors.link}>All Account</Link></li>
            <li><Link to="/services/loans/home-loans" className={colors.link}>Home Loan</Link></li>
            <li><Link to="/services/loans/personal" className={colors.link}>Personal Loan</Link></li>
          </ul>
        </div>
        <div className="flex md:flex sm:flex gap-2 mr-10">
          <a href="https://facebook.com/Data4Decision_International" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={colors.link}>
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/data4decision_intl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={colors.link}>
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://X.com/Data4_Decision" target="_blank" rel="noopener noreferrer" aria-label="X" className={colors.link}>
            <img src="/x.png" alt="X" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className={`text-center mt-8 text-xs opacity-70 ${colors.border} pt-4 border-t`}>
        &copy; {new Date().getFullYear()} D4DBank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
