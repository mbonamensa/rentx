import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <div className="container bg-primary">
                <div className="footer-top display-f justify-center column pt-4 pb-4 text-secondary gap-6">
                    <div className="footer-contact">
                        <h3 className="h3">Contact</h3>
                        <p>Locate us at No.8</p>
                        <p>Bosu 3rd Rd, Nungua, Accra</p>
                        <p>info@rentx.com</p>
                        <p>+233 593 727 2308</p>
                    </div>
                    <div className="footer-faq">
                        <h3 className="h3">FAQ</h3>
                        <ul>
                            <li>How to book?</li>
                            <li>What's the pricing?</li>
                            <li>How to list?</li>
                            <li>Which to choose?</li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3 className="h3">Quick links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/apartments">Apartments</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-subscribe">
                        <h3 className="h3">Stay in the know</h3>
                        <form className="display-f column">
                            <input type="email" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <button className="btn mt-1 pointer" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom pb-4">
                    <hr className="border-accent2 o-4"/>
                    <div className="social-icons pt-1 pb-1 display-f align-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="none" stroke="#003B73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.65" color="#003B73">
                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/>
                        <path d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803"/></g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256">
                        <path fill="#003B73" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 
                        36m48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 
                        0 0 0-52-52m44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 
                        0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                        <g fill="none" stroke="#003B73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" color="#003B73">
                            <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/>
                            <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="none" stroke="#003B73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" color="#003B73">
                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/>
                        <path d="M10.536 11.008c-.82-.116-2.69.075-3.606 1.77s.007 3.459.584 4.129c.569.627 2.378 1.814 4.297.655c.476-.287 1.069-.502 1.741-2.747l-.078-8.834c-.13.973.945 3.255 4.004 3.525"/></g>
                        </svg>

                    </div>
                    <hr className="border-accent2 o-4"/>
                </div>
            </div>
            <div className="copyright container bg-tertiary p-1 text-accent1">
                <p>&copy; RentX 2024 &middot; All rights reserved.</p>
            </div>
        </footer>
    )
}