import React from 'react';
import "./Banner.css";
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider1.png';
import slider2 from '../../images/slider/slider2.png';
import slider4 from '../../images/slider/slider4.png';
import slider5 from '../../images/slider/slider5.png';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100 img-resize"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="slider-title">
                        <h1>best hotesl</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-resize"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="slider-title">
                        <h1>Asian Islands</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-resize"
                        src={slider4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="slider-title">
                        <h1>Thailand <span>Last Minute</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-resize"
                        src={slider5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="slider-title">
                        <h1>Thailand <span>Last Minute</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;