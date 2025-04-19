import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-md-start py-4 border-top mt-5">
      <div className="container">
        <div className="row">
          {/* About section with link */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p style={{ fontSize: "0.9rem" }}>
              <Link to="/about" className="text-decoration-none text-dark">
                Welcome to Shrey's Café – where flavor meets charm. We serve
                handcrafted dishes with love and style.{" "}
                <strong style={{ textDecoration: "underline" }}>
                  Read more...
                </strong>
              </Link>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-decoration-none text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="text-center pt-3"
          style={{ fontSize: "0.85rem", color: "#666" }}
        >
          &copy; 2024 Shrey's Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
