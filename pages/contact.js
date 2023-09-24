import React, { useState } from "react";
import Link from "next/link";
import axiosApi from "@/axios-instance";

const Contact = () => {
  const [formvalue, setformvalue] = useState({});
  const [formerror, setformerror] = useState({});
  const [submit, setsubmit] = useState(false);
  const errors = {};
  const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]/i;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
    // setformerror(validate1(formvalue));
    if (name == "email") {
      if (!email.test(formvalue.email)) {
        setformerror({
          ...formerror,
          [name]: "Please enter a valid email address.",
        });
      } else {
        setformerror({ ...formerror, [name]: "" });
      }
    } else {
      setformerror({ ...formerror, [name]: "" });
    }
  };

  const validate = (values) => {
    if (!values.name) {
      errors.name = "This field is required.";
    }
    if (!values.message) {
      errors.message = "This field is required.";
    }
    if (!values.email) {
      errors.email = "This field is required.";
    } else if (!email.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    } else {
      setsubmit(true);
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setformerror(validate(formvalue));
    if (formvalue.name && formvalue.email && formvalue.message) {
      axiosApi
        .post("/contectus", formvalue)
        .then((res) => {
          setformvalue({});
          console.log("res", res.data);
        })
        .catch((err) => console.log("err", err));
    }
  };
  return (
    <div>
      <title>Contact - Love Nature</title>
      <section id="contact-wrapper" className="contact">
        <div className="contact-background-overlay"></div>
      </section>
      <section className="contact-wrapper" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 d-flex pr-0 contact-section-1">
              <div className="contact-info">
                <div className="contact-title">
                  <h4>You can find us at</h4>
                </div>
                <div className="contact-icon-box">
                  <div className="contact-email d-block">
                    <h6>EMAIL</h6>
                    <p className="email-description">
                      <Link href="#">bhanderiinternational1@gmail.com</Link>
                    </p>
                  </div>
                </div>
                <div className="contact-icon-box">
                  <div className="contact-phone d-block">
                    <h6>PHONE NUMBER</h6>
                    <p className="phone-description">
                      <Link href="#">+91 90160 27248</Link>
                    </p>
                  </div>
                </div>
                <div className="contact-icon-box">
                  <div className="contact-location d-block">
                    <h6>LOCATION</h6>
                    <p className="location-description">
                      27/2 Sardar Estate,Phase-2 Dared GIDC Jamnager,Gujarat,
                      Inadia Pin code 361006
                    </p>
                  </div>
                </div>
                <div className="contact-social-link d-flex">
                  <div className="icon icon-twitter">
                    <Link href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                  <div className="icon icon-instrgram">
                    <Link href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="icon icon-youtube">
                    <Link href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 contact-section-2">
              <div className="contact-info1">
                <div className="contact-title">
                  <h4>Let&apos;s get in touch</h4>
                </div>
                <div className="contact-form">
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="form-field">
                      <input
                        className={
                          formerror.name
                            ? "form-control form-error"
                            : "form-control"
                        }
                        // className="form-control"
                        type="name"
                        name="name"
                        placeholder="Your Name"
                        value={formvalue.name || ""}
                        onChange={handleChange}
                        required
                      ></input>
                      {formerror.name && (
                        <div className="error">{formerror.name}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <input
                        className={
                          formerror.email
                            ? "form-control form-error"
                            : "form-control"
                        }
                        // className="form-control"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formvalue.email || ""}
                        onChange={handleChange}
                        required
                      ></input>
                      {formerror.email && (
                        <div className="error">{formerror.email}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <textarea
                        rows="5"
                        className={
                          formerror.message
                            ? "form-control form-error"
                            : "form-control"
                        }
                        // className="form-control"
                        name="message"
                        placeholder="Your Message"
                        value={formvalue.message || ""}
                        onChange={handleChange}
                        required
                      ></textarea>
                      {formerror.message && (
                        <div className="error">{formerror.message}</div>
                      )}
                    </div>

                    <button
                      className="btn btn-submit"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
