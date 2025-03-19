import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"



export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
