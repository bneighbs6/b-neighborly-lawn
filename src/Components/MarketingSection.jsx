import React from "react";
import WinterMarketing from "../Winter Marketing copy.png";

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