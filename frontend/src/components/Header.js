import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/images/icons/Natroyal 1.png" alt="logo" />
        </NavLink>

        <div className="companies">
          <NavLink to="/" className="company-div">
            <img
              src="/images/icons/image 44.png"
              height={"49.29px"}
              width={"75px"}
              alt="company"
            />
            <h6>Vinyl Flooring</h6>
          </NavLink>

          <NavLink to="/" className="company-div">
            <img
              src="/images/icons/image 45.png"
              height={"50px"}
              width={"75px"}
              alt="company"
            />
            <h6>Coated Fabrics</h6>
          </NavLink>

          <NavLink to="/" className="company-div">
            <img
              src="/images/icons/image 46.png"
              height={"32px"}
              width={"120px"}
              alt="company"
            />
            <h6>Seating Components</h6>
          </NavLink>

          <NavLink to="/" className="company-div">
            <img
              src="/images/icons/image 47.png"
              height={"50px"}
              width={"75px"}
              alt="company"
            />
            <h6>Knit Fabrics</h6>
          </NavLink>
        </div>
        <button
          className="navbar-toggler d-flex align-items-center justify-content-center"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <img src="/images/icons/Group 1 (2).png" alt="navbar-toggle" />
          <h6>Menu</h6>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a href="/" className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/images/icons/Natroyal 1.png" alt="logo" />
            </a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us#company">
                  Company
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us#inquire">
                  Inquiry
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 44.png"
                    height={"49.29px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Vinyl Flooring</h6>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 45.png"
                    height={"50px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Coated Fabrics</h6>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 46.png"
                    height={"32px"}
                    width={"120px"}
                    alt="company"
                  />
                  <h6>Seating Components</h6>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 47.png"
                    height={"50px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Knit Fabrics</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
