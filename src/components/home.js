import React from "react";
import '../style/home.css';
import image from '../style/images/homeImage.JPG';
import logo from '../style/images/rocketLogoHome.JPG';

const Home = (props) => {

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">
                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1>Green Dialysis.</h1>
                        <div id="wrapper" className='w-100'>

                            <p className="headerPara">Dialysis is a resource-hungry medical therapy in
                            particular, mountains of plastic waste , lakes of water and
                        Magawatts of wasted energy are central to its delivery.</p>

                            <p className="headerPara">The hunger applies whether Dialysis is delivered in-
                            centre(65% of all Australian/NewZealand(ANZ)
                        dialysis), or in home( 35% of all ANZ dialysis). </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className="w-100" src={image} alt="GreenDialysis" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>


            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">
                        <img src={logo} alt="About" style={{ float: "right", width: "10%", height: "10%" }} />
                            <h2>How <span style={{ color: "#3C8117" }}>green</span> are we?</h2>
                            <p className="card-text">
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                            Magawatts of wasted energy are central to its delivery.
                            </p>

                            <p className="card-text">
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                            Magawatts of wasted energy are central to its delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">
                            <h2>How to get started?</h2>
                            <p className="card-text">
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                            Magawatts of wasted energy are central to its delivery.
                            </p>

                            <p className="card-text">
                                Dialysis is a resource-hungry medical therapy in
                                particular, mountains of plastic waste , lakes of water and
                            Magawatts of wasted energy are central to its delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Home;