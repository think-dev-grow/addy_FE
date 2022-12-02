import React, { useState } from "react";
import logo from "../img/logo.svg";
import testimonial from "../img/testimonial.svg";
import register from "../img/code.svg";
import dot from "../img/dot.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Register() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ardilla.herokuapp.com/ardilla/api/auth/send-otp",
        { email }
      );

      setIsLoading(false);

      const { user } = data;

      Cookies.set("token", data.token);

      navigate("/otp", { state: { user } });
    } catch (error) {
      setMsg(`${error.response.data.msg || "Network error"} `);
      setErr(true);
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
      {err && (
        <div className="row justify-content-center ardilla-alert">
          <div className="col-md-12">
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
      <div className="container">
        <div className="row logo">
          <div className="col-md-6 ">
            <Link to="/" onClick={() => sessionStorage.clear()}>
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={register} alt="" className="img-fluid" />
              <h2 className="my-4">
                Its never to late to
                <br />
                start saving
              </h2>
              <p className="testimonial">
                The whole process was seamless and
                <br />
                very easy. Thats why i choosed ardilla
              </p>
              <div className="d-flex flex-row mb-3 mt-3">
                <img src={testimonial} alt="" className="img-fluid" />
                <p className="author ms-3 mt-3">- Olamilekan Akindele</p>
              </div>
              <img src={dot} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="">
                    <label className="form-label">
                      <i className="bi bi-envelope-fill me-2"></i> Email address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-login"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
                      Already have an account? <Link to="/login">Sign in</Link>
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

export default Register;
