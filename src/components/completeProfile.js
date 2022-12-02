import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import complete from "../img/profilecomplete.svg";
import axios from "axios";

function CompleteProfile() {
  const location = useLocation();

  const navigate = useNavigate();

  let apiKey = "e0a2d82b1adc8b0ca0969efcda0ab0e2fdbfd2338fdb1b9c5cea91fc";

  const [email, setEmail] = useState(location.state.user.email);
  const [kodeHex, setKodeHex] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [ip, setIp] = useState("");

  const { _id, verified } = location.state.user;

  useEffect(() => {
    if (verified === "otp") {
      return;
    } else {
      return navigate("/404");
    }
  }, [verified, navigate]);

  function getIP(url) {
    return fetch(url).then((res) => res.json());
  }

  getIP(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
    setIp(data.ip);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/auth/complete-profile/${_id}`,
        { email, firstname, lastname, contact, password, kodeHex, ip }
      );

      if (data.success === true) {
        setErr(false);
        setMsg(data.msg);
        setOnSuccess(true);
        setIsLoading(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setMsg(`${error.response.data.msg || "Network error"} `);
      setErr(true);
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
      navigate("/security-question", { state: { user } });
    };

    getUserById();
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
            <Link to="/otp">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="left text-left">
              <img src={complete} alt="" className="img-fluid" />
              <h2 className="my-4">
                Complete your <br />
                profile
              </h2>
              <p className="code mb-5">Fill in the Required details</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="right">
              <div className="login-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-code-slash me-2"></i> Kode Hex
                    </label>
                    <input
                      type="text"
                      className="form-control custom-login"
                      required
                      value={kodeHex}
                      onChange={(e) => setKodeHex(e.target.value.toLowerCase())}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-person-fill me-2"></i> First Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-login"
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <div id="" class="form-text">
                      Kindly use valid information
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-person-fill me-2"></i> Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-login"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <div id="" class="form-text">
                      Kindly use valid information
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-phone-fill me-2"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control custom-login"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <div id="" class="form-text">
                      Kindly use valid information
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-envelope-fill me-2"></i> Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-login"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> Password
                    </label>
                    <input
                      type="password"
                      className="form-control custom-login"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-check-label remember">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        required
                        value={agree}
                        onChange={() => setAgree(!agree)}
                      />{" "}
                      I agree to our Terms and Conditions and Privacy Policy.
                    </label>
                  </div>
                  {agree ? (
                    isLoading ? (
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                          style={{ width: "100%" }}
                        >
                          Loading
                        </button>
                      </div>
                    ) : (
                      <div className="my-3">
                        <button
                          type="submit"
                          className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                          style={{ width: "100%" }}
                        >
                          Continue
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="my-3">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn disabled"
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

export default CompleteProfile;
