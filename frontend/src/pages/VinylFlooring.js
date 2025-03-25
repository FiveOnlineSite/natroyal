import React from "react";
import LandingLayout from "../components/LandingLayout";
import BannerSlider from "../components/BannerSlider";
import Clients from "../components/Clients";
import ConnectSection from "../components/ConnectSection";
import Layout from "../components/Layout";

const VinylFlooring = () => {
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
      videoUrl: "/videos/7945422-hd_1920_1080_25fps.mp4",
      // poster: "/images/banners/pexels-digitalbuggu-218535.png",
      text: "Elegant. Durable. Water-Resistant. Transform Your Space with Premium Vinyl Flooring!",
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
  return (
    <Layout>
      <section className="landing-banner-section">
        <BannerSlider
          settings={bannerSettings}
          slides={bannerData}
        ></BannerSlider>
      </section>

      <section className="vinyl-flooring-section">
        <div className="container">
          <div className="row">
            <h2 className="title new-title text-center">Vinyl Flooring</h2>

            <p className="paragraph gray-para text-center">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor 
            </p>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (11).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/image 59.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Education</h5>
                  <p className="paragraph gray-para mt-3">
                    Our Education Vinyl Flooring sparks creativity and focus,
                    with vibrant colors that inspire both students and
                    facilitators, fostering a dynamic and engaging
                    learning environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (10).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/image 62.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Health Care</h5>
                  <p className="paragraph gray-para mt-3">
                    Our flooring creates a healthy environment, enhancing
                    patient healing. Designed for bare feet and wet areas, it
                    provides comfort and safety for patients and caregivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (11).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/wet-floor.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Wet Areas</h5>
                  <p className="paragraph gray-para mt-3">
                    Our Healthcare Vinyl Flooring ensures safety and hygiene in
                    wet areas, promoting healing and comfort for
                    patients and caregivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (13).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/residential.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Residential</h5>
                  <p className="paragraph gray-para mt-3">
                    Our premium vinyl floor coverings offer diverse designs,
                    from wood to geometric patterns. Easy to maintain and
                    install, they're perfect for effortless interior updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (14).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/workspace.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Offices / Retail</h5>
                  <p className="paragraph gray-para mt-3">
                    Our premium flooring combines aesthetics with practicality,
                    meeting design demands. It also delivers
                    high-performance durability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (15).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/hospital.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Hospitality</h5>
                  <p className="paragraph gray-para mt-3">
                    Our flooring combines aesthetics and practicality for
                    offices, retail, and hospitality. Meeting design demands and
                    high-performance requirements.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (17).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/truck.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Transport</h5>
                  <p className="paragraph gray-para mt-3">
                    Our transport vinyl flooring ensures safety and comfort for
                    passengers. Offering international-standard options like
                    Gripper and Suprema RS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 px-3">
              <img
                src="/images/vinyl/Mask group (16).png"
                alt="vinyl"
                className="w-100"
              />
              <div className="vinyl-detail-div d-flex align-items-start mt-3">
                <div className="vinyl-img-div">
                  <img src="/images/icons/sports.png" alt="vinyl-icons" />
                </div>
                <div className="vinyl-content">
                  <h5>Sports</h5>
                  <p className="paragraph gray-para mt-3">
                    Our sports vinyl flooring ensures safety and performance for
                    athletes. Offering international-standard options like
                    Champion, Turbo, and Sprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <ConnectSection />
    </Layout>
  );
};

export default VinylFlooring;
