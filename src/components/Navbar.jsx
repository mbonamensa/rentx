import { useState, useEffect } from "react";
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo-main.svg"

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // const [mobileMenu, setMobileMenu] = useState(true)

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    
    return (
        <>
            <nav className="container z-100 sticky">
                <div className="display-f justify-between align-center pt-2 pb-2">
                    <Link to="/" >
                        <svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.3955 19.001V0.562366H8.01223C9.39273 0.562366 10.5842 0.811456 11.5865 
                            1.30963C12.5949 1.80181 13.3722 2.51006 13.9183 3.4344C14.4645 4.35272 14.7376 5.44212 
                            14.7376 6.70257C14.7376 7.98103 14.4585 9.06742 13.9003 9.96174C13.3421 10.8501 12.5499 
                            11.5283 11.5235 11.9965C10.4971 12.4586 9.28169 12.6897 7.87718 12.6897H3.06046V9.17845H7.04889C7.72113 
                            9.17845 8.28233 9.09142 8.73249 8.91736C9.18865 8.7373 9.53378 8.4672 9.76786 8.10707C10.0019 
                            7.74094 10.119 7.27277 10.119 6.70257C10.119 6.13236 10.0019 5.66119 9.76786 5.28906C9.53378 4.91093 
                            9.18865 4.62882 8.73249 4.44276C8.27633 4.25069 7.71512 4.15465 7.04889 4.15465H4.8521V19.001H0.3955ZM10.7762 
                            10.574L15.3679 19.001H10.5061L6.00451 10.574H10.7762ZM23.374 19.2621C21.9275 19.2621 20.679 18.977 19.6286 
                            18.4068C18.5843 17.8306 17.78 17.0113 17.2158 15.9489C16.6576 14.8805 16.3785 13.611 16.3785 12.1405C16.3785 
                            10.712 16.6606 9.46356 17.2248 8.39517C17.789 7.32079 18.5843 6.48649 19.6106 5.89228C20.637 5.29206 21.8464 
                            4.99195 23.2389 4.99195C24.2233 4.99195 25.1236 5.14501 25.9399 5.45112C26.7562 5.75723 27.4615 6.21039 28.0557 
                            6.81061C28.6499 7.41082 29.112 8.15209 29.4422 9.0344C29.7723 9.91072 29.9373 10.9161 29.9373 
                            12.0505V13.1489H17.918V10.592H25.8409C25.8349 10.1238 25.7238 9.70664 25.5078 9.34051C25.2917 8.97438 
                            24.9946 8.68928 24.6164 8.48521C24.2443 8.27513 23.8151 8.17009 23.329 8.17009C22.8368 8.17009 22.3956 
                            8.28113 22.0055 8.50321C21.6154 8.71929 21.3062 9.0164 21.0782 9.39453C20.8501 9.76667 20.73 10.1898 20.718 
                            10.664V13.2659C20.718 13.8301 20.8291 14.3253 21.0512 14.7515C21.2732 15.1716 21.5883 15.4987 21.9965 
                            15.7328C22.4046 15.9669 22.8908 16.0839 23.455 16.0839C23.8452 16.0839 24.1993 16.0299 24.5174 15.9219C24.8355 
                            15.8138 25.1086 15.6548 25.3367 15.4447C25.5648 15.2346 25.7358 14.9765 25.8499 14.6704L29.8923 14.7875C29.7243 
                            15.6938 29.3551 16.4831 28.7849 17.1553C28.2207 17.8216 27.4795 18.3407 26.5611 18.7129C25.6428 19.079 24.5804 
                            19.2621 23.374 19.2621ZM36.5885 11.1141V19.001H32.1859V5.17202H36.3724V7.71093H36.5255C36.8316 6.86463 37.3537 
                            6.20139 38.092 5.72122C38.8303 5.23504 39.7096 4.99195 40.73 4.99195C41.7023 4.99195 42.5456 5.21103 43.2599 
                            5.64919C43.9801 6.08134 44.5383 6.68756 44.9345 7.46784C45.3366 8.24212 45.5347 9.14844 45.5287 
                            10.1868V19.001H41.1261V11.0511C41.1321 10.2829 40.937 9.68264 40.5409 9.25048C40.1508 8.81833 39.6076 
                            8.60225 38.9113 8.60225C38.4491 8.60225 38.041 8.70429 37.6869 8.90836C37.3387 9.10643 37.0686 9.39153 
                            36.8766 9.76367C36.6905 10.1358 36.5945 10.586 36.5885 11.1141ZM56.0602 
                            5.17202V8.41318H47.3361V5.17202H56.0602ZM49.1637 1.85883H53.5663V14.6524C53.5663 
                            14.9225 53.6083 15.1416 53.6924 15.3097C53.7824 15.4717 53.9114 15.5888 54.0795 15.6608C54.2476 
                            15.7268 54.4486 15.7598 54.6827 15.7598C54.8508 15.7598 55.0278 15.7448 55.2139 15.7148C55.406 
                            15.6788 55.55 15.6488 55.6461 15.6248L56.3123 18.8029C56.1022 18.8629 55.8051 18.938 55.421 
                            19.028C55.0428 19.118 54.5897 19.175 54.0615 19.199C53.0291 19.2471 52.1438 19.127 51.4055 18.8389C50.6733 
                            18.5448 50.1121 18.0886 49.7219 17.4704C49.3378 16.8522 49.1517 16.0749 49.1637 15.1386V1.85883ZM62.8171 
                            0.562366L66.1843 6.38745H66.3284L69.7316 0.562366H74.7194L69.1554 9.78167L74.8995 19.001H69.7856L66.3284 
                            13.1129H66.1843L62.7271 19.001H57.6493L63.3663 9.78167L57.7933 0.562366H62.8171Z" fill="#003B73"/>
                        </svg>
                    </Link>
                            <div>
                                <ul className={`${isMobileMenuOpen ? "isMenu" : ""}`}>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/apartments">Apartments</NavLink></li>
                                </ul>
                            </div>
                            <div onClick={toggleMobileMenu} className="menu-icon pointer">
                                <BiMenuAltRight /> 
                            </div>
                    
                </div>
            </nav>
        </>
    )
}