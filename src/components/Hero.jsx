import { Link } from "react-router-dom"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Hero({hasLink, linkText, mainText, subText, bgImg, height}) {
    const bgStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: height
    }

    return (
        <>
            <div className="relative hero display-f align-center justify-center container" style={bgStyle}>
                <div className="h-10 w-10 bg-black o-7 absolute z-0"></div>
                <div className="z-10 relative text-accent1 hero-text">
                <h1 className="h1">{mainText}</h1>
                <p className="mt-2 subtext">{subText}</p>
                { hasLink && <Link to="/apartments" className="mt-2 btn-primary display-f align-center justify-around"><p className="browse">{linkText}</p><MdKeyboardDoubleArrowRight className="double-arrow-right"/></Link>}
                </div>
            </div>
        </>
    )
}