import React from "react";
import '../style/home.css';
import image from '../style/images/homeImage.JPG';
import plogo from '../style/images/plugLogoHome.JPG';
import rlogo from '../style/images/rocketLogoHome.JPG';

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
                            <img src={plogo} alt="About" style={{ width: "26%", height: "26%" }} />

                            <h2>How <span style={{ color: "#3C8117" }}>green</span> are we?</h2>
                            <p className="card-text">
                                In an effort to measure if and how well environmental sustainability has become embedded in day-to-day activities of dialysis, the Department of Health and Human Services(Victoria) conducted a Green Dialysis Survey in late 2016.
                                The results were published recently in Nephrology, the Official Journal of the Australian and New Zealand Society of Nephrology and of the Asia Pacific Society of Nephrology.
                            </p>

                            <p className="card-text">
                                The primary message of details from the survey is that while many dialysis services have already introduced some (or several) of the principles suggested in this website, many perhaps 89 per cent of the units-have not proceeded with specific  green projects that can help us reduce the mountains and rivers of waste we currently generate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">
                            <img src={rlogo} alt="About" style={{ width: "26%", height: "26%" }} />

                            <h2>How to get started?</h2>
                            <p className="card-text">
                                In an effort to measure if and how well environmental sustainability has become embedded in day-to-day activities of dialysis, the Department of Health and Human Services(Victoria) conducted a Green Dialysis Survey in late 2016.
                                The results were published recently in Nephrology, the Official Journal of the Australian and New Zealand Society of Nephrology and of the Asia Pacific Society of Nephrology.
                            </p>

                            <p className="card-text">
                                The primary message of details from the survey is that while many dialysis services have already introduced some (or several) of the principles suggested in this website, many perhaps 89 per cent of the units-have not proceeded with specific  green projects that can help us reduce the mountains and rivers of waste we currently generate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Home;