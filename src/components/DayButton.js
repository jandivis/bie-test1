import "./DayButton.css"
import React, { useState } from "react";

const DayButton = () => {
  // Stav pro uchování informace o vybraném dni
  const [selectedDay, setSelectedDay] = useState(null);

  // Funkce pro zpracování kliknutí na tlačítka
  const handleButtonClick = (day) => {
    setSelectedDay(day); // Nastavení vybraného dne
  };

  return (
    <div className="Button-day-container">
      <h1 className="h1">Vyberte den</h1>
      <button
        onClick={() => handleButtonClick("Dnes")}
        className={selectedDay === "Dnes" ? "selected" : ""}
      >
        Dnes
      </button>
      <button
        onClick={() => handleButtonClick("Zítra")}
        className={selectedDay === "Zítra" ? "selected" : ""}
      >
        Zítra
      </button>
      {selectedDay && <p>Vybrán den: {selectedDay}</p>}
    </div>
  );
};

export default  DayButton;