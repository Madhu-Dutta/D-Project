import React from 'react';
import '../style/footer.css';
import { Button } from 'reactstrap';
import image1 from '../style/images/footerLinks1.JPG';
import image2 from '../style/images/footerLinks2.JPG';
import image3 from '../style/images/footerLinks3.JPG';
import logo from '../style/images/logo.GIF';


const Footer = () => {

    return (

        <footer>
            <div style={{ backgroundColor: "#8EE080" }}>
                <div id="sticky-footer" className="py-2"></div>
            </div>
            <div style={{ backgroundColor: "#42210B" }}>
                <div id="sticky-footer" className="py-2"></div>
            </div>
            <div className="topFooter" style={{ backgroundColor: "#265725" }}>
                <div id="sticky-footer" className="py-4"></div>
            </div>
            <div className="midFooter" style={{ backgroundColor: "#8EE080"}}>
                <div id="sticky-footer">
                    <div className="container text-center">
                        <div className="container text-center">

                            <section id="footer-grids">
                                <div className="row text-center text-xs-center">

                                    <div className="col-xs-12 col-md-2" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                                        <a href="/" >Important Link</a>
                                    </div>
                                    <div className="col-xs-12 col-md-2">
                                        <a href="/"><img className="img-footlogo" src={logo} alt="footerlogo" style={{ margin: '0', padding: '0' }} /></a>
                                    </div>
                                    <div className="col-xs-12 col-md-2">
                                        <span>
                                            <a href="/" style={{ fontWeight: 'bolder', color: '#6A503E', textDecoration: 'none' }}>
                                                The Green<br />
                                                Nephrology<br />
                                                Action Team.<br />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="col-xs-12 col-md-2" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                                        <a href="/">Help</a>
                                    </div>
                                    <div className="col-xs-12 col-md-2" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                                        <a href="/">Stay Connected</a>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomFooter" style={{ backgroundColor: "#265725" }}>
                <div id="sticky-footer" className="py-4">
                    <div className="container text-center">

                        <section id="footer-grids">
                            <div className="row text-center text-xs-center">

                                <div className="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul className="list-unstyled quick-links">
                                        <li><a className="footLinks" href="/">Terms Of Use</a></li>
                                        <li><a className="footLinks" href="/">Privacy</a></li>
                                        <li><a className="footLinks" href="/">Copyright</a></li>
                                        <li><a className="footLinks" href="/">Sitemap</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul className="list-unstyled quick-links">
                                        <li><a className="footLinks" href="/greenroadMap">Roadmap</a></li>
                                        <li><a className="footLinks" href="/">Prizes</a></li>
                                        <li><a className="footLinks" href="/">Calculators</a></li>
                                        <li><a className="footLinks" href="/dialysisHome">In Home Dialysis</a></li>
                                        <li><a className="footLinks" href="/dialysisCentre">At Center Dialysis</a></li>
                                        <li><a className="footLinks" href="/aboutUs">About Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 text-sm-center text-md-center">
                                    <a className="footLinks" href="/"><img className="col-xs-4 text-xs-center" src={image1} alt="footerlogo" style={{ margin: '0', padding: '0' }} /></a>
                                    <a className="footLinks" href="/"><img className="col-xs-4 text-xs-center" src={image2} alt="footerlogo" style={{ margin: '0', padding: '0' }} /></a>
                                    <a className="footLinks" href="/"><img className="col-xs-4 text-xs-center" src={image3} alt="footerlogo" style={{ margin: '0', padding: '0' }} /></a>
                                </div>
                                <div className="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul className="list-unstyled quick-links">
                                        <li><a className="footLinks" href="/">FAQ</a></li>
                                        <li><a className="footLinks" href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul className="list-unstyled quick-links">
                                        <div className="footer-social-links">
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                                <i className="fa fa-facebook-f fa-2x" />
                                            </a>
                                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                                                <i className="fa fa-twitter fa-2x" />
                                            </a>
                                        </div>
                                    </ul>
                                    <Button color="success" size="sm" className="joinBlog">Join our Blog</Button>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;