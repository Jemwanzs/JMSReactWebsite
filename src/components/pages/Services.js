import React from 'react';
import Service1 from '../images/code5.jpg'
import Service2 from '../images/googlesheets1.jpg'
import Service3 from '../images/analysis1.jpg'
import { Link } from 'react-router-dom';

function Services() {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service1} className="w-100 border-bottom" alt="Services" />
                            <div className="card-body">
                                <p>JMS Solutions, a pioneering software development startup, endeavors to be the ultimate solution for businesses
                                    by offering cutting-edge automation services. At the helm is James Sammy, the esteemed Full-Stack
                                    Software Developer.</p>
                                <h6>Software Development</h6>
                                <div className="underline"></div>
                                <ul>
                                    <li>Custom software solutions to meet unique business needs.</li>
                                    <ul>
                                        <li>Inventory Systems</li>
                                        <ul>
                                            <li>Developing systems to manage and track inventory efficiently.</li>
                                            <li>Integrating inventory management with other business processes.</li>
                                        </ul>
                                        <li>School Systems</li>
                                        <li>Payroll System</li>
                                        <ul>
                                            <li>Automating payroll processing and tax calculations.</li>
                                            <li>Ensuring compliance with regulatory requirements.</li>
                                        </ul>
                                        <li>Real Estate</li>
                                        <li>Sacco Manager</li>
                                        <li>Loan Modules</li>
                                        <li>POS</li>
                                    </ul>
                                    <li>Development of web and mobile applications.</li>
                                </ul>
                                <Link to="/" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service2} className="w-100 border-bottom" alt="Services" />
                            <div className="card-body">
                                <p>JMS Solutions, a pioneering software development startup, endeavors to be the ultimate solution for businesses
                                    by offering cutting-edge automation services. At the helm is James Sammy, the esteemed Full-Stack
                                    Software Developer.</p>
                                <h6>Google Sheets Automations</h6>
                                <div className="underline"></div>
                                <ul>
                                    <li>Streamlining processes with custom scripts and automations.</li>
                                    <li>Integrating Google Sheets with other tools and systems.</li>
                                </ul>
                                <h6>Advanced MS Excel Automations</h6>
                                <div className="underline"></div>
                                <ul>
                                    <li>Creating complex Excel models and automations.</li>
                                    <li>Enhancing productivity with advanced Excel functionalities.</li>
                                </ul>
                                <Link to="/" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service3} className="w-100 border-bottom" alt="Services" />
                            <div className="card-body">
                                <p>JMS Solutions, a pioneering software development startup, endeavors to be the ultimate solution for businesses
                                    by offering cutting-edge automation services. At the helm is James Sammy, the esteemed Full-Stack
                                    Software Developer.</p>
                                <h6>Data Analysis</h6>
                                <div className="underline"></div>
                                <ul>
                                    <li>Analyzing business data to derive actionable insights.</li>
                                    <li>Visualizing data for better decision-making.</li>
                                </ul>
                                <h6>Business Automation</h6>
                                <div className="underline"></div>
                                <ul>
                                    <li>Transforming complex business processes into seamless automated workflows.</li>
                                    <li>Tailoring automation solutions to specific business requirements.</li>
                                </ul>
                                <Link to="/" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Services;