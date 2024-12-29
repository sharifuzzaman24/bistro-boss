import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/home/slide1.jpg';
import image2 from '../../../assets/home/slide2.jpg';
import image3 from '../../../assets/home/slide3.jpg';
import image4 from '../../../assets/home/slide4.jpg';
import image5 from '../../../assets/home/slide5.jpg';

const categories = [
    { name: 'SALADS', image: image1 },
    { name: 'SOUPS', image: image2 },
    { name: 'PIZZAS', image: image3 },
    { name: 'DESSERTS', image: image4 },
    { name: 'BURGERS', image: image5 }
];

const TopCategorys = () => {
    return (
        <>
            <SectionTitle heading={'Order Online'} subHeading={'From 11:00am to 10:00pm'} />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className='h-[450px]'>
                        <div className='relative'>
                            <img className='w-full object-cover' src={category.image} alt={category.name} />
                            <h2 className='text-2xl font-medium text-white shadow-md text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
                                {category.name}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TopCategorys;
