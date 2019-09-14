import React from "react";
import '../style/disaster.css';
import image from '../style/images/disaster.JPG';
import logo1 from '../style/images/cloudRain.JPG';

class Disaster extends React.Component {

    render() {

        return (

            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="centreTitle">Disaster Planning.</h1>
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
                            <img className="w-100" src={image} alt="Disaster" style={{ float: "right", width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                    <div><img src={logo1} alt="Cloud and Rain Logo" /></div>
                    <h2>Dialysis and natural disasters.</h2>

                    <div className="texts">
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


            </div>

        )
    }
}

export default Disaster;