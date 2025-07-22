import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeSolid  } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"; 


function Footer() {
  return (
    <footer className="bg-light border-top border-dark py-5">
      <div className="container">
        <div className="row">
          {/* FAQ Section */}
          <div className="footer-faq-section col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">FAQ</h3>
            <h5 className="fw-semibold">Why B. Neighborly Lawn Services?</h5>
            <p className="mb-3 text-muted">
              If you're looking for a professional job completed at an honest
              cost, look no further.
            </p>
            <h5 className="fw-semibold">What Will This Cost Me?</h5>
            <p className="text-muted">
              Pricing depends on the size of your lawn or driveway. We're happy
              to provide a custom quote—just fill out our request form.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact-section col-12 col-md-6 text-center text-md-start">
            <h3 className="fw-bold mb-3">Contact Info</h3>
            <p className="mb-2 text-muted">
              <a href="mailto:b.neighborlylawnservices@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelopeSolid}
                  className="fa-solid email-icon"
                  size="2x"
                />
              </a>
              {/* <strong>Email: </strong> Add a space */}
              <a
                href="mailto:b.neighborlylawnservices@gmail.com"
                className="text-decoration-none text-dark"
              >
                b.neighborlylawnservices@gmail.com
              </a>
            </p>
            <p className="text-muted">
              <a
                href="https://www.instagram.com/b.neighborlylawns/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="fa-brands fa-instagram instagram-icon"
                  size="2x"
                />
              </a>
              {/* <strong>Instagram: </strong> Add a space */}
              <a
                href="https://instagram.com/b.neighborlylawns"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                @b.neighborlylawns
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
