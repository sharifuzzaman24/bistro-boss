import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';
import image1 from '../../../assets/home/01.jpg';
import image2 from '../../../assets/home/02.jpg';
import image3 from '../../../assets/home/03.jpg';
import image4 from '../../../assets/home/04.jpg';
import image5 from '../../../assets/home/05.jpg';
import image6 from '../../../assets/home/06.jpg';

const Banner = () => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <Carousel 
            showArrows={true} 
            autoPlay={true} 
            infiniteLoop={true} 
            showThumbs={true}
            thumbWidth={100}
            dynamicHeight={true} 
            interval={3000}
            centerMode={true}
        >
            {
                images.map((image, idx) => (
                    <div key={idx}>
                        <img src={image} alt={`Slide ${idx + 1}`} />
                    </div>
                ))
            }
        </Carousel>
    );
};

export default Banner;
