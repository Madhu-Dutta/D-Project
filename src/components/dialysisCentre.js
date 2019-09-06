import React from "react";
import { Row } from 'reactstrap';
import '../style/baseComponent.css';
import image from '../style/images/inCentre.JPG';

const DialysisCentre = (props) => {
  
    return (

      <div className="container" >

            {/* Header */}
        <div xs="12" className="header" style={{ backgroundColor: "#265725" }}>
            <Row>
                <div id="text" xs="6" className="col-sm" style={{ width: "100%" }} >

                    <h1 >In-Centre HD.</h1>
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
                <div xs="6" class="col-sm">
                    <img class="img-fluid" src={image} alt="Green Dialysis" style={{ margin: '0%', float: "right", width: "100%", height: "100%" }} />
                </div>
            </Row>
        </div>
    </div>
    )
  }

export default DialysisCentre;