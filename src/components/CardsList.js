import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Data from "../data/data";

class CardsList extends Component{
    renderData = () => {
        return Data.map(({id, title, path, icon}) => (
            <div className="col s4">
                <Link to={path}>
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text center-align">
                            <i class="small material-icons">{icon}</i>
                            <span className="card-title">{title}</span>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    };

    render(){
        return(
            <div className="row">
                {this.renderData()}
            </div>
        )
    }
}

export default CardsList