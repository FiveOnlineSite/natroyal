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
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/about-us#company">Companies</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="/contact-us#inquire">Inquiry</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row corporate-office pb-5">
          <h6>Corporate Office</h6>
          <div className="col-lg-3 mt-lg-0 mt-4">
            <a href="https://maps.app.goo.gl/85RC6CoSMz19U3an8" target="_blank">
              60 CD Shlok, Government Industrial Estate, Charkop, Kandivali
              West, Mumbai 400 067.
            </a>
          </div>

          <div className="col-lg-3 px-lg-4 px-auto mt-lg-0 mt-4">
            <a href="tel:+91-22-28603516" className="m-0">
              +91-22-28603516
            </a>
            <a href="tel:+91-22-28603514">+91-22-28603514</a>
            <a href="mailto:contact@natroyalgroup.com" className="mt-2">
              contact@natroyalgroup.com
            </a>
          </div>

          <div className="col-lg-6 mt-lg-0 mt-4">
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
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/natroyali" target="_blank">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/natroyal-group"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-plus-g"></i>
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
