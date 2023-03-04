import React from 'react'

import './styles.scss'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export const HeroSlider = () => {

    const slideStyle = (bgImageUrl: string) => {
        return {
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    }
    return (
        <div className='slide-container'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={slideStyle('./hero-bg-slide-1.svg')}>
                    <div className='h-full  flex flex-col justify-center items-center'>
                        <h1 className='hero-slide-main-text'>A <span style={{ color: "#00B2FF" }}>broad selection</span>  of courses</h1>
                        <p className='hero-slide-text'>Choose from 250+ online audio courses with new <br /> additions published every month</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={slideStyle('./hero-bg-slide-1.svg')}>
                    <div className='h-full  flex flex-col justify-center items-center'>
                        <h1 className='hero-slide-main-text'>A <span style={{ color: "#00B2FF" }}>broad selection</span>  of courses</h1>
                        <p className='hero-slide-text'>Choose from 250+ online audio courses with new <br /> additions published every month</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={slideStyle('./hero-bg-slide-1.svg')}>
                    <div className='h-full  flex flex-col justify-center items-center'>
                        <h1 className='hero-slide-main-text'>A <span style={{ color: "#00B2FF" }}>broad selection</span>  of courses</h1>
                        <p className='hero-slide-text'>Choose from 250+ online audio courses with new <br /> additions published every month</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
