import offerImg1 from "../assets/offer-img1.png"
import offerImg2 from "../assets/offer-img2.png"
import offerImg3 from "../assets/offer-img3.png"


export default function Offers() {
    return (
        <div className="what-we-offer">
            <div className="">
                <div className="offerings display-f column">
                    <div className="offering">
                        <div className="offering-img">
                            <img className="w-10 br" src={offerImg1} alt="Comfort & Style" />
                        </div>
                        <div>
                            <h3>Comfort & Style</h3>
                            <p>Our apartments are fully furnished with contemporary and stylish decor.</p>
                            <br />
                            <p>Enjoy modern amenities including high-speed Wi-Fi, smart TVs, and equipped kitchens.</p>
                            <br /> 
                            <p>Experience total-like comfort with the privacy and space of an apartment.</p>
                        </div>
                    </div>
                    <div className="offering">
                        <div className="offering-img">
                            <img className="w-10 br" src={offerImg2} alt="Prime Locations" />
                        </div>
                        <div>
                            <h3>Prime Locations</h3>
                            <p>Stay in the heart of the city with easy access to major attractions.</p> 
                            <br />
                            <p>Choose a quiet neighborhood for a more relaxed and peaceful stay.</p> 
                            <br />
                            <p>Enjoy proximity to public transportation, dining, and shopping.</p>
                        </div>
                    </div>
                    <div className="offering">
                        <div className="offering-img">
                            <img className="w-10 br" src={offerImg3} alt="Flexible Stays" />
                        </div>
                        <div>
                            <h3>Flexible Stays</h3>
                            <p>Book for a few days, weeks, or even months – we fit your schedule.</p>
                            <br />
                            <p>Enjoy the flexibility to extend your stay with ease.</p>
                            <br />
                            <p>Perfect for business trips, vacations, or temporary relocations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}