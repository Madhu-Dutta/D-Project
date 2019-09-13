import React from "react";
import '../style/roadMap.css';
import image from '../style/images/roadMaps.JPG';

const GreenroadMap = (props) => {

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1 className="roadTitle">Roadmap.</h1>
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
                        <img className="w-100" src={image} alt="Roadmap" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#EFEFEF" }}>

                <div className="row">
                    <div className="col-lg-6">
                        <h4>Preparation.</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="prep">
                                    <li>Going green needs commitment, focus and leadership.</li>
                                    <li>Seek and appoint an eco-leader.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="prep">
                                    <li>Going green needs commitment, focus and leadership.</li>
                                    <li>Seek and appoint an eco-leader.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="textTitle">Grow the notion of <span>green.</span></h4>
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                        <p className="growGreen-text">
                            The best possible way of growing green is to involve the staff, to "make
                            green good", and provide access to resources and encouragement.
                        </p>
                    </div>
                </div>
            </div>

            <div className="midlayer mid-grid" style={{ backgroundColor: "#F8F8F8" }}>

                <div className="row">

                    <div className="col-lg-6">
                        <h4>Implementations.</h4>
                        <p>Don't try to do too much, too soon.</p>
                        <hr></hr>

                        <div>
                            <ul>
                                <li>Going green needs commitment, focus and leadership.</li>
                                <li>Seek and appoint an eco-leader.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h4>Evaluations.</h4>
                        <p>Always, always evaluate.</p>

                        <hr></hr>
                        <div>
                            <ul>
                                <li>Going green needs commitment, focus and leadership.</li>
                                <li>Seek and appoint an eco-leader.</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default GreenroadMap;