import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ApartmentSkeleton() {
    return (
        <div className="apartment-wrapper">

            <div className="apartment-img">
                <Skeleton className='br-3' height={156} />
            </div>

            <div className="pl-1 pr-1 pb-1 display-f align-center justify-between details wrap">
                <Skeleton className="mb-1" height={20} width={250} count={2} />
            </div>
        </div>
    )
}

export default ApartmentSkeleton