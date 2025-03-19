import Apartment from "../components/Apartment"
import Offers from "../components/Offers"
import { CgArrowLongRight } from "react-icons/cg";
import TestimonialCard from "../components/TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import backgroundImg from "../assets/hero-img1.jpg"

import {testimonialsData} from "../testimonials"


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import BottomCTA from "../components/BottomCTA";
import Hero from "../components/Hero";
import apartmentImg from "../assets/apartment-img1.png"


export default function Home() {

    const testimonialElements = testimonialsData.map((data, i) => {
        return <SwiperSlide key={i}>
            <TestimonialCard 
                name={data.name}
                img={data.img}
                testimonial={data.testimonial}
            />
        </SwiperSlide>
    })    

    return (
        <>
        <Hero 
            mainText={`Find Your Perfect Short-Stay Apartment with RentX`}
            subText={`Discover hassle-free, comfortable, and stylish apartments for your 
            short-term stay in the city.
            Whether for business or leisure, 
            RentX has the perfect home away from home for you.`}
            bgImg={backgroundImg}
            linkText={`Browse Apartments`}
            hasLink={true}
            height={`80vh`}
        />
        <main className="pt-4 pb-4 bg-accent1">
            <div className="container">
            <section>
                <div className="popular-apartments-text display-f column align-center justify-between mb-3">
                <h2 className="h2">Popular Apartments</h2>
                <Link to="/apartments" className="display-f align-center browse-all text-secondary">Browse all <CgArrowLongRight /></Link>
                </div>
                <div className="popular-apartment-section display-f align-center justify-between wrap col-sm-12 col-md-6">
                <Apartment name="Delux room" price="$200/night" img={apartmentImg} />
                <Apartment name="Delux room" price="$200/night" img={apartmentImg} />
                <Apartment name="Delux room" price="$200/night" img={apartmentImg} />
                </div>
            </section>
            <section className="offers-section">
                <h2 className="mb-3 h2">What we offer</h2>
                <Offers />
            </section>
            <section className="testimonial-section">
                <h2 className="mb-3 h2">What our renters say</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    style={{
                        paddingBottom: "6rem"
                    }}
                >
                    <div className="p-3">
                        {testimonialElements}
                    </div>
                </Swiper>
            </section>
            </div>
            <section>
                <BottomCTA />
            </section>
        </main>
        </>
    )
}
