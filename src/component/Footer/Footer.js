import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
       
            // footer area ...///////
            <div className="footer-area">
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Service</h4>
                            <ul>
                                <li><a href="">Features</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Students</a></li>
                                <li><a href="">Page Builder</a></li>
                                <li><a href="">What's new</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Institute</h4>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Try Demo</a></li>
                                <li><a href="">Terms of Course</a></li>
                                <li><a href="">Page Builder</a></li>
                                <li><a href="">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Help Center</h4>
                            <ul>
                                <li><a href="">Help centre</a></li>
                                <li><a href="">Email Us</a></li>
                                <li><a href="">Message Us</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h4>Sign Up to Our Weekly Newslater</h4>
                        <div className="eamil-subscribe-item">
                                <form action="404">
                                <input type="email" placeholder="Email Address"/>
                                <input type="submit" value="sign up"/>
                                </form>
                        </div>
                        <h4>Social</h4>
                        <ul className="social-links icons-footer">
                            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a href=""> <i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
    )
}

export default Footer

