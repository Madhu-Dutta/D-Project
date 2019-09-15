import React from "react";
import '../style/aboutus.css';
import image from '../style/images/about.JPG';
import logo1 from '../style/images/mailLogo.JPG';
import logo2 from '../style/images/aboutPlantLogo.JPG';
import team1 from '../style/images/teamMem1.JPG';
import team2 from '../style/images/teamMem2.JPG';
import team3 from '../style/images/teamMem3.JPG';
import team4 from '../style/images/teamMem4.JPG';
import team5 from '../style/images/teamMem5.JPG';
import team6 from '../style/images/teamMem6.JPG';
import team7 from '../style/images/teamMem7.JPG';
import team8 from '../style/images/teamMem8.JPG';

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

                <div className="card-body text-center thumbnail">
                    <img src={logo1} alt="About" />

                    <h2>What do we deliver?</h2>
                    <p className="card-text">
                        International experience has already demonstrated broad benefits of environmental initiatives within the nephrology sector.
                            </p>

                    <p className="card-text">
                        In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudinal and practice change.
                            </p>
                </div>
                <div className="row lists">
                    <div className="col-lg-6 thumbnail lists" style={{ padding: "3%" }}>
                        <ul>
                            <h6>The GN Network</h6>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>

                        </ul>
                    </div>
                    <div className="col-lg-6 thumbnail lists" style={{ padding: "3%" }}>
                        <ul>
                            <h6>The GN Network</h6>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>
                            <li>470 milion litres of water</li>

                        </ul>
                    </div>
                </div>

            </div>


            <div className="midlayer py-5 mid-grid" style={{ backgroundColor: "#F8F8F8" }}>
                <div className="card-body text-center thumbnail" style={{ backgroundColor: "#F8F8F8" }}>
                    <img src={logo2} alt="History" />

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



            <div className="midlayer mid-grid">

                <h2>About the GNAT Team</h2>

                <div className="row">
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team1} alt="About" />
                        <h5>Prof. John Agar</h5>
                        <span>Nephrologist</span><br />
                        <span>Barwon Health</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team2} alt="About" />
                        <h5>Prof. John Knight</h5>
                        <span>Nephrologist</span><br />
                        <span>George Institute</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team3} alt="About" />
                        <h5>Prof. Mathew Sypek</h5>
                        <span>Nephrologist</span><br />
                        <span>Royal Melbourne</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team4} alt="About" />
                        <h5>Prof. Leila Arnold</h5>
                        <span>Nephrologist</span><br />
                        <span>Wellington Hospital</span>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team5} alt="About" />
                        <h5>Ms Anthea White</h5>
                        <span>Satellite Dialysis Manager</span><br />
                        <span>Coburg Dialysis</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team6} alt="About" />
                        <h5>Dr Shlipa Jesudason</h5>
                        <span>Mediacal Director</span><br />
                        <span>Kidney Health AUS</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team7} alt="About" />
                        <h5>Dr. Marie Ludlow</h5>
                        <span>Nephrologist</span><br />
                        <span>Kidney Health AUS</span>
                    </div>
                    <div className="col-lg-3 thumbnail" style={{ padding: "3%" }}>
                        <img src={team8} alt="About" />
                        <h5>Mr Greg Collette</h5>
                        <span>Haemodialysis Patient</span><br />
                        <span>KHA Consumer Council</span>
                    </div>

                </div>

            </div>
        </div>


    );

}
export default Aboutus