import React, { Component } from "react";
import { Row } from 'reactstrap';
import '../style/baseComponent.css';
import image from '../style/images/mapLoc.JPG';

export default class Contact extends Component {
    render() {
        return (
            <div className="container" >

            {/* Header */}
            <div className="header" style={{ backgroundColor: "#265725" }}> 
                <Row>
                    <div id="contactText" className="col-md-6">

                        <h1>Contact Us.</h1>
                        <div className="text">
                            <p>
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                                Magawatts of wasted energy are central to its delivery.
                            </p>
                            <p>
                                The hunger applies whether Dialysis is delivered in-
                                centre(65% of all Australian/NewZealand(ANZ)
                                dialysis), or in home( 35% of all ANZ dialysis).
                            </p>
                        </div>
                    </div>
                        <div class="col-md-6 clearfix">
                            
                        <h1>Contact Us.</h1>
                        <div className="text">
                            <p>
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                                Magawatts of wasted energy are central to its delivery.
                            </p>
                            <p>
                                The hunger applies whether Dialysis is delivered in-
                                centre(65% of all Australian/NewZealand(ANZ)
                                dialysis), or in home( 35% of all ANZ dialysis).
                            </p>
                        </div>
                            <img className="img-fluid" src={image} alt="GoogleLoc" style={{ float: "left", width: "20%", height: "20%" }} />
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}
