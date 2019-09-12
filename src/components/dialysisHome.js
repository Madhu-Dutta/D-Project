import React from "react";
import '../style/dialysisHome.css';
import image from '../style/images/atHome.JPG';
import logo1 from '../style/images/homeLogo.JPG';
import logo2 from '../style/images/transportLogo.JPG';
import logo3 from '../style/images/disasterLogo.JPG';
import logo4 from '../style/images/bulbLogo.JPG';
import logo5 from '../style/images/wasteLogo.JPG';
import logo6 from '../style/images/waterLogo.JPG';
import map from '../style/images/homeMap.JPG'

const DialysisHome = (props) => {

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1 className="homeTitle">At Home Dialysis.</h1>
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
                        <img className="w-100" src={image} alt="AtHomeDialysis" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center thumbnail">
                            <div className="row">
                                <div className="col-lg-6 thumbnail lists w-100" style={{ padding: "3%" }}>
                                    <div>Hi</div>
                                </div>
                                <div className="col-lg-6 thumbnail lists w-100 thumbnail" style={{ padding: "3%" }}>
                                    <div><img src={map} alt="AtHomeDialysis" style={{ float: "right" }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="midlayer mid-grid">

                <div className="row">
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo1} alt="Building" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo2} alt="Transport" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo3} alt="Disaster" />

                    </div>
                </div>

                <div className="row">
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
export default DialysisHome;