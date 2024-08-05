import React from 'react';
import TV1 from '../images/tv4.PNG';
import TV2 from '../images/tv4.PNG';
import TV3 from '../images/tv4.PNG';
import TV4 from '../images/tv4.PNG';
import TV5 from '../images/tv1.PNG';
import TV6 from '../images/tv1.PNG';
import TV7 from '../images/tv1.PNG';
import TV8 from '../images/tv1.PNG';
import { Link } from 'react-router-dom';

function Purchase() {
    const tvs = [
        { id: 1, src: TV1, title: "<Samsung QLED 55'' 4K>", price: "KES 120,000" },
        { id: 2, src: TV2, title: "<LG OLED 55''-Inch''>", price: "KES 160,000" },
        { id: 3, src: TV3, title: "<Sony Bravia 65'' 4K", price: "KES 150,000" },
        { id: 4, src: TV4, title: "<TCL 50'' 4K UHD>", price: "KES 80,000" },
        { id: 5, src: TV5, title: "<Hisense 50'' ULED>", price: "KES 95,000" },
        { id: 6, src: TV6, title: "<VISION PLUS 55'' > ", price: "KES 45,000" },
        { id: 7, src: TV7, title: "<VITRON 55''>", price: "KES 40,000" },
        { id: 8, src: TV8, title: "<GLD 55''>", price: "KES 35,000" },
    ];

    const renderTVSection = (startIndex) => (
        <div className="row">
            {tvs.slice(startIndex, startIndex + 4).map(tv => (
                <div key={tv.id} className="col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={tv.src} className="w-100 border-bottom" alt={tv.title} />
                        <div className="card-body">
                            <h5>{tv.title}</h5>
                            <p>{tv.price}</p>
                            <Link to="/contact" className="btn btn-link">Order Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="section border-top">
            <div className="container">
                <div className="col-md-12 mb-4 text-center">
                    <h3 className="main-heading">TVs On Sale</h3>
                    <div className="underline mx-auto"></div>
                </div>
                {renderTVSection(0)}
                {renderTVSection(4)}
                {renderTVSection(8)}
            </div>
        </section>
    );
}

export default Purchase;