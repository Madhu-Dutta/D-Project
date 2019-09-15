import React, { Component } from 'react';
import '../style/survey.css';
import image from '../style/images/survey.JPG';
import logo1 from '../style/images/greenSurveyChart.JPG';


export default class Survey extends Component {
    getRoadmap = () => {
        window.location = "/greenroadMap"
    }

    render() {
        return (
            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1 className="researchTitle">Victoria Goverment Green Dialysis Survey.</h1>
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

                <div className="row text-center">
                    <div className="col-lg-6">
                        <div className="text-content">
                            <p>
                                The best possible way of growing green is to involve the staff, to "make
                                green good", and provide access to resources and encouragement.
                            </p>
                            <p className="text-para">
                                The survey received responses from <span>71/83 dialysis facilities in Victoria(86%)</span>
                                representing <span>628/660 (95%)</span> of the states' dialysis chairs.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 thumbnail chart">
                        <img src={logo1} alt="Green Initiatives Dialysis units" />
                    </div>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>

                    <h6 className="center-content">The Authors concluded that:</h6>
                    <p className="center-content">
                        The site originally arose from the 'green experience' of the renal service
                            </p>

                    <p className="center-content">
                        GNAT is indebted to Professor John Agar and Barwon Health Renal Services, Geelong, Australia.
                            </p>

                    <p className="center-content">
                        In addition and in turn, the Barwon Health team express their gratitude to Fresenius Mediacal Care (Australia) for providing initial sponsership seed funding that permitted the first iteriation of this website to be built in 2004.
                            </p>
                </div>

                <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                    <p className="center-content">
                        In short, there is much to be done!<br />
                        To get started please go to <span onClick={this.getRoadmap}>Roadmap for Going Green</span>
                    </p>
                </div>


            </div >
        )
    }
}
