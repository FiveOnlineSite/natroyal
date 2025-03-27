import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Clients from "../components/Clients";
import ConnectSection from "../components/ConnectSection";

const CoatedFabrics = () => {
  return (
    <Layout>
      <section className="landing-banner-section">
        <div className="slide-container">
          <div className="poster-container">
            <img
              src="/images/banners/Brown_and_White_For_Men_Fashion_Facebook_Post_1.webp"
              alt="Poster"
              className="poster-image"
            />

            {/* Common Banner Content - Placed inside the same container */}
            <div className="banner-text">
              <h1 className="banner-title">
                {" "}
                We are India’s leading manufacturers & exporters of Specifically
                Engineered Coated Fabrics
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

      <section className="applications-section">
        <div className="container">
          <div className="row">
            <ul className="application-tabs d-flex align-items-center justify-content-center">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Laboratory Tested
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-coated-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title new-title">
                The Art of Royal Touch Leatherette
              </h2>
            </div>

            <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-5">
              <p className="paragraph gray-para">
                Founded In 1954, Natroyal Industries Pvt. Ltd., Formerly known
                as "National Leathercloth Mfg. Co. / Vinyroyal Plasticoates Pvt.
                Ltd.", is a leading manufacturer of Premium Leatherette
                Solutions. With a strong emphasis on Innovation and
                Sustainability, We specialize in producing Durable, Eco-friendly
                Materials that closely Replicate the Look and Feel of Real
                Leather.
              </p>
              <p className="paragraph gray-para">
                Our state-of-the-art production facility, located near Vadodara,
                Gujarat, offers specialized leatherette solutions for OEMs and
                Tier-1 companies. Our product range includes cut and sewn or
                vacuum-formed leatherette seat covers, along with custom
                soft-feel leatherette interior trims designed to enhance the
                appeal and premium quality required in high-end automotive
                vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="key-milestones-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="title new-title">Key Milestones</h2>

              <div className="milestones-content">
                <ul>
                  <li className="paragraph gray-para">
                    First company in India to develop transfer coating
                    technology in 1978.
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to start a transfer coating line in India
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to develop an award-winning heat management
                    leathercloth product
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First coated fabric company to have backward integration
                    with knitting machines
                  </li>

                  <li className="paragraph gray-para mt-2">
                    First company to have five roll calendar and four roll
                    calendar machine for vinyl flooring
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to develop international standards transport
                    flooring in India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row milestones-row">
                <div className="col-lg-6">
                  <div className="counter-div right-border">
                    <img
                      src="/images/icons/testament.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />

                    <h2>60 +</h2>

                    <h6>Year of Group Legacy</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-div left-border">
                    <img
                      src="/images/icons/costumer (1).png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>100 +</h2>

                    <h6>Global Clients</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-div">
                    <img
                      src="/images/icons/settings.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>120,000</h2>

                    <h6>sq. ft of Manufacturing Facility</h6>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="counter-div">
                    <img
                      src="/images/icons/self-development.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>500 +</h2>

                    <h6>Skilled Employees</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="container">
          <h2 className="title new-title text-center">
            We manufacture, supply and export
          </h2>
          <div className="row applications-row mt-5">
            <div className="col-lg-6 col-12">
              <div className="single-application">
                <img src="/images/coated-fabrics/furnishing-1.jpg" />

                <div className="application-content">
                  <h5>Residential & Contract Furnishing</h5>

                  <p className="application-para">
                    Natroyal has been a pioneer in the business of supplying
                    performance-based coated fabrics for the home, office &
                    contract furnishing.
                  </p>
                </div>

                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/automotive-1.jpg" />{" "}
                <div className="application-content">
                  <h5>Automotive</h5>
                  <p className="application-para">
                    Natroyal leads in performance-coated fabrics for cars,
                    buses, and motorcycles. We are India's first to develop
                    phase-change material for heat management.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/bike.jpg" />{" "}
                <div className="application-content">
                  <h5>Two Wheelers</h5>
                  <p className="application-para">
                    Natroyal offers innovative two-wheeler seat covers,
                    including heat-management and stylish options like Seat
                    Tops, Bamboo Tops, and Emboss Tops in various prints.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/marine-1.jpg" />{" "}
                <div className="application-content">
                  <h5>Marine & Recreational Vehicles</h5>
                  <p className="application-para">
                    Our coated fabrics for the marine industry have been
                    designed based on extensive research, for them to easily
                    endure the harsh conditions present on both commercial as
                    well as recreational vessels.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/upholstry.jpg" />{" "}
                <div className="application-content">
                  <h5>Healthcare</h5>
                  <p className="application-para">
                    We pioneered SITRA, Intertek, and Valtris UK-certified
                    healthcare products in India, including washable aprons,
                    curtains, and pillow covers, reducing medical waste.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/Footwear-Coated-Fabrics.jpg" />{" "}
                <div className="application-content">
                  <h5>Footwear</h5>
                  <p className="application-para">
                    With a special range of coated fabrics that have been
                    meticulously designed to fulfill the distinct requirements
                    of the footwear industry, Natroyal has emerged as a leading
                    brand in the market for all our footwear products.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/Fashion-Coated-Fabrics.gif" />{" "}
                <div className="application-content">
                  <h5>Fashion – Apparel, Belts & Bags</h5>

                  <p className="application-para">
                    Coated fabrics possess a variety of functional qualities,
                    making them the ideal material for fashion products.
                    Natroyal provides best-in-class coated fabrics for a wide
                    range of fashion accessories including apparel, belts &
                    bags.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-application">
                <img src="/images/coated-fabrics/Tractor.jpg" />{" "}
                <div className="application-content">
                  <h5>Tractor</h5>
                  <p className="application-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="application-overlay">
                  <div className="application-border">
                    <NavLink>View More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="title new-title white-title">
                Features of Automotive Leatherette/Coated Fabrics
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 3Logo 1.png" alt="icons" />
                <h6>Heavy Metals Free</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 8Logo.png" alt="icons" />
                <h6>Anti-Fogging</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 11Logo.png" alt="icons" />
                <h6>Anti-Microbial</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 11Logo.png" alt="icons" />
                <h6>Cold Crack Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 17Logo.png" alt="icons" />
                <h6>Flame Retardant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 5Logo.png" alt="icons" />
                <h6>Abrasion Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 7Logo.png" alt="icons" />
                <h6>High Flexing</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 12Logo.png" alt="icons" />
                <h6>Salt Water Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 15Logo.png" alt="icons" />
                <h6>UV Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 16Logo.png" alt="icons" />
                <h6>Weather Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 4Logo.png" alt="icons" />
                <h6>Mildew Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 6Logo.png" alt="icons" />
                <h6>Alcohol Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 10Logo.png" alt="icons" />
                <h6>Pink Stain Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 13Logo.png" alt="icons" />
                <h6>Color Fastness</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-section">
        <div className="container">
          <h2 className="title new-title">We are a export-ready business</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <h5>Star rated export</h5>{" "}
                <img src="/images/icons/Group 869 1.png" alt="icons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <h5>3-4 Weeks time</h5>{" "}
                <img src="/images/icons/Group 868 1.png" alt="icons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <h5>60+ Years of legacy</h5>{" "}
                <img src="/images/icons/Group 867 1.png" alt="icons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <h5>International quality</h5>{" "}
                <img src="/images/icons/Group 866 1.png" alt="icons" />
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

export default CoatedFabrics;
