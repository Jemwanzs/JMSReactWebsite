import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sliderVideo1 from '../videos/video1.mp4'; // Replace with the path to your video files
import sliderVideo2 from '../videos/video2.mp4';
import sliderVideo3 from '../videos/video3.mp4';

function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide slim-slider" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <video className="d-block w-100 slim-image" autoPlay loop muted>
                        <source src={sliderVideo1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="carousel-item">
                    <video className="d-block w-100 slim-image" autoPlay loop muted>
                        <source src={sliderVideo2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="carousel-item">
                    <video className="d-block w-100 slim-image" autoPlay loop muted>
                        <source src={sliderVideo3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;