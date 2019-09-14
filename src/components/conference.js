import React from "react";
import '../style/conference.css';
import { Button } from 'reactstrap';
import image from '../style/images/conferenceGuide.JPG';
import logo1 from '../style/images/planning.JPG';
import logo2 from '../style/images/venue.JPG';
import logo3 from '../style/images/conference.JPG';
import logo4 from '../style/images/transportLogoConf.JPG';
import logo5 from '../style/images/wasteLogoConf.JPG';
import logo6 from '../style/images/participants.JPG';
import logo7 from '../style/images/monitoring.JPG';
import logo8 from '../style/images/arrowRightLogo.JPG';
import logo9 from '../style/images/questionMark.JPG';
import logo10 from '../style/images/cattle.JPG';
import logo11 from '../style/images/plastic.JPG';



class Conference extends React.Component {

    render() {

        return (

            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="toolText">Sustainable Conference Organisers Guide.</h1>
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

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>
                    <Button color="success" className="downloadChecklist">Download Our Checklist</Button>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>

                    <div className="card-body text-center thumbnail" style={{ backgroundColor: "#FFFFFF" }}>

                        <h2>Introduction</h2>
                        <p className="card-text">
                            International experience has already demonstrated broad benefits of environmental initiatives within the nephrology sector.
                            </p>
                        <p className="card-text">
                            In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudinal and practice change.
                            </p>
                        <p className="card-text">
                            In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudinal and practice change.
                            </p>
                        <p className="card-text">
                            In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudinal and practice change.
                            </p>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div className="card-body text-center thumbnail" style={{ backgroundColor: "#EFEFEF" }}>

                        <h2>Benefits of a Sustainable Event.</h2>
                        <ul>
                            <li className="card-text">
                                Cost savings - these can result from the implementation of energy effeciency measures, waste reduction
                                and consumption of local products.
                            </li>
                            <li className="card-text">
                                Cost savings - these can result from the implementation of energy effeciency measures, waste reduction
                                and consumption of local products.
                            </li>
                            <li className="card-text">
                                Cost savings - these can result from the implementation of energy effeciency measures, waste reduction
                                and consumption of local products.
                            </li>
                            <li className="card-text">
                                Cost savings - these can result from the implementation of energy effeciency measures, waste reduction
                                and consumption of local products.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="midlayer mid-grid" style={{ backgroundColor: "#F8F8F8" }}>

                    <div className="row">
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo1} alt="Planning" />
                            <div><img src={logo8} alt="view planning" /></div>

                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo2} alt="Venue" />
                            <div><img src={logo8} alt="view Venue" /></div>
                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo3} alt="Conference Material" />
                            <div><img src={logo8} alt="view conference material" /></div>
                        </div>
                    </div>
                </div>

                <div className="midlayer mid-grid">

                    <div className="row">
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo4} alt="Transport" />
                            <div><img src={logo8} alt="view transport" /></div>
                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo5} alt="Waste" />
                            <div><img src={logo8} alt="view waste" /></div>
                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo6} alt="Involving Participants" />
                            <div><img src={logo8} alt="view participants" /></div>
                        </div>
                    </div>
                </div>

                <div className="midlayer mid-grid" style={{ backgroundColor: "#F8F8F8" }}>

                    <div className="row">
                        <div className="col-lg-4 thumbnail text-center" style={{ padding: "3%" }}>
                            <img src={logo7} alt="Monitoring and Reporting" />
                            <div><img src={logo8} alt="view monitoring and reporting" /></div>
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>

                    <div><img src={logo9} alt="Question Mark" /></div>
                    <h4>Did you know?</h4>

                    <div><img src={logo10} alt="Cattle" /></div>
                    <div className="texts">
                        <p className="card-cattle">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                        <p className="card-cattle">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                        <p className="card-cattle">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>

                    <div><img src={logo11} alt="Cattle" /></div>
                    <div className="texts">
                        <p className="card-cattle">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                        <p className="card-cattle">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                    </div>
                </div>


            </div>



        );
    }

}
export default Conference;