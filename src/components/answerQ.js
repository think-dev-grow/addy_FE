import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import home from "../img/home-login.svg";

import Cookies from "js-cookie";
import axios from "axios";

function AQ() {
  const token = Cookies.get("user");

  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `https://ardilla.herokuapp.com/ardilla/api/user/getUser/${token}`
        );

        setUserDetail(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [token]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/auth/answer-security-question/${token}`
      );

      if (userDetail?.securityQusetion?.answer === ans) {
        setMsg(`Hey ,${userDetail?.kodeHex} welcome `);
        setOnSuccess(true);
        setLoading(false);
        //check me out
        navigate("/dashboard");
      } else {
        setLoading(false);
        setErr(true);
        setMsg("Wrong answer");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
  };

  return (
    <section className="login-section">
      {err && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="alert alert-danger alert-dismissible fade show text-center text-danger"
              role="alert"
            >
              <i className="bi bi-exclamation-circle me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={() => setErr(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      {onSuccess && (
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div
              className="alert alert-success alert-dismissible fade show text-center text-success"
              role="alert"
            >
              <i className="bi bi-patch-check-fill me-3"></i>
              {msg}
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                onClick={handleClickSuccess}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/complete-profile">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={home} alt="" className="img-fluid" />
              <h2 className="my-4">
                Security
                <br />
                Question
              </h2>
              <p className="code mb-5">
                Answer your security question
                <br />
                by filling in your answer
              </p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <span className="q">
                    {userDetail?.securityQusetion?.question}
                  </span>
                  <div class="my-4">
                    <input
                      type="text"
                      class="form-control custom-form"
                      required
                      value={ans}
                      onChange={(e) =>
                        setAns(e.target.value.trim().toLowerCase())
                      }
                    />
                  </div>
                  {loading ? (
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AQ;
