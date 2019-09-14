import React from "react";
import '../style/transport.css';
import image from '../style/images/transport.JPG';
import logo1 from '../style/images/combatTransport.JPG';
import logo2 from '../style/images/UKflag.JPG';
import logo3 from '../style/images/link1.JPG';
import logo4 from '../style/images/link2.JPG';
import logo5 from '../style/images/link3.JPG';

class Transport extends React.Component {

    render() {

        return (

            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="centreTitle">Transport.</h1>
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
                            <img className="w-100" src={image} alt="Transport" style={{ float: "right", width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div><img src={logo1} alt="Cloud and Rain Logo" /></div>
                    <h2>Combating Transport Emmissions.</h2>

                    <div className="texts">
                        <p className="card-text" style={{ fontStyle: "italic" }}> While the ability to reduce transport-related emmisions depends on
                            geographical location, dialysis centre management should consider.
                        </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>
                    </div>
                </div>


                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                    <h3>Some <span>green</span> transport case studies.</h3>

                    <div className="texts">
                        <p className="card-text"> While the ability to reduce transport-related emmisions depends on
                            geographical location, dialysis centre management should consider.
                        </p>
                        <hr></hr>
                    </div>
                    <div className="texts">
                        <div><img src={logo2} alt="United Kingdom" /></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo3} alt="link1" />

                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo4} alt="link2" />

                        </div>
                        <div className="col-lg-4 thumbnail" style={{ padding: "3%" }}>
                            <img src={logo5} alt="link3" />

                        </div>
                    </div>
                </div>


            </div >

        )
    }
}

export default Transport;