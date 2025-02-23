import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../Footers/Footer2";


const Contact = () => {
    return (
        <>
            <section className="contact-us py-5">
                <div className="mb-5"
                style={{
                backgroundColor: "#f8f4ec",
                backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(0, 0, 0, 0.02) 20px,
                rgba(0, 0, 0, 0.02) 40px
                )`,
                textAlign: "center",
                padding: "50px 0",
                }}
                >
                    <h1 style={{ fontWeight: "bold", color: "#2c2c54" }}>Contact Us</h1>
                    <p style={{ color: "#2c2c54", fontSize: "14px" }}>
                    HOME - CONTACT US
                    </p>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                      {/* Left Column */}
                        <div className="col-lg-6 mb-4">
                            <h6 className="text-primary text-dark">Contact Us</h6>
                            <h1 className="fw-bold">Have questions?</h1>
                            <h1 className="fw-bold">Get in touch!</h1>
                            <p className="text-muted">
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2 text-dark" />
                                    905 15h Street, Office 478 Jeddah
                                </li>
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2 text-dark" />
                                    <strong>+1 800 555 25 69</strong>
                                </li>
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2 text-dark" />
                                    mcs@email.com
                                </li>
                            </ul>
                        </div>

                      {/* Right Column */}
                        <div className="col-lg-6">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Name" 
                                            onFocus={(e) =>
                                            (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                                            }
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                            />
                                            <label htmlFor="name">
                                                <FontAwesomeIcon icon={faPen} className="me-2" /> Name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Email Address" 
                                            onFocus={(e) =>
                                            (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                                            }
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                            />
                                            <label htmlFor="email">
                                                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email Address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="phone" placeholder="Phone"
                                            onFocus={(e) =>
                                            (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                                            }
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                            />
                                            <label htmlFor="phone">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Phone
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" 
                                            onFocus={(e) =>
                                            (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                                            }
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                            />
                                            <label htmlFor="subject">
                                                <FontAwesomeIcon icon={faPen} className="me-2" /> Subject
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                placeholder="How can we help you?"
                                                style={{ height: "100px" }}
                                                onFocus={(e) =>
                                                (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                                                }
                                                onBlur={(e) => (e.target.style.boxShadow = "none")}
                                            ></textarea>
                                            <label htmlFor="message">
                                                <FontAwesomeIcon icon={faPen} className="me-2" /> How can we help you?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-warning me-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Get In Touch
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer2 />
        </>
    );
};


export default Contact;
