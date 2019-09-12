import React from "react";
import '../style/baseComponent.css';
import image from '../style/images/about.JPG';
import logo1 from '../style/images/mailLogo.JPG';
import logo2 from '../style/images/aboutPlantLogo.JPG';

const Aboutus = (props) => {

    return (

        <div className="container-wrapper">

            <div id="header" className="card" >
                <div className="row no-gutters">

                    <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                        <h1>What is GNAT?</h1>
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
                        <img className="w-100" src={image} alt="About" style={{ float: "right", width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">
                            <img src={logo1} alt="About" style={{ width: "20%", height: "20%" }} />

                            <h2>What do we deliver?</h2>
                            <p className="card-text">
                                Internaltional experience has already demonstrated broad benefits of environmental initiatives within the nephrology sector.
                            </p>

                            <p className="card-text">
                                In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudianal and practice change.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">
                            <img src={logo2} alt="About" style={{ width: "30%", height: "30%" }} />

                            <h2>Our History.</h2>
                            <p className="card-text">
                                The site originally arose from the 'green experience' of the renal service
                            </p>

                            <p className="card-text">
                                GNAT is indebted to Professor John Agar and Barwon Health Renal Services, Geelong, Australia.
                            </p>

                            <p className="card-text">
                                In addition and in turn, the Barwon Health team express their gratitude to Fresenius Mediacal Care (Australia) for providing initial sponsership seed funding that permitted the first iteriation of this website to be built in 2004.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="midlayer py-5 mid-grid">
                <div className="card-deck">
                    <div className="card card-columns">
                        <div className="card-body text-center">

                            <h2>About the GNAT Team</h2>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}
export default Aboutus