import React from 'react';
import '../style/footer.css';
import { Button } from 'reactstrap';
import image from '../style/images/footerLinks.JPG';
import logo from '../style/images/footerLogo.JPG';


const Footer = () => {

    return (

        <footer>
            <div style={{ backgroundColor: "#8EE080" }}>
                <div id="sticky-footer" class="py-2"></div>
            </div>
            <div style={{ backgroundColor: "#42210B" }}>
                <div id="sticky-footer" class="py-2"></div>
            </div>
            <div className="topFooter" style={{ backgroundColor: "#265725" }}>
                <div id="sticky-footer" class="py-4"></div>
            </div>
            <div className="midFooter" style={{ backgroundColor: "#8EE080" }}>
                <div id="sticky-footer">
                    <div class="container text-center">
                        <div class="container text-center">

                            <section id="footer-grids">
                                <div class="row text-center text-xs-center">

                                    <div class="col-xs-12 col-sm-3 col-md-3 text-sm-left text-md-left">
                                        <a href="/">Important Link</a>
                                    </div>
                                    <div class="col-xs-12 col-sm-3 col-md-3 text-sm-left text-md-left">
                                        <a href="/"><img className="img-footlogo" src={logo} alt="footerlogo" style={{ margin: '0', padding: '0' }} /></a>
                                    </div>
                                    <div class="col-xs-12 col-sm-3 col-md-3 text-sm-left text-md-right">
                                        <a href="/">Help</a>
                                    </div>
                                    <div class="col-xs-12 col-sm-3 col-md-3 text-sm-left text-md-right">
                                        <a href="/">Stay Connected</a>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomFooter" style={{ backgroundColor: "#265725" }}>
                <div id="sticky-footer" class="py-4">
                    <div class="container text-center">

                        <section id="footer-grids">
                            <div class="row text-center text-xs-center">

                                <div class="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul class="list-unstyled quick-links">
                                        <li><a href="/">Terms Of Use</a></li>
                                        <li><a href="/">Privacy</a></li>
                                        <li><a href="/">Copyright</a></li>
                                        <li><a href="/">Sitemap</a></li>
                                    </ul>
                                </div>
                                <div class="col-xs-12 col-sm-2 col-md-2 text-sm-left text-md-left">
                                    <ul class="list-unstyled quick-links">
                                        <li><a href="/">Roadmap</a></li>
                                        <li><a href="/">Prizes</a></li>
                                        <li><a href="/">Calculators</a></li>
                                        <li><a href="/">In Home Dialysis</a></li>
                                        <li><a href="/">At Center Dialysis</a></li>
                                        <li><a href="/">About Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3 text-sm-center text-md-center">
                                    <img className="img-footlink" src={image} alt="footerLinks" />
                                </div>
                                <div class="col-xs-12 col-sm-2 col-md-2 text-sm-right text-md-right">
                                    <ul class="list-unstyled quick-links">
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                                <div class="col-xs-12 col-sm-2 col-md-2 text-sm-right text-md-right">
                                    <ul class="list-unstyled quick-links">
                                        <div className="footer-social-links">
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                                <i className="fa fa-facebook-f fa-2x" />
                                            </a>
                                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                                                <i className="fa fa-twitter fa-2x" />
                                            </a>
                                        </div>
                                    </ul>
                                    <Button className="joinBlog">Join our Blog</Button>
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