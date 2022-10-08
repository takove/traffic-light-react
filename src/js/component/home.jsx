import React, { useState } from "react";

function Home() {
  const [selectedColorRed, setSelectedColorRed] = useState(false);
  const [selectedColorYellow, setSelectedColorYellow] = useState(false);
  const [selectedColorGreen, setSelectedColorGreen] = useState(false);
  
  return (
    <div className="d-flex justify-content-center">
      <div className="mainFrame">
        <div
          onClick={() => {
            setSelectedColorYellow(false),
            setSelectedColorRed(prev => !prev),
            setSelectedColorGreen(false);
          }}
          className={`trafficLight red ${
            selectedColorRed === true ? "shadow-css" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            setSelectedColorYellow(prev => !prev),
            setSelectedColorRed(false),
            setSelectedColorGreen(false);
          }}
          className={`trafficLight yellow ${
            selectedColorYellow === true ? "shadow-css" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            setSelectedColorYellow(false),
            setSelectedColorRed(false),
            setSelectedColorGreen(prev => !prev);
          }}
          className={`trafficLight green ${
            selectedColorGreen === true ? "shadow-css" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Home;
