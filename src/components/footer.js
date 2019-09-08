import React from 'react';
import '../style/footer.css';

const Footer = () => (    
        <div className="site-footer">
            <h4 className="text-center">
                The Green Nephrology Team.
            </h4>
            <p className="text-center">Follow us on Social Media</p>
            <div className="footer-social-links">
                <ul className="social-links-list">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                            <i className="fa fa-facebook-f fa-2x" />
                        </a>
                    </li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                            <i className="fa fa-twitter fa-2x" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )


export default Footer;