import { Link } from "react-router-dom";
import backgroundImg from "../assets/bottom-cta-img.png"


export default function BottomCTA() {
    const bgStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "650px"
    }

    return (
        <div className="bottom-cta relative container z-10 display-f align-center justify-center" style={bgStyle}>
            <div className="relative z-10 display-f column align-center text-accent1 justify-center text-center gap-3">
                <h2 className="h2">Ready to Experience Comfort and Convenience?</h2>
                <p className="cta-text subtext">Your perfect short-stay apartment is just a click away. Whether you're here for business, a family visit, or a city adventure, RentX has the ideal place for you. Don't wait—book now and make your next stay unforgettable.</p>
                <Link to="/apartments" className="btn-tertiary mt-2">Browse Apartments Now</Link>
            </div>
        </div>
    )

}