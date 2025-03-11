import React from "react";
import LandingLayout from "../components/LandingLayout";
import BannerSlider from "../components/BannerSlider";
import OffersSection from "../components/OffersSection";
import { NavLink } from "react-router-dom";

const LVT = () => {
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
      videoUrl: "/videos/1475160_People_Family_3840x2160.mp4",
      // poster: "/images/banners/pexels-digitalbuggu-218535.png",
      text: "Exquisite Luxury Vinyl Planks & Tiles for Every Space",
    },

    {
      // videoUrl: "/videos/vecteezy_large-room-in-tropical-style_2018008.mov",
      image: "/images/banners/pexels-ammy-k-106103999-12369543.png",
      text: "Premium Coated Fabrics – Durable, Stylish, and Made to Last!",
    },
    {
      // videoUrl: "/videos/1103522677-preview.mp4",
      image: "/images/banners/pexels-la-son-211137-4004373.png",
      text: " Comfort Meets Innovation – Explore Our Premium Seating Components!",
    },
    {
      // videoUrl: "/videos/1103522677-preview.mp4",
      image: "/images/banners/bigbannernew2.png",
      text: "Where Softness Meets Strength – Premium Knitted Fabrics for Every Need!",
    },
  ];

  const solutionData = [
    {
      icon: "/images/icons/Service Icon.png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
    {
      icon: "/images/icons/Service Icon (1).png",
      text: "Unmatched Quality",
    },
  ];
  return (
    <LandingLayout>
      <section className="landing-banner-section">
        <BannerSlider
          settings={bannerSettings}
          slides={bannerData}
        ></BannerSlider>
      </section>

      <section className="product-category-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="subtitle gray-subtitle">
                <span className="me-3"></span>
                product category
              </h6>
              <h2 className="title new-title">Lorem ipsum</h2>

              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus fringilla dui amet faucibus nam. Erat id laoreet
                posuere etiam morbi.
              </p>

              <p className="paragraph">
                Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
                mauris posuere auctor justo. Habitant proin aliquet volutpat leo
                ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
                Faucibus sit odio bibendum lobortis diam.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 px-lg-3 px-md-3 px-auto mt-lg-0 mt-md-0 mt-3">
                  <div className="category-img-container">
                    <img
                      src="/images/banners/Image 19.png"
                      alt="products-img"
                    />
                    <h4>RADIANT</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-5 px-lg-3 px-md-3 px-auto">
                  <div className="category-img-container">
                    <img
                      src="/images/banners/Image (20).png"
                      alt="products-img"
                    />
                    <h4>LUXURA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OffersSection />

      <section className="transform-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="subtitle gray-subtitle">
                <span className="me-3"></span>
                what we offer
              </h6>
              <h2 className="title new-title">
                We Transform Spaces with Luxury Vinyl Plank & Tile (LVT)
                Flooring!
              </h2>

              <div className="d-flex my-5">
                <NavLink to="/" className="custom-button">
                  Download Brochure
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 offset-0">
              <div className="transform-img-container">
                <img
                  src="/images/banners/4096f1007a958ab6ed2859910af7f173.png"
                  alt="transform-img"
                  className="w-100"
                />
                <div className="transform-text-container">
                  <h4>Create stunning spaces with high-end vinyl flooring</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perfect-flooring-section">
        <div className="container">
          <div className="col-lg-9">
            <h6 className="subtitle gray-subtitle">
              <span className="me-3"></span>
              LOREM IPSUM
            </h6>
            <h2 className="title new-title">
              Natroyal has the perfect flooring solution for you!
            </h2>
          </div>

          <div className="col-lg-12">
            <div className="row mt-4">
              {solutionData.map((solution, index) => (
                <div className="col-lg-3 col-md-4 col-12" key={index}>
                  <div className="solutions-div">
                    <img src={solution.icon} alt="solution-icon" />
                    <h5 className="mt-4">{solution.text}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="leading-innovator-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="/images/banners/unsplash_NFbwes_e-jI.png"
                alt="leading-innovator-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-5 mt-lg-0 mt-5">
              <h6 className="subtitle gray-subtitle">
                <span className="me-3"></span>
                who we are
              </h6>
              <h2 className="title new-title">
                Leading Innovators in Quality Flooring!
              </h2>

              <p className="paragraph gray-para">
                Natroyal Group (formerly Samsons Group) is a pioneer in India,
                manufacturing and supplying luxury vinyl planks and tiles for
                various industries, including education, healthcare,
                residential, hospitality, office/retail, and transportation
                sectors.
              </p>
            </div>
            <div className="col-lg-2 mt-lg-0 mt-5">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="px-5 py-4 brands-box">
                    <img
                      src="/images/icons/Royal Knit.png"
                      height={"59.29px"}
                      width={"100px"}
                      alt="company"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="px-5 py-4 brands-box">
                    <img
                      src="/images/icons/Royal Touch.png"
                      height={"59.29px"}
                      width={"100px"}
                      alt="company"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="px-5 py-4 brands-box">
                    <img
                      src="/images/icons/Royal House.png"
                      height={"59.29px"}
                      width={"100px"}
                      alt="company"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="px-5 py-4 brands-box">
                    <img
                      src="/images/icons/Vijayjyot.png"
                      height={"59.29px"}
                      width={"140px"}
                      alt="company"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default LVT;
