import testimonialImg1 from "../assets/testimonials-img1.png"

export default function TestimonialCard({name, img, testimonial}) {
    return (
        <div className="testimonial-card">
            <img className="w-10" src={img} alt="" />
            <div className="mt-1 p-2">
                <h4 className="mb-1">{name}</h4>
                <p>{testimonial}</p>
            </div>
        </div>
    )
}