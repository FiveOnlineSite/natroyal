import React, { useState } from "react";
import Layout from "../components/Layout";
import BannerSlider from "../components/BannerSlider";
import SectionSlider from "../components/SectionSlider";
import Clients from "../components/Clients";
import LocateUs from "../components/LocateUs";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("pan-india");

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };

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
      videoUrl: "/videos/vecteezy_large-room-in-tropical-style_2018008.mov",
      poster: "/images/banners/image (19).png",
      text: "Natroyal Group: Excellence in Premium Flooring, Fabrics & Seating",
    },
    {
      videoUrl:
        "/videos/vecteezy_a-wide-empty-room-with-wooden-floor-and-white-wall_2018264.mov",
      poster: "/images/banners/tiles.png",
      text: "Natroyal Group: Excellence in Premium Flooring, Fabrics & Seating",
    },
    {
      videoUrl: "/videos/1103522677-preview.mp4",
      poster:
        "/images/banners/5mm-Click-Luxury-Vinyl-Tiles-Plastic-PVC-Plank-Lvt-Flooring.png",
      text: "Natroyal Group: Excellence in Premium Flooring, Fabrics & Seating",
    },
  ];

  // const productsSettings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   centerMode: true,

  //   responsive: [
  //     {
  //       breakpoint: 821,
  //       settings: {
  //         slidesToShow: 2.2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1.2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const productsData = [
  //   {
  //     image: "/images/banners/Mask group (8).png",
  //     title: "Coated Fabric",
  //     content:
  //       "Our PVC Vinyl Flooring offers durability for sectors like Education, Healthcare, Retail, and more",
  //   },

  //   {
  //     image: "/images/banners/image 55.png",
  //     title: "Coated Fabric",
  //     content:
  //       "Our PVC Vinyl Flooring offers durability for sectors like Education, Healthcare, Retail, and more",
  //   },
  //   {
  //     image: "/images/banners/Mask group (9).png",
  //     title: "Coated Fabric",
  //     content:
  //       "Our PVC Vinyl Flooring offers durability for sectors like Education, Healthcare, Retail, and more",
  //   },

  //   {
  //     image: "/images/banners/Mask group (9).png",
  //     title: "Coated Fabric",
  //     content:
  //       "Our PVC Vinyl Flooring offers durability for sectors like Education, Healthcare, Retail, and more",
  //   },
  // ];

  const subdivisionSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    autoplay: false,

    responsive: [
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  const subdivisionData = [
    {
      icon: "/images/icons/image 59.png",
      title: "Education",
      content:
        "Our Education Vinyl Flooring sparks creativity and focus, with vibrant colors that inspire both students and facilitators.",
    },
    {
      icon: "/images/icons/image 62.png",
      title: "Healthcare",
      content:
        "Our flooring promotes patient recovery, offers caregiver comfort, and is designed for barefoot use and wet areas.",
    },
    {
      icon: "/images/icons/image 63.png",
      title: "Transport",
      content:
        "Our durable Transport Vinyl Flooring offers safety, comfort, and hygiene with premium ranges like Gripper, Suprema RS, and Sonata.",
    },
    {
      icon: "/images/icons/image 59.png",
      title: "Education",
      content:
        "Our Education Vinyl Flooring sparks creativity and focus, with vibrant colors that inspire both students and facilitators.",
    },
    {
      icon: "/images/icons/image 62.png",
      title: "Healthcare",
      content:
        "Our flooring promotes patient recovery, offers caregiver comfort, and is designed for barefoot use and wet areas.",
    },
    {
      icon: "/images/icons/image 63.png",
      title: "Transport",
      content:
        "Our durable Transport Vinyl Flooring offers safety, comfort, and hygiene with premium ranges like Gripper, Suprema RS, and Sonata.",
    },
  ];

  return (
    <Layout>
      <section className="home-banner-section">
        <BannerSlider
          settings={bannerSettings}
          slides={bannerData}
        ></BannerSlider>
      </section>

      <section className="about-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 about-img-div">
              <div className="border-box-1"></div>
              <div className="border-box-2"></div>
              <img src="/images/banners/image (24).png" alt="about-img" />
              <img src="/images/banners/image-20.png" alt="about-img" />

              <img src="/images/banners/image (21).png" alt="about-img" />
              <img src="/images/banners/image (22).png" alt="about-img" />
            </div>
            <div className="col-lg-6 ps-lg-5 ps-auto mt-lg-0 mt-5">
              <h6 className="subtitle">
                About Us <span></span>
              </h6>
              <h2 className="title">
                Natroyal Group: Leaders in Flooring, Fabrics, and Seating
                Solution
              </h2>
              <p className="paragraph">
                Since 1962, Natroyal Group (formerly Samsons Group) has been a
                leader in manufacturing and exporting PVC Vinyl Flooring, Coated
                Fabrics, Heat-Managed Seat Covers, Knitted Fabrics, and Seating
                Components, earning trust through decades of expertise.
              </p>

              <div className="row align-items-center py-4">
                <div className="col-lg-6 experience mb-lg-0 mb-4">
                  <h2>60+</h2>
                  <p>
                    Years <br /> Experience
                  </p>
                </div>

                <div className="col-lg-6 mt-lg-0 mt-3 d-flex justify-content-lg-end justify-content-start">
                  <NavLink to="/about-us" className="custom-button border-btn">
                    Read More
                    <img
                      src="/images/icons/arrow-up-right.png"
                      className="ps-2"
                      alt="arrow"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h6 className="subtitle">
                Innovative Manufacturing <span></span>
              </h6>
              <h2 className="title new-title">Product Verticals</h2>
            </div>

            <div className="col-lg-6 offset-lg-2 offset-0">
              <p className="paragraph">
                We lead in manufacturing and exporting PVC Vinyl Flooring (Royal
                House), Coated Fabrics (National’s Royal Touch), Heat-Managed
                Seat Covers (Joyride), Knitted Fabrics (Royal Knit), and Seating
                Components (Vijayjyot), setting industry standards with quality
                and innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row products-row mt-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="image-container">
                <img
                  src="/images/banners/image 55.png"
                  alt="product-image"
                  className="w-100 product-image"
                />
                <a href="#" className="overlay-text">
                  <div className="overlay-title">
                    <h6>Coated Fabric</h6>
                    <div>
                      <img src="/images/icons/arrow-up-right.png" />
                    </div>
                  </div>
                  <p>
                    Our PVC Vinyl Flooring offers durability for sectors like
                    Education, Healthcare, Retail, and more
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-0 mt-5">
              <div className="image-container">
                <img
                  src="/images/banners/Mask group (8).png"
                  alt="product-image"
                  className="w-100 product-image"
                />
                <a href="#" className="overlay-text">
                  <div className="overlay-title">
                    <h6>Coated Fabric</h6>
                    <div>
                      <img src="/images/icons/arrow-up-right.png" />
                    </div>
                  </div>
                  <p>
                    Our PVC Vinyl Flooring offers durability for sectors like
                    Education, Healthcare, Retail, and more
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-5">
              <div className="image-container">
                <img
                  src="/images/banners/Mask group (9).png"
                  alt="product-image"
                  className="w-100 product-image"
                />

                <a href="#" className="overlay-text">
                  <div className="overlay-title">
                    <h6>Coated Fabric</h6>
                    <div>
                      <img src="/images/icons/arrow-up-right.png" />
                    </div>
                  </div>
                  <p>
                    Our PVC Vinyl Flooring offers durability for sectors like
                    Education, Healthcare, Retail, and more
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-5">
              <div className="image-container">
                <img
                  src="/images/banners/Mask group (8).png"
                  alt="product-image"
                  className="w-100 product-image"
                />
                <a href="#" className="overlay-text">
                  <div className="overlay-title">
                    <h6>Coated Fabric</h6>
                    <div>
                      <img src="/images/icons/arrow-up-right.png" />
                    </div>
                  </div>
                  <p>
                    Our PVC Vinyl Flooring offers durability for sectors like
                    Education, Healthcare, Retail, and more
                  </p>
                </a>
              </div>
            </div>

            {/* <SectionSlider
            settings={productsSettings}
            slides={productsData}
            products={true}
            subdivision={false}
            clients={false}
          ></SectionSlider> */}
          </div>
        </div>
      </section>

      <section className="subdivision-section">
        <div className="container">
          <div className="subdivision-div">
            <h6 className="subtitle text-center">
              Applications <span></span>
            </h6>
            <h2 className="title new-title text-center">Our Subdivision</h2>

            <p className="paragraph">
              Natroyal Group offers versatile product solutions for various
              industries and applications
            </p>
          </div>

          <div className="row mt-4">
            <SectionSlider
              settings={subdivisionSettings}
              slides={subdivisionData}
              products={false}
              subdivision={true}
              clients={false}
            ></SectionSlider>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="subtitle text-center">
                We Are Set At <span></span>
              </h6>
              <h2 className="title new-title">Nationwide & Beyond</h2>

              <p className="paragraph">
                With a presence in 10+ countries, we are trusted globally for
                delivering exceptional quality, innovative solutions, and
                unmatched reliability.
              </p>

              <div className="map-tabs">
                <button
                  className={`tab-link ${
                    activeTab === "pan-india" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("pan-india")}
                >
                  Pan India <i className="lni lni-arrow-angular-top-right"></i>
                </button>
                <button
                  className={`tab-link ${
                    activeTab === "other-countries" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("other-countries")}
                >
                  Other Countries{" "}
                  <i className="lni lni-arrow-angular-top-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tab-content">
                {activeTab === "pan-india" && (
                  <div
                    className={`tab-pane ${
                      activeTab === "pan-india" ? "show active" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-12 indian-map-col">
                        <div
                          className="single-map-container india-map"
                          data-aos="fade-left"
                          data-aos-duration="1500"
                        >
                          <img
                            src="/images/maps/indian-map.png"
                            alt="pan-india"
                          />
                          <div
                            className="location-div"
                            style={{ position: "absolute" }}
                          >
                            <div className="map-pin"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "other-countries" && (
                  <div
                    className={`tab-pane ${
                      activeTab === "other-countries" ? "show active" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-12 global-map-col">
                        <div
                          className="single-map-container world-map"
                          data-aos="fade-left"
                          data-aos-duration="1500"
                        >
                          <img
                            src="/images/maps/The_World_map 1.png"
                            alt="other-countries"
                          />
                          <div
                            className="location-div"
                            style={{ position: "absolute" }}
                          >
                            <div className="map-pin"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocateUs />

      <Clients />

      <section className="connect-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-lg-0 p-auto">
              <img
                src="/images/banners/contact-banner (2).png"
                alt="contact-banner"
                className="w-100"
              />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-5 ps-auto">
              <div className="connect-container">
                <h6 className="subtitle">
                  Connect with Us <span></span>
                </h6>
                <h2 className="title new-title">Get In Touch</h2>
                <p className="paragraph">
                  We’d love to hear from you! Get in touch with us for any
                  inquiries, support, or to learn more about our products and
                  services.
                </p>

                <div className="get-started-form mt-4">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-4">
                          <label for="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-4">
                          <label for="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            rows="2"
                            className="form-control"
                            id="message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-4">
                          <a
                            href="#"
                            className="custom-button no-border-btn ps-3"
                          >
                            Submit
                            <img
                              src="/images/icons/arrow-up-right.png"
                              className="ps-2"
                              alt="arrow"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
