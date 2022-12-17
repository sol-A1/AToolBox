import React, { useState } from 'react';
import QRcodeGenerator from './QRcodeGenerator';
import RandomNumberGenerator from './RandomNumberGenerator';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const setMinValue = (min) => {
    // set min value here
  };

  const setMaxValue = (max) => {
    // set max value here
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="toolbar">
        <button onClick={toggleDarkMode} className="dark-mode-toggle-button">Toggle Dark Mode</button>
      </div>
      <div className="title-container">
        <h1 className="title">Toolbox</h1>
      </div>
      <div className="feature-container">
        <h1 className="feature-title">QR Code Generator</h1>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="input"
        />
        <button onClick={() => setValue('')} className="button">Clear</button>
        <QRcodeGenerator value={value} />
      </div>
      <div className="feature-container">
        <h1 className="feature-title">Random Number Generator</h1>
        <RandomNumberGenerator setMin={setMinValue} setMax={setMaxValue} />
      </div>
    </div>
  );
}

export default App;

