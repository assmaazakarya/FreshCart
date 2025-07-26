import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination ,Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SliderImg from '../../assets/home-slider-1.png'


export default function Slider() {
  return <> 
      <Swiper 
      modules={[Pagination,Navigation]} 
      navigation={true} 
      pagination={{clickable:true}} 
      slidesPerView={1} 
      spaceBetween={5} 
      loop={true}>
        <SwiperSlide>
          <div style={{backgroundImage:`url(${SliderImg})`,backgroundRepeat:'no-repeat',backgroundSize:"cover" , backgroundPosition:"center"}}>
          <div className="overlay py-27 bg-gradient-to-r from-primary-600/80 to-primary-600/40  ">
           <div className="container space-y-4 text-white">
              <h2 className="text-4xl font-bold">Fresh Product Delivered <br />
             to Your Door</h2>
             <p >Get 20% for your first order</p>
             <div className="space-x-3">
              <button className="btn bg-white border-2 border-white hover:bg-gray-100 text-primary-600 font-normal" >Shop now</button>
              <button className="btn bg-transparent border-2 hover:bg-white hover:text-primary-600 border-white text-white font-normal">View Deals</button>
             </div>
           </div>
          </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div style={{backgroundImage:`url(${SliderImg})`,backgroundRepeat:'no-repeat',backgroundSize:"cover" , backgroundPosition:"center"}}>
          <div className="overlay py-27 bg-gradient-to-r from-primary-600/95 to-primary-600/50  ">
           <div className="container space-y-4 text-white">
              <h2 className="text-4xl font-bold">Fast & Free Delievry <br />
              At Anytime</h2>
             <p >Same day delivery avaliable</p>
             <div className="space-x-3">
              <button className="btn bg-white border-2 border-white hover:bg-gray-100 text-primary-600 font-normal" >Order now</button>
              <button className="btn bg-transparent border-2 hover:bg-white hover:text-primary-600 border-white text-white font-normal">Delivery Info</button>
             </div>
           </div>
          </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div style={{backgroundImage:`url(${SliderImg})`,backgroundRepeat:'no-repeat',backgroundSize:"cover" , backgroundPosition:"center"}}>
          <div className="overlay py-27 bg-gradient-to-r from-primary-600/95 to-primary-600/50  ">
           <div className="container space-y-4 text-white">
              <h2 className="text-4xl font-bold">Fresh Product Delivered <br />
             to Your Door</h2>
             <p >Get 20% for your first order</p>
             <div className="space-x-3">
              <button className="btn bg-white border-2 border-white hover:bg-gray-100 text-primary-600 font-normal" >Shop now</button>
              <button className="btn bg-transparent border-2 hover:bg-white hover:text-primary-600 border-white text-white font-normal">View Deals</button>
             </div>
           </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
     </>
  
}
