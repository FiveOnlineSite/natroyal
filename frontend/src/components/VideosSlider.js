import React from "react";
import Slider from "react-slick";

const VideosSlider = ({ settings, slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className="videos-slider">
          <div className="row">
            <div key={index} className="videos-element">
              <div className="videos-image-container">
                <img src={slide.thumbnail} alt="product" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default VideosSlider;
