import React from "react";
import { Card } from "react-bootstrap";

function ServicePage() {
  return (
    <>
      <div className="services-page text-center">
        <Card>
          <h2>Services Offered:</h2>
          <ul>
            <li>Lawn Mowing (includes weeding, trimming, and leaf removal)</li>
            <li>Snow Shoveling</li>
          </ul>
        </Card>
      </div>
    </>
  );
}

export default ServicePage;
