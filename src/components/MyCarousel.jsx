import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MyCarousel(props) {
    return (
        <>
            <Carousel
                showArrows={false}
                showIndicators={true}
                autoPlay={true} infiniteLoop={true}
                showStatus={false} showThumbs={false}
                interval={12000} useKeyboardArrows={true}
            >

                {props.children}
            </Carousel>
        </>

    )
}
