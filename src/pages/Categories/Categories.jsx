import BrandsCategoriesCard from "../../components/BrandsCategorirsCard/BrandsCategoriesCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faUser } from "@fortawesome/free-solid-svg-icons"
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Subscribe from "../../components/Subscribe/Subscribe"
import { Link } from "react-router"
import useCategories from "../../hooks/useCategories"
import useSubcategories from "../../hooks/useSubCategories"
import CategoriesSkeleton from "../../components/Skeleton/CategoriesSkeleton";




export default function Categories() {

  const {categories , isLoading} =useCategories()
  const {subCategories} = useSubcategories()


  if(isLoading) return <CategoriesSkeleton />
  
return<>
     <section className="pt-15 bg-gray-50">
      <title>Categories</title>
      <div className="container">
        <div className="space-y-9">
          <div className='flex items-center justify-between'>
             <h3 className='text-2xl font-semibold'>Shop by Categories </h3>
             <div className='*:bg-gray-300 *:rounded-full *:size-10  flex items-center gap-3 *:hover:bg-primary-200 *:transition-colors *:duration-200 *:hover:text-primary-600'>
              <button className=' prev-btn flex items-center justify-center'>
                <FontAwesomeIcon  icon={faAngleLeft} />
              </button>
              <button  className='next-btn flex items-center justify-center '>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
             </div>
           </div>
        <Swiper 
        slidesPerView={5} 
        spaceBetween={10}
        loop={true}
        modules={[Navigation]}
        navigation={{nextEl :".next-btn" , prevEl :'.prev-btn'}} 
          breakpoints={{
                       320: {slidesPerView: 1},
                       640: {slidesPerView: 2,},
                       768: {slidesPerView: 3,},}}>                   
        {
          categories.map((category)=>{ return <SwiperSlide className="pb-12" key={category._id}>
            <BrandsCategoriesCard category={category}/></SwiperSlide> })}
          </Swiper>            
  
        
        </div>
      </div>
      <div className="bg-white py-8">
        <div className="container">
           <div className='pt-5'>
             <h3 className='text-2xl font-semibold'>Shop by Subcategories </h3>
           </div>
        
        <div className="py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
           {
          subCategories?.map((subCategoy)=>{ 
            return <div className="py-5" key={subCategoy._id}>
            <Link>
            <div className=" gap-4 size-45 rounded-lg flex flex-col items-center justify-center p-2 text-center bg-gray-50 hover:shadow-md transition-shadow duration-200">
              <div className="size-15 flex items-center justify-center text-lg rounded-full bg-primary-200 text-primary-600">
                <FontAwesomeIcon icon={faUser}/>
              </div>
              <h3 className="text-sm font-semibold line-clamp-1">
              {subCategoy.name}
              </h3>
            </div>
            </Link>
            </div>
           })}
        </div>
                 
  
        </div>
        
        </div>
        <Subscribe />
     </section>
  </>
}
