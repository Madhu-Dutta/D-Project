import React from "react";
import { Row } from 'reactstrap';
import '../style/baseComponent.css';
import image from '../style/images/research.JPG';

const ResourcesResearch = (props) => {
    return (

        <div className="container">

        {/* Header */}
        <div className="header" style={{ backgroundColor: "#265725" }}> 
        <Row>
            <div id="text" className="col-md-6 clearfix" >

                <h1 >About Us.</h1>
                <div className="text" >
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
            <div className="col-md-6 clearfix">
                <img className="img-fluid" src={image} alt="Green Dialysis" style={{ float: "right", width: "100%", height: "100%" }} />
            </div>
        </Row>
    </div>
</div>

    )

}

export default ResourcesResearch;