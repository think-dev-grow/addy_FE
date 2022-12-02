import React from "react";
import { Link } from "react-router-dom";
import home from "../../img/dashboard/home.svg";
import portfolio from "../../img/dashboard/portfolio.svg";
import investment from "../../img/dashboard/growth.svg";
import saving from "../../img/dashboard/investment.svg";
import dilla from "../../img/dashboard/dilla.svg";
import explore from "../../img/dashboard/explore.svg";
import learn from "../../img/dashboard/learn.svg";
import insurance from "../../img/dashboard/insurance.svg";
import logout from "../../img/dashboard/logout.svg";
import contact from "../../img/dashboard/contact.svg";
import chat from "../../img/dashboard/chat.svg";
import save from "../../img/dashboard/saving-p.svg";
import arrow from "../../img/dashboard/right-arrow.svg";
import invest from "../../img/dashboard/investment-p.svg";
import san from "../../img/dashboard/san-p.svg";
import pie from "../../img/dashboard/chart-pie.svg";
import red from "../../img/dashboard/red.svg";
import yellow from "../../img/dashboard/yellow.svg";
import purple from "../../img/dashboard/purple.svg";
import blue from "../../img/dashboard/blue.svg";
import port from "../../img/dashboard/portie.svg";




function PortfolioBody() {
  

  return (
    <section className="main-dash">
      <div className="sidebar">
        <Link to="/dashboard" className="">
          <div className="d-flex flex-row">
            <img src={home} alt="" className="img-fluid me-2 icons" />
            Home
          </div>
        </Link>
        <Link to="/portfolio" className="active">
          <div className="d-flex flex-row">
            <img src={portfolio} alt="" className="img-fluid me-2 icons" />
            Portfolio
          </div>
        </Link>
        <Link to="/savings">
          <div className="d-flex flex-row">
            <img src={saving} alt="" className="img-fluid me-2 icons" />
            Savings
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={investment} alt="" className="img-fluid me-2 icons" />
            Investments <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={insurance} alt="" className="img-fluid me-2 icons" />
            Insurance <span className="badg ms-3">Coming Soon</span>
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={dilla} alt="" className="img-fluid me-2 icons" />
            Dilla
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={explore} alt="" className="img-fluid me-2 icons" />
            Explore
          </div>
        </Link>
        <Link>
          <div className="d-flex flex-row">
            <img src={learn} alt="" className="img-fluid me-2 icons" />
            Learn
          </div>
        </Link>
        <div className="second-nav">
          <Link>
            <div className="d-flex flex-row">
              <img src={contact} alt="" className="img-fluid me-2 icons" />
              Contact Dilla Coach
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={chat} alt="" className="img-fluid me-2 icons" />
              Chat Support
            </div>
          </Link>
          <Link>
            <div className="d-flex flex-row">
              <img src={logout} alt="" className="img-fluid me-2 icons" />
              Log Out
            </div>
          </Link>
        </div>
      </div>
      <div className="content py-5 px-5">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex flex-row value">
              <div>
                <h6 className="mb-2">Market value</h6>
                <h2 className="mb-2">-NGN 2000 (5%)</h2>
                <p>Updated September 16, 2022  <i className="bi bi-clock-history"></i></p>
              </div>
              <div className="right-portfolio">
                <h6 className="mb-2">Today’s change</h6>
                <h2 className="mb-2">-NGN 2000 (5%)</h2>
              </div>
            </div>
            <div className="text-center mt-4 mb-5">
              <img src={port} alt="" className="img-fluid chartie mb-5" />
              <span className="desc">Your portfolio performance between 1/10/2022 & 2/11/2022</span>
            </div>
            <div className="card-p p-4 mb-5">
              <div className="d-flex flex-row">
                <img src={save} alt="" className="img-fluid"/>
                <div className="mt-2 ms-3">
                  <h5>Savings   <span className="roi ms-2">+10.00%</span></h5>
                  <h6>View your savings portfolio</h6>
                </div>
              </div>
              <div className="float-end desktop" style={{marginTop: "-50px"}}>
                <img src={arrow} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-p p-4 mb-5 bg-invest">
              <div className="d-flex flex-row">
                <img src={invest} alt="" className="img-fluid"/>
                <div className="mt-2 ms-3">
                  <h5>Investment   <span className="roi ms-2">+10.00%</span></h5>
                  <h6>View your savings portfolio</h6>
                </div>
              </div>
              <div className="float-end desktop" style={{marginTop: "-50px"}}>
                <img src={arrow} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-p p-4 mb-5">
              <div className="d-flex flex-row">
                <img src={san} alt="" className="img-fluid"/>
                <div className="mt-2 ms-3">
                  <h5>Insurance   <span className="roi ms-2">+10.00%</span></h5>
                  <h6>View your savings portfolio</h6>
                </div>
              </div>
              <div className="float-end desktop" style={{marginTop: "-50px"}}>
                <img src={arrow} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-p p-4 mb-5 bg-invest">
              <div className="d-flex flex-row">
                <img src={san} alt="" className="img-fluid"/>
                <div className="mt-2 ms-3">
                  <h5>SAN   <span className="roi ms-2">+10.00%</span></h5>
                  <h6>View your savings portfolio</h6>
                </div>
              </div>
              <div className="float-end desktop" style={{marginTop: "-50px"}}>
                <img src={arrow} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-5 dilla-section">
            <div className="dillawallet p-5 mb-5">
              <div className="mb-5">
                <h2>Dilla Wallet</h2>
                <label className="switch float-end" style={{marginTop:"-27px"}}>
                  <input type="checkbox" placeholder="USD" />
                  <span className="slider round"></span>
                </label>
              </div>
              <h6>Current Balance</h6>
              <div>
                <p>NGN 500,000.00</p>
                <i className="bi bi-eye-fill float-end dilla-eye"></i>
              </div>
            </div>
            <div className="stats p-5">
              <h2>Statistics</h2>
              <h6>Monthly activity</h6>
              <hr></hr>
              <div className="text-center mb-3">
                <img src={pie} alt="" className="img-fluid mt-4" />
              </div>
              <div className="text-center mapping">
                <div className="d-flex flex-row">
                  <img src={red} alt="" className="img-fluid me-3"/>
                  <p className="mt-3">Savings</p>
                </div>
                <h3 className="float-end">420</h3>
              </div>
              <div className="text-center mapping">
                <div className="d-flex flex-row">
                  <img src={yellow} alt="" className="img-fluid me-3"/>
                  <p className="mt-3">Investment</p>
                </div>
                <h3 className="float-end">142</h3>
              </div>
              <div className="text-center mapping">
                <div className="d-flex flex-row">
                  <img src={purple} alt="" className="img-fluid me-3"/>
                  <p className="mt-3">Insurance</p>
                </div>
                <h3 className="float-end">340</h3>
              </div>
              <div className="text-center mapping">
                <div className="d-flex flex-row">
                  <img src={blue} alt="" className="img-fluid me-3"/>
                  <p className="mt-3">SAN</p>
                </div>
                <h3 className="float-end">590</h3>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default PortfolioBody;
