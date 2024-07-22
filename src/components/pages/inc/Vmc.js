import React from "react";
//Vision, Mission, Values
function VMC() {
    return (
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center"> {/*mb means -margin botton*/}
                        <h3 className="main-heading">Vision, Mission, & Values</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6>Our Vision</h6>
                        <p>
                            To be the leading provider of innovative and reliable automation solutions, empowering businesses across Africa
                            to achieve operational excellence and transformative growth.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6>Our Mission</h6>
                        <p>
                            At JMS Solutions Kinya, our mission is to deliver tailored, cutting-edge automation solutions that enhance efficiency,
                            accuracy, and productivity for our clients. We are committed to leveraging technology to solve complex business
                            challenges and drive sustainable success.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6>Our Core Values</h6>
                        <p>Innovation</p>
                        <p>Excellence</p>
                        <p>Integrity</p>
                        <p>Customer-Centricity</p>
                    </div>
                </div>
            </div>
        </section>
    );
} export default VMC;