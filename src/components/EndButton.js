import "./EndButton.css"

import React from 'react';


const EndButton = () => {
  return (
    <div className="container">
      <div className="window">
        <p>TipSport</p>
        <button className="button2">Vybrat</button>
      </div>
      <div className="window">
        <p>NěcoSport</p>
        <button className="button2">Vybrat</button>
      </div>
      <div className="window">
        <p>JinejSport</p>
        <button className="button2">Vybrat</button>
      </div>
      <div className="window">
        <p>SazkaSport</p>
        <button className="button2">Vybrat</button>
      </div>
    </div>
  );
};

export default EndButton;