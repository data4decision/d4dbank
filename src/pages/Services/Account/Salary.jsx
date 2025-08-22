import React from 'react'
import SalaryHero from "../../../components/SalaryHero"
import ServiceSavingGetMore from '../../../components/setSavingsGetMore';
import ServiceSavingReach from '../../../components/ServiceSavingReach';
import ServiceSavingOurSaving from '../../../components/ServiceSavingOurSaving';
import ServiceSavingElegibility from '../../../components/ServiceSavingElegibility';
import ServiceSavingSavings from '../../../components/ServiceSavingSavings';
import ServicesSavingAccCountInterest from "../../../components/ServicesSavingAccountInterest";
import Questions from '../../../components/Questions';

const Salary = ({darkMode, setDarkMode}) => {
 
  return (
    <div className={``}>
      <SalaryHero darkMode={darkMode} />
      <ServiceSavingGetMore darkMode={darkMode} />
      <ServiceSavingReach darkMode={darkMode} />
      <ServiceSavingOurSaving darkMode={darkMode} />
      <ServiceSavingElegibility darkMode={darkMode} />
      <ServiceSavingSavings darkMode={darkMode}/>
      <ServicesSavingAccCountInterest darkMode={darkMode}/>
      <Questions darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Salary