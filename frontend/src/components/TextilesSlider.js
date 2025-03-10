import React from "react";
import Slider from "react-slick";

const TextilesSlider = ({ settings, slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className="textiles-slider mt-5">
          <div className="row">
            <div key={index} className="textiles-element">
              <div className="textiles-container">
                <div className="textiles-image-container">
                  <img src={slide.image} alt="textiles" className="w-100" />
                </div>
                <div className="textiles-slider-content">
                  <h4>{slide.name}</h4>

                  <div className="row textiles-content">
                    <div className="col-lg-6">
                      <h6>For Lamination</h6>
                      <p>{slide.lamination_text}</p>
                    </div>
                    <div className="col-lg-6">
                      <h6>For Coating</h6>
                      <p>{slide.coating_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TextilesSlider;
