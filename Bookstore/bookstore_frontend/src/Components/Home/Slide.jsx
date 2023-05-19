import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../assets/images/slide1.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Slide = () => {
    return (
        <div>
            <section id="home" className="home pt-5 overflow-hidden">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="home-banner home-banner-1">
                                <div className="home-banner-text home-banner-1-text">
                                    <h1>School Reopen Sales</h1>
                                    <h2>for univerities students</h2>
                                    <a href="#" className="btn btn-danger text-uppercase mt-4">Check It Out</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="home-banner home-banner-2">
                                <div className="home-banner-text home-banner-2-text">
                                    <h1>BEST SELLING NOVELS</h1>
                                    <h2>Grab yours now!</h2>
                                    <a href="#" className="btn btn-danger text-uppercase mt-3">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                            <span className="ti-angle-left slider-icon"></span>
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true">
                            <span className="ti-angle-right slider-icon"></span>
                        </span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
        // <Carousel >
        //     <Carousel.Item interval={1000}>
        //         <img
        //             className="d-block w-100"
        //             src={slide1}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //         <div className="home-banner-text">
        //         <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </div>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item interval={1000}>
        //         <img
        //             className="d-block w-100"
        //             src={slide1}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>

    )
}


export default Slide
