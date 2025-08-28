import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { countDown } from "../../utlis/countDown";
import useProducts from "../../hooks/useProducts";
import HomeDealsSkeleton from "../Skeleton/HomeDealsSkeleton";

export default function HomeDeals() {

const {products , isLoading } = useProducts()

const [leftTime , setLeftTime] = useState({ hours :0, minutes: 0 ,second: 0})

useEffect(()=>{  
let setIntervalId = setInterval(()=>{
  const newTimeLeft = countDown()
  setLeftTime(newTimeLeft)
},1000)
return ()=>{ clearInterval(setIntervalId) }
},[])

if(isLoading){
    return <HomeDealsSkeleton />
}

const deals = products.filter((product)=>{ return product.priceAfterDiscount}).slice(0,5)

  return (
    <>
     <div className="bg-white py-10">
      <div className="container space-y-4">
        <div className="flex flex-col gap-3 items-start justify-between md:items-center md:flex-row md:gap-0">
          <div className="space-y-3">
            <h3  className='text-xl font-semibold'>Deals of the Day</h3>
            <div className="flex gap-3 items-center offers">
              <p className="text-gray-700">offers ends in</p>
              <div className="counter flex gap-2 items-center">
               <div className="bg-gray-900 flex items-center justify-center text-white size-8 rounded-lg">{leftTime.hours.toString().length === 1 ? '0'+leftTime.hours : leftTime.hours}</div>:
               <div className="bg-gray-900 flex items-center justify-center text-white size-8 rounded-lg">{leftTime.minutes.toString().length === 1 ? '0'+leftTime.minutes : leftTime.minutes}</div>:
               <div className="bg-gray-900 flex items-center justify-center text-white size-8 rounded-lg">{leftTime.second.toString().length === 1 ? '0'+leftTime.second : leftTime.second}</div>
              </div>
            </div>
          </div>


          <div className="links">
            <Link className="group flex gap-2 items-center text-primary-600 hover:text-primary-500 transition-colors duration-200" to={'/deals'}>
            <span>View All Deals</span>
            <FontAwesomeIcon className="group-hover:translate-x-1/2 transition-transform duration-200" icon={faArrowRight}/>
            </Link>
          </div>
        
        </div>
      <div className="py-10 cards gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
         
        {
          deals.map((product)=>{
            return <ProductCard key={product.id} product={product} />
          })
        }

      </div>
      </div>
     </div>
    </>
  )
}
