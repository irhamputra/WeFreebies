import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Data from "../data/data";

class CardsList extends Component{
    renderData = () => {
        return Data.map(({id, title, path, icon}) => (
            <div className="col-md-4">
                <Link to={path}>
                    <div className="card black darken-4">
                        <div className="card-content white-text center-align">
                            <i class="small material-icons">{icon}</i>
                            <h4 className="card-title">{title}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    };

    render(){
        return(
            <div className="container card-wrapper">
                {this.renderData()}
            </div>
        )
    }
}

export default CardsList