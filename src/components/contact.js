import React, { Component } from "react";
import { Row } from 'reactstrap';
import '../style/baseComponent.css';
import image from '../style/images/mapLoc.JPG';

export default class Contact extends Component {
  render() {
    return (
      <div className="container" >
        {/* Header */}
        <Row>
        <div className="col-lg-6" style={{ backgroundColor: "#265725" }}>

                <h1 >Contact Us.</h1>   
                <div className="contactText">                 
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
            <div className="col-lg-6" style={{ backgroundColor: "#265725" }}>
            
                <h1 >Contact Us.</h1>                    
                    <img class="img-fluid" src={image} alt="Green Dialysis" style={{ margin: '0%', float: "left", width: "20%", height: "20%" }} />
                    <div className="contactText">
                    <p>
                        The hunger applies whether Dialysis is delivered in-
                        centre(65% of all Australian/NewZealand(ANZ)
                        dialysis), or in home( 35% of all ANZ dialysis).
                    </p>
                    <p>
                        The hunger applies whether Dialysis is delivered in-
                        centre(65% of all Australian/NewZealand(ANZ)
                        dialysis), or in home( 35% of all ANZ dialysis).
                    </p>
                </div>
            </div>              
                
        </Row>
    </div>

    )
  }
}
