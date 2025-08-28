import { Link, useParams } from "react-router"
import ProductCard from "../../components/ProductCard/ProductCard"
import Subscribe from "../../components/Subscribe/Subscribe"
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import useCategoryById from "../../hooks/useCategoryById"
import useSubCategoriesOfCategory from "../../hooks/useSubCategoriesOfCategory"
import CategoriesDetailesSkeleton from "../../components/Skeleton/CategoriesDetailesSkeleton";



export default function CategoriesDetailes() {

    const {id} = useParams()
  const { categoryById , isLoading  } = useCategoryById(id)
  const { subCategoriesOfCategory} = useSubCategoriesOfCategory(id)
if(isLoading) return <CategoriesDetailesSkeleton/>
  
return (
    <main className="bg-gray-50">
      <title>{categoryById[0].category.name}</title>
      <div className="py-15 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
      categoryById?.map((category)=>{
         return <ProductCard product={category} key={category.id}/> 
      })}
    </div>
           <div className="bg-white py-8">
             <div className="container">
                <div className='flex items-center justify-between'>
                  <h3 className='text-2xl font-semibold'>You May Like</h3>
                  <div className='*:bg-gray-300 *:rounded-full *:size-10  flex items-center gap-3 *:hover:bg-primary-200 *:transition-colors *:duration-200 *:hover:text-primary-600'>
                   <button className=' prev-btns flex items-center justify-center'>
                     <FontAwesomeIcon  icon={faAngleLeft} />
                   </button>
                   <button  className='next-btns flex items-center justify-center '>
                     <FontAwesomeIcon icon={faAngleRight} />
                   </button>
                  </div>
                </div>
            <Swiper 
             slidesPerView={5} 
             spaceBetween={10}
             loop={true}
             modules={[Navigation]}
             navigation={{nextEl :".next-btns" , prevEl :'.prev-btns'}} 
               breakpoints={{
                            320: {slidesPerView: 1},
                            640: {slidesPerView: 2,},
                            768: {slidesPerView: 6,},}}>                   
             {
               subCategoriesOfCategory?.slice(0,10).map((subCategoy)=>{ 
                 return <SwiperSlide className="py-5" key={subCategoy._id}>
                 <Link>
                 <div className="size-45 shadow-lg rounded-lg flex items-center justify-center p-2 text-center bg-primary-50 hover:shadow-xl transition-shadow duration-200">
                   <h3 className="text-lg">
                   {subCategoy.name}
                   </h3>
                 </div>
                 </Link>
                 </SwiperSlide> })}
               </Swiper>            
       
             </div>
             
             
             </div>

             <Subscribe />

    </main>
  )
}
