import React from "react";
import laysImage from "./lays.png";
import { Link } from "react-router-dom";

function Snack1() {
    return (
        <div>
            <h2>Snack 1 Details</h2>
            <p>Original Lays Potato Chips</p>
            <img src={laysImage} alt="Lays Chips" className="snack-image"/>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}

export default Snack1;
