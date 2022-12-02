import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import girlie from "../img/girlie.svg";
import axios from "axios";
import Cookies from "js-cookie";

function OtpPage() {
  const location = useLocation();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [resend, setResend] = useState(false);

  const token = Cookies.get("token");

  const { _id, email, verified } = location.state.user;

  const navigate = useNavigate();

  useEffect(() => {
    if (verified === "activated") {
      return;
    } else {
      return navigate("/sign-up");
    }
  }, [verified, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/auth/verify-otp/${token}/${_id}`,
        { code }
      );

      if (data.success === true) {
        setErr(false);
        setMsg(data.msg);
        setOnSuccess(true);
        setIsLoading(false);
      }

      setIsLoading(false);
    } catch (error) {
      setErr(true);
      setMsg(`${error.response.data.msg || "Network error"} `);
      setIsLoading(false);
    }
  };

  const handleClickSuccess = () => {
    const getUserById = async () => {
      const { data } = await axios.get(
        `https://ardilla.herokuapp.com/ardilla/api/user/find/${_id}`
      );

      setOnSuccess(false);

      const { user } = data;
      navigate("/complete-profile", { state: { user } });
    };

    getUserById();
  };

  const handleResend = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://ardilla.herokuapp.com/ardilla/api/auth/send-otp",
        { email }
      );

      Cookies.remove("token");

      Cookies.set("token", data.token);

      if (data) {
        setErr(false);
        setMsg(data.msg);
        setResend(true);
        setIsLoading(false);
      }
    } catch (error) {
      setMsg(`${error.response.data.msg || "Network error"} `);
      setErr(true);
      setIsLoading(false);
    }
  };

  const handleWrongEmail = async () => {
    try {
      const { data } = await axios.delete(
        ` https://ardilla-app.herokuapp.com/ardilla/api/auth/wrong-email/${_id}`
      );

      Cookies.remove();

      if (data.success === true) {
        navigate("/sign-up");
      }
    } catch (error) {
      setMsg(`${error.response.data.msg || "Network error"} `);
      setErr(true);
      setIsLoading(false);
    }
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
                aria-label="Close"
                onClick={() => setErr(false)}
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
                aria-label="Close"
                onClick={handleClickSuccess}
              ></button>
            </div>
          </div>
        </div>
      )}
      {resend && (
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
                onClick={() => setResend(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row logo">
          <div className="col-md-6">
            <Link to="/sign-up">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={girlie} alt="" className="img-fluid" />
              <h2 className="my-4">
                Enter Code sent to
                <br />
                your email
              </h2>
              <p className="code mb-5">{email}</p>
              <h6>
                <button className="resend" onClick={handleWrongEmail}>
                  Wrong Email?
                </button>
              </h6>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="">
                    <label className="form-label">
                      <i className="bi bi-key-fill me-2"></i> Code
                    </label>
                    <input
                      type="number"
                      className="form-control custom-login"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  {isLoading ? (
                    <div className="my-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="my-5">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  <div className="bottom">
                    <p className="user">
                      Didn't get OTP?{" "}
                      <button className="resend" onClick={handleResend}>
                        Resend
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtpPage;
