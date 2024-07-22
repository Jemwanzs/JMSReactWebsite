import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import VMC from './inc/Vmc.js';
import Services from './Services.js';
import Portfolio from './Portfolio.js';

function Home() {
    return (
        <div>
            <Slider />
            <div>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Our Company</h3>
                                <div className="underline mx-auto"></div>
                                <p>
                                    Welcome to JMS Solutions Kinya, where innovation meets excellence. Led by James Sammy, a seasoned full-stack developer
                                    with over six years of experience, we specialize in tailored automation solutions for businesses. From payroll and inventory
                                    management softwares to school and loan systems, from real estate to sacco management systems, we transform your vision into
                                    reality with cutting-edge technology and impeccable service. Let's build the future together.
                                </p>
                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Call Vision, Mission, Values*/}
                <VMC />
                {/*Our Services*/}

                <Services />
                <Portfolio />

            </div>
        </div>
    );
}

export default Home;