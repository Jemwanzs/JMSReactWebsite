import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <Link to="/" class="navbar-brand text-white">JMS Solutions Kinya</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link text-white">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link text-white">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/services" className="nav-link text-white">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/portfolio" className="nav-link text-white">Portfolio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/purchase" className="nav-link text-white">Purchase</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link text-white">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                    </div>


                </div>

            </div>

        </div>

    );
}
export default Navbar;