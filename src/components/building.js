import React from "react";
import '../style/building.css';
import image from '../style/images/buildingDesign.JPG';
import logo1 from '../style/images/toolsLogo.JPG';
import logo2 from '../style/images/eqoDesign1.JPG';
import logo3 from '../style/images/eqoDesign2.JPG';

class BuildingDesign extends React.Component {

    render() {

        return (

            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="centreTitle">Building Design.</h1>
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
                            <img className="w-100" src={image} alt="Building Design" style={{ float: "right", width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div><img src={logo1} alt="The Design Elements Logo" /></div>
                    <h2>The Design Elements.</h2>

                    <div className="texts">
                        <p className="card-text" style={{ fontStyle: "italic" }}> While the ability to reduce transport-related emmisions depends on
                            geographical location, dialysis centre management should consider.
                        </p>
                        <p className="card-text">
                            Climate change and its implications are increasingly moving people and organizations to make voluntary
                            commitments and take action to reduce GHG emissions, and even go beyond , to achieve carbon neutrality.
                            </p>

                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>
                    <h4>Sustainable dialysis building design should include:</h4>

                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="card-text">
                                <li>Going green needs commitment, focus and leadership.</li>
                                <li>Seek and appoint an eco-leader.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="card-text">
                                <li>Going green needs commitment, focus and leadership.</li>
                                <li>Seek and appoint an eco-leader.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#FFFFFF" }}>
                    <h4 className="machineDiagrams">Our eco-friendly dialysis machine diagrams.</h4>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-text">
                            <img className="w-100" src={logo2} alt="Building Design1"  />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-text">
                            <img className="w-100" src={logo3} alt="Building Design2"  />
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default BuildingDesign;