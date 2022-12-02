import React from "react";
import kyc from "../img/kyc-props.svg";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";



function Kyc() {
  return (
    <section className="verify-section">
      <div className="container">
        <div className="row logo">
          <div className="col-md-6 ">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={kyc} alt="" className="img-fluid" />
            <h3 className="my-4">KYC Verification</h3>
            <h6>Enter your Bank Verification number (BVN)</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-4">
                <div className="mb-3">
                  <input type="number" class="form-control custom-form" placeholder="Enter BVN"/>
                </div>
                <div className="mt-5 mb-3">
                  <button className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6" style={{width: "100%"}}>Confirm</button>
                </div>
                <div className="logout text-center">
                  <Link className="log-out"><i className="bi bi-power me-2"></i> Log Out</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kyc;