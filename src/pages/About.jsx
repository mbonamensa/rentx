import { Link } from "react-router-dom"
import backgroundImg from "../assets/hero-img2.jpg"
import Hero from "../components/Hero"
import { GrMapLocation } from "react-icons/gr";
import { MdLaptopChromebook } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function About() {
    return (
        <>
        <Hero 
            mainText={`Discover RentX: Where Every Stay Feels Like a Getaway`}
            bgImg={backgroundImg}
            hasLink={false}
            height={`50vh`}
        />
        <main className="pt-4 pb-4 bg-accent1">
        <div className="container about-container text-justify">
            <h2 className="text-center mb-2 ">About RentX</h2>
            <p>
            <h3 className="text-secondary mb-1 mt-2">Our Mission</h3>
            At Rentx, our mission is to redefine the short-stay rental experience by providing high-quality, 
            comfortable, and stylish apartments that feel like home. We believe that whether you're traveling 
            for business or leisure, your stay should be seamless, enjoyable, and tailored to your needs.
            </p>

            <br /> <br />
            <h3 className="text-secondary mb-1 mt-2">Our Vision</h3>
            <p>Our vision is to become the leading provider of short-term rental apartments, known for exceptional 
            service, prime locations, and modern amenities. We are committed to offering flexible stay options, 
            easy booking processes, and 24/7 support to ensure your experience with Rentx is unparalleled.
            </p>

            <br /><br />
            <h3 className="text-secondary mb-1 mt-2">Our commitment</h3>
            <p>Founded on the principles of comfort, convenience, and customer satisfaction, Rentx strives to create a 
            home away from home for every guest. We carefully select and maintain our properties to meet the highest 
            standards, so you can relax and focus on what matters most during your stay. 
            </p>

            <br /><br />
            <h3 className="text-secondary mb-3 mt-2">Why choose RentX?</h3>
            <ul className="about-list mb-4">
                <li className="">
                    <GrMapLocation/> 
                    <h4>Prime Locations</h4>
                    <p className="mt-1">Our apartments are located in the heart of vibrant cities, close to major attractions, 
                    business centers, and transportation hubs, making your stay convenient and enjoyable.</p>
                </li>
                <li className="">
                    <RiCustomerService2Fill />
                    <h4>Exceptional Service</h4>
                    <p className="mt-1">Our customer service team is available 24/7 to assist you with any needs or inquiries, 
                    ensuring your stay is smooth and stress-free.</p>
                </li>
                <li className="">
                    <MdLaptopChromebook />
                    <h4>Flexibility and Convenience</h4>
                    <p className="mt-1">With easy booking processes and flexible stay options, Rentx accommodates 
                    your schedule and preferences, providing a tailored experience.</p>
                </li>
                <li className="">
                    <IoBedOutline />
                    <h4>Modern Comforts</h4>
                    <p className="mt-1">Each Rentx apartment is designed with modern aesthetics and equipped with high-quality 
                    furnishings, ensuring a comfortable and stylish stay.</p>
                </li>
            </ul>

            <div className="mt-5 bg-primary br about-cta">
                <p className="mb-2 h2 text-left">Join us at RentX and discover the perfect blend of hospitality and homeliness in every apartment.</p>
                <Link to="/apartments" className="btn-primary text-accent1">Explore our apartments</Link>
            </div>
        </div>
        </main>
        </> 
   )
}
