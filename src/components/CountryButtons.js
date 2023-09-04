import React from 'react';
import "./CountryButtons.css";

const countries = [
  { name: 'Země 1', image: 'country1.jpg' },
  { name: 'Země 2', image: 'country2.jpg' },
  { name: 'Země 3', image: 'country3.jpg' },
  { name: 'Země 4', image: 'country4.jpg' },
  { name: 'Země 5', image: 'country5.jpg' },
  { name: 'Země 6', image: 'country6.jpg' },
  { name: 'Země 7', image: 'country7.jpg' },
];

const CountryButtons = ({ onSelect }) => {
  return (
    <div className='container-country'>
      {countries.map((country, index) => (
        <button
          key={index}
          onClick={() => onSelect(country)}
        >
          {country.name}
          <br />
          <img src={`/images/${country.image}`} alt={country.name} width="50" height="50" />
        </button>
      ))}
    </div>
  );
};

export default CountryButtons;