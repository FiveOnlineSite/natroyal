import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Clients from "../components/Clients";

const Company = () => {
  const bannerData = {
    bannerImg: "/images/banners/pexels-heyho-6523302.png",
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
        <div className="container-fluid">
          {/* <div className="row">
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
          </div> */}

          {/* <div className="row mt-5">
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
          </div> */}

          <div className="row company-row">
            <div className="col-lg-12">
              <div className="row mt-5 align-items-center justify-content-center">
                <div className="col-lg-6 company-bg">
                  <div className="company-img">
                    <img
                      src="/images/banners/pexels-heyho-6489108.png"
                      alt="company-img"
                    />
                    <div className="logo-gray-div">
                      <img src="/images/icons/image 20.png" alt="logo" />
                      {/* <h2>LVT</h2> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-0 ps-auto pt-lg-0 pt-5 ">
                  <div className="companies-content">
                    <h6 className="subtitle">
                      Vinyl Plank & Tiles <span></span>
                    </h6>
                    <h2 className="title">Luxury Vinyl Plank & Tiles (LVT)</h2>

                    <p className="paragraph mb-5">
                      Natroyal Group (formerly Samsons Group) is a pioneer in
                      India, manufacturing and supplying luxury vinyl planks and
                      tiles for various industries, including education,
                      healthcare, residential, hospitality, office/retail, and
                      transportation sectors.
                    </p>

                    <NavLink
                      to="/"
                      target="_blank"
                      className="custom-button border-btn"
                    >
                      View More
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

          <div className="row company-row">
            <div className="col-lg-12">
              <div className="row mt-5 align-items-center justify-content-center">
                <div className="col-lg-6 company-bg order-lg-2 order-1">
                  <div className="company-img">
                    <img
                      src="/images/banners/pexels-charlotte-may-5825543.png"
                      alt="company-img"
                    />
                    <div className="logo-gray-div">
                      <img src="/images/icons/image 20.png" alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-0 ps-auto pt-lg-0 pt-5 order-lg-1 order-2">
                  <div className="companies-content">
                    <h6 className="subtitle">
                      Coated Fabrics<span></span>
                    </h6>
                    <h2 className="title">
                      VinyRoyal Plasticoates Private Limited (VPPL)
                    </h2>
                    <p className="paragraph">
                      The pioneering entrepreneur of the group founded the
                      flagship company NLC in 1962. It is engaged in the
                      manufacturing of Artificial Leathercloth and is one of the
                      largest manufacturers in the world, with an installed
                      capacity of 13.5 million square meters and 3 coating
                      lines.
                    </p>

                    <div className="company-points">
                      <h5>Infrastructure</h5>
                      <div className="company-point">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          Specializes in manufacturing PVC artificial leather to
                          various Indian and international standards for
                          automobile seat upholstery and trims.
                        </p>
                      </div>
                      <div className="company-point">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          Offers a collection of designs in natural leather-like
                          grains and fabric-type patterns in a wide range of
                          colors.
                        </p>
                      </div>
                      <div className="company-point">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          Provides a choice of PVC artificial leather with knit,
                          woven, and non-woven backing fabrics to suit a variety
                          of end uses.
                        </p>
                      </div>
                      <div className="company-point mb-5">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          Equipped with a well-established laboratory for
                          testing raw materials and finished products.
                        </p>
                      </div>
                      <div className="company-point mb-5">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          Features a modern and well-laid-out plant for
                          production and storage.
                        </p>
                      </div>
                    </div>

                    <NavLink
                      to="/"
                      target="_blank"
                      className="custom-button border-btn"
                    >
                      View More
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

          <div className="row company-row">
            <div className="col-lg-12">
              <div className="row mt-5 align-items-center justify-content-center">
                <div className="col-lg-6 company-bg">
                  <div className="company-img">
                    <img
                      src="/images/banners/austin-park-7UqGdTdUin4-unsplash.png"
                      alt="company-img"
                    />
                    <div className="logo-gray-div">
                      <img src="/images/icons/image 21.png" alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-0 ps-auto pt-lg-0 pt-5">
                  <div className="companies-content">
                    <h6 className="subtitle">
                      PVC Vinyl Flooring <span></span>
                    </h6>
                    <h2 className="title">Royal Cushion Vinyl Products Ltd.</h2>
                    <p className="paragraph">
                      Royal Cushion Vinyl Products Ltd. has two plants spread
                      across 130 acres of land at Garadia, Halol, Gujarat, for
                      the manufacturing of vinyl floorings of various types for
                      different end-users, as well as rigid films. RCVPL serves
                      customers in over 40 countries worldwide.
                    </p>

                    <div className="company-points">
                      <h5>Quality Policy</h5>
                      <div className="company-point mb-5">
                        <i className="lni lni-arrow-right"></i>
                        <p>
                          To achieve customer satisfaction by providing
                          international-quality products across all our product
                          ranges.
                        </p>
                      </div>
                    </div>

                    <NavLink
                      to="/"
                      target="_blank"
                      className="custom-button border-btn"
                    >
                      View More
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

          <div className="row company-row">
            <div className="col-lg-12">
              <div className="row mt-5 align-items-center justify-content-center">
                <div className="col-lg-6 company-bg order-lg-2 order-1">
                  <div className="company-img">
                    <img
                      src="/images/banners/pexels-moonlightshotz-11139348.png"
                      alt="company-img"
                    />
                    <div className="logo-gray-div">
                      <img src="/images/icons/image 22.png" alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-0 ps-auto pt-lg-0 pt-5 order-lg-1 order-2">
                  <div className="companies-content">
                    <h6 className="subtitle">
                      Seating Components <span></span>
                    </h6>
                    <h2 className="title">Vijayjyot</h2>
                    <p className="paragraph">
                      Vijayjyot Seating Components Division is a leading
                      manufacturer of components for metro, bus, car, cinema,
                      and auditorium seats. The product line includes the
                      fabrication of metal frames (MS and SS), polyurethane (PU)
                      foam, and upholstery/trim covers. We also manufacture and
                      supply fully assembled railway seats.
                    </p>

                    <p className="paragraph mb-5">
                      <strong>Our Seating Components Division</strong> provides
                      a one-stop solution for customers, from design inception
                      and prototype samples to product development and
                      commercial supplies. Our facilities include a design
                      center, tool room, weld shop, and advanced technology such
                      as multi-axis bending machines, cutting and sewing
                      machines, and PU machines. The plant is located in Halol,
                      near Vadodara, in the state of Gujarat, India.
                    </p>

                    <NavLink
                      to="/"
                      target="_blank"
                      className="custom-button border-btn"
                    >
                      View More
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

          <div className="row company-row">
            <div className="col-lg-12">
              <div className="row mt-5 align-items-center justify-content-center">
                <div className="col-lg-6 company-bg">
                  <div className="company-img">
                    <img
                      src="/images/banners/parsa-farjam-Koup40gBe98-unsplash.png"
                      alt="company-img"
                    />
                    <div className="logo-gray-div">
                      <img src="/images/icons/image 23.png" alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-0 ps-auto pt-lg-0 pt-5">
                  <div className="companies-content">
                    <h6 className="subtitle">
                      Knit Fabrics <span></span>
                    </h6>
                    <h2 className="title">Royal Knitting</h2>
                    <p className="paragraph">
                      Royal Knitting Pvt. Ltd. (RKPL), established in 1983,
                      initially produced knitted fabrics to meet the in-house
                      requirements for leathercloth backing for our sister
                      concerns—National Leathercloth Mfg. Co. and Vinyroyal
                      Plasticoates Pvt. Ltd. Today, RKPL boasts an installed
                      capacity of 175 tonnes per month for circular knitted
                      fabrics and 20 tonnes per month for warp-knitted fabrics.
                    </p>

                    <p className="paragraph">
                      Currently, only 30% of the capacity is utilized for
                      supplies to group companies, 50% is supplied to other
                      local artificial leathercloth manufacturers and for
                      exports, while the remaining 20% is supplied to OE
                      customers such as Melba, Faze 3, Reliance, and Shamkeen.
                      In the OE segment, the fabric is used for back scrim
                      applications in automotive upholstery.
                    </p>

                    <p className="paragraph mb-5">
                      The production facility is equipped with 28 circular
                      knitting machines (Single Jersey, Terry, Interlock) from
                      Mayer & Cie, 4 from Orizio, 2 from Taifan, and 1 from
                      Fukuhara. It also houses warp knitting machines from Karl
                      Mayer, including 2 KS-3 and 1 HKS-3M, along with a raising
                      machine from Daintipaolo. Future plans include setting up
                      an in-house dyeing and finishing line.
                    </p>

                    <NavLink
                      to="/"
                      target="_blank"
                      className="custom-button border-btn"
                    >
                      View More
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
        </div>
      </section>

      <Clients />
    </Layout>
  );
};

export default Company;
