import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Clients from "../components/Clients";

const AboutUs = () => {
  const bannerData = {
    bannerImg: "/images/banners/laminated-wooden-flooring-service.png",
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
            <div className="col-lg-7 mt-lg-0 mt-5">
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

      <section className="companies-section" id="company">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h6 className="subtitle">
                Pioneers in Flooring & Textiles<span></span>
              </h6>
              <h2 className="title new-title">Our Companies</h2>
            </div>

            <div className="col-lg-6 offset-lg-2 offset-0">
              <p className="paragraph">
                Natroyal Group, formerly known as Samsons Group, has been a
                pioneer in India since 1962, specializing in manufacturing and
                exporting PVC Vinyl Flooring, coated fabrics, and seating
                components. With production facilities near Vadodara, Gujarat,
                and a corporate office in Mumbai, their products are distributed
                nationwide and exported to Europe, the USA, Russia, the Middle
                East, Africa, and Southeast Asia.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="companies-div">
            <a href="#" className="single-company">
              <div className="company-content">
                <div className="company-thumbnail">
                  <img
                    src="/images/banners/716b4630b5d6729d00a88b8f7d669e62.png"
                    alt="company"
                    className="w-100"
                  />
                </div>
                <div className="company-text">
                  <img
                    src="/images/icons/image 44.png"
                    height={"70px"}
                    width={"100px"}
                    alt="company"
                  />
                  <h2>Vinyl Flooring</h2>
                  <p>
                    Natroyal Group manufactures PVC Vinyl Flooring (0.37mm to
                    3mm) for sectors like education, healthcare, residential,
                    and transport. Under the brand “Nuplank,” they introduced
                    India’s first PVC Planks (LVT) in 1.5mm and 2.0mm thickness,
                    sized 6x36 inches.
                  </p>

                  <div className="arrow-div">
                    <i className="lni lni-arrow-angular-top-right"></i>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="single-company">
              <div className="company-content">
                <div className="company-thumbnail">
                  <img
                    src="/images/banners/dubai_tan_01.png"
                    alt="company"
                    className="w-100"
                  />
                </div>
                <div className="company-text">
                  <img
                    src="/images/icons/image 45.png"
                    height={"70px"}
                    width={"100px"}
                    alt="company"
                  />
                  <h2>Coated Fabrics</h2>
                  <p>
                    Manufactures coated fabrics (artificial leather, PVC/PU
                    vinyl) in 0.7mm to 2mm thickness, widely used in home &
                    office furnishings, automotive interiors, fashion
                    accessories, footwear, and medical applications.
                  </p>

                  <div className="arrow-div">
                    <i className="lni lni-arrow-angular-top-right"></i>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="single-company">
              <div className="company-content">
                <div className="company-thumbnail">
                  <img
                    src="/images/banners/71u7jCQY7SL._AC_SL1000.png"
                    alt="company"
                    className="w-100"
                  />
                </div>
                <div className="company-text">
                  <img
                    src="/images/icons/image 46.png"
                    height={"40px"}
                    width={"100px"}
                    alt="company"
                  />
                  <h2>Seating Components</h2>
                  <p>
                    The Seat Component Division produces frame fabrication, trim
                    covers, and polyurethane foam for various seating needs,
                    including automotive, cinema, auditorium, metro, bus, truck,
                    and railway seats like driver’s and chair car seats.
                  </p>
                  <div className="arrow-div">
                    <i className="lni lni-arrow-angular-top-right"></i>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="single-company">
              <div className="company-content">
                <div className="company-thumbnail">
                  <img
                    src="/images/banners/photo-1686069275474-7293ed62f86b.png"
                    alt="company"
                    className="w-100"
                  />
                </div>
                <div className="company-text">
                  <img
                    src="/images/icons/image 47.png"
                    height={"70px"}
                    width={"100px"}
                    alt="company"
                  />
                  <h2>Knit Fabrics</h2>
                  <p>
                    we are manufacturing technical textile circular and warp
                    knit fabrics which is a key ingredient for making leather
                    cloth/ coated fabrics and backing fabric for making
                    automotive fabric with foaming technology.
                  </p>
                  <div className="arrow-div">
                    <i className="lni lni-arrow-angular-top-right"></i>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="subdivision-div">
              <h6 className="subtitle text-center">
                Excellence & Sustainability <span></span>
              </h6>
              <h2 className="title new-title">Our Mission</h2>

              <p className="paragraph">
                To deliver high-quality, innovative solutions that meet the
                evolving needs of our customers while driving sustainable growth
                and fostering long-term partnerships.
              </p>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="mission-div">
                      <div className="mission-no">01</div>
                      <div className="mission-img">
                        <img src="/images/icons/team.png" alt="team" />
                      </div>
                      <h4>Customer-Centric Excellence</h4>
                      <p className="paragraph">
                        Deliver high-quality, innovative solutions that meet
                        customer needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-5">
                    <div className="mission-div">
                      <div className="mission-no">02</div>
                      <div className="mission-img">
                        <img src="/images/icons/leaves.png" alt="team" />
                      </div>
                      <h4>Sustainable Innovation</h4>
                      <p className="paragraph">
                        Drive sustainable growth through eco-friendly practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="subdivision-div">
              <h6 className="subtitle text-center">
                Global Leadership <span></span>
              </h6>
              <h2 className="title new-title">Our Vision</h2>

              <p className="paragraph">
                To be a global leader in flooring, coated fabrics, and seating,
                known for our innovation, sustainability, and dedication to
                customer satisfaction.
              </p>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-12">
                <div className="row justify-content-center">
                  <div className="col-lg-4">
                    <div className="vision-div">
                      <div className="vision-no">01</div>
                      <div className="vision-img">
                        <img src="/images/icons/team.png" alt="team" />
                      </div>
                      <div className="vision-content">
                        <h4>Leadership</h4>
                        <p className="paragraph text-center">
                          To be a global leader in flooring, coated fabrics, and
                          seating solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-lg-0 mt-5">
                    <div className="vision-div">
                      <div className="vision-no">02</div>
                      <div className="vision-img">
                        <img src="/images/icons/achievements.png" alt="team" />
                      </div>
                      <div className="vision-content">
                        <h4>Excellence</h4>
                        <p className="paragraph text-center">
                          To set new standards in innovation, quality, and
                          sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-lg-0 mt-5">
                    <div className="vision-div">
                      <div className="vision-no">03</div>
                      <div className="vision-img">
                        <img src="/images/icons/growth.png" alt="team" />
                      </div>
                      <div className="vision-content">
                        <h4>Growth</h4>
                        <p className="paragraph text-center">
                          To expand our reach and strengthen customer trust
                          worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />
    </Layout>
  );
};

export default AboutUs;
