import React from "react";
import { Emojione } from "react-emoji-render";
import {Link} from "react-router-dom";

const Header = () => (
    <div className="header-bg">
        <div className="container header-wrapper">
            <h1>
                <Link to="/">
                    <span className="h1-color">WeFreebies</span>
                </Link>
            </h1>
            <div className="lead">
                <Emojione
                    text="A hand picked directory of the best free resources for creative, because we love a free stuff 🖤"/>
            </div>
            <p className="spacing text-uppercase">By Irham Putra | 2018</p>
        </div>
    </div>
);

export default Header