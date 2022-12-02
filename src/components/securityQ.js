import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../img/logo.svg";
import home from "../img/home-login.svg";
import axios from "axios";

function SecurityPage() {
  const location = useLocation();

  let securityQusetion;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  const { _id, verified } = location.state.user;

  useEffect(() => {
    if (verified === "cp") {
      return;
    } else {
      return navigate("/404");
    }
  }, [verified, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    securityQusetion = {
      question,
      answer,
    };

    try {
      const { data } = await axios.put(
        `https://ardilla.herokuapp.com/ardilla/api/auth/security-question/${_id}`,
        { securityQusetion }
      );

      if (data.success === true) {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        setErr(false);
        setMsg(data.msg);
        setOnSuccess(true);
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);

      setErr(true);
      setMsg(`${error.response.data.msg || "Network error"} `);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/verify-mobile");
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
                Choose a security question &<br /> fill in your answer
              </p>
            </div>
          </div>
          <div className="col-md-5 aggregate">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <select
                    className="form-select mb-3 custom-form"
                    aria-label="Default select example"
                    required
                    onChange={(e) => setQuestion(e.target.value)}
                  >
                    <option value="">Select security question</option>
                    {/* <option defaultValue>Open this select menu</option> */}
                    <option value="What is the name of your favorite pet?">
                      What is the name of your favorite pet?
                    </option>
                    <option value=" What is your mother's maiden name?">
                      What is your mother's maiden name?
                    </option>
                    <option value="Where did you meet your spouse?">
                      Where did you meet your spouse?
                    </option>
                    <option value="What is your first crush name?">
                      What is your first crush name?
                    </option>
                  </select>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control custom-form"
                      placeholder="Your Answer"
                      required
                      value={answer}
                      onChange={(e) =>
                        setAnswer(e.target.value.trim().toLowerCase())
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

export default SecurityPage;
