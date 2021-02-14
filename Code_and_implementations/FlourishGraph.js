import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class FlourishGraph extends Component {

    state = {
    };

    render() {
        return (
            <div className="cs4802P2Div">
                <div className="imagecontainer">
                    <img img src="/FlourishGraph.png" alt="Tableau Graph"/>
                    <h5>Made with Flourish</h5>
                </div>
            </div>
        );
    }
}
 
export default FlourishGraph;