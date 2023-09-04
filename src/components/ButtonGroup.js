import React, { useState } from 'react';

import "./ButtonGroup.css";

const ButtonGroup = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  return (
    <div className="button-group">
      <h1>Vyber zápas</h1>
      <button
        className={`button ${selectedButtons.includes(1) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(1)}
      >
        Ac sparta vs Neznám žadné teamy
      </button>
      <button
        className={`button ${selectedButtons.includes(2) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(2)}
      >
        Ac sparta vs Ostrava 
      </button>
      <button
        className={`button ${selectedButtons.includes(3) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(3)}
      >
        Ostrava vs Milan 
      </button>
      <button
        className={`button ${selectedButtons.includes(4) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(4)}
      >
        Barcelona vs Bžudovice
      </button>
      <button
        className={`button ${selectedButtons.includes(5) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(5)}
      >
        Marcipán vs Thc
      </button>
    </div>
  );
};

export default ButtonGroup;