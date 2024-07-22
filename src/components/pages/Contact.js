import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_ra9936u', 'template_yhulkir', formData, 'dKjIUTAd9JasJPqGX')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setFormData({
            fullName: '',
            phoneNumber: '',
            emailAddress: '',
            notes: ''
        });
    };

    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="mb-1">Full Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Phone Number:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Email Address:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                name="emailAddress"
                                                value={formData.emailAddress}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Notes:</label>
                                            <textarea
                                                rows="3"
                                                className="form-control"
                                                placeholder="Type your notes here"
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group py-3">
                                            <button type="submit" className="btn btn-primary shadow">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>Westlands Avenue, 00100, Nairobi</p>
                                    <p>Tel1: +254798-99-34-04</p>
                                    <p>Tel2: +254712-03-57-68</p>
                                    <p>Email: jamosammy@gmail.com</p>
                                    <p>Email cc: jms1kinya@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

/*
///

import React from 'react';

function Contact() {
    return (
        <div>
            <section className="py-4 bg=info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <form action="https://formspree.io/f/mzzpznlj" method="POST">
                                        <div className="form-group">
                                            <label className="mb-1">Full Name:</label>
                                            <input type="text" className="form-control" placeholder='enter full name' required />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Phone Number:</label>
                                            <input type="text" className="form-control" placeholder='enter tel...' required />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Email Address:</label>
                                            <input type="text" className="form-control" placeholder='enter your email address' required />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Notes:</label>
                                            <textarea row="3" className="form-control" placeholder='type your notes here' />
                                        </div>
                                        <div className="form-group py-3">
                                            <button type="button" className="btn btn-primary shadow">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>Westlands Avenue, 00100, Nairobi</p>
                                    <p>Tel1: +254798-99-34-04</p>
                                    <p>Tel2: +254712-03-57-68</p>
                                    <p>Email: jamosammy@gmail.com</p>
                                    <p>Email cc. jms1kinya@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    );
}
export default Contact;

//
/////

/*
<div className='card mt-4'>
    <div className='card-body'>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/mzzpznlj" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <p>Or contact me directly at:</p>
        <ul>
            <li>Email: <a href="mailto:jamosammy@gmail.com">jamosammy@gmail.com</a></li>
            <li>Mobile: +254798993404</li>
        </ul>
    </div>
</div>
*/
