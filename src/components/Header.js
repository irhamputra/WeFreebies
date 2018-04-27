import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <div className="header-bg">
        <div className="container header-wrapper">
            <h1>
                <Link to="/">
                    <span className="h1-color">WeFreebies.co</span>
                </Link>
            </h1>
            <p className="lead">A hand-picked directory of the best free resources for creatives</p>
            <p className="spacing">By Irham Putra | 2018</p>
        </div>
    </div>
);

export default Header