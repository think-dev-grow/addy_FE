import React, { useState } from "react";
import pin from "../img/pin.svg";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePin() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  let user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      setLoading(true);

      if (code.length < 4) {
        console.log();
        setOnSuccess(false);
        setMsg(`incomplete pin`);
        setLoading(false);
        setErr(true);
        return;
      }

      if (code.length > 4) {
        setOnSuccess(false);
        setMsg(`Your pin must be four digit`);
        setLoading(false);
        setErr(true);
        return;
      }

      const { data } = await axios.post(
        `https://ardilla.herokuapp.com/ardilla/api/auth//set-transaction-pin/${user._id}`,
        { code, confirmCode }
      );

      setMsg(data.msg);
      setErr(false);
      setOnSuccess(true);
      setLoading(false);
    } catch (error) {
      setOnSuccess(false);
      setMsg(`${error.response.data.msg} `);
      setLoading(false);
      setErr(true);
    }
  };

  const handleClickSuccess = () => {
    setOnSuccess(false);
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest();
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
            <img src={pin} alt="" className="img-fluid" />
            <h3 className="my-4">Create a 4-digit Pin</h3>
            <h6>This will be used for all your transactions</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form className="my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-form"
                    placeholder="Create Pin"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-form"
                    placeholder="Confirm Pin"
                    required
                    value={confirmCode}
                    onChange={(e) => setConfirmCode(e.target.value)}
                  />
                </div>
                {loading ? (
                  <div className="mt-5 mb-3">
                    <button
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      style={{ width: "100%" }}
                    >
                      Loading
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 mb-3">
                    <button
                      className="btn btn-outline-primary px-5 py-3 ardilla-btn fs-6"
                      style={{ width: "100%" }}
                    >
                      Ok
                    </button>
                  </div>
                )}

                <div className="logout text-center">
                  <Link className="log-out">
                    <i className="bi bi-power me-2"></i> Log Out
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePin;
