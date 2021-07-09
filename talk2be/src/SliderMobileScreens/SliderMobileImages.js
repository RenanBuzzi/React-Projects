import React, { useState, useEffect } from "react";
import sliderImage from "./SliderImages";
import SliderContent from "./SliderContentMobileImages";
import "./slideMobileImages.css";

const len = sliderImage.length - 1;

function SliderMobileImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slilderM-container">
      <SliderContent activeIndex={activeIndex}></SliderContent>
    </div>
  );
}

export default SliderMobileImages;
