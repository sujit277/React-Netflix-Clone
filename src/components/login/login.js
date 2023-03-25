import React from "react";
import "./login.css";
import Img1 from "../../images/Screenshot (616).png";

const Login = () => {
  return (
    <>
      <div className="row box3 justify-content-center">
        <div className="col-12">
          <img
            style={{ height: "55px", paddingLeft: "40px" }}
            src={Img1}
            alt="Please Reload the Page"
          ></img>
        </div>
        <div
          className="col-lg-5 col-md-8 col-sm-8"
          style={{
            backgroundColor: "#141414",
            textAlign: "center",
            paddingBottom: "50px",
            marginBottom: "100px",
          }}
        >
          <h2 className="mt-5" style={{ color: "white" }}>
            <strong>Sign In</strong>
          </h2>
          <br></br>
          <input
            type="text"
            className="form-control"
            placeholder="Email or Phone Number"
            style={{
              width: "60%",
              display: "inline-block",
              marginBottom: "10px",
            }}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            style={{ width: "60%", display: "inline-block" }}
          ></input>
          <button
            type="button"
            className="btn btn-lg btn-danger mt-4"
            style={{ width: "60%" }}
          >
            Sign In
          </button>
          <p style={{ color: "white", marginTop: "15px" }}>
            New to Netflix ?{" "}
            <a
              href="/signup"
              style={{ color: "white", textDecorationLine: "none" }}
            >
              Sign up Now
            </a>
          </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              style={{ marginLeft: "75px" }}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{ float: "left", marginLeft: "15px", color: "white" }}
            >
              Remember me
            </label>
          </div>
          <a href="/">
            <p
              style={{
                color: "white",
                float: "left",
                marginLeft: "100px",
                marginTop: "20px",
              }}
            >
              <i className="fa-brands fa-facebook-square"></i>
              <span style={{ paddingLeft: "10px" }}>Login with Facebook</span>
            </p>
          </a>
        </div>
      </div>

      <div
        className="row justify-content-center"
        style={{ backgroundColor: "#141414" }}
      >
        <h5 className="mt-5 mb-5 box2">Questions ? Call 000-800-040-1843</h5>
        <div className="col-md-2 col-sm-6 box1">
          <p style={{ color: "white" }}>FAQ</p>
          <p style={{ color: "white" }}>Cookie Preferences</p>
        </div>
        <div className="col-md-2 col-sm-6 box1">
          <p style={{ color: "white" }}>Help Centre</p>
          <p style={{ color: "white" }}>Corporate Information</p>
        </div>
        <div className="col-md-2 col-sm-6 box1">
          <p style={{ color: "white" }}>Terms of Use</p>
        </div>
        <div className="col-md-2 col-sm-6 box1">
          <p style={{ color: "white" }}>Privacy</p>
        </div>
      </div>
    </>
  );
};

export default Login;
