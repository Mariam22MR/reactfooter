/*import React from "react"; 
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer2 from "../Footer2/Footer2";

const Contact = ()=>{
    return(
        <>
            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="side">
                                <h6>Contact Us</h6>
                                <h1>Have questions?</h1>
                                <h1>Get in touch!</h1>
                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                <li><FontAwesomeIcon icon={faMap}/>785 15h Street, Office 478 Berlin</li>
                                <li><FontAwesomeIcon icon={faMap}/>+1 800 555 25 69</li>
                                <li><FontAwesomeIcon icon={faEnvelope}/>info@email.com</li>


                            </div>

                        </div>


                        <div  className="col-lg-6 col-md-6">
                            <form>
                                <div className="form-control">
                                    <div className="li-ri">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMap}/>
                                        </div>

                                        <div className="inpu">
                                                <input placeholder="Name"/>
                                                <hr/>
                                        </div>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMap}/>
                                        </div>

                                        <div className="inpu">
                                                <input placeholder="Email Adress"/>
                                                <hr/>
                                        </div>
                                    </div>

                                    <div className="li-ri">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMap}/>
                                        </div>

                                        <div className="inpu">
                                                <input placeholder="Phone"/>
                                                <hr/>
                                        </div>

                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMap}/>
                                        </div>

                                        <div className="inpu">
                                                <input placeholder="Subject"/>
                                                <hr/>
                                        </div>

                                    </div>

                                </div>

                                <div className="form-control">
                                    <div className="li-ri">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMap}/>
                                        </div>

                                        <div className="inpu">
                                            <input placeholder="How can we help you?"/>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                                <button>git in touch</button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            <Footer2 />
        </>
    )
}

export default Contact;







/*import React from "react"; 
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer2 from "../Footer2/Footer2";

const Contact = () => {
  return (
    <>
      <section className="contact-us bg-light py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 mb-4">
              <div className="side">
                <h6 className="text-primary">Contact Us</h6>
                <h1 className="fw-bold">Have questions?</h1>
                <h1 className="fw-bold">Get in touch!</h1>
                <p className="text-muted">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faMap} className="me-2 text-primary" />
                    785 15h Street, Office 478 Berlin
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faMap} className="me-2 text-primary" />
                    +1 800 555 25 69
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                    info@email.com
                  </li>
                </ul>
              </div>
            </div>

            {/* العمود الثاني: النموذج *
            <div className="col-lg-6">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </>
  );
};

export default Contact;*/











import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer2 from "../Footer2/Footer2";


const Contact = () => {
  return (
          <>
          <section className="contact-us py-5">
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
                                          <input type="text" className="form-control" id="name" placeholder="Name" />
                                          <label htmlFor="name">
                                              <FontAwesomeIcon icon={faPen} className="me-2" /> Name
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                      <div className="form-floating">
                                          <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                          <label htmlFor="email">
                                              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email Address
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                      <div className="form-floating">
                                          <input type="text" className="form-control" id="phone" placeholder="Phone" />
                                          <label htmlFor="phone">
                                              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Phone
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                      <div className="form-floating">
                                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
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





