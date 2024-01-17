import React from "react";
import sourpatchImage from "./sourpatch.png";
import { Link } from "react-router-dom";

function Snack2() {
    return (
        <div>
            <h2>Snack 2 Details</h2>
            <img src={sourpatchImage} alt="Sour Patch Kids" className="snack-image"/>
            <p>Sour Patch Kids Strawberry</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}
export default Snack2;