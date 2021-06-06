import "../Pages/Carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import bsi from "../ImagesCarousel/BSI.jpg";
import MBABI from "../ImagesCarousel/MBABI.jpg";
import SFC from "../ImagesCarousel/SFC.jpg";
import SMPC from "../ImagesCarousel/SMPC.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../Pages/SliderSliding.css";

const images = [bsi, MBABI, SFC, SMPC];

const CarouselAbout = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={50} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={50} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} textSub />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Slider>
          <div class="content">
            <div class="slider-wrapper">
              Certifications
              <div class="slider">
                <div class="slider-text1">Scrum Master Professional</div>
                <div class="slider-text2">Scrum Foundation</div>
                <div class="slider-text3">Information System</div>
                <div class="slider-text4">Busniess Intelligence</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CarouselAbout;
