import React from 'react';
import VMC from './inc/Vmc.js';

function About() {
    return (
        <div>
            <section className="py-4 bg=info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us

                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Welcome to JMS Solutions Kinya, where innovation meets excellence. Led by James Sammy, a seasoned full-stack developer
                        with over six years of experience, we specialize in tailored automation solutions for businesses. From payroll and inventory
                        management softwares to school and loan systems, from real estate to sacco management systems, we transform your vision into
                        reality with cutting-edge technology and impeccable service. Let's build the future together.
                    </p>
                </div>

            </section>

            {/*Call Vision, Mission, Values*/}
            <VMC />
        </div>
    );
}
export default About;

/*import ImgAbout1 from '../images/slider1.jpg'
import ImgAbout2 from '../images/about1.jpg'
import { Link } from 'react-router-dom';

<section className="section border-top">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-6 text-center">
                <h3 className="main-heading">About Us</h3>
                <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-6">
                <div className="card shadow">
                    <img src={ImgAbout1} className="w-100 border-bottom" alt="About" />
                    <div className="card-body">
                        <h6>Expertise</h6>
                        <div className="underline"></div>
                        <p>Full-Stack Dev: FE (CSS, JS, SPA) | BE (NodeJS, Python, PHP, GO)</p>
                        <p>DB (MySQL, MongoDB, SQLite, PostGres) | DevOps (CI, CD, AWS)</p>
                        <p>Mobile App Dev (Hybrid Apps / IOS / Android)</p>
                        <p>Macros | Excel VBA | Google Sheets Automations | Payroll | Tax | Credit & Risk | Data Analyst</p>
                        <Link to="/" className="btn btn-link">Read More</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card shadow">
                    <img src={ImgAbout2} className="w-100 border-bottom" alt="About" />
                    <div className="card-body">
                        <h6>Who is James?</h6>
                        <div className="underline"></div>
                        <p>James Sammy is a highly skilled full-stack developer and the driving force behind JMS Solutions Kinya. With over six years
                            of experience, he excels in Software Developments, Google Sheets automations, Advanced MS Excel automationsin,
                            Payroll and tax compliance, and Data analysis.</p>
                        <p>James consistently achieved First-Class honors in his university, excelling
                            in Pure and Applied Mathematics, Actuarial Science, and IT. James did not stop at that, he furthered his scholar and majored in Software Enginerring.
                            Known for his independence and goal-oriented mindset, James transforms complex business needs into seamless, automated solutions.
                            Let's build the future together with JMS Solutions Kinya!</p>
                        <Link to="/" className="btn btn-link">Read More</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>*/