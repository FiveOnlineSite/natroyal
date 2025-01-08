import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Let’s Build Something Great Together</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start mt-lg-0 mt-5">
            <div className="quick-links">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Companies</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Inquiry</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row corporate-office pb-5">
          <h6>Corporate Office</h6>
          <div className="col-lg-3">
            <p>
              60 CD Shlok, Government Industrial Estate, Charkop, Kandivali
              West, Mumbai 400 067.
            </p>
          </div>

          <div className="col-lg-3 px-lg-4 px-auto">
            <p className="m-0">+91-22-28603516</p>
            <p>+91-22-28603514</p>
            <p>contact@natroyalgroup.com</p>
          </div>

          <div className="col-lg-6">
            <p>
              Natroyal Group is India’s leading manufacturer of Vinyl Flooring,
              Coated Fabrics, Rigid Films, Circular and Warp Knitted Fabrics and
              Seating Components.
            </p>
          </div>
        </div>

        <div className="row copyright-row align-items-center">
          <div className="col-lg-6">
            <ul className="social-media">
              <li>
                <a href="#">
                  <img src="/images/icons/image 27.png" alt="social-media" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/image 28.png" alt="social-media" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/image 29.png" alt="social-media" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/image 30.png" alt="social-media" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start">
            <p className="paragraph">
              © 2025 Natroyal Group | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
