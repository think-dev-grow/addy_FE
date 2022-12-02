import React from "react";
import features from "../../img/products.svg";
import blank from "../../img/blank.svg";

function Products() {
  return(
    <section className="features-product">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-start mb-3">
            <img src={features} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={blank} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 text-start mb-3">
            <h3>Save at your own<br/>pace!</h3>
            <h6 className="my-4">Save your money daily, weekly, or monthly. No pressure. We work at your pace.</h6>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Create Unlimted savings plans</p>
            </div>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Withdraw anytime</p>
            </div>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Save with Friends with SAN ID</p>
            </div>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Be better at saving</p>
            </div>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Accountability profile</p>
            </div>
            <div className="d-flex flex-row mb-3">
              <i className="bi bi-check-circle-fill me-4 check"></i>
              <p>Activity and report</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;