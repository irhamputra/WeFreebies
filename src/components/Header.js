import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <div className="center-align">
        <Link to="/">
            <h1>WeFreebies</h1>
        </Link>
        <p>A hand-picked directory of the best free resources for creatives</p>
        <hr/>
    </div>
);

export default Header