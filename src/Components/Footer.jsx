import React from "react";

function Footer() {

  // Test test test 
  return (
    <>
      <footer className="bg-light border border-dark">
        <div className="row">
          <div className="footer-faq-section col-sm-12 col-md-6 text-center">
            <h2>FAQ</h2>
            <h6>Why B. Neighborly Lawn Services?</h6>
            <p>
              If you're looking for a
              professional job completed for an honest cost, look no further.
            </p>
            <h6>What Will This Cost Me?</h6>
            <p>The answer to this question depends on the size of your lawn or driveway. We will be happy to provide a quote if you fill out the request form.</p>
          </div>

          <div className="footer-contact-section col-sm-12 col-md-6 text-center">
            <h2>Contact Info</h2>
            <h6>Email: b.neighborlylawnservices@gmail.com</h6>
            <h6>Instagram: @b.neighborlylawns</h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;