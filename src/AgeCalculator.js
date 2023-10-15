// src/AgeCalculator.js
import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const ageDiff = today - birthdateDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <input
          type="date"
          value={birthdate}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container">
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <div className="result-container">
        {age !== null && <p className="result">Your age is: {age} years old.</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;
