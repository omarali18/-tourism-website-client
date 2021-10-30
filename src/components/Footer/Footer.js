import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container">

                <div className="row p-3 mx-auto footer-deatel">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-5 col-12 col-sm-12">
                        <h3 className="fw-light">About Us</h3>
                        <p><small className="visits">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis.</small></p>

                        <h6 className="visits"><i className="fas fa-phone-alt font-color"></i> 1-677-124-44227</h6>
                        <br />
                        <h6 className="visits"><i className="fas fa-map-marker-alt font-color"></i> 184 Main Collins Street</h6>
                    </div>
                    <div className="  p-3 col-lg-4 col-md-4 col-12 col-sm-12">
                        <h2>Latest Posts</h2>
                        <h5 ><a className="font-color ancor-link" href="">August 30, 2017</a></h5>
                        <h4><a className="ancor-link" href="">How To Take Better Photos?</a></h4>
                        <br /><br />
                        <h5 className="font-color"><a className="font-color ancor-link" href="">August 30, 2017</a></h5>
                        <h4><a className=" ancor-link" href="">14 Things To See And Do When Visiting Kyoto</a></h4>

                    </div>
                    <div className="social-media p-3 col-lg-3 col-md-3 col-12 col-sm-12">
                        <h3>OUR SOCIAL MEDIA</h3>
                        <i className="fab fa-facebook-square font-color"></i>
                        <i className="fab fa-twitter font-color"></i>
                        <i className="fab fa-youtube font-color"></i>
                        <i className="fab fa-linkedin font-color"></i>
                    </div>
                </div>
            </div>
            <div className="Copyright">
                <p>Copyright &copy; 2021 All rights reserved | IT Department .</p>
            </div>
        </div>
    );
};

export default Footer;