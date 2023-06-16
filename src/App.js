import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Content from './Content.js';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cityCOL1, setCityCOL1] = useState('');
  const [cityCOL2, setCityCOL2] = useState('');
  const [cityName1, setCityName1] = useState('');
  const [cityName2, setCityName2] = useState('');
  const [salary1, setSalary1] = useState('');
  const [salary2, setSalary2] = useState('');

  const handleFormSubmit = (formData) => {
    setIsSubmitted(true);
    setCityCOL1(formData.cityCOL1);
    setCityCOL2(formData.cityCOL2);
    setCityName1(formData.cityName1);
    setCityName2(formData.cityName2);
    setSalary1(formData.salary1);
    setSalary2(formData.salary2);
  };

  return (
    <div className="main">
        <Sidebar onFormSubmit={handleFormSubmit}/>
        <Content isSubmitted={isSubmitted} cityCOL1={cityCOL1} cityCOL2={cityCOL2} cityName1={cityName1} cityName2={cityName2} salary1={salary1} salary2={salary2} />
    </div>
  );
}

export default App;
