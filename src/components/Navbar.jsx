import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

/**
 * Responsive Navbar
 * - Mobile (sm): hamburger + stacked accordions for submenus
 * - Tablet/Desktop (md+): horizontal bar with hoverable dropdowns
 * - ESC / outside click to close
 */
const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cardsOpen, setCardsOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  const aboutTimeout = useRef(null);
  const servicesTimeout = useRef(null);
  const accountTimeout = useRef(null);
  const cardsTimeout = useRef(null);
  const loansTimeout = useRef(null);
  const newsTimeout = useRef(null);
  const applyTimeout = useRef(null);
  const navbarRef = useRef(null);

  // Use conditional classes for dark/light mode (like in the video)
  const navBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const navText = darkMode ? "text-white" : "text-[#0b0b5c]";
  const navActive = darkMode ? "text-[#ffb366]" : "text-[#f47b20]";
  const dropdownBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const dropdownText = darkMode ? "text-white" : "text-[#0b0b5c]";
  const button =
    darkMode
      ? "bg-[#b3b3ff] text-[#1a1a1a] border-[#b3b3ff] hover:bg-[#ffb366] hover:text-[#1a1a1a]"
      : "bg-[#0b0b5c] text-white border-[#0b0b5c] hover:bg-[#f47b20] hover:text-white";
  const accent = darkMode ? "text-[#f47b20]" : "text-white";

  const clearAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setAccountOpen(false);
    setCardsOpen(false);
    setLoansOpen(false);
    setNewsOpen(false);
    setApplyOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        clearAll();
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        clearAll();
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Helpers for desktop hover (won’t affect touch devices)
  const withHover = (enter, leaveRef, setOpen) => ({
    onMouseEnter: () => {
      if (leaveRef?.current) clearTimeout(leaveRef.current);
      setOpen(true);
    },
    onMouseLeave: () => {
      if (!leaveRef) return;
      leaveRef.current = setTimeout(() => setOpen(false), 200);
    },
  });

  return (
    <header
      ref={navbarRef}
      className={`${navBg} ${navText} sticky top-0 z-50 w-full font-sans shadow transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="D4DBank Logo"
              className="h-10 w-10 object-contain"
            />
            <span className={`text-lg font-bold ${accent}`}>D4DBank</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className={`hover:underline ${navText} hover:${navActive}`}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="relative"
                  {...withHover(() => {}, aboutTimeout, setAboutOpen)}>
                <button
                  type="button"
                  className={`flex items-center gap-1 hover:underline ${navText} hover:${navActive} focus:outline-none`}
                  onClick={() => setAboutOpen((o) => !o)}
                  aria-expanded={aboutOpen}
                  aria-haspopup="menu"
                >
                  About
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <ul
                    role="menu"
                    className={`absolute left-0 top-full mt-2 min-w-[220px] rounded-lg shadow-lg z-20 ${dropdownBg} ${dropdownText} p-2`}
                  >
                    <li><Link to="/about/about-us" className="block rounded px-4 py-2 hover:bg-black/10">About Us</Link></li>
                    <li><Link to="/about/board" className="block rounded px-4 py-2 hover:bg-black/10">Board of Directors</Link></li>
                    <li><Link to="/about/director" className="block rounded px-4 py-2 hover:bg-black/10">Director Details</Link></li>
                    <li><Link to="/about/careers" className="block rounded px-4 py-2 hover:bg-black/10">Careers</Link></li>
                    <li><Link to="/about/career-detail" className="block rounded px-4 py-2 hover:bg-black/10">Career Detail</Link></li>
                    <li><Link to="/about/faqs" className="block rounded px-4 py-2 hover:bg-black/10">FAQs</Link></li>
                    <li><Link to="/about/testimonials" className="block rounded px-4 py-2 hover:bg-black/10">Testimonials</Link></li>
                    <li><Link to="/about/news" className="block rounded px-4 py-2 hover:bg-black/10">News</Link></li>
                  </ul>
                )}
              </li>

              {/* Services */}
              <li className="relative"
                  {...withHover(() => {}, servicesTimeout, setServicesOpen)}>
                <button
                  type="button"
                  className={`flex items-center gap-1 hover:underline ${navText} hover:${navActive} focus:outline-none`}
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  Services
                  <FaChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <ul
                    role="menu"
                    className={`absolute left-0 top-full mt-2 min-w-[240px] rounded-lg shadow-lg z-20 ${dropdownBg} ${dropdownText} p-2`}
                  >
                    {/* Account */}
                    <li className="relative"
                        {...withHover(() => {}, accountTimeout, setAccountOpen)}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded px-4 py-2 hover:bg-black/10"
                        onClick={() => setAccountOpen((o) => !o)}
                        aria-expanded={accountOpen}
                      >
                        <span>Account</span>
                        <FaChevronDown size={12} className={`transition-transform ${accountOpen ? "rotate-180" : ""}`} />
                      </button>
                      {accountOpen && (
                        <ul
                          className={`absolute left-full top-0 ml-2 min-w-[220px] rounded-lg shadow-lg z-30 ${dropdownBg} ${dropdownText} p-2`}
                        >
                          <li><Link to="/services/account/all-account" className="block rounded px-4 py-2 hover:bg-black/10">All Account</Link></li>
                          <li><Link to="/services/account/savings" className="block rounded px-4 py-2 hover:bg-black/10">Savings Account</Link></li>
                          <li><Link to="/services/account/current" className="block rounded px-4 py-2 hover:bg-black/10">Current Account</Link></li>
                          <li><Link to="/services/account/fixed" className="block rounded px-4 py-2 hover:bg-black/10">Fixed Deposit Account</Link></li>
                          <li><Link to="/services/account/salary" className="block rounded px-4 py-2 hover:bg-black/10">Salary Account</Link></li>
                          <li><Link to="/services/account/recurring" className="block rounded px-4 py-2 hover:bg-black/10">Recurring Deposit Account</Link></li>
                          <li><Link to="/services/account/nri" className="block rounded px-4 py-2 hover:bg-black/10">NRI Account</Link></li>
                        </ul>
                      )}
                    </li>

                    {/* Cards */}
                    <li className="relative"
                        {...withHover(() => {}, cardsTimeout, setCardsOpen)}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded px-4 py-2 hover:bg-black/10"
                        onClick={() => setCardsOpen((o) => !o)}
                        aria-expanded={cardsOpen}
                      >
                        <span>Cards</span>
                        <FaChevronDown size={12} className={`transition-transform ${cardsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {cardsOpen && (
                        <ul className={`absolute left-full top-0 ml-2 min-w-[220px] rounded-lg shadow-lg z-30 ${dropdownBg} ${dropdownText} p-2`}>
                          <li><Link to="/services/cards/our-all-cards" className="block rounded px-4 py-2 hover:bg-black/10">Our All Cards</Link></li>
                          <li><Link to="/services/cards/business" className="block rounded px-4 py-2 hover:bg-black/10">Business</Link></li>
                          <li><Link to="/services/cards/cash-back" className="block rounded px-4 py-2 hover:bg-black/10">CashBack</Link></li>
                          <li><Link to="/services/cards/low-interest" className="block rounded px-4 py-2 hover:bg-black/10">Low Interest</Link></li>
                          <li><Link to="/services/cards/rewards" className="block rounded px-4 py-2 hover:bg-black/10">Rewards</Link></li>
                          <li><Link to="/services/cards/secured" className="block rounded px-4 py-2 hover:bg-black/10">Secured</Link></li>
                          <li><Link to="/services/cards/travel" className="block rounded px-4 py-2 hover:bg-black/10">Travel &amp; Hotel</Link></li>
                        </ul>
                      )}
                    </li>

                    {/* Loans */}
                    <li className="relative"
                        {...withHover(() => {}, loansTimeout, setLoansOpen)}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded px-4 py-2 hover:bg-black/10"
                        onClick={() => setLoansOpen((o) => !o)}
                        aria-expanded={loansOpen}
                      >
                        <span>Loans</span>
                        <FaChevronDown size={12} className={`transition-transform ${loansOpen ? "rotate-180" : ""}`} />
                      </button>
                      {loansOpen && (
                        <ul className={`absolute left-full top-0 ml-2 min-w-[220px] rounded-lg shadow-lg z-30 ${dropdownBg} ${dropdownText} p-2`}>
                          <li><Link to="/services/loans/home-loan" className="block rounded px-4 py-2 hover:bg-black/10">Home Loan</Link></li>
                          <li><Link to="/services/loans/personal" className="block rounded px-4 py-2 hover:bg-black/10">Personal Loan</Link></li>
                          <li><Link to="/services/loans/vehicle" className="block rounded px-4 py-2 hover:bg-black/10">Vehicle Loan</Link></li>
                          <li><Link to="/services/loans/education" className="block rounded px-4 py-2 hover:bg-black/10">Education Loan</Link></li>
                          <li><Link to="/services/loans/gold" className="block rounded px-4 py-2 hover:bg-black/10">Gold Loan</Link></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* News */}
              <li className="relative"
                  {...withHover(() => {}, newsTimeout, setNewsOpen)}>
                <button
                  type="button"
                  className={`flex items-center gap-1 hover:underline ${navText} hover:${navActive} focus:outline-none`}
                  onClick={() => setNewsOpen((o) => !o)}
                  aria-expanded={newsOpen}
                >
                  News
                  <FaChevronDown size={12} className={`transition-transform duration-200 ${newsOpen ? "rotate-180" : ""}`} />
                </button>
                {newsOpen && (
                  <ul className={`absolute left-0 top-full mt-2 min-w-[220px] rounded-lg shadow-lg z-20 ${dropdownBg} ${dropdownText} p-2`}>
                    <li><Link to="/news/grid" className="block rounded px-4 py-2 hover:bg-black/10">Grid View</Link></li>
                    <li><Link to="/news/list" className="block rounded px-4 py-2 hover:bg-black/10">List View</Link></li>
                    <li><Link to="/news/large" className="block rounded px-4 py-2 hover:bg-black/10">Large Image</Link></li>
                    <li><Link to="/news/single" className="block rounded px-4 py-2 hover:bg-black/10">Single Post</Link></li>
                  </ul>
                )}
              </li>

              {/* Apply Now */}
              <li className="relative"
                  {...withHover(() => {}, applyTimeout, setApplyOpen)}>
                <button
                  type="button"
                  className={`flex items-center gap-1 hover:underline ${navText} hover:${navActive} focus:outline-none`}
                  onClick={() => setApplyOpen((o) => !o)}
                  aria-expanded={applyOpen}
                >
                  Apply Now
                  <FaChevronDown size={12} className={`transition-transform duration-200 ${applyOpen ? "rotate-180" : ""}`} />
                </button>
                {applyOpen && (
                  <ul className={`absolute left-0 top-full mt-2 min-w-[220px] rounded-lg shadow-lg z-20 ${dropdownBg} ${dropdownText} p-2`}>
                    <li><Link to="/apply/home-loan" className="block rounded px-4 py-2 hover:bg-black/10">Home Loan</Link></li>
                    <li><Link to="/apply/personal" className="block rounded px-4 py-2 hover:bg-black/10">Personal Loan</Link></li>
                    <li><Link to="/apply/vehicle" className="block rounded px-4 py-2 hover:bg-black/10">Vehicle Loan</Link></li>
                    <li><Link to="/apply/education" className="block rounded px-4 py-2 hover:bg-black/10">Education Loan</Link></li>
                    <li><Link to="/apply/gold" className="block rounded px-4 py-2 hover:bg-black/10">Gold Loan</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/get-in-touch"
                  className={`hover:underline ${navText} hover:${navActive}`}
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`hidden md:inline-block px-3 py-1 rounded border text-sm transition-colors duration-200 ${button}`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className={`md:hidden pb-4 ${navText}`}>
            <div className="flex items-center justify-between py-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-3 py-1 rounded border text-sm transition-colors duration-200 ${button}`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <Link
                to="/get-in-touch"
                className="underline underline-offset-4"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </Link>
            </div>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block rounded px-3 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* Mobile accordions */}
              <MobileAccordion
                label="About"
                open={aboutOpen}
                setOpen={setAboutOpen}
              >
                <MobileItem to="/about/about-us" setMobileOpen={setMobileOpen}>About Us</MobileItem>
                <MobileItem to="/about/board" setMobileOpen={setMobileOpen}>Board of Directors</MobileItem>
                <MobileItem to="/about/director" setMobileOpen={setMobileOpen}>Director Details</MobileItem>
                <MobileItem to="/about/careers" setMobileOpen={setMobileOpen}>Careers</MobileItem>
                <MobileItem to="/about/career-detail" setMobileOpen={setMobileOpen}>Career Detail</MobileItem>
                <MobileItem to="/about/faqs" setMobileOpen={setMobileOpen}>FAQs</MobileItem>
                <MobileItem to="/about/testimonials" setMobileOpen={setMobileOpen}>Testimonials</MobileItem>
                <MobileItem to="/about/news" setMobileOpen={setMobileOpen}>News</MobileItem>
              </MobileAccordion>

              <MobileAccordion
                label="Services"
                open={servicesOpen}
                setOpen={setServicesOpen}
              >
                <MobileAccordion
                  nested
                  label="Account"
                  open={accountOpen}
                  setOpen={setAccountOpen}
                >
                  <MobileItem to="/services/account/all-account" setMobileOpen={setMobileOpen}>All Account</MobileItem>
                  <MobileItem to="/services/account/savings" setMobileOpen={setMobileOpen}>Savings Account</MobileItem>
                  <MobileItem to="/services/account/current" setMobileOpen={setMobileOpen}>Current Account</MobileItem>
                  <MobileItem to="/services/account/fixed" setMobileOpen={setMobileOpen}>Fixed Deposit Account</MobileItem>
                  <MobileItem to="/services/account/salary" setMobileOpen={setMobileOpen}>Salary Account</MobileItem>
                  <MobileItem to="/services/account/recurring" setMobileOpen={setMobileOpen}>Recurring Deposit Account</MobileItem>
                  <MobileItem to="/services/account/nri" setMobileOpen={setMobileOpen}>NRI Account</MobileItem>
                </MobileAccordion>

                <MobileAccordion
                  nested
                  label="Cards"
                  open={cardsOpen}
                  setOpen={setCardsOpen}
                >
                  <MobileItem to="/services/cards/our-all-cards" setMobileOpen={setMobileOpen}>Our All Cards</MobileItem>
                  <MobileItem to="/services/cards/business" setMobileOpen={setMobileOpen}>Business</MobileItem>
                  <MobileItem to="/services/cards/cash-back" setMobileOpen={setMobileOpen}>CashBack</MobileItem>
                  <MobileItem to="/services/cards/low-interest" setMobileOpen={setMobileOpen}>Low Interest</MobileItem>
                  <MobileItem to="/services/cards/rewards" setMobileOpen={setMobileOpen}>Rewards</MobileItem>
                  <MobileItem to="/services/cards/secured" setMobileOpen={setMobileOpen}>Secured</MobileItem>
                  <MobileItem to="/services/cards/travel" setMobileOpen={setMobileOpen}>Travel &amp; Hotel</MobileItem>
                </MobileAccordion>

                <MobileAccordion
                  nested
                  label="Loans"
                  open={loansOpen}
                  setOpen={setLoansOpen}
                >
                  <MobileItem to="/services/loans/home-loan" setMobileOpen={setMobileOpen}>Home Loan</MobileItem>
                  <MobileItem to="/services/loans/personal" setMobileOpen={setMobileOpen}>Personal Loan</MobileItem>
                  <MobileItem to="/services/loans/vehicle" setMobileOpen={setMobileOpen}>Vehicle Loan</MobileItem>
                  <MobileItem to="/services/loans/education" setMobileOpen={setMobileOpen}>Education Loan</MobileItem>
                  <MobileItem to="/services/loans/gold" setMobileOpen={setMobileOpen}>Gold Loan</MobileItem>
                </MobileAccordion>
              </MobileAccordion>

              <MobileAccordion
                label="News"
                open={newsOpen}
                setOpen={setNewsOpen}
              >
                <MobileItem to="/news/grid" setMobileOpen={setMobileOpen}>Grid View</MobileItem>
                <MobileItem to="/news/list" setMobileOpen={setMobileOpen}>List View</MobileItem>
                <MobileItem to="/news/large" setMobileOpen={setMobileOpen}>Large Image</MobileItem>
                <MobileItem to="/news/single" setMobileOpen={setMobileOpen}>Single Post</MobileItem>
              </MobileAccordion>

              <MobileAccordion
                label="Apply Now"
                open={applyOpen}
                setOpen={setApplyOpen}
              >
                <MobileItem to="/apply/home-loan" setMobileOpen={setMobileOpen}>Home Loan</MobileItem>
                <MobileItem to="/apply/personal" setMobileOpen={setMobileOpen}>Personal Loan</MobileItem>
                <MobileItem to="/apply/vehicle" setMobileOpen={setMobileOpen}>Vehicle Loan</MobileItem>
                <MobileItem to="/apply/education" setMobileOpen={setMobileOpen}>Education Loan</MobileItem>
                <MobileItem to="/apply/gold" setMobileOpen={setMobileOpen}>Gold Loan</MobileItem>
              </MobileAccordion>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

/** ---------- Small helpers for mobile accordion ---------- */

const MobileAccordion = ({ label, open, setOpen, children, nested = false }) => {
  return (
    <li>
      <button
        type="button"
        className={`flex w-full items-center justify-left gap-2 rounded px-3 py-2 ${nested ? "pl-6" : ""} focus:outline-none`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{label}</span>
        <FaChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className={`${nested ? "pl-3" : ""} space-y-1`}>{children}</ul>
      )}
    </li>
  );
};

const MobileItem = ({ to, children, setMobileOpen }) => (
  <li>
    <Link
      to={to}
      className="block rounded px-4 py-2 hover:bg-black/10"
      onClick={() => setMobileOpen(false)}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;