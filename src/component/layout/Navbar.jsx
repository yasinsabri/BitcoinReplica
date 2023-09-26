import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="asset/logo.svg" alt="" width="180" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-3 ">
              {/* First Drop down */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Introduction
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      <Link className="nav-link active mx-2" to="/Individuals">
                        Individuals
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Businesses
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      White Paper
                    </a>
                  </li>
                </ul>
              </li>
              {/* Second dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Exchanges
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Community
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vocabulary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bitcoin Core
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Innovations
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Participate
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Support Bitcoin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Buy Bitcoin
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Running a Full Node
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Urdu
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
