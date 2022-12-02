import React from "react";
import { Link } from "react-router-dom";
import transactions from "../../img/transactions.svg";
import forme from "../../img/for-me.svg";
import join from "../../img/join.svg";
import target from "../../img/target.svg";
import flex from "../../img/flex.svg";


function Build() {
  return(
    <section className="build-saving" data-aos="slide-down" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-3" >Build your savings<br/>the right way</h2>
            <h6>Plan towards your future by saving with ardilla,<br/>Grow your money with pro-vetted savings plans<br/> just for you.</h6>
            <h5 className="my-3"><Link>Learn More about Savings <i className="bi bi-chevron-right"></i></Link></h5>
            <img src={transactions} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <div className="card-frame">
                  <img src={forme} alt="" className="img-fluid mb-1" style={{marginLeft: "-9px"}}/>
                  <h3>For me Plan</h3>
                  <p className="my-3">Save, Withdraw, Transfer, Manage and organise your money for free at any time, anywhere.</p>
                  <small>Learn More <i className="bi bi-chevron-right"></i></small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-frame">
                  <img src={flex} alt="" className="img-fluid mb-1" style={{marginLeft: "-9px"}}/>
                  <h3>Flex Savings plan</h3>
                  <p className="my-3">Get closer to your goal by turning on autosave. Set daily weekly or monthly automatic deposits.</p>
                  <small>Learn More <i className="bi bi-chevron-right"></i></small>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <div className="card-frame">
                  <img src={join} alt="" className="img-fluid mb-1" style={{marginLeft: "-9px"}}/>
                  <h3>Join Saving Challenge</h3>
                  <p className="my-3">Be part of ardilla’s saving challenge board to improve your saving capacity you get 10.5% P.A</p>
                  <small>Learn More <i className="bi bi-chevron-right"></i></small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-frame">
                  <img src={target} alt="" className="img-fluid mb-1" style={{marginLeft: "-9px"}}/>
                  <h3>Target Savings Plan</h3>
                  <p className="my-3">Fixed Savings is a savings plan that lets you save and lock your funds until a later date. You get 10% P.A</p>
                  <small>Learn More <i className="bi bi-chevron-right"></i></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Build;