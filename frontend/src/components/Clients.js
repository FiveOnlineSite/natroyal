import React from "react";
import SectionSlider from "./SectionSlider";

const Clients = () => {
  const clientsSetting = {
    dots: false,
    arrows: false,
    infinite: true, // Enables infinite scrolling
    speed: 3000, // Duration of one complete slide transition in ms
    slidesToShow: 7, // Number of slides visible
    autoplay: true, // Enables autoplay
    autoplaySpeed: 0, // Sets the delay between autoplay transitions (0 for continuous)
    pauseOnHover: false, // Prevents stopping on hover
    centerMode: false,
    draggable: true, // Enables dragging
    swipeToSlide: true, // Smooth swipe to the closest slide
    cssEase: "linear", // Smooth and continuous animation

    responsive: [
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
    ],
  };

  const clientsData = [
    {
      image: "/images/clients/image 4.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 5.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 6.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 7.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 8.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 9.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 10.png",
      height: "50.93px",
      width: "170px",
    },

    {
      image: "/images/clients/image 4.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 5.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 6.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 7.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 8.png",
      height: "50.93px",
      width: "100%",
    },
    {
      image: "/images/clients/image 9.png",
      height: "50.93px",
      width: "170px",
    },
    {
      image: "/images/clients/image 10.png",
      height: "50.93px",
      width: "170px",
    },
  ];

  return (
    <div>
      <section className="clients-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="subtitle">
                Trusted by Industry Leaders <span></span>
              </h6>
              <h2 className="title new-title">Our Clients</h2>
            </div>

            <div className="col-lg-6">
              <p className="paragraph">
                We are proud to work with a diverse range of esteemed clients
                across various industries. Their trust in our products and
                services reflects our commitment to excellence and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <SectionSlider
            settings={clientsSetting}
            slides={clientsData}
            products={false}
            subdivision={false}
            clients={true}
          ></SectionSlider>
          {/* <ContinuousSlider /> */}
        </div>
      </section>
    </div>
  );
};

export default Clients;
