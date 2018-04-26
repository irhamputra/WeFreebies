import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <div>
        <h1 className="animated bounceInDown"><Link to="/">WeFreebies</Link></h1>
        <p className="animated bounceInUp">A hand-picked directory of the best free resources for creatives</p>
        <hr/>
    </div>
);

export default Header