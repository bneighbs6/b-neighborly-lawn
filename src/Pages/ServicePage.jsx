import React from "react";
import { Card } from "react-bootstrap";

function ServicePage() {
  return (
    <>
      <div className="services-page text-center">
        <Card>
          <h2>Services Offered:</h2>
          <ul>
            <p>- Lawn Mowing (includes weeding, trimming, and leaf removal)</p>
            <p>- Snow Shoveling</p>
          </ul>
        </Card>
      </div>
    </>
  );
}

export default ServicePage;
