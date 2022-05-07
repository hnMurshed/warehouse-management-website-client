import React from 'react';
import './Benner.css';
import slide1 from '../../../images/benner/slide-1.jpg';
import slide2 from '../../../images/benner/slide-2.jpg';
import slide3 from '../../../images/benner/slide-3.jpg';

const carousel1Style = {
    backgroundImage: `url(${slide1})`,
    height: '100vh',
    marginTop: '-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const carousel2Style = {
    backgroundImage: `url(${slide2})`,
    height: '100vh',
    marginTop: '-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const carousel3Style = {
    backgroundImage: `url(${slide3})`,
    height: '100vh',
    marginTop: '-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const Benner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-1 carousel-item active">
                    <div style={carousel1Style} className='d-flex align-items-center justify-content-center'>
                        <div className='carousel-content'>
                            <h3>Welcome to Vegetable House</h3>
                            <h2>Vegetable & Food</h2>
                            <h3>Vegetable Provides Health Benefits</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-2 carousel-item">
                    <div style={carousel2Style} className='d-flex align-items-center justify-content-center'>
                        <div className='carousel-content'>
                            <h3>Welcome to Vegetable House</h3>
                            <h2>Organic Health Food</h2>
                            <h3>Nutrients and Health Benefits</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-3 carousel-item">
                    <div style={carousel3Style} className='d-flex align-items-center justify-content-center'>
                        <div className='carousel-content'>
                            <h3>Welcome to Vegetable House</h3>
                            <h2>Organic & Fresh</h2>
                            <h3>Provide Nutrients Vital for Health</h3>
                        </div>
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
};

export default Benner;