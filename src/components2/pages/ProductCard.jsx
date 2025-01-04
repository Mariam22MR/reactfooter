import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css';
import insta2 from "./../../image/product-image5-copyright-1024x1024.jpg";
import insta1 from "./../../image/product-image7.jpg"
import insta3 from "./../../image/product-image2-copyright-1024x1024.jpg";
import visa1 from "./../../image/p_s_1-copyright (1).png";
import visa2 from "./../../image/p_s_2-copyright.png";
import visa3 from "./../../image/p_s_3-copyright.png";
import visa4 from "./../../image/p_s_4-copyright.png";
import prod1 from "./../../image/product-image29.jpg"
import prod2 from "./../../image/product-image31.jpg"
import prod3 from "./../../image/product-image16.jpg"
import foto from "./../../image/foto.png"


const ProductCard = () => {
  // تعريف الحالات في المستوى العلوي
  const [selectedSize, setSelectedSize] = useState("2-4 year");
  const [price, setPrice] = useState(35);
  const [quantity, setQuantity] = useState(1);


  // تغيير السعر بناء على الحجم
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    if (size === "1-2 year") {
      setPrice(30);
    } else if (size === "2-4 year") {
      setPrice(35);
    } else if (size === "4-8 year") {
      setPrice(40);
    }

  };

  return (
    <>
      <div className="mt-5" style={{ backgroundColor: "#F8F4EC" }}>
        <div className="container">
        <div className="row">
          {/* left-column - product img*/}
          <div className="col-md-6 mt-5">
            <div>
              <img
                src={insta1}
                alt="Product"
                className="img-fluid rounded mb-3"
                style={{ width: "600px", height: "500px" }}
              />
            </div>
            <div>
              <img
                src={insta2}
                alt="Product"
                className="img-fluid rounded mb-3"
                style={{ width: "600px", height: "500px" }}
              />
            </div>
            <div>
              <img
                src={insta3}
                alt="Product"
                className="img-fluid rounded"
                style={{ width: "600px", height: "500px" }}
              />
            </div>
          </div>

          {/* right column - product details*/}
          <div className="col-md-6 mt-5">
            <div className="mb-4">
              <h6 className="text-muted mb-0">Home &gt; Boy &gt; Linen Shorts</h6>
              <h1 className="text-dark">Linen Shorts</h1>
              <p>Rejina Pyo</p>
              <h3 className="text-secondary">$30.00 - $40.00</h3>
            </div>

            {/* size */}
            <div className="mt-4">
              <h5>Size</h5>
              <div className="btn-group" role="group">
                {["1-2 year", "2-4 year", "4-8 year"].map((size) => (
                  <button
                    key={size}
                    className={`btn ${
                      selectedSize === size ? "btn-warning" : "btn-outline-secondary"
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* price */}
            <h3 className="text-secondary mt-4">${price}.00</h3>

            {/* quantity */}
            <div className="d-flex">
              <div
                className="input-group me-3 mt-4"
                style={{ height: "20px", width: "100px" }}
              >
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  min="0"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #E0E0E0",
                    fontWeight: "bold",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                  }
                />
              </div>

              {/* buy */}
              <button
                className="btn btn-warning mt-4"
                style={{ height: "40px", width: "300px" }}
              >
                Buy now
              </button>
            </div>

            {/* payment */}
            <div className="mt-4">
              <p className="mb-2">
                <strong>Guaranteed safe checkout:</strong>
              </p>
              <div className="d-flex gap-3">
                {[visa1, visa2, visa3, visa4].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Payment Method"
                    style={{ width: "50px", height: "35px" }}
                  />
                ))}
              </div>
            </div>

            {/* free shipping  - returns*/}
            <div className="mt-4 d-flex justify-content-center gap-5">
              <div>
                <p className="mb-0">🚚 Free Shipping</p>
              </div>
              <div>
                <p className="mb-0">🔄 Free Returns</p>
              </div>
            </div>

            <div className="container mt-4" style={{ backgroundColor: "#F8F4EC" }}>
              {/* Box: Help Info */}
              <div
                className="d-flex align-items-center p-3 mb-4"
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "10px",
                  backgroundColor: "rgba(199, 195, 195, 0.28)",
                }}
              >
                <div>
                  <p className="mb-0 fw-bold">Need Help? Call Us +1 635 009 55 26</p>
                  <p className="mb-0 text-muted">Sanday - Thursday 9:00 - 20:00</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="mb-4">
                <p>
                  <strong>SKU:</strong> N/A
                </p>
                <p>
                  <strong>Category:</strong> Boy
                </p>
                <p>
                  <strong>Tags:</strong> Care, Child, Clothing
                </p>
                <p>
                  <strong>Product ID:</strong> 2346
                </p>
              </div>

              {/* foldable sections*/}
              <Accordion defaultActiveKey="0" flush 
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
              }
              >
              {/* product description */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span style={{fontWeight: "bold", fontSize: "1rem",}}>Description</span>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#F8F4EC", fontSize: "0.9rem" }}>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit,
                sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum
                eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua.
                At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore
                eirmod tempor invidunt magna aliquyam.
                </Accordion.Body>
              </Accordion.Item>

              {/* delivery inf*/}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>Delivery Info</span>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#F8F4EC", fontSize: "0.9rem" }}>
                  <ul style={{ paddingLeft: "1.2rem" }}>
                    <li>Standard and Express delivery services are available for all items.</li>
                    <li>Shipping costs are calculated at the checkout page (after delivery option & destination confirmation).</li>
                    <li>Tracking is available for all delivery options.</li>
                    <li>Items are delivered during standard business hours.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* evaluations */}
              <Accordion.Item eventKey="2">
                <Accordion.Header style={{backgroundColor: "#F8F4EC"}} >
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>Reviews (1)</span>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#F8F4EC", fontSize: "0.9rem" }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "2rem", color: "#333" }}>Rating Details</h4>
                    <h3 className="text-secondary">4.00</h3>
                    <h4>1 Reviwe</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li>5 stars: 0%</li>
                      <li>4 stars: 100%</li>
                      <li>3 stars: 0%</li>
                      <li>2 stars: 0%</li>
                      <li>1 star: 0%</li>
                    </ul>
                    <h4>1 review for Linen shorts</h4>                        
                  <div className="d-flex gap-4 mt-3" >
                    <img
                      src={foto}
                      alt="k"
                      style={{ width: "20%", height: "20%", borderRadius: "50px" }}
                    />
                  <div className="w-30">
                    <div className="d-flex">
                    <h5>Ashton Porter</h5>
                    <h6  className="" style={{ color: "gray", margin: "5px 0" }}>-May 16, 2024</h6>
                    </div>
                    <p>At vero accusam et justo duo dolores et ea rebum.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4>Add a review</h4>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <form>
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    {/* Review */}
                    <div className="mb-3">
                      <label htmlFor="review" className="form-label">
                        Your review *
                      </label>
                      <textarea
                        className="form-control"
                        id="review"
                        rows="4"
                        placeholder="Write your review here"
                        required
                        onFocus={(e) =>
                          (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
                        }
                      ></textarea>
                    </div>
                    {/* Agreement */}
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreement"
                        required
                      />
                      <label className="form-check-label" htmlFor="agreement">
                        I agree that my submitted data is being collected and stored
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        backgroundColor: "#f39c12",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "10px 20px",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                    </div>
                      </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
          {/* other product */}
          <div className="mt-5">
            <h2>Related Products</h2>
            <div className=" d-flex mt-4 gap-3">
              <div>
                <img
                  src={prod1}
                  alt="Visa"
                  style={{ width: "300px", height: "300px" }}
                />
                <h5 className="mt-3">Teddy bear</h5>
                <p>$67.00</p>
              </div>
              <div>
                <img
                  src={prod2}
                  alt="MasterCard"
                  style={{ width: "300px", height: "300px" }}
                />
                <h5 className="mt-3">Purple tilda doll</h5>
                <p>$100.00</p>
              </div>
              <div>
                <img
                  src={prod3}
                  alt="MasterCard"
                  style={{ width: "300px", height: "300px" }}
                />
                <h5 className="mt-3">Baby Crib</h5>
                <p>$287.00</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
