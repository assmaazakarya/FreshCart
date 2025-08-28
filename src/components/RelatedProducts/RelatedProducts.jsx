import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from '../ProductCard/ProductCard'
import useRelatedProducts from '../../hooks/useRelatedProducts'
import RelatedProductsSkeleton from '../Skeleton/RelatedProductsSkeleton';


export default function RelatedProducts({category}) {

  const {_id} = category
  const {productsByCategory , isLoading} = useRelatedProducts(_id)
  if(isLoading) return <RelatedProductsSkeleton />
  return (
      <div className="container">

           <div className='flex items-center justify-between'>
             <h3 className='text-2xl font-semibold'>You May Also Like </h3>
             <div className='*:bg-gray-300 *:rounded-full *:size-10  flex items-center gap-3 *:hover:bg-primary-200 *:transition-colors *:duration-200 *:hover:text-primary-600'>
              <button className=' prev-btn flex items-center justify-center'>
                <FontAwesomeIcon  icon={faAngleLeft} />
              </button>
              <button  className='next-btn flex items-center justify-center '>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
             </div>
           </div>

           <div className="py-10 ">
      
       <Swiper  
        slidesPerView={5} 
        spaceBetween={10}
        loop={true}
        modules={[Navigation]}
        navigation={{nextEl :".next-btn" , prevEl :'.prev-btn'}} 
          breakpoints={{
                       320: {slidesPerView: 1},
                       640: {slidesPerView: 2,},
                       768: {slidesPerView: 3,},
                       1024: {slidesPerView: 4,},
                       1200: {slidesPerView: 5,},}}>
       { productsByCategory.map((product)=> {
           return  <SwiperSlide key={product.id}>
           <ProductCard  product={product}/>
           </SwiperSlide> 
          })
       }
  </Swiper>
    </div>
      </div>
  )
}
