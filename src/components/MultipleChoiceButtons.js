import "./MultipleChoiceButtons.css"

import React, { useState } from "react";

const MultipleChoiceButtons = () => {
  // Vytvoření stavu pro uchování vybraných možností
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Funkce pro zpracování kliknutí na tlačítko
  const handleButtonClick = (option) => {
    // Zjistíme, zda je tato možnost již vybraná
    const isOptionSelected = selectedOptions.includes(option);

    // Pokud je možnost již vybraná, odstraníme ji z vybraných
    if (isOptionSelected) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((selected) => selected !== option)
      );
    } else {
      // Pokud možnost není vybraná, přidáme ji k vybraným
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  return (
    <div className="container-main">
      <h2>Vyberte jednu nebo více možností:</h2>
      <button
        onClick={() => handleButtonClick("Možnost 1")}
        className={selectedOptions.includes("Možnost 1") ? "selected" : ""}
      >
        Možnost 1
      </button>
      <button
        onClick={() => handleButtonClick("Možnost 2")}
        className={selectedOptions.includes("Možnost 2") ? "selected" : ""}
      >
        Možnost 2
      </button>
      <button
        onClick={() => handleButtonClick("Možnost 3")}
        className={selectedOptions.includes("Možnost 3") ? "selected" : ""}
      >
        Možnost 3
      </button>
      <button
        onClick={() => handleButtonClick("Možnost 4")}
        className={selectedOptions.includes("Možnost 4") ? "selected" : ""}
      >
        Možnost 4
      </button>
      <button
        onClick={() => handleButtonClick("Možnost 5")}
        className={selectedOptions.includes("Možnost 5") ? "selected" : ""}
      >
        Možnost 5
      </button>
      <button
        onClick={() => handleButtonClick("Možnost 6")}
        className={selectedOptions.includes("Možnost 6") ? "selected" : ""}
      >
        Možnost 6
      </button>
      <p>Vybrané možnosti: {selectedOptions.join(", ")}</p>
    </div>
  );
};

export default MultipleChoiceButtons;