import { Link } from "react-router-dom";

export default function Apartment({name, price, img, id}) {
    return (
        <div className="apartment-wrapper">
            <div className="apartment">
                <div className="apartment-img">
                    <img src={img} alt="luxury blue and white interior apartment" />
                </div>
                    <h3 className="pl-1 text-secondary h3">{name}</h3>
                    <div className="pl-1 pr-1 pb-1 display-f align-center justify-between details wrap">
                    <div>
                        <p>{price}</p>
                    </div>
                    <Link className="btn-secondary" to={`/apartments/${id}`}>More</Link>
                </div>
            </div>
        </div>
    )
}