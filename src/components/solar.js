import React from "react";
import '../style/tools.css';
import image from '../style/images/greenTools.JPG';
import logo1 from '../style/images/footLogo.JPG';
import logo2 from '../style/images/solarLogo.JPG';
import logo3 from '../style/images/recwaterLogo.JPG';
import logo4 from '../style/images/HDsolarCalc.JPG';
import logo5 from '../style/images/In-centreSolarCalc.JPG';

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

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div><img src={logo4} alt="Home HD Solar Calculator" /></div>
                    <h2>Home HD Solar Calculator</h2>

                    <div className="texts">
                        <p className="card-text"> While the ability to reduce transport-related emmisions depends on
                            geographical location, dialysis centre management should consider.
                        </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                        </p>

                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div><img src={logo5} alt="In-Centre HD Solar Calculator" /></div>
                    <h2>In-Centre HD Solar Calculator.</h2>

                    <div className="texts">
                        <p className="card-text"> While the ability to reduce transport-related emmisions depends on
                            geographical location, dialysis centre management should consider.
                        </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                        </p>

                    </div>
                </div>


            </div>
        );
    }
}
export default Solar;