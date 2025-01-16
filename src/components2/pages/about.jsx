import React from "react";
import ContactUs from "../contact/ContactUs";
import { Container, Row, Col } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar"
import img1 from "../assets/images/about-image1.jpg"


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";





const AboutUs = () => {
    return (
        <>
        <Navbar />
        <AboutHeader />
            <Container className="my-5">
                <Row className="mt-6">
                    <Col md={6} className="d-flex justify-content-center">
                    <img
                        src={img1}
                        alt="Child"
                        className="img-fluid rounded"
                        style={{ width: "100%", maxWidth: "600px", height: "600px", borderRadius: "10px" }}
                    />
                    </Col>

                    <Col
                    md={6}
                    className="d-flex justify-content-center"
                    style={{ background: "#F8F4EC", borderRadius: "10px" }}
                    >
                        <div>
                            <h5 style={{ color: "#2c2c55", fontWeight: "bold", marginBottom: "15px"}}>Toys and clothing</h5>
                            <h1 style={{ color: "#2c2c54", fontWeight: "bold", marginBottom: "30px", lineHeight: "1.4" }}>
                                Your children deserve the best
                            </h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis.</p>
                            <p>Sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam. Sed ut perspiciatis unde omnis iste.</p>

                        </div>
                    </Col>
                </Row>
            </Container>

            <div>
                <img src={img1} className="d-block w-100" alt="..."/>
            </div>
        
        <ContactUs />


<Container>
<div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
  data-bs-interval="false"
  style={{
    maxWidth: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // جعل الكاروسيل يغطي الشاشة بالكامل
  }}
>
  <div className="carousel-inner">
    <div
      className="carousel-item active"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // ملء ارتفاع الصفحة
      }}
    >
      <img
        src={img1}
        className="d-block"
        alt="First Slide"
        style={{ width: "20%", height: "20%", borderRadius: "50px" }}
      />
      <h1>kkkkkkkkkkkkkkkkkkk</h1>
    </div>
    <div
      className="carousel-item"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // ملء ارتفاع الصفحة
      }}
    >
      <img
        src={img1}
        className="d-block"
        alt="Second Slide"
        style={{ width: "20%", height: "20%", borderRadius: "50px" }}
      />
      <h1>Second Slide</h1>
    </div>
    <div
      className="carousel-item"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // ملء ارتفاع الصفحة
      }}
    >
      <img
        src={img1}
        className="d-block"
        alt="Third Slide"
        style={{ width: "20%", height: "20%", borderRadius: "50px" }}
      />
      <h1>jjooooyyyyyyy</h1>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</Container>
        
        
        </>

    );
};


export default AboutUs;
