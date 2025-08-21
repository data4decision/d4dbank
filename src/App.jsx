import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// Import your page components
import Home from './pages/Home'
import About from './pages/About/index'
import Services from './pages/Services'
import News from './pages/About/News'
import ApplyNow from './pages/ApplyNow'
import GetInTouch from './pages/GetInTouch'

// About subpages
import AboutUs from './pages/About/index'
import Board from './pages/About/Board'
import Director from './pages/About/Director'
import Careers from './pages/About/Careers'
import CareerDetail from './pages/About/CareerDetail'
import Faqs from './pages/About/Faqs'
import Testimonials from './pages/About/Testimonials'
import AboutNews from './pages/About/News'

//Services subpages
import Account from './pages/Services/Account'
import Cards from './pages/Services/Cards'
import Loans from './pages/Services/Loans'
//Services sub-subpages
//Account
import AllAccount from "./pages/Services/Account/AllAccount"
import Current from "./pages/Services/Account/Current"
import Fixed from "./pages/Services/Account/fixed"
import Nri from "./pages/Services/Account/Nri"
import Recurring from "./pages/Services/Account/Recurring"
import Salary from "./pages/Services/Account/Salary"
import Savings from "./pages/Services/Account/Savings"

//Services sub-subpages
//Cards
import OurAllCards from "./pages/Services/Cards/OurAllCards"
import Business from "./pages/Services/Cards/Business"
import Cashback from "./pages/Services/Cards/Cashback"
import Low from "./pages/Services/Cards/Low"
import Secured from "./pages/Services/Cards/Secured"
import Travel from "./pages/Services/Cards/Travel"
import Rewards from "./pages/Services/Cards/Rewards"

//Services sub-subpages
//Loans
import HomeLoan from './pages/Services/Loans/HomeLoan'
import PersonalLoan from './pages/Services/Loans/PersonalLoan'
import VehicleLoan from './pages/Services/Loans/VehicleLoan'
import EducationLoan from './pages/Services/Loans/EducationLoan'
import GoldLoan from './pages/Services/Loans/GoldLoan'
//News
import SinglePost from './pages/News/SinglePost'
import LargeImage from './pages/News/LargeImage'
import GridView from './pages/News/GridView'
import ListView from './pages/News/ListView'

//Apply Now
import Homel from './pages/Apply/HomeLoan'
import Personal from './pages/Apply/PersonalLoan'
import Vehicle from './pages/Apply/VehicleLoan'
import Education from './pages/Apply/EducationLoan'
import Gold from './pages/Apply/GoldLoan'


function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Color palette for page background and text
  const bgClass = darkMode ? 'bg-[#1a1a1a]' : 'bg-[#ffffff]'
  const textClass = darkMode ? 'text-[#b3b3ff]' : 'text-[#0b0b5c]'

  return (
    <div className={`${bgClass} ${textClass} min-h-screen font-sans transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/board" element={<Board />} />
        <Route path="/about/director" element={<Director />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/about/career-detail" element={<CareerDetail />} />
        <Route path="/about/faqs" element={<Faqs />} />
        <Route path="/about/testimonials" element={<Testimonials />} />
        <Route path="/about/news" element={<AboutNews />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/get-in-touch" element={<GetInTouch darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/services/account" element={<Account/>}/>
        <Route path="/services/cards" element={<Cards/>}/>
        <Route path="/services/loans" element={<Loans/>}/>
        <Route path="/services/account/all-account" element={<AllAccount  darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        <Route path="/services/account/current" element={<Current/>}/>
        <Route path="/services/account/fixed" element={<Fixed/>}/>
        <Route path="/services/account/nri" element={<Nri/>}/>
        <Route path="/services/account/recurring" element={<Recurring/>}/>
        <Route path="/services/account/salary" element={<Salary/>}/>
        <Route path="/services/account/savings" element={<Savings/>}/>
        <Route path="/services/cards/our-all-cards" element={<OurAllCards/>}/>
        <Route path="/services/cards/business" element={<Business/>}/>
        <Route path="/services/cards/cash-back" element={<Cashback/>}/>
        <Route path="/services/cards/low-interest" element={<Low/>}/>
        <Route path="/services/cards/rewards" element={<Rewards/>}/>
        <Route path="/services/cards/secured" element={<Secured/>}/>
        <Route path="/services/cards/travel" element={<Travel/>}/>
        <Route path="/services/loans/home-loans" element={<HomeLoan/>}/>
        <Route path="/services/loans/personal" element={<PersonalLoan/>}/>
        <Route path="/services/loans/vehicle" element={<VehicleLoan/>}/>
        <Route path="/services/loans/education" element={<EducationLoan/>}/>
        <Route path="/services/loans/gold" element={<GoldLoan/>}/>
        <Route path="/news/grid" element={<GridView />} />
         <Route path="/news/large" element={<LargeImage />} />
          <Route path="/news/list" element={<ListView />} />
           <Route path="/news/single" element={<SinglePost />} />
           <Route path="/apply/home-loan" element={<Homel/>}/>
        <Route path="/apply/personal" element={<Personal/>}/>
        <Route path="/apply/vehicle" element={<Vehicle/>}/>
        <Route path="/apply/education" element={<Education/>}/>
        <Route path="/apply/gold" element={<Gold/>}/>
      </Routes>
     <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  )
}

export default App