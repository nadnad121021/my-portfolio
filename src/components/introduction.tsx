import React from "react";

const Introduction: React.FC = () => {
  return (
    <section
      className="hero d-flex flex-column justify-content-center align-items-center"
      id="intro"
    >
      <div className="container">
        <div className="row">
          <div className="mx-auto col-lg-5 col-md-5 col-10">
            <img
              src={require("../assets/dan3-white-bg.png")}
              className="img-fluid"
              alt="Dan's Portfolio"
            />
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
            <div className="hero-text">
              <h1 className="hero-title">Dan, a Software Engineer</h1>
              {/* <a href="#" className="email-link">
                alingasadan@gmail.com
              </a> */}
            </div>
            <span className="faq-info-text">
              <p>❝ It takes thousands of inputs to achieve good output. ❞</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
