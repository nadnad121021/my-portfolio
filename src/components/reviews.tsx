import React from "react";

// TODO -
const Reviews: React.FC = () => {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5 text-center">What People say</h3>
            <div className="owl-carousel owl-theme" id="testimonials-carousel">
              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonials/testimonial01.png")}
                      className="img-fluid"
                      alt="testimonials"
                    />
                  </div>
                  <div className="testimonials-info">
                    <p>
                      I have developed a deep admiration for Danilo's
                      exceptional technical skills over our nearly one year of
                      collaboration, which are only surpassed by his remarkable
                      patience and professional attitude toward his coworkers.
                    </p>
                    <h6 className="mb-0">Jane</h6>
                    <span>Software Engineer</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonials/testimonial02.png")}
                      className="img-fluid"
                      alt="testimonials"
                    />
                  </div>
                  <div className="testimonials-info">
                    <p>
                      Dan and I have collaborated for over a year on Backend and
                      database tasks. Working with Dan is enjoyable due to his
                      excellent programming skills, adaptability, timely
                      delivery, and open communication. His clear diagrams and
                      simple yet effective code make collaboration smooth and
                      productive.
                    </p>
                    <h6 className="mb-0">Cris Laurence</h6>
                    <span>Software Engineer</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonials/default.jpg")}
                      className="img-fluid"
                      alt="testimonials"
                    />
                  </div>
                  <div className="testimonials-info">
                    <p>Upcoming Testimony</p>

                    <h6 className="mb-0">Name</h6>
                    <span>Job Title</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonials/default.jpg")}
                      className="img-fluid"
                      alt="testimonials"
                    />
                  </div>
                  <div className="testimonials-info">
                    <p>Upcoming Testimony</p>
                    <h6 className="mb-0">Name</h6>
                    <span>Job Title</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
