import React from "react";
import testimonies from "../../img/testimonies.svg";
import dhata from "../../img/dhata.svg";


function Testimonial() {
  return (
    <section className="testimonies">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <img src={testimonies} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 right-contact mb-3">
            <h3>5 Million +<br/>customers</h3>
            <p>With over 5 million + Customers our Support team is ready and always available to your requests and complaints, you can also chat with us on the app, slide into our Dms , tweet, instagram comment, send an email to support@ardilla.africa or call our Customer Support on +01234</p>
          </div>
        </div>
        <div className="row justify-content-center text-center logo-house desktop">
          <div className="col-md-4 border-end">
            <h4 className="text-center fs-6 text-dark fw-bolder" style={{marginTop: "13px"}}>Partners</h4>
          </div>
          <div className="col-md-5" style={{paddingLeft: "90px"}}>
            <div className="d-flex flex-row">
              <img src={dhata} alt="" className="imf-fluid me-4" />
              <img src={dhata} alt="" className="imf-fluid me-4" />
              <img src={dhata} alt="" className="imf-fluid  me-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
