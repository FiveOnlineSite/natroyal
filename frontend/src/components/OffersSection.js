import React from "react";
import OfferSlider from "../components/OfferSlider";

const OffersSection = () => {
  const OfferingsPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 905.png" alt="left-arrow" />
      </button>
    );
  };

  const OfferingsNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 906.png" alt="right-arrow" />
      </button>
    );
  };

  const offersData = [
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
    {
      image: "/images/planks/Sapwood.png",
      name: "Sapwood",
      type: "150 001",
    },
  ];

  const offersSettings = {
    dots: false,
    nextArrow: <OfferingsNextArrow />,
    prevArrow: <OfferingsPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="what-we-offer-section">
      <div className="container">
        <h6 className="subtitle gray-subtitle">
          <span className="me-3"></span>
          what we offer
        </h6>
        <h2 className="title new-title">
          Innovative Luxury Vinyl Plank & <br />
          Tile Solutions for Modern Spaces
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <h2 className="title new-title">Radiant</h2>
          </div>
          <OfferSlider settings={offersSettings} slides={offersData} />
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <h2 className="title new-title">Luxera</h2>
          </div>
          <OfferSlider settings={offersSettings} slides={offersData} />
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
