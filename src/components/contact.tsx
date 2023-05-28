import axios from "axios";
import React, { useEffect, useState } from "react";
import ".././App.css";

interface IFormField {
  error: boolean;
  message: string;
  value: string;
  required: boolean;
}
interface IFormData {
  email: IFormField;
  name: IFormField;
  message: IFormField;
}
type TFormDataKeys = "email" | "name" | "message";

const initialState: IFormData = {
  email: {
    error: false,
    message: "",
    value: "",
    required: true,
  },
  name: {
    error: false,
    message: "",
    value: "",
    required: true,
  },
  message: {
    error: false,
    message: "",
    value: "",
    required: true,
  },
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    ...initialState,
  });
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: {
        ...formData[name as TFormDataKeys],
        value,
        error: false,
      },
    });
  };

  const sendMessageHandler = async () => {
    const validated = validateInputs();
    if (validated) {
      const bodyFormData = new FormData();
      bodyFormData.append("email", formData.email.value);
      bodyFormData.append("name", formData.name.value);
      bodyFormData.append("message", formData.message.value);
      setLoading(true);
      const result = await axios({
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbynkid3elEY4erhUFKFqOl9LIu6O0cqVX_SmTTP3AL9nFiKfD0z8zLcQgOmxdhybg85/exec",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (result.data.result === "success") {
        setBanner({
          show: true,
          type: "success",
          message: "Your message successfully sent.",
        });
      } else {
        setBanner({
          show: true,
          type: "error",
          message:
            "Apologies, but an error occurred preventing the delivery of your message. Please feel free to send an email directly to alingasadan@gmail.com instead. Thank you.",
        });
      }
      setFormData({ ...initialState });
      setLoading(false);
    }
  };

  const validateInputs = (): boolean => {
    let errors: string[] = [];
    const newState = Object.keys(formData).reduce((acc, curr, index) => {
      const currentField = formData[curr as TFormDataKeys];
      if (currentField.required && !currentField.value) {
        errors = [...errors, curr];
        return {
          ...acc,
          [curr]: {
            ...currentField,
            error: true,
            message: `Your ${curr} is required`,
          },
        };
      }
      return {
        ...acc,
        [curr]: { ...currentField },
      };
    }, {});
    setFormData(newState as IFormData);
    if (errors.length) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (banner.show) {
      setTimeout(() => {
        setBanner({ ...banner, show: false });
      }, 6000);
    }
    // eslint-disable-next-line
  }, [banner.show]);

  return (
    <section className="contact section-padding pt-10" id="contact">
      <div className="container">
        {banner.show ? (
          <div className={`alert-${banner.type}`}>
            <span
              className="alert-closebtn"
              onClick={() => {
                setBanner({
                  ...banner,
                  show: false,
                });
              }}
            >
              &times;
            </span>
            {banner.message}
          </div>
        ) : null}

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-form webform">
              <div className="form-group d-flex flex-column-reverse">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name_input"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={formData.name.value}
                  required
                />

                <label htmlFor="name_input" className="webform-label">
                  Full Name *
                </label>
              </div>
              {formData.name.error ? (
                <span className="validation-text">
                  {" "}
                  {formData.name.message}
                </span>
              ) : null}

              <div className="form-group d-flex flex-column-reverse">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email_input"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={formData.email.value}
                />

                <label htmlFor="email_input" className="webform-label">
                  Your Email *
                </label>
              </div>
              {formData.email.error ? (
                <span className="validation-text">
                  {" "}
                  {formData.email.message}
                </span>
              ) : null}

              <div className="form-group d-flex flex-column-reverse">
                <textarea
                  className="form-control"
                  rows={5}
                  name="message"
                  id="message_input"
                  placeholder="Your Message"
                  onChange={handleChange}
                  value={formData.message.value}
                ></textarea>

                <label htmlFor="message_input" className="webform-label">
                  Message *
                </label>
              </div>
              {formData.message.error ? (
                <span className="validation-text">
                  {formData.message.message}
                </span>
              ) : null}

              <button
                className="form-control"
                id="submit-button"
                onClick={sendMessageHandler}
                disabled={loading}
              >
                Send
              </button>
            </div>
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
