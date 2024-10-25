import React from "react";
import { Button , Card} from "react-bootstrap";

function HomePage() {
    function handleClick() {
        console.log("button clicked")
    }
    return (
      <>
        <div className="home-page-message justify-">
        <h2>Winter Is Coming</h2>
            <h3>Don't feel like shoveling snow all winter?</h3>
            <h5>
              <Button
                style={{ backgroundColor: "#003f85" }}
                onClick={handleClick}
              >
                Click Here
              </Button>
              to receive a quote for simple snow shoveling done professionally.
            </h5>
        </div>
        <Card></Card>
      </>
    );
}

export default HomePage; 