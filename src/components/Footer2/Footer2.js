/*import React from "react";
import "./Footer2.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Footer2 = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                <h1>We provide the best products for kids</h1>
                    <div className="col-md-3 col-sm-6">
                        <h4>Address</h4>
                        <p>Germany —
                        785 15h Street, Office 478
                        Berlin, De 81566</p>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Say hello</h4>
                        <p>info@email.com</p>
                        <p>+1 840 841 25 69</p>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Socials</h4>
                        <ul>
                            <li><a href="i">Facebook</a></li>
                            <li><a href="i">Twitter</a></li>
                            <li><a href="i">Dribble</a></li>
                            <li><a href="i">Instagram</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Newsletter</h4>
                        <div className="massege">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            
                            <div className="inpu">
                                <input placeholder="How can we help you?"/>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}


export default Footer2;*/








/*import React from "react";
import "./Footer2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer2 = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* العنوان *}
          <div className="col-12 mb-4">
            <h1 className="fw-bold">We provide the best products for kids</h1>
          </div>

          {/* العمود الأول: Address *}
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold">Address</h4>
            <p>
              Germany —<br />
              785 15h Street, Office 478<br />
              Berlin, De 81566
            </p>
          </div>

          {/* العمود الثاني: Say hello *}
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold">Say hello</h4>
            <p>info@email.com</p>
            <p>+1 840 841 25 69</p>
          </div>

          {/* العمود الالث: Socials *
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold">Socials</h4>
            <ul className="list-unstyled">
              <li><a href="i" className="text-decoration-none text-dark">Facebook</a></li>
              <li><a href="i" className="text-decoration-none text-dark">Twitter</a></li>
              <li><a href="i" className="text-decoration-none text-dark">Dribble</a></li>
              <li><a href="i" className="text-decoration-none text-dark">Instagram</a></li>
            </ul>
          </div>

          {/* العمود الرابع: Newsletter *
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold">Newsletter</h4>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </div>
              <div className="w-100">
                <input
                  className="form-control"
                  placeholder="How can we help you?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;*/





import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Main Title */}
          <div className="col-lg-12 text-center mb-4">
            <h2 className="fw-bold">We provide the best products for kids</h2>
          </div>
        </div>

        <div className="row">
          {/* Address Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Address</h5>
            <p className="mb-1">KSA —</p>
            <p className="mb-1">905 15h Street, Office 478</p>
            <p className="mb-1">Jeddah, De 81566</p>
          </div>

          {/* Say Hello Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Say hello</h5>
            <p className="mb-1">mact@email.com</p>
            <h5 className="mb-1">+1 840 841 25 69</h5>
          </div>

          {/* Socials Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Socials</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="i" className="text-white text-decoration-none">Facebook</a></li>
              <li className="mb-2"><a href="i" className="text-white text-decoration-none">Twitter</a></li>
              <li className="mb-2"><a href="i" className="text-white text-decoration-none">Dribble</a></li>
              <li className="mb-2"><a href="i" className="text-white text-decoration-none">Instagram</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <form>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-light text-dark">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <input type="checkbox" id="privacyPolicy" />
                <label htmlFor="privacyPolicy" className="ms-1">
                  I agree to the <a href="i" className="text-decoration-none">Privacy Policy</a>.
                </label>
              </div>
            </form>
          </div>
        </div>



        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <span>
              <a href="l" className="text-white text-decoration-none">AncoraThemes </a>© 2024. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
