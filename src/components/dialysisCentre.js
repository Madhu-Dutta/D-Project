import React from "react";
import '../style/dialysisCentre.css';
import image from '../style/images/inCentre.JPG';
import logo1 from '../style/images/homeLogo.JPG';
import logo2 from '../style/images/transportLogo.JPG';
import logo3 from '../style/images/disasterLogo.JPG';
import logo4 from '../style/images/bulbLogo.JPG';
import logo5 from '../style/images/wasteLogo.JPG';
import logo6 from '../style/images/waterLogo.JPG';

class DialysisCentre extends React.Component {

    getBuilding = () => {
        window.location = "/buildingDesign";
    }
    getTransport = () => {
        window.location = "/transport";
    }
    getDisaster = () => {
        window.location = "/disaster";
    }

    render(){

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1 className="centreTitle">In-Centre HD.</h1>
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
                        <img className="w-100" src={image} alt="In centreHD" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                <div className="midtext">The In-Centre HD resource conservation and management measures described in this section offers specific green projects that can help us
                     reduce the mountains and rivers of waste we currently generate.
                </div>
            </div>

            <div className="midlayer mid-grid">

                <div className="row">
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo1} onClick={this.getBuilding} alt="Building" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo2} onClick={this.getTransport} alt="Transport" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo3} onClick={this.getDisaster} alt="Disaster" />

                    </div>
                </div>
            </div>

            <div className="midlayer mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                <div className="row" style={{ backgroundColor: "#F8F8F8" }}>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo4} alt="Energy" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo5} alt="Waste" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo6} alt="Water" />

                    </div>
                </div>
            </div>


        </div>



    )
}
}

export default DialysisCentre;