import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/images/icons/Natroyal 1.png" alt="logo" />
        </a>

        <div className="companies">
          <a href="#" className="company-div">
            <img
              src="/images/icons/image 44.png"
              height={"49.29px"}
              width={"75px"}
              alt="company"
            />
            <h6>Vinyl Flooring</h6>
          </a>

          <a href="#" className="company-div">
            <img
              src="/images/icons/image 45.png"
              height={"50px"}
              width={"75px"}
              alt="company"
            />
            <h6>Coated Fabrics</h6>
          </a>

          <a href="#" className="company-div">
            <img
              src="/images/icons/image 46.png"
              height={"32px"}
              width={"120px"}
              alt="company"
            />
            <h6>Seating Components</h6>
          </a>

          <a href="#" className="company-div">
            <img
              src="/images/icons/image 47.png"
              height={"50px"}
              width={"75px"}
              alt="company"
            />
            <h6>Knit Fabrics</h6>
          </a>
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
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/images/icons/Natroyal 1.png" alt="logo" />
            </h5>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 44.png"
                    height={"49.29px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Vinyl Flooring</h6>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 45.png"
                    height={"50px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Coated Fabrics</h6>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 46.png"
                    height={"32px"}
                    width={"120px"}
                    alt="company"
                  />
                  <h6>Seating Components</h6>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="company-div mobile-company">
                  <img
                    src="/images/icons/image 47.png"
                    height={"50px"}
                    width={"75px"}
                    alt="company"
                  />
                  <h6>Knit Fabrics</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
