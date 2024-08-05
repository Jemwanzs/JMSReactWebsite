import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row text-center text-md-left">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6 className="footer-heading">Company Information</h6>
                        <hr className="footer-divider" />
                        <p className="footer-text">
                            Welcome to JMS Solutions Kinya, where innovation meets excellence. Led by James Sammy, a seasoned full-stack developer
                            with over six years of experience, we specialize in tailored automation solutions for businesses. From payroll and inventory
                            management software to school and loan systems, from real estate to sacco management systems, we transform your vision into
                            reality with cutting-edge technology and impeccable service. Let's build the future together.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6 className="footer-heading">Quick Links</h6>
                        <hr className="footer-divider" />
                        <div><Link to="/" className="footer-link">Home</Link></div>
                        <div><Link to="/about" className="footer-link">About</Link></div>
                        <div><Link to="/services" className="footer-link">Services</Link></div>
                        <div><Link to="/portfolio" className="footer-link">Portfolio</Link></div>
                        <div><Link to="/purchase" className="footer-link">Purchase</Link></div>
                        <div><Link to="/contact" className="footer-link">Contact</Link></div>
                        <div><Link to="/blog" className="footer-link">Blog</Link></div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6 className="footer-heading">Contact Information</h6>
                        <hr className="footer-divider" />
                        <p className="footer-text mb-1">#00100, Nairobi</p>
                        <p className="footer-text mb-1">+254798-99-34-04</p>
                        <p className="footer-text mb-1">+254712-03-57-68</p>
                        <p className="footer-text mb-1">jamosammy@gmail.com</p>
                        <p className="footer-text mb-1">cc. jms1kinya@gmail.com</p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;