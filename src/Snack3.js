import React from "react";
import reesesImage from "./reeses.png";
import { Link } from "react-router-dom";

function Snack3() {
    return (
        <div>
            <h2>Snack 3 Details</h2>
            <img src={reesesImage} alt="Reese's Peanut Butter Cups" className="snack-image"/>
            <p>Reeses Peanut Butter Cups</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}
export default Snack3;