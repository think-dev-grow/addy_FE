import React from "react";
import error from "../img/404.svg";
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className="container error">
      <div className="row justify-content-center">
        <div className="col-md-9 text-center">
          <h1>404</h1>
          <h6>Page Not Found</h6>
          <div className="my-3">
            <img src={error} alt="" className="img-fluid"/>
          </div>
          <div><Link className='btn btn-outline-primary px-5 py-3 ardilla-btn' to="/">return to Homepage</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Error;