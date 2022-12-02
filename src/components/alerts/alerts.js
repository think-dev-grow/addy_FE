import React from "react";

function Alerts() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-danger alert-dismissible fade show text-center text-danger" role="alert">
              <i className="bi bi-exclamation-circle me-3"></i>
              User already exists.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="alert alert-danger alert-dismissible fade show text-center text-danger" role="alert">
              <i className="bi bi-exclamation-circle me-3"></i>
              Incorrect email or password
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="alert alert-danger alert-dismissible fade show text-center text-danger" role="alert">
              <i className="bi bi-exclamation-circle me-3"></i>
              Incorrect code Inputted
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="alert alert-success alert-dismissible fade show text-center text-success" role="alert">
              <i className="bi bi-patch-check-fill me-3"></i>
              If an account exist for (Fullname@mail.com)
              you will receive reset instructions
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alerts;