import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Hero from "./Hero";
import backgroundImg from "../assets/hero-img2.jpg"
import aptImage1 from "../assets/hero-img1.jpg"
import aptImage2 from "../assets/hero-img2.jpg"
import aptImage3 from "../assets/hero-img3.jpg"
import aptImage4 from "../assets/hero-img1.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

function ApartmentDetail() {
    
    const params = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    console.log("params:", params)

    return (
        <>
        <Hero 
            mainText={`Explore all our aparatments`}
            bgImg={backgroundImg}
            hasLink={false}
            height={`50vh`}
        />
        <main className="pt-4 pb-4 bg-accent1">
            <div className="container mt-4">
                <div className="apt-detail-container">
                    <Swiper
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper: null}}
                        modules={[Thumbs, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="" src={aptImage1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage4} alt="" />
                        </SwiperSlide>
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[Thumbs]}
                        watchSlidesProgress={true}
                        slidesPerView={4}
                        spaceBetween={15}
                        className="mySwiper2"
                    >
                        
                        <SwiperSlide>
                            <img className="" src={aptImage1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src={aptImage4} alt="" />
                        </SwiperSlide>

                    </Swiper>
                    <div className="apt-detail mt-2">
                        <h2 className="h2 text-left text-secondary">Aram Delux room</h2>
                        <div className="display-f align-center">
                            <IoLocationOutline />
                            <p className="apt-detail-location">Phoenix road, Accra</p>
                        </div>
                        <p className="mt-1 apt-detail-price text-secondary">from $200.00/night</p> 
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>

                <div className="apt-detail-container mt-4">
                    <h3 className="mb-2 text-secondary">Amenitites</h3>
                    <ul className="amenities-list">
                        <li>Double bed</li>
                        <li>Balcony</li>
                        <li>Bathroom</li>
                        <li>Shower</li>
                        <li>Shampoo and soap</li>
                        <li>Hairdryer</li>
                        <li>Slippers</li>
                        <li>Wardrobe</li>
                        <li>Working table</li>
                        <li>Mini bar</li>
                        <li>Satellite TV</li>
                        <li>Telephone</li>
                        <li>Wireless connect</li>
                        <li>Air conditioner</li>
                        <li>220 AC</li>
                    </ul>
                    </div>

                <div className="apt-detail-container mt-4">
                <form>
                    <h3 className="mb-2 text-secondary">Send booking request</h3>
                    <div className="name-email-container">
                        <div className="input-container">
                            <label className="display-b mb-1" htmlFor="name">Name:</label>
                            <input className="pl-2 pr-2" type="text" id="name" name="name" required />
                        </div>
                        <div className="input-container">
                            <label className="display-b mb-1" htmlFor="email">Email:</label>
                            <input className="pl-2 pr-2" type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="textarea-container mt-3 mb-3">
                        <label className="display-b mb-1" htmlFor="message">Message:</label>
                        <textarea className="pl-2 pr-2 pt-2" id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button className="btn submit-btn" type="submit">Send Request</button>
                </form>
                </div>
                </div>
        </main>
        </>
    )
}

export default ApartmentDetail