import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home'
import About from './pages/About'
import AllApartments from './pages/AllApartments'
import Layout from './components/Layout'
import ApartmentDetail from './components/ApartmentDetail'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='apartments' element={<AllApartments />} />
                    <Route path='apartments/:id' element={<ApartmentDetail />} />

                    {/* <Route path='apartments' element={<AllApartments />}>
                        <Route path='apartments/:id' element={<ApartmentDetail />} />
                    </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}