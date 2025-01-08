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
            <a href="https://maps.app.goo.gl/85RC6CoSMz19U3an8" target="_blank">
              60 CD Shlok, Government Industrial Estate, Charkop, Kandivali
              West, Mumbai 400 067.
            </a>
          </div>

          <div className="col-lg-3 px-lg-4 px-auto">
            <a href="tel:+91-9016315193" className="m-0">
              +91-9016315193
            </a>
            <a href="tel:+91-9979607365">+91-9979607365</a>
            <a href="mailto:contact@natroyalgroup.com" className="mt-2">
              contact@natroyalgroup.com
            </a>
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
                <a
                  href="https://www.facebook.com/NatroyalGroup/"
                  target="_blank"
                >
                  <img src="/images/icons/image 27.png" alt="social-media" />
                </a>
              </li>
              <li>
                <a href="https://x.com/NatroyalGroup" target="_blank">
                  <img src="/images/icons/image 28.png" alt="social-media" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/natroyal-group"
                  target="_blank"
                >
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
