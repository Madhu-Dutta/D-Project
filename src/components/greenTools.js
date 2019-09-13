import React from "react";
import '../style/tools.css';
import image from '../style/images/greenTools.JPG';
import logo1 from '../style/images/footLogo.JPG';
import logo2 from '../style/images/solarLogo.JPG';
import logo3 from '../style/images/recwaterLogo.JPG';
import logo6 from '../style/images/neutralLogo.JPG';
import logo4 from '../style/images/spreadword.JPG';
import logo7 from '../style/images/arrowRightLogo.JPG';
import logo8 from '../style/images/neutralitycalLogo1.JPG';
import logo9 from '../style/images/neutralitycalLogo2.JPG';
import logo10 from '../style/images/equalLogo.JPG';

const GreenTools = (props) => {

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1 className="toolText">Tools.</h1>
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
                        <img src={logo1} alt="Carbon Footprint" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo2} alt="Solar" />

                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo3} alt="Water" />

                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                <div className="card-body text-center thumbnail" style={{ backgroundColor: "#F8F8F8" }}>
                    <img src={logo6} alt="Carbon Neutrality" />

                    <h2 className="carbonNeutral">Understanding Carbon Neutrality and Offsetting.</h2>
                    <p className="card-text">
                        Climate change and its implications are increasingly moving people and organizations to make voluntary
                        commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>

                    <p className="card-text">
                        To become carbon neutral:
                        <ul style={{ color: "#3C8117" }}>
                            <li>Emmissions must be calculated.</li>
                            <li>Emmissions should be reduced as much as possible.</li>
                            <li>Carbon offsets*(or carbon credits)equivalent to the</li>
                            <li>remaining emmissions must be purchased.</li>
                        </ul>
                    </p>

                    <p className="card-text">
                        In addition and in turn, the Barwon Health team express their gratitude to Fresenius Mediacal Care (Australia) for providing initial sponsership seed funding that permitted the first iteriation of this website to be built in 2004.

                        <div className="row text-center">
                            <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                                <img src={logo8} alt="climate neutality" />
                            </div>
                            <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                                <img src={logo10} alt="climate neutality" />
                            </div>
                            <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                                <img src={logo9} alt="climate neutality" />
                            </div>
                        </div>
                    </p>

                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                <div><img src={logo4} alt="Spread the word" /></div>
                <h4>Spread the word.</h4>
                <span>Hold your own sustainability conference with our guide to it being a complete success. </span>
                <div><img src={logo7} alt="link to conference page" /></div>
            </div>


        </div>

    )
}
export default GreenTools;

