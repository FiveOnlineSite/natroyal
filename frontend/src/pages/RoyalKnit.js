import React from "react";
import LandingLayout from "../components/LandingLayout";
import BannerSlider from "../components/BannerSlider";
import ConnectSection from "../components/ConnectSection";
import Clients from "../components/Clients";
import TextilesSlider from "../components/TextilesSlider";
import { NavLink } from "react-router-dom";

const RoyalKnit = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 5 (1).png" alt="left-arrow" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 6 (1).png" alt="right-arrow" />
      </button>
    );
  };

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

  const bannerSettings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const bannerData = [
    {
      // videoUrl: "/videos/1103522677-preview.mp4",
      image: "/images/banners/black gap collage.png",
      text: "Where Softness Meets Strength – Premium Knitted Fabrics for Every Need!",
    },
  ];

  const textilesData = [
    {
      image: "/images/sliders/leaflet 15_03.png",
      name: "Headliner Fabric",
      text: "Our brushed and flat knit headliner ranges are available in more than 30 colors to complement most modern automotive interiors.",
    },
    {
      image: "/images/sliders/leaflet 15_04.png",
      name: "Circular Knitted Fabrics (Single Jersey & Interlock)",
      lamination_coating: {
        lamination_text: "GSM ranging from 30 to 50",
        coating_text: "GSM ranging from 40 to 160",
      },
    },
    {
      image: "/images/sliders/main wall 01 (1).png",
      name: "Wrap Knitted Fabric",
      lamination_coating: {
        lamination_text: "GSM ranging from 20 to 70 ",
        coating_text: "GSM ranging from 90 to 210",
      },
    },
    {
      image: "/images/sliders/Products For Lamination (2).png",
      name: "Fire Retardant Fabric",
      text: "These fabrics are engineered to resist ignition and prevent flames from spreading, making them essential for automotive and industrial applications.",
    },
    {
      image: "/images/sliders/hydrophobic-fabric-500x500 1.png",
      name: "Water Repellent Fabric",
      text: "Innovative fabrics designed for maximum water resistance.",
    },
    {
      image: "/images/sliders/right wall01 (1).png",
      name: "Anti – Bacterial Fabric",
      text: "Antimicrobial-treated textiles designed for healthcare.",
    },
  ];

  const textilesSettings = {
    dots: false,
    nextArrow: <OfferingsNextArrow />,
    prevArrow: <OfferingsPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <LandingLayout>
      <section className="landing-banner-section">
        <div className="slide-container">
          <div className="poster-container">
            <img
              src="/images/banners/black gap collage.png"
              alt="Poster"
              className="poster-image"
            />

            {/* Common Banner Content - Placed inside the same container */}
            <div className="banner-text">
              <h1 className="banner-title">
                {" "}
                Where Softness Meets Strength – Premium Knitted Fabrics for
                Every Need!
              </h1>
              <div className="d-flex">
                <NavLink to="/contact-us" className="custom-button">
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-knit-section">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <h6 className="subtitle">
                Knit Fabric – Where Flexibility Meets Comfort<span></span>
              </h6>
              <h2 className="title">About Knit Fabric</h2>

              <img
                src="/images/banners/Roll Image 1.png"
                alt="about-knit-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="about-knit-content">
                <div className="company-points">
                  <h5>Our Production Facilities / Capacity </h5>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      45 high speed Circular knitting machines (German &
                      American make)
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      All Circular knitting machines are equipped with fabric
                      scanners
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      4 High speed Wrap knitting machines of Karl Mayer make
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      3 customised Heat-set machines with dry & wet processing
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      Steaming on Heat-set machines provides more uniformity in
                      heat-setting of fabrics
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>
                      Continuous process on Heat-set machine minimises defects
                    </p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>Well established laboratory & testing equipment</p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>Current production capacity is 300 tons per month</p>
                  </div>
                  <div className="company-point mb-3">
                    <i className="lni lni-arrow-right"></i>
                    <p>Exporting to the USA, Europe, and African countries</p>
                  </div>
                </div>

                <div className="company-points">
                  <h5>Our USP</h5>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>Roll Length: Upto 10,000 mtrs.</p>
                  </div>
                  <div className="company-point">
                    <i className="lni lni-arrow-right"></i>
                    <p>Roll Diameter: Upto 1.5 mtrs.</p>
                  </div>

                  <div className="company-point mb-5">
                    <i className="lni lni-arrow-right"></i>
                    <p>Roll Width: Upto 240 cms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advanced-technical-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="advanced-title-div d-flex flex-column align-items-center justify-content-center">
              <h6 className="subtitle text-center">
                Cutting-Edge Textile Technologies<span></span>
              </h6>
              <h2 className="title text-center">Advanced Technical Textiles</h2>
            </div>

            <TextilesSlider settings={textilesSettings} slides={textilesData} />
          </div>
        </div>
      </section>

      <ConnectSection />

      <Clients />
    </LandingLayout>
  );
};

export default RoyalKnit;
