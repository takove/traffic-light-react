import React, { useState } from "react";

function Home() {
  const [selectedColor, setSelectedColor] = useState("");
  const [active, setActive] = useState(false)
  return (
    <div className="d-flex justify-content-center">
      <div className="mainFrame">
        <div
          onClick={() => {
            setSelectedColor("red");
            setActive(!active);
          }}
          className={`trafficLight red ${
            selectedColor === "red" && active ? "shadow-css" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            setSelectedColor("yellow");
            setActive(!active);
          }}
          className={`trafficLight yellow ${
            selectedColor === "yellow"  && active ? "shadow-css" : ""
          }`}
        ></div>
        <div
          onClick={() => {
            setSelectedColor("rgb(14,255,26)");
            setActive(!active);
          }}
          className={`trafficLight green ${
            selectedColor === "rgb(14,255,26)"  && active ? "shadow-css" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Home;
