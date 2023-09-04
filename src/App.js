import React, { useState } from "react";
import "./App.css";
import MultipleChoiceButtons from "./components/MultipleChoiceButtons";
import DayButton from "./components/DayButton";
import PickCountry from "./components/ButtonGroup";
import CountryButtons from "./components/CountryButtons"; // Import komponenty CountryButtons
import ButtonGroup from "./components/ButtonGroup";
import AddTicket from "./components/AddTicket";
import EndButton from "./components/EndButton";


const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <img
        src="https://th.bing.com/th/id/R.be2c11cce9dc150670af458ae57cae07?rik=cyGnoMerM3JnBA&riu=http%3a%2f%2frapidplzen.cz%2fwp-content%2fuploads%2f2019%2f04%2fFortuna_w_pozadi-768x189.jpg&ehk=Z9jXEIzlR%2f3WLhfdBftfk2AodwlHUbQOmu%2b91Wt%2b%2f6A%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <h1 className="main-h1">Nastavení vyhledávání</h1>
      <MultipleChoiceButtons />
      <hr />
      <div className="head-ppc">
        <img
          src="https://silesion.pl/wp-content/uploads/2022/11/Najlepsze-Otwarcie-w-Fortunie.jpg"
          alt=""
        />
        <img
          src="https://media.licdn.com/dms/image/C4D05AQEFUSfKDLsXuA/feedshare-thumbnail_720_1280/0/1665994295067?e=2147483647&v=beta&t=7GjJT9dp_KUU8Zx0eHlt0Z9GdVmY48uOOyZFbdM-q80"
          alt=""
        />
      </div>
      <div className="container-day">
        <h1>Najít a porovnat</h1>
        <DayButton />
        <PickCountry />
        {selectedCountry && (
          <div className="chose-country">
            <h2>Vybraná země: {selectedCountry.name}</h2>
            <img
              src={`/images/${selectedCountry.image}`}
              alt={selectedCountry.name}
              width="200"
              height="200"
            />
          </div>
        )}

      </div>
      <h1>Vyber zemi</h1>
      <CountryButtons onSelect={handleSelectCountry} />
      <AddTicket/>
      <h2>Nejvýhodnější je podat ticket u:</h2>
      <EndButton/>
      

    </div>
    
    



  );
 
};

export default App;
