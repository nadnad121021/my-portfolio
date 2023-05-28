import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact section-padding pt-10" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <form action="#" method="get" className="contact-form webform">
              <div className="form-group d-flex flex-column-reverse">
                <input
                  type="text"
                  className="form-control"
                  name="cf-name"
                  id="cf-name"
                  placeholder="Your Name"
                />

                <label htmlFor="cf-name" className="webform-label">
                  Full Name
                </label>
              </div>

              <div className="form-group d-flex flex-column-reverse">
                <input
                  type="email"
                  className="form-control"
                  name="cf-email"
                  id="cf-email"
                  placeholder="Your Email"
                />

                <label htmlFor="cf-email" className="webform-label">
                  Your Email
                </label>
              </div>

              <div className="form-group d-flex flex-column-reverse">
                <textarea
                  className="form-control"
                  rows={5}
                  name="cf-message"
                  id="cf-message"
                  placeholder="Your Message"
                ></textarea>

                <label htmlFor="cf-message" className="webform-label">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="form-control"
                id="submit-button"
                name="submit"
              >
                Send
              </button>
            </form>
          </div>

          <div className="mx-auto col-lg-4 col-md-6 col-12">
            <h3 className="my-4 pt-4 pt-lg-0">Keep in Touch</h3>
            <p className="mb-1">
              {/* eslint-disable-next-line */}
              <a href="javascript:void(0)" className="fas fa-phone"></a>
              {" +639365192469"}
            </p>
            <p className="mb-1">
              {/* eslint-disable-next-line */}
              <a href="javascript:void(0)" className="fas fa-envelope"></a>
              {"  alingasadan@gmail.com"}
            </p>

            <p className="mb-1">
              {/* eslint-disable-next-line */}
              <a
                href="https://www.facebook.com/danilo.alingasa.7"
                target="_blank"
                className="fab fa-facebook"
              ></a>
              {" Danilo Alingasa"}
            </p>
            <p className="mb-1">
              {/* eslint-disable-next-line */}
              <a href="javascript:void(0)" className="fab fa-skype"></a>
              {"  live:.cid.a08eee29df0e2c17"}
            </p>
            <p className="mb-1">
              {/* eslint-disable-next-line */}
              <a
                href="https://www.linkedin.com/in/danilo-alingasa-a727241a2/"
                target="_blank"
                className="fab fa-linkedin"
              ></a>
              {"  Danilo Alingasa"}
            </p>

            <p className="copyright-text mt-5 pt-3">
              Copyright &copy; 2023 Dan Page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
