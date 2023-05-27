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
                      src={require("../assets/testimonial-image01.jpg")}
                      className="img-fluid"
                      alt="testimonials image"
                    />
                  </div>

                  <div className="testimonials-info">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>

                    <h6 className="mb-0">Ben</h6>
                    <span>Art Director</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonial-image02.jpg")}
                      className="img-fluid"
                      alt="testimonials image"
                    />
                  </div>

                  <div className="testimonials-info">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>

                    <h6 className="mb-0">Marie</h6>
                    <span>Marketing Consultant</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonial-image03.jpg")}
                      className="img-fluid"
                      alt="testimonials image"
                    />
                  </div>

                  <div className="testimonials-info">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>

                    <h6 className="mb-0">Jen</h6>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimonials-thumb d-flex">
                  <div className="testimonials-image">
                    <img
                      src={require("../assets/testimonial-image04.jpg")}
                      className="img-fluid"
                      alt="testimonials image"
                    />
                  </div>

                  <div className="testimonials-info">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>

                    <h6 className="mb-0">Wilson</h6>
                    <span>Web Developer</span>
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
