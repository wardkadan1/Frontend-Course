import React, { useState } from "react";
import "./swappingBar.css";

const Slider = () => {
  const [value, setValue] = useState(30); // Initial value of the slider

  const handleChange = (e) => {
    setValue(e.target.value); // Update value when slider moves
  };

  return (
    <div className="slider-container">
      <span className="slider-value">{value}</span>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
