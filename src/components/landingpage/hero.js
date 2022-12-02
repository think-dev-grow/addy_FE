import React from "react";
import { Link } from "react-router-dom";
import demo from "../../img/demo.svg";
import left from "../../img/left.svg";


function Hero() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3" >
            <h2 className="desktop">The Smartest<br/>way to grow<br/>your wealth</h2>
            <h2 className="mobile">The Smartest way to grow your wealth</h2>
            <h6 className="my-5">Ardilla helps you save and invest in achieving your<br/>financial goals, we have the most flexible and seamless<br/>way to grow your funds.</h6>
            <Link className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6' to="/">Get Started</Link>
          </div>
          <div className="col-md-6 text-end">
            <img src={demo} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row second-layer">
          <div className="col-md-6 mb-3">
            <img src={left} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 alignment">
            <div className="d-inline-flex badge">Up to 30% returns</div>
            <h3 className="my-4">Get Access to Investment<br/>Opportunities </h3>
            <h6 className="desktop">Plan towards your future by investing with ardilla,  Grow your<br/> money confidently and securely with the available investment<br/> opportunities </h6>
            <h6 className="mobile">Plan towards your future by investing with ardilla,  Grow your money confidently and securely with the available investment opportunities</h6>
            <h5 className="mt-4"><Link>Learn More about investments <i className="bi bi-chevron-right"></i></Link></h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero; 