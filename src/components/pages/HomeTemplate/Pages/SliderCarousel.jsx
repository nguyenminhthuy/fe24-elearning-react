import React, { Component } from 'react'
// import Carousel from 'nuka-carousel';

export default class SliderCarousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../../../../img/banner1.jpg')} />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../../img/banner2.jpg')} />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../../img/banner3.jpg')} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        )
    }
}
