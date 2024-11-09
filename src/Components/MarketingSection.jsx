import React from "react";
import WinterMarketing from "../media/Winter Marketing (2).png";

function MarketingSection() {
    return (
        <>
        <h1 className="text-center">Winter Special</h1>
          <div className="marketing-section">
            <img src={WinterMarketing} alt="Snow Shovel Flyer" />
        </div>      
        </>
    )
}

export default MarketingSection;