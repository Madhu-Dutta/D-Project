import React, { Component } from "react";
import '../style/contact.css';
import image from '../style/images/mapLoc.JPG';

export default class Contact extends Component {
    render() {
        return (
            <div className="container-wrapper">

                <div id="header" className="card" >
                    <div className="row no-gutters">

                        <div className="col-md-6" style={{ backgroundColor: "#265725" }}>
                            <h1>Contact Us.</h1>
                            <div className="w-100 text">
                                <p>We love a feedback! Send us a message today and we'll get back to you within 2 business days.</p>

                                <form>
                                    <div className="form-group">

                                        <input
                                            type="text" placeholder="Name "
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">

                                        <input
                                            type="text" placeholder="Email "
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">

                                        <input
                                            type="text" placeholder="Phone "
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" placeholder="Write a message" class="form-control">
                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value=">"
                                            className="submitBtn" style={{ float: 'right' }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 clearfix" style={{ backgroundColor: "#2D652F" }}>
                            <h1>Where are we?</h1>
                            <div className="text">
                                <p>
                                    Come say hello! We're open Monday-Friday.
                            </p>
                                <p className="address">
                                    12th High Street,
                                    Northcote 3070
                                Melbourne, Victoria AUS.<br /><br />

                                    Phone: +0295926779
                                    Fax Number: 9593 6227
                            </p>
                                <img className="img-fluid" src={image} alt="GoogleLoc" />

                                <p className="social-links-list">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                        <i className="fa fa-facebook-f fa-2x" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                                        <i className="fa fa-twitter fa-2x" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5 mid-grid">
                    <h2>Visit some of our friends.</h2>
                    <div className="card-deck">

                        <div className="card card-columns">
                            <div className="card-body text-center">
                                <h5>Green Nephrology</h5>
                                <p className="card-text contactLoc"> Praharan,Melbourne,VIC </p>

                                <p className="card-text">
                                    <span><i className="icon fa fa-phone" />07 9596 7287</span><br />
                                    <span><i className="icon fa fa-envelope" />infognephrology.com</span><br />
                                    <span><i className="icon fa fa-window-maximize" />gnephrology.com.au</span><br />
                                </p>

                            </div>
                        </div>
                        <div className="card card-columns">
                            <div className="card-body text-center">
                                <h5>Green Nephrology</h5>
                                <p className="card-text contactLoc"> Praharan,Melbourne,VIC </p>

                                <p className="card-text">
                                    <span><i className="icon fa fa-phone" />07 9596 7287</span><br />
                                    <span><i className="icon fa fa-envelope" />infognephrology.com</span><br />
                                    <span><i className="icon fa fa-window-maximize" />gnephrology.com.au</span><br />
                                </p>

                            </div>
                        </div>
                        <div className="card card-columns">
                            <div className="card-body text-center">
                                <h5>Green Nephrology</h5>
                                <p className="card-text contactLoc"> Praharan,Melbourne,VIC </p>

                                <p className="card-text">
                                    <span><i className="icon fa fa-phone" />07 9596 7287</span><br />
                                    <span><i className="icon fa fa-envelope" />infognephrology.com</span><br />
                                    <span><i className="icon fa fa-window-maximize" />gnephrology.com.au</span><br />
                                </p>

                            </div>
                        </div>
                        <div className="card card-columns">
                            <div className="card-body text-center">
                                <h5>Green Nephrology</h5>
                                <p className="card-text contactLoc"> Praharan,Melbourne,VIC </p>

                                <p className="card-text">
                                    <span><i className="icon fa fa-phone" />07 9596 7287</span><br />
                                    <span><i className="icon fa fa-envelope" />infognephrology.com</span><br />
                                    <span><i className="icon fa fa-window-maximize" />gnephrology.com.au</span><br />
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
