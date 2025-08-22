import React from 'react'
import ServicesSaving from '../../../components/ServicesSaving';
import ServiceSavingGetMore from '../../../components/setSavingsGetMore';
import ServiceSavingReach from '../../../components/ServiceSavingReach';
import ServiceSavingOurSaving from '../../../components/ServiceSavingOurSaving';
import ServiceSavingElegibility from '../../../components/ServiceSavingElegibility';
import ServiceSavingSavings from '../../../components/ServiceSavingSavings';
import ServicesSavingAccountInterest from '../../../components/ServicesSavingAccountInterest';
import Questions from '../../../components/Questions';

const Savings = ({darkMode, setDarkMode}) => {
 
  return (
    <div className={``}>
      <ServicesSaving darkMode={darkMode} />
      <ServiceSavingGetMore darkMode={darkMode} />
      <ServiceSavingReach darkMode={darkMode} />
      <ServiceSavingOurSaving darkMode={darkMode} />
      <ServiceSavingElegibility darkMode={darkMode} />
      <ServiceSavingSavings darkMode={darkMode}/>
      <ServicesSavingAccountInterest darkMode={darkMode}/>
      <Questions darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Savings