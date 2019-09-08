import React from "react";
// import { Row} from 'reactstrap'

import '../style/baseComponent.css';
import image from '../style/images/homeImage.JPG';

const Home = (props) => {

    return (
    
    <div className="container-wrapper">
        
        <div id="header" className="card" >
            <div className="row no-gutters">
                <div className="col-md-6" style={{ backgroundColor: "#265725" }}>   
                    <h1>Green Dialysis.</h1>                                   
                   <div id="wrapper" className='w-100'>                                            
                           
                        <p>Dialysis is a resource-hungry medical therapy in
                        particular, mountains of plastic waste , lakes of water and
                        Magawatts of wasted energy are central to its delivery.</p>
                    
                        <p>The hunger applies whether Dialysis is delivered in-
                        centre(65% of all Australian/NewZealand(ANZ)
                        dialysis), or in home( 35% of all ANZ dialysis). </p>                                
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="w-100" src={image} alt="GreenDialysis" style={{ float: "right", width: "100%", height: "100%" }} />
                </div>
            </div>  
        </div>

    </div>

    );
}
export default Home;