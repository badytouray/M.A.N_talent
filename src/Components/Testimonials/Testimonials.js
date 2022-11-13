
import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Footer from "../Footer/Footer"
import "./Testimonials.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Testi from "./massage.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const data = [
    { 
        id: 1,
        username: "Badman Bady",
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
        id: 2,
        username: "Badman Bady",
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
        id: 3,
        username: "Badman Bady",
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
        id: 4,
        username: "Badman Bady",
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
        id: 5,
        username: "Badman Bady",
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
        id: 6,
        username: "Badman Bady",
        testimonial : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
]




function Testimonials() {
    return (
        <>
        <h1>What customers are saying about us</h1>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        >
        {data.map(user => (
            <SwiperSlide key={user.id} className="slide">
                <div className="slide-content">
                    <div className="user-image">
                        <img src={Testi} className="user-photo" />
                    </div>
                    <h5>{user.username}</h5>
                    <p className="user-testimonial">
                        " <i>{user.testimonial}</i> "
                    </p>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
        <Footer />
        </>
    );
}


export default Testimonials;