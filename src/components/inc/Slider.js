import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sliderVideo1 from '../videos/video4.mp4'; // Replace with the path to your video files
import sliderVideo2 from '../videos/video2.mp4';
import sliderVideo3 from '../videos/video3.mp4';
import './Slider.css'; // Import the CSS file

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
                    <div className="video-container">
                        <video className="d-block w-100 slim-image" autoPlay loop muted>
                            <source src={sliderVideo1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="watermark">Led by James Sammy, a guru in Automations.</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="video-container">
                        <video className="d-block w-100 slim-image" autoPlay loop muted>
                            <source src={sliderVideo2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="watermark">Go to about us for more info.</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="video-container">
                        <video className="d-block w-100 slim-image" autoPlay loop muted>
                            <source src={sliderVideo3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="watermark">Contact us by leaving a message: Scroll for more...!</div>
                    </div>
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