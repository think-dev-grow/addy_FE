import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/ardilla.svg";
// import globe from "../../img/globe.svg";
import save from "../../img/save.svg";
import invest from "../../img/invest.svg";
import bonus from "../../img/bonus.svg";
import insurance from "../../img/insurance.svg";
import earth from "../../img/earth.svg";
import naija from "../../img/9ja.svg";
import uk from "../../img/uk.svg";
import us from "../../img/us.svg";

function LearnHeader() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light py-4 px-1">
      <div className='container header'>
        <a className='navbar-brand' href="/learn">
          <img src={logo} alt="" className='img-fluid' style={{marginTop: "-8px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" to="/">Guide</Link>
                <div className="dropdown-menu dropdown-single">
                  <div className="row">
                    <div className="col-md-12">
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={save} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2 className="active">Savings</h2>
                            <h6>Learn More About Savings</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={invest} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Investment</h2>
                            <h6>Learn More About Investment</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={insurance} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Insurance</h2>
                            <h6>Learn More About Insurance</h6>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={bonus} alt="" className="img-fluid" />
                          <div className="mt-3">
                            <h2>Learning Bonus</h2>
                            <h6>Learn & Earn</h6>
                          </div>
                        </div>
                      </Link>
                    </div>      
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Testimonies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Updates</Link>
              </li>
            </ul>
          </div>
          <div className='ms-auto'>
            <ul className="navbar-nav">
              <li className='nav-item mt-2 desktop'>
                <i className="bi bi-search"></i>
              </li>
              <li className='nav-item'>
                <Link className='btn btn-outline-primary px-4 py-2 ardilla-btn fs-6' to="/sign-up">Create Account</Link>
              </li>
            
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle globe"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-globe fs-5"></i>
                </Link>
                <div className="dropdown-menu dropdown-globe">
                  <div className="row">
                    <div className="col-md-12">
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={earth} alt="" className="img-fluid" />
                          <h2 className="mt-3">Global</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={naija} alt="" className="img-fluid" />
                          <h2 className="mt-3">Nigeria</h2>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={us} alt="" className="img-fluid" />
                          <h2 className="mt-3 ">United States</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={uk} alt="" className="img-fluid" />
                          <h2 className="mt-3">United Kingdom</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LearnHeader;