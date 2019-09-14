import React from "react";
import '../style/tools.css';
import image from '../style/images/greenTools.JPG';
import logo1 from '../style/images/footLogo.JPG';
import logo2 from '../style/images/solarLogo.JPG';
import logo3 from '../style/images/recwaterLogo.JPG';


class Solar extends React.Component {

    getCarbonFootprint = (e) => {
        e.preventDefault();
        window.location = "/carbonFootprint";
    }
    getSolar = (e) => {
        e.preventDefault();
        window.location = "/solar";
    }
    getWater = (e) => {
        e.preventDefault();
        window.location = "/water";
    }

    render() {

        return (

            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="toolText">Calculating your Solar Power Usage.</h1>
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
                            <img className="w-100" src={image} alt="Tools" style={{ float: "right", width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>
                    <h2>Calculate your contributions.</h2>


                    <div className="row">
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo1} onClick={this.getCarbonFootprint} alt="Carbon Footprint" />

                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo2} onClick={this.getSolar} alt="Solar" />

                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo3} onClick={this.getWater} alt="Water" />

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}
export default Solar;