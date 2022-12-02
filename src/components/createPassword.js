import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../img/logo.svg";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === confirmPassword) {
      try {
        const { data } = await axios.put(
          `https://ardilla-be-app.herokuapp.com/ardilla/api/auth/user/reset-password/${id}`,
          {
            password,
          }
        );

        if (data.success === true) {
          setMsg(data.msg);
          setOnSuccess(true);
          setLoading(false);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setMsg(`${error.response.data.msg || "Network error"} `);
        setErr(true);
        setLoading(false);
      }
    } else {
      setMsg(`Passwords don't match`);
      setErr(true);
      setLoading(false);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/login");
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
            <Link to="/">
              <img src={logo} alt="" className="img-fluid mb-5" />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="right">
              <div className="login-form">
                <div className="text-center mb-5">
                  <h2 className="fs-1">Create New Password</h2>
                </div>
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> New
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      className="form-control custom-login"
                      id="pass_log_id"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field_icon toggle-password"
                    ></span>
                  </div>
                  <div className="">
                    <label className="form-label">
                      <i className="bi bi-shield-lock-fill me-2"></i> Confirm
                      New Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      className="form-control custom-login"
                      id="pass"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field_icon toggle-pass"
                    ></span>
                  </div>
                  {loading ? (
                    <div className="mt-5">
                      <button
                        type="button"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="btn btn-outline-primary px-5 py-3 ardilla-btn"
                        style={{ width: "100%" }}
                      >
                        Done
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

export default CreatePassword;
