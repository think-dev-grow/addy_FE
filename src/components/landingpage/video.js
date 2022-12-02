import React from "react";
import video from "../../img/videos.svg";
import zikoko from "../../img/zikoko.png";
function Videos() {
  return(
    <section className="videos">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>Experience differs from<br/>what is told.</h2>
            <h6 className="mt-4 mb-5">You can ask the thousands of Customers using ardilla or you can sign up yourself.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={video} className="img-fluid video-item" alt="" />
          </div>
        </div>
        <div className="row justify-content-center text-center logo-house desktop">
          <div className="col-md-5 border-end">
            <div className="d-flex flex-row">
              <img src={zikoko} alt="" className="imf-fluid logos " />
              <img src={zikoko} alt="" className="imf-fluid logos " />
              <img src={zikoko} alt="" className="imf-fluid logos " />
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="text-left fs-6 text-dark fw-bolder press">Press Reviews</h4>
          </div>
        </div>
        <div className="row justify-content-center text-center web">
          <div className="col-md-10">
            <div className="webapp">
              <h4>Also Available on Web</h4>
              <p className="my-3">Ardilla helps you grow your finances anywhere and anytime you need to. The<br/>services on the App are also accessible on the Web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos;