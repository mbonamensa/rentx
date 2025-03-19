import { useEffect, useState, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Apartment from "../components/Apartment";
import Hero from "../components/Hero";
import backgroundImg from "../assets/hero-img2.jpg"
import ReactPaginate from "react-paginate";
import ApartmentSkeleton from "../components/ApartmentSkeleton";
import ApartmentDetail from "../components/ApartmentDetail";


export default function Apartments() {

    const itemsPerPage = 6
    const [apartments, setApartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const sectionRef = useRef(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const pageFilter = searchParams.get("page")
    
    const fetchApartments = async () => {
        setIsLoading(true)
        const response = await fetch(`/api/apartments?${typeFilter ? `type=${typeFilter}` : `page=${pageFilter}&limit=${itemsPerPage}`}`)
        const data = await response.json()

        setApartments(data.apartments)
        setTotalPages(Math.ceil(data.total/itemsPerPage))

        setIsLoading(false)
    }

    console.log(currentPage)

    useEffect(() => {
        fetchApartments()
        // sectionRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }, [currentPage, typeFilter])
    
    function handlePageClick(event) {
        const selectedPage = event.selected + 1
        setCurrentPage(selectedPage) 
        handleFilterChange("page", selectedPage)
        sectionRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }

    function handleFilterChange(key, value) {
       setSearchParams(prevParams => {
        if (value === null || value === 1) {
            prevParams.delete(key)
        } else if (key === "type") {
            prevParams.delete("page")
            prevParams.set(key, value)
            setCurrentPage(prev => 1)
        }
        else {
            prevParams.set(key, value)  
        }

        return prevParams
       })
    }

    const displayedApartments = typeFilter ? apartments.filter(apartment => apartment.type === typeFilter) : apartments

    const apartmentEl = isLoading ? 

    Array.from({length: 6}).map((_, i) => <ApartmentSkeleton key={i}/> ) : 
    
    displayedApartments.map(apartment => {
        return <Apartment 
        key={apartment.id}
        id={apartment.id}
        name={apartment.name}
        price={apartment.price}
        img={apartment.mainImageUrl}
        />
    })

    return (
        <>
        <Hero 
            mainText={`Explore all our aparatments`}
            bgImg={backgroundImg}
            hasLink={false}
            height={`50vh`}
        />

        <main className="pt-4 pb-4 bg-accent1">
        {/* <main className="pt-4 pb-4 bg-accent1" ref={sectionRef}> */}
            <div className="container">
            <h2 className="mb-2 text-center">Explore our apartments</h2>
            <div className="mb-2 text-center">
                <button 
                    onClick={() => handleFilterChange("type", null)} 
                    className={`btn-plain ${typeFilter === null ? "font-bold" : ""}`}>
                    All apartments
                </button>/
                <button 
                    onClick={() => handleFilterChange("type", "classic")} 
                    className={`btn-plain ${typeFilter === "classic" ? "font-bold" : ""}`}>
                    Classic
                </button>/
                <button 
                    onClick={() => handleFilterChange("type", "deluxe")} 
                    className={`btn-plain ${typeFilter === "deluxe" ? "font-bold" : ""}`}>
                    Deluxe
                </button>/
                <button 
                    onClick={() => handleFilterChange("type", "executive")} 
                    className={`btn-plain ${typeFilter === "executive" ? "font-bold" : ""}`}>
                    Executive
                </button>
            </div>
                <div className="apartments display-f align-center justify-between">
                    {apartmentEl}
                </div>
            </div>
           {typeFilter === null && 
                <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={totalPages}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"pagination-active"}
                pageClassName={"page"}
                previousClassName={`prev-page ${currentPage === 0 && "disabled"}`}
                nextClassName={`next-page ${currentPage === totalPages && "disabled"}`}
                />
            }
        </main>
        </>
    )
}
