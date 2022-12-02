import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../img/verify-icon.svg";
import logo from "../img/logo.svg";
import { auth } from "../firbase-config";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function VerifyPhone() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  console.log(user);

  const navigate = useNavigate();

  const [phoneNumber] = useState(`+234${user.contact}`);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
          },
        },
        auth
      );
    };

    const mobileAuth = () => {
      generateRecaptcha();

      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error);
          setLoading(false);
          setMsg("SMS not send");
          setErr(true);
        });
    };
    mobileAuth();
  }, [phoneNumber]);

  const fullOTP = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;

  const verifyMobileCode = (e) => {
    setLoading(true);
    e.preventDefault();
    if (fullOTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(fullOTP)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          setMsg("verifcation successful");
          setErr(false);
          setOnSuccess(true);
          setLoading(false);

          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          setLoading(false);
          setMsg("Wrong code");
          setErr(true);
        });
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/set-pin");
  };
  return (
    <section className="verify-section">
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
          <div className="col-md-6 ">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <img src={icon} alt="" className="img-fluid" />
            <h3 className="my-2">Verify Phone Number</h3>
            <h6>
              Enter the OTP Verification code sent to {user.contact} <br />
              <Link
                style={{ color: "#E6356D" }}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
              >
                Wrong Number?
              </Link>
            </h6>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                          <img src={icon} alt="" className="img-fluid" />
                          <h3 className="my-2">Enter Phone Number</h3>
                          <h6>Enter a valid telephone number</h6>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-4">
                          <form className="my-4">
                            <div className="mb-3">
                              <input
                                type="tel"
                                className="form-control custom-form"
                                placeholder="Enter Phone Number"
                              />
                            </div>
                            <div className="mt-5 mb-3">
                              <button
                                className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                                style={{ width: "100%" }}
                              >
                                Continue
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="my-5" id="otp" onSubmit={verifyMobileCode}>
              <div className="d-flex flex-row">
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-1"
                    id="digit-1"
                    value={otp1}
                    onChange={(e) => setOtp1(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-2"
                    id="digit-2"
                    value={otp2}
                    onChange={(e) => setOtp2(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-3"
                    id="digit-3"
                    value={otp3}
                    onChange={(e) => setOtp3(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-4"
                    id="digit-4"
                    value={otp4}
                    onChange={(e) => setOtp4(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-5"
                    id="digit-5"
                    value={otp5}
                    onChange={(e) => setOtp5(e.target.value)}
                  />
                </div>
                <div className="me-2">
                  <input
                    type="text"
                    className="form-control rounded verify-otp"
                    maxLength="1"
                    name="digit-6"
                    id="digit-6"
                    value={otp6}
                    onChange={(e) => setOtp6(e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  {loading ? (
                    <div className="mt-5 mb-3">
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                        type="button"
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="mt-5 mb-3">
                      <button
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                        style={{ width: "100%" }}
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  <p>
                    Didn’t get code?{" "}
                    <span style={{ color: "#E6356D" }}>Resend</span>
                  </p>
                  <div className="logout">
                    <Link className="log-out">
                      <i className="bi bi-power me-2"></i> Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyPhone;
