import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

import footerlogo from "./../../image/logo.png";
import footerimg1 from "./../../image/insta-image1.jpg";
import footerimg2 from "./../../image/insta-image2.jpg";
import footerimg3 from "./../../image/insta-image3.jpg";
import footerimg4 from "./../../image/insta-image4.jpg";
import footerimg5 from "./../../image/insta-image5.jpg";
import footerimg6 from "./../../image/insta-image6.jpg";

import { Container, Row, Col, Nav, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                {/* Instagram Section */}
                <Row className="justify-content-center text-center mb-4">
                    <Col xs={12}>
                        <div className="instagram">
                            <a href="i" className="d-flex align-items-center justify-content-center">
                                <div className="insta-icon me-2">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </div>
                                <div className="insta-text">
                                    <p className="mb-0">instagram</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Instagram Images Section */}
                <Row className="justify-content-center g-5">
                    {[
                        footerimg1,
                        footerimg2,
                        footerimg3,
                        footerimg4,
                        footerimg5,
                        footerimg6
                    ].map((img, index) => (
                        <Col
                            xs={6}
                            sm={4}
                            md={2}
                            key={index}
                            className="d-flex justify-content-center mb-3">
                            <Image src={img} alt={`Instagram ${index + 1}`} width={150} rounded />
                        </Col>
                    ))}
                </Row>

                {/* Logo Section */}
                <Row className="text-center my-4">
                    <Col>
                        <Image src={footerlogo} alt="Logo" width={70} fluid />
                    </Col>
                </Row>

                {/* Navigation Links Section */}
                <Row className="justify-content-center">
                    <Nav className="justify-content-center flex-wrap">
                        <Nav.Item>
                            <Nav.Link href="m" className="nav-link text-dark">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="l" className="nav-link text-dark">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="k" className="nav-link text-dark">Shop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="k" className="nav-link text-dark">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>

                {/* Social Icons Section */}
                <Row className="justify-content-center my-4">
                    <ul className="d-flex list-unstyled social-icons justify-content-center flex-wrap">
                        <li className="m-2">
                            <a href="i" className="social-link facebook">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="i" className="social-link twitter">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="i" className="social-link basketball">
                                <FontAwesomeIcon icon={faBasketballBall} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="i" className="social-link instagram">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                            </a>
                        </li>
                    </ul>
                </Row>
            </Container>

            {/* Footer Bottom Section */}
            <div className="footer-bottom py-3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <span>
                                <a href="l">AncoraThemes </a>© 2024. All rights reserved.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
