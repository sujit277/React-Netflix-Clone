import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../../images/Screenshot (616).png";
import Img3 from "../../images/Screenshot (618).png";
import Img4 from "../../images/Screenshot (619).png";
import Img5 from "../../images/Screenshot (620).png";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <div className="row box4 justify-content-center">
        <div className="col-12">
          <ul>
            <li style={{ display: "inline" }}>
              <img
                src={Img2}
                style={{ height: "50px", margin: "10px" }}
                alt="Please the Page"
              ></img>
            </li> 
            <li className="box5">
              <Link to="/">
                <button className="btn btn-danger" style={{ height: "55px" }}>
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-sm-10" style={{ marginBottom: "80px" }}>
          <h1 className="mt-5 box19">Unlimited Movies, TV shows and more.</h1>
          <h2 className="mt-4 box20">Watch anyWhere.Cancel anytime</h2>
          <h5
            className="mt-5 mb-4"
            style={{ color: "white", textAlign: "center" }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div className="col center">
            <input
              className="box21"
              type="text"
              placeholder="Email Address"
            ></input>
            <span>
              <button className="btn btn-danger box22">Get Started</button>
            </span>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{ height: "10px", backgroundColor: "grey" }}
      ></div>
      <div className="row " style={{ backgroundColor: "black" }}>
        <div
          className="col-md-5"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <img
            className="box16 img-fluid"
            src={Img3}
            alt="Please Reload the Page"
          ></img>
        </div>
        <div className="col-md-7" style={{ marginBottom: "50px" }}>
          <h1 className="box10">Download your shows to watch offline</h1>
          <h3 className="box11">
            Watch on TV,s PlayStation, XboX chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
      </div>

      <div
        className="row"
        style={{ height: "10px", backgroundColor: "grey" }}
      ></div>
      <div className="row" style={{ backgroundColor: "black" }}>
        <div className="col-md-6">
          <h1 className="box12">Watch Everywhere</h1>
          <h3 className="box13">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <img
            className="box17 img-fluid center"
            src={Img5}
            alt="Please Reload the Page"
          ></img>
        </div>
      </div>

      <div
        className="row"
        style={{ height: "10px", backgroundColor: "grey" }}
      ></div>
      <div className="row" style={{ backgroundColor: "black" }}>
        <div
          className="col-md-5"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <img
            className="box18 img-fluid"
            src={Img4}
            alt="Please Reload the Page"
          ></img>
        </div>
        <div className="col-md-7" style={{ marginBottom: "50px" }}>
          <h1 className="box14">Create Proflies for children</h1>
          <h3 className="box15">
            Send children on adventures with their favourite characters in a
            space made just for them free with your membership.
          </h3>
        </div>
      </div>

      <div
        className="row justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-7" style={{ marginBottom: "50px" }}>
          <h1
            style={{
              marginBottom: "30px",
              color: "white",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h1>

          <div className="accordion" id="accordionExample">
            <div
              className="accordion-item"
              style={{ backgroundColor: "#303030", color: "white" }}
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ backgroundColor: "#303030", color: "white" }}
                >
                  What is Netflix ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices. You can
                    watch as much as you want, whenever you want, without a
                    single ad – all for one low monthly price. There's always
                    something new to discover, and new TV shows and movies are
                    added every week!
                  </strong>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{ backgroundColor: "#303030", color: "white" }}
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ backgroundColor: "#303030", color: "white" }}
                >
                  How much does Netflix Cost ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₹ 149 to ₹ 649 a month. No extra costs, no
                    contracts.
                  </strong>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{ backgroundColor: "#303030", color: "white" }}
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ backgroundColor: "#303030", color: "white" }}
                >
                  Where can I Watch ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles. You can
                    also download your favourite shows with the iOS, Android, or
                    Windows 10 app. Use downloads to watch while you're on the
                    go and without an internet connection. Take Netflix with you
                    anywhere.
                  </strong>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{ backgroundColor: "#303030", color: "white" }}
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ backgroundColor: "#303030", color: "white" }}
                >
                  What I can watch on Netflix ?Name
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7" style={{ marginBottom: "50px" }}>
          <h5 className="mt-5 mb-4" style={{ color: "white" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div>
            <input
              className="box21"
              type="text"
              placeholder="Email Address"
            ></input>
            <span>
              <button className="btn btn-danger box22">Get Started</button>
            </span>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ height: "10px", backgroundColor: "grey" }}
      ></div>

      <div
        className="row justify-content-center"
        style={{ backgroundColor: "#141414" }}
      >
        <h5 className="mt-5 mb-5 box7">Questions ? Call 000-800-040-1843</h5>
        <div className="col-md-2 col-sm-6 box6">
          <p style={{ color: "white" }}>FAQ</p>
          <p style={{ color: "white" }}>Cookie Preferences</p>
        </div>
        <div className="col-md-2 col-sm-6 box6">
          <p style={{ color: "white" }}>Help Centre</p>
          <p style={{ color: "white" }}>Corporate Information</p>
        </div>
        <div className="col-md-2 col-sm-6 box6">
          <p style={{ color: "white" }}>Terms of Use</p>
        </div>
        <div className="col-md-2 col-sm-6 box6">
          <p style={{ color: "white" }}>Privacy</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
