import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MyCarousel({ children }: { children: React.ReactChild[] }) {
    return (
        <>
            <Carousel
                showArrows={false}
                showIndicators={true}
                autoPlay={true} infiniteLoop={true}
                showStatus={false} showThumbs={false}
                interval={12000} useKeyboardArrows={true}
            >

                {children}
            </Carousel>
        </>

    )
}
