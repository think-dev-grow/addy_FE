import React from "react";
import { Link } from "react-router-dom";
import fone from "../img/fone.svg";
import logo from "../img/ardilla.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";


function Footer() {
  return(
    <section>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row footer-top">
              <div className="col-md-6">
                <h2>Download for free<br/>Start saving Today</h2>
                <form className="mt-5">
                  <div className="input-group">
                    <input type="email" className="form-control input-lg download" placeholder="Your email"/>
                    <span className="input-group-btn" style={{marginLeft: "-9px"}}>
                      <Link className="btn download-btn btn-lg">Download for free</Link>
                    </span>
                  </div>
                </form>
              </div>
              <div className="col-md-6 text-center" >
                <img src={fone} alt="" className="img-fluid" style={{marginTop: "49px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row bottom-line" >
            <div className="col-md-3 mb-3">
              <img src={logo} alt="" className="img-fluid" />
              <p className="mt-3">Ardilla is a savings and investment<br/>platform that helps customers in achieving<br/>your financial goals.</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-sm mb-3">
                  <h4>Products</h4>
                  <ul className="list-unstyled links">
                    <li>Savings</li>
                    <li>Investment</li>
                    <li>Education</li>
                    <li>Insurance</li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Company</h4>
                  <ul className="list-unstyled links">
                    <li>About us</li>
                    <li>Careers</li>
                    <li>FAQS</li>
                    <li>Securities</li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Transparency</h4>
                  <ul className="list-unstyled links">
                    <li>Terms & conditions</li>
                    <li>Information security policy</li>
                    <li>Privacy policy</li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Developer</h4>
                  <ul className="list-unstyled links">
                    <li>Connect API</li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Address</h4>
                  <ul className="list-unstyled links">
                    <li>33B, Ogundana street, Allen, Ikeja.</li>
                  </ul>
                  <h4 className="mb-3">Contact</h4>
                  <ul className="list-unstyled links">
                    <li>support@ardilla.africa</li>
                    <li>(234)801 000 1234</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-10 mb-3">
              <h6>© 2022 Ardilla. All right reserved</h6>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-row">
                <Link to="/"><img src={facebook} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={linkedin} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={twitter} alt="" className="img-fluid me-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;