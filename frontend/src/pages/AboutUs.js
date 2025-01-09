import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const AboutUs = () => {
  const bannerData = {
    bannerImg: "/images/banners/download (5) 1.png",
    title: "About Us",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "About Us", path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-content">
                <div>
                  <p className="paragraph">
                    Since 1962, Natroyal Group (formerly Samsons Group) has been
                    a pioneer in India, specializing in the manufacturing,
                    exporting, and supplying of high-quality products,
                    including:
                  </p>

                  <a href="#" className="about-points">
                    <i className="lni lni-arrow-angular-top-right"></i>
                    <p className="paragraph mb-0">
                      PVC Vinyl Flooring (Royal House)
                    </p>
                  </a>
                  <a href="#" className="about-points">
                    <i className="lni lni-arrow-angular-top-right"></i>
                    <p className="paragraph mb-0">
                      Coated Fabrics / Leather Cloth / Artificial Leather
                      (National’s Royal Touch)
                    </p>
                  </a>
                  <a href="#" className="about-points">
                    <i className="lni lni-arrow-angular-top-right"></i>
                    <p className="paragraph mb-0">
                      Circular & Warp Knitted Fabrics (Royal Knit)
                    </p>
                  </a>
                  <a href="#" className="about-points mb-4">
                    <i className="lni lni-arrow-angular-top-right"></i>{" "}
                    <p className="paragraph mb-0">
                      Seating Components (Vijayjyot)
                    </p>
                  </a>
                </div>

                <p className="paragraph">
                  With decades of expertise and commitment in these fields,
                  Natroyal Group has established itself as a leading brand in
                  the market for all its offerings.
                </p>

                <p className="paragraph">
                  Our state-of-the-art production facilities are located near
                  Vadodara (Baroda), Gujarat, while our corporate office
                  operates from Mumbai, India. Through an extensive network of
                  distributors and retailers, our products are available across
                  India. Additionally, we proudly export to and enjoy wide
                  acceptance in Europe, the USA, Russia, the Middle East,
                  Africa, and Southeast Asia.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content-img">
                <img
                  src="/images/banners/Outdoor Pillows & Cushions.jfif"
                  alt="about-content"
                  className="w-100"
                />
                <div className="projects-div">
                  <div>
                    <img
                      src="/images/icons/buildings.png"
                      alt="building"
                      width="50px"
                      height="60px"
                    />
                  </div>

                  <h2>500+</h2>
                  <p>
                    Completed <br />
                    Projects
                  </p>
                </div>
                <div className="awards-div">
                  <div>
                    <img
                      src="/images/icons/trophy.png"
                      alt="building"
                      width="60px"
                      height="60px"
                    />
                  </div>

                  <h2>48+</h2>
                  <p>
                    Awards <br /> Winning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="companies-section">
        <div className="container-fluid">
          <div className="companies-div">
            <div
              className="single-company"
              style={{
                backgroundImage: "url('/images/banners/image-20.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="company-text">
                <h2>Royal House</h2>
                <div className="company-content">
                  <p>
                    Natroyal Group manufactures PVC Vinyl Flooring (0.37mm to
                    3mm) for sectors like education, healthcare, residential,
                    and transport. Under the brand “Nuplank,” they introduced
                    India’s first PVC Planks (LVT) in 1.5mm and 2.0mm thickness,
                    sized 6x36 inches.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-company"
              style={{
                backgroundImage: "url('/images/banners/image-20.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="company-text">
                <h2>Royal House</h2>
                <div className="company-content">
                  <p>
                    Natroyal Group manufactures PVC Vinyl Flooring (0.37mm to
                    3mm) for sectors like education, healthcare, residential,
                    and transport. Under the brand “Nuplank,” they introduced
                    India’s first PVC Planks (LVT) in 1.5mm and 2.0mm thickness,
                    sized 6x36 inches.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-company"
              style={{
                backgroundImage: "url('/images/banners/image-20.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="company-text">
                <h2>Royal House</h2>
                <div className="company-content">
                  <p>
                    Natroyal Group manufactures PVC Vinyl Flooring (0.37mm to
                    3mm) for sectors like education, healthcare, residential,
                    and transport. Under the brand “Nuplank,” they introduced
                    India’s first PVC Planks (LVT) in 1.5mm and 2.0mm thickness,
                    sized 6x36 inches.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-company"
              style={{
                backgroundImage: "url('/images/banners/image-20.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {" "}
              <div className="company-text">
                <h2>Royal House</h2>
                <div className="company-content">
                  <p>
                    Natroyal Group manufactures PVC Vinyl Flooring (0.37mm to
                    3mm) for sectors like education, healthcare, residential,
                    and transport. Under the brand “Nuplank,” they introduced
                    India’s first PVC Planks (LVT) in 1.5mm and 2.0mm thickness,
                    sized 6x36 inches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
