import React from "react";

const ApplicationList = () => {
  return (
    <>
      {/* Applications Button - Opens Modal */}
      <button
        className="btn application-btn"
        data-bs-toggle="modal"
        data-bs-target="#applicationsModal"
      >
        Applications
      </button>

      {/* Applications Modal */}
      <div
        className="modal fade modal-bottom-slide full-width-modal"
        id="applicationsModal"
        tabIndex="-1"
        aria-labelledby="applicationsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-bottom">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="applicationsModalLabel">
                Applications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Individual Accordions (No Nested Structure) */}
              <ul>
                <li>
                  <a className="dropdown-item" href="#">
                    Moonwalk
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accord
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mirakle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Symphony
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Star Trek
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Orbit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Suprema RS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Standard RS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aqua RS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Royal Star
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Elegant
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dazzle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nuplank
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Majesty Pro
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Majesty
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Royal Classic
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Tiger
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Avengers
                  </a>
                </li>
              </ul>
              {/* End Accordions */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationList;
