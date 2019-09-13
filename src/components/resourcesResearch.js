import React from "react";
import '../style/research.css';
import { Button } from 'reactstrap';
import image from '../style/images/research.JPG';
import logo1 from '../style/images/energyUsage.JPG';
import logo2 from '../style/images/carbonFoot.JPG';
import logo3 from '../style/images/waste.JPG';
import logo4 from '../style/images/baselinePrac.JPG';
import logo5 from '../style/images/roWater.JPG';
import logo6 from '../style/images/wasteProcess.JPG';
import logo7 from '../style/images/teleMed.JPG';
import logo8 from '../style/images/apps.JPG';
import logo9 from '../style/images/misc.JPG';
import logo10 from '../style/images/newsLogo.JPG';
import logo11 from '../style/images/tracking.JPG';
import logo12 from '../style/images/prizes.JPG';
import logo13 from '../style/images/anzsnLogo.JPG';
import logo14 from '../style/images/rsaLogo.JPG';
import arrows from '../style/images/arrowRightLogo.JPG';
import arrows2 from '../style/images/arrowWhiteBgLogo.JPG';

const ResourcesResearch = (props) => {
    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1 className="researchTitle">Research.</h1>
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
                        <img className="w-100" src={image} alt="ResourceResearch" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>
                <h2>Calculate your contributions.</h2>


                <div className="row">
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo1} alt="Energy Usage" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo2} alt="Carbon Footprint" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo3} alt="Waste" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                </div>
            </div>
            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                <div className="row">
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo4} alt="Baseline practice and attitude to green nephrology" />
                        <div><img src={arrows2} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo5} alt="RO Reject water Usage" />
                        <div><img src={arrows2} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo6} alt="Assess the impact of waste processing" />
                        <div><img src={arrows2} alt="link to page" /></div>
                    </div>
                </div>
            </div>
            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>
                <div className="row">
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo7} alt="Telemedicine" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo8} alt="Apps" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                    <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                        <img src={logo9} alt="Miscellaneous" />
                        <div><img src={arrows} alt="link to page" /></div>
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>

                <div><img src={logo10} alt="news" /></div>
                <h2>News</h2>
                <h4>Affordable dialysis project gains funding to move forward. </h4>
                <span>https://www.theism.org/news/item/3331-affordable-dialysis-project-gains-funding-to-move-forward</span>
                <p>By Sally Horspool | 14th August 2018</p>
                <Button color="success">Read More</Button>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                <div><img src={logo11} alt="tracking" /></div>
                <h2>See How We're Tracking</h2>
                <span>In an effort to measure if and how well environmental sustainability has become
                    embedded in day-to-day activities of dialysis, the Department of Health and Human Services
                    (Victoria) conducted a Green Dialysis Survey in late 2016.
                </span>
                <div><img src={arrows} alt="link to page" /></div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>

                <div><img src={logo12} alt="prizes" /></div>
                <h2>Prizes</h2>
                <span>If you're someone with a keen passion for finding new solutions in  our
                    goal of making dialysis green as can be, get organised in one of this competitions.
                </span>

                <div className="row text-center">
                    <div className="col-lg-6 thumbnail">
                        <img src={logo13} alt="anzsn Logo" />
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        <br></br>
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        <br></br>
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                        <p className="growGreen-text">
                            Visit ANZSN website awards page for:
                            <ul>
                                <li>Suggested topics</li>
                                <li>Eligibility criteria</li>
                                <li>Prize details</li>
                                <li>Abstract closure dates.</li>
                            </ul>
                        </p>
                        <Button color="success">Find Out More</Button>
                    </div>
                    <div className="col-lg-6 thumbnail">
                        <img src={logo14} alt="rsa Logo" />
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                        <Button color="success">Find Out More</Button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ResourcesResearch;