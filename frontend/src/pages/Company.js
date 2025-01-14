import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Clients from "../components/Clients";

const Company = () => {
  const bannerData = {
    bannerImg: "/images/banners/gaia-spc-espc-picchi-ga805314-room-wide.png",
    title: "Companies",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Companies", path: null, active: true },
    ],
  };
  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="company-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="subtitle">
                Companies <span></span>
              </h6>
              <h2 className="title">Industry Leaders</h2>
              <p className="paragraph">
                With a rich legacy dating back to 1962, Natroyal Group continues
                to innovate and excel in the production of PVC Vinyl Flooring
                and coated fabrics. Our products are recognized for their
                durability, quality, and versatility, and are exported to key
                markets across Europe, USA, Russia, Middle East, Africa, and
                Southeast Asia.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 pb-lg-0 pb-4">
                  <ul
                    className="nav nav-tabs companies-tabs"
                    id="companies"
                    role="tablist"
                  >
                    <li className="nav-item mb-4" role="presentation">
                      <button
                        className="nav-link active company-div ps-0"
                        data-bs-target="#vinyl"
                        type="button"
                        role="tab"
                        id="vinyl-tab"
                        aria-controls="vinyl"
                        data-bs-toggle="tab"
                      >
                        <div className="w-100 d-flex flex-column align-items-start">
                          <img
                            src="/images/icons/image 44.png"
                            height={"49.29px"}
                            width={"75px"}
                            alt="company"
                          />
                          <h6>
                            Vinyl <br /> Flooring
                          </h6>
                        </div>
                        <div className="arrow-div w-100">
                          <i className="lni lni-arrow-angular-top-right"></i>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item mb-4" role="presentation">
                      <button
                        className="nav-link company-div ps-0"
                        id="coated-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#coated"
                        type="button"
                        role="tab"
                        aria-controls="coated"
                        aria-selected="false"
                      >
                        <div className="w-100 d-flex flex-column align-items-start">
                          <img
                            src="/images/icons/image 45.png"
                            height={"50px"}
                            width={"75px"}
                            alt="company"
                          />
                          <h6>Coated Fabrics</h6>
                        </div>

                        <div className="arrow-div w-100">
                          <i className="lni lni-arrow-angular-top-right"></i>
                        </div>
                      </button>
                    </li>

                    <li className="nav-item mb-4" role="presentation">
                      <button
                        className="nav-link company-div ps-0"
                        id="seating-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#seating"
                        type="button"
                        role="tab"
                        aria-controls="seating"
                        aria-selected="false"
                      >
                        {" "}
                        <div className="w-100 d-flex flex-column align-items-start">
                          <img
                            src="/images/icons/image 46.png"
                            height={"32px"}
                            width={"120px"}
                            alt="company"
                          />
                          <h6>Seating Components</h6>
                        </div>
                        <div className="arrow-div w-100">
                          <i className="lni lni-arrow-angular-top-right"></i>
                        </div>
                      </button>
                    </li>

                    <li className="nav-item mb-4" role="presentation">
                      <button
                        className="nav-link company-div ps-0"
                        id="knit-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#knit"
                        type="button"
                        role="tab"
                        aria-controls="knit"
                        aria-selected="false"
                      >
                        <div className="w-100 d-flex flex-column align-items-start">
                          <img
                            src="/images/icons/image 47.png"
                            height={"50px"}
                            width={"75px"}
                            alt="company"
                          />
                          <h6>
                            Knit <br />
                            Fabrics
                          </h6>
                        </div>

                        <div className="arrow-div w-100">
                          <i className="lni lni-arrow-angular-top-right"></i>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9">
                  <div className="tab-content" id="companies">
                    <div
                      className="tab-pane fade show active"
                      id="vinyl"
                      role="tabpanel"
                      aria-labelledby="vinyl-tab"
                    >
                      <div className="companies-content">
                        <div className="companies-img">
                          <img
                            src="/images/banners/5mm-Click-Luxury-Vinyl-Tiles-Plastic-PVC-Plank-Lvt-Flooring.png"
                            alt="companies-img"
                            className="company-img"
                          />
                          <div className="companies-text">
                            <h6>
                              {" "}
                              About VinyRoyal Plasticoates Private Limited
                              (VPPL)
                            </h6>
                            <p className="paragraph pb-4">
                              The pioneering entrepreneur of the group started
                              the flagship company NLC in 1962. It is engaged in
                              manufacturing of Artificial Leathercloth and is
                              one of the largest manufacturers in the world with
                              installed capacity of 13.5 million square meters
                              with 3 Coating lines.
                            </p>

                            <NavLink
                              to="/"
                              target="_blank"
                              className="custom-button border-btn"
                            >
                              Read More
                              <img
                                src="/images/icons/arrow-up-right.png"
                                className="ps-2 "
                                width="30px"
                                alt="arrow"
                              />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="coated"
                      role="tabpanel"
                      aria-labelledby="coated-tab"
                    >
                      <div className="companies-content">
                        <div className="companies-img">
                          <img
                            src="/images/banners/5mm-Click-Luxury-Vinyl-Tiles-Plastic-PVC-Plank-Lvt-Flooring.png"
                            alt="companies-img"
                            className="company-img"
                          />
                          <div className="companies-text">
                            <h6> About Royal Cushion Vinyl Products Ltd.</h6>
                            <p className="paragraph pb-4">
                              Royal Cushion Vinyl Products Ltd. has two plants
                              spread across 130 acres of land, at Garadia,
                              Halol, Gujarat, for manufacturing of Vinyl
                              Floorings of different types for various end-users
                              and Rigid Films. RCVPL caters to customers in over
                              40 countries worldwide.
                            </p>

                            <NavLink
                              to="/"
                              target="_blank"
                              className="custom-button border-btn"
                            >
                              Read More
                              <img
                                src="/images/icons/arrow-up-right.png"
                                className="ps-2 "
                                width="30px"
                                alt="arrow"
                              />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="seating"
                      role="tabpanel"
                      aria-labelledby="seating-tab"
                    >
                      <div className="companies-content">
                        <div className="companies-img">
                          <img
                            src="/images/banners/5mm-Click-Luxury-Vinyl-Tiles-Plastic-PVC-Plank-Lvt-Flooring.png"
                            alt="companies-img"
                            className="company-img"
                          />
                          <div className="companies-text">
                            <h6>About Vijayjyot</h6>
                            <p className="paragraph pb-4">
                              Vijayjyot seating components division is leading
                              components manufacturer for Metro, Bus, Car,
                              Cinema and Auditorium seats. The product line
                              includes fabrication of Metal Frames (MS and SS),
                              Polyurethane (PU) Foam and Upholstery / Trim
                              Covers. We also manufacture and supply fully
                              assembled Railway seats.
                            </p>

                            <NavLink
                              to="/"
                              target="_blank"
                              className="custom-button border-btn"
                            >
                              Read More
                              <img
                                src="/images/icons/arrow-up-right.png"
                                className="ps-2 "
                                width="30px"
                                alt="arrow"
                              />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="knit"
                      role="tabpanel"
                      aria-labelledby="knit-tab"
                    >
                      <div className="companies-content">
                        <div className="companies-img">
                          <img
                            src="/images/banners/5mm-Click-Luxury-Vinyl-Tiles-Plastic-PVC-Plank-Lvt-Flooring.png"
                            alt="companies-img"
                            className="company-img"
                          />
                          <div className="companies-text">
                            <h6>About Royal Knitting</h6>
                            <p className="paragraph pb-4">
                              Initially Royal Knitting Pvt. Ltd [RKPL]
                              established in 1983, produced knitted fabrics to
                              meet the in-house requirements for leathercloth
                              backing, for our sister concern - National
                              Leathercloth Mfg. Co. and Vinyroyal Plasticoates
                              Pvt. Ltd. Today RKPL’s installed capacity stands
                              at 175 tonnes/month of circular knitted fabrics
                              and 20 tonnes/month of warp knitted fabrics.
                            </p>

                            <NavLink
                              to="/"
                              target="_blank"
                              className="custom-button border-btn"
                            >
                              Read More
                              <img
                                src="/images/icons/arrow-up-right.png"
                                className="ps-2 "
                                width="30px"
                                alt="arrow"
                              />
                            </NavLink>
                          </div>
                        </div>
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

export default Company;
