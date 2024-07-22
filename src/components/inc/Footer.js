import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h6>Company Information</h6>
                        <hr />
                        <p className="text-white">
                            Welcome to JMS Solutions Kinya, where innovation meets excellence. Led by James Sammy, a seasoned full-stack developer
                            with over six years of experience, we specialize in tailored automation solutions for businesses. From payroll and inventory
                            management softwares to school and loan systems, from real estate to sacco management systems, we transform your vision into
                            reality with cutting-edge technology and impeccable service. Let's build the future together.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/services">Services</Link></div>
                        <div><Link to="/portfolio">Portfolio</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/blog">Blog</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#00100, Nairobi</p></div>
                        <div><p className="text-white mb-1">+254798-99-34-04</p></div>
                        <div><p className="text-white mb-1">+254712-03-57-68</p></div>
                        <div><p className="text-white mb-1">jamosammy@gmail.com</p></div>
                        <div><p className="text-white mb-1">cc. jms1kinya@gmail.com</p></div>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default Footer;