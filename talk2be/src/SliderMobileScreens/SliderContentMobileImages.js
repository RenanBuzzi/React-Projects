import React from "react";
import sliderImage from "./SliderImages";

function SliderContentMobileImages(props) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === props.activeIndex ? "sliderM active" : "inactive"
          }
        >
          <img className="slideM-image" src={slide.urls} alt="" />
          {/* <h3 className="slideM-title">{slide.title}</h3>
          <p className="slideM-text">{slide.description}</p> */}
        </div>
      ))}
    </section>
  );
}

export default SliderContentMobileImages;
