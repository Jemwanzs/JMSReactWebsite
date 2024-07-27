import React from 'react';
import ImgPortfolio1 from '../images/portfolio1.jpg'
import ImgPortfolio2 from '../images/clientele1.PNG'
import ImgPortfolio3 from '../images/clientele2.jpg'
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-6 text-center">
                        <h3 className="main-heading">Our Portfolio</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <img src={ImgPortfolio1} className="w-100 border-bottom" alt="Portfolio" />
                            <div className="card-body">
                                <h6>My Projects</h6>
                                <div className="underline"></div>
                                <p>Here are some of the projects we have worked on:</p>
                                <ul>
                                    <li>Loan Calculators</li>
                                    <li>Mortgage Calculators</li>
                                    <li>Simple Math Calculator</li>
                                    <li>Plots Management System: Prime Plots Property</li>
                                    <li>Payroll Management Software: EBMorgane</li>
                                    <li>Chamas Software: Chama Mangomi</li>
                                    <li>Harvelsmatt: Tangara School</li>
                                    <li>School Management System: Tangara School</li>
                                    <li>Loans Manager: Simos Credit</li>
                                </ul>
                                <Link to="/" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <img src={ImgPortfolio2} className="w-100 border-bottom" alt="Portfolio" />
                                <img src={ImgPortfolio3} className="w-100 border-bottom" alt="Portfolio" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Portfolio;