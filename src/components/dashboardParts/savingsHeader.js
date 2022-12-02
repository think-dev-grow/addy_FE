import React from "react";
import icon from "../../img/dashboard/portfolio-icon.svg";
import nots from "../../img/dashboard/nots.svg";
import settings from "../../img/dashboard/settings.svg";
import { Link } from "react-router-dom";

function SavingsHeader() {
  return (
    <section className="dashboard-header fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={icon} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="d-flex flex-row float-end desktop cogs">
          <Link to=""><img src={nots} alt="" className="img-fluid me-4" /></Link>
          <Link to=""><img src={settings} alt="" className="img-fluid" /></Link>
        </div>
      </div>
    </section>
  )
}

export default SavingsHeader;