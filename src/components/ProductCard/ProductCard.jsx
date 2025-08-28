import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { calcDiscount } from '../../utlis/discount';
import RatingStars from '../RatingStars/RatingStars';
import {useEffect, useState } from "react";
import useAddToCart from "../../hooks/useAddToCart";
import useAddToWishlist from "../../hooks/useAddToWishlist";


export default function ProductCard({product}) {

const {id,title,imageCover,category,ratingsAverage,ratingsQuantity,price,priceAfterDiscount
 } = product

 const {mutate:addToCartmutate} = useAddToCart()
 const {mutate:addToWishlistMutate } = useAddToWishlist()


const [isInWishlist , setIsInWishlist] = useState(false)
const [wishlistIDs , setWishListIDs] = useState(JSON.parse(localStorage.getItem('wishlistIDs')) || [])

 
  useEffect(()=>{
    setIsInWishlist(wishlistIDs.includes(id))
  },[ wishlistIDs , id])


const handleWishlist = (id) => {
  addToWishlistMutate(id, {
    onSuccess: (data) => {
      const updatedIDs = data.data.data; 
      localStorage.setItem("wishlistIDs", JSON.stringify(updatedIDs));
      setWishListIDs(updatedIDs);
    },
  });
};


return <>

  <div className="bg-white shadow-md overflow-hidden rounded-lg card relative space-y-3">
          <div>
            <img src={imageCover} alt="" className="h-40 mx-auto" />
          </div>
          <div className="content px-4 space-y-2 pb-4">
            <span className='text-sm text-gray-500'>{category.name}</span>
           <h2 className="font-semibold *:line-clamp-1 hover:text-primary-500 transition-colors duration-200">
           <Link to={`/product-detailes/${id}`}> 
            {title}
            </Link>
            </h2>
            <div className="rating flex gap-4 items-center">
             
              <RatingStars ratingsAverage={ratingsAverage}/>

              <div className="space-x-1">
              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity})</span>
              </div>
            </div>
            <div className=" flex items-center justify-between ">
             <div  className="price space-x-2 flex flex-nowrap items-center">
           <span className="text-primary-600 text-nowrap font-semibold text-lg">{priceAfterDiscount ? priceAfterDiscount : price } EGP</span>
              {
                priceAfterDiscount ? (<del className="text-gray-500 text-nowrap">{price} EGP</del>):''
              }
             </div>
             <button onClick={()=>{addToCartmutate({id})}} 
                 className="btn shadow-md hover:shadow-lg hover:bg-primary-700 p-0 rounded-full size-8 flex items-center justify-center bg-primary-600 text-white">
              <FontAwesomeIcon icon={faPlus}/>
             </button>
            </div>
          </div>
           <div className="*:text-xl actions flex flex-col gap-3 absolute top-4 right-2">
            <button onClick={()=>{
              handleWishlist(id)
            }}>
              <FontAwesomeIcon className={`${isInWishlist ?'text-red-600':'text-gray-500'}  hover:text-primary-500  transition-colors duration-200`} icon={faHeart}/>
            </button>
              <button>
                <FontAwesomeIcon  className="text-gray-500 hover:text-primary-500 transition-colors duration-200" icon={faCodeCompare}/>
            </button>
              <button>
               <Link to={`/product-detailes/${id}`}>
              <FontAwesomeIcon  className="text-gray-500 hover:text-primary-500 transition-colors duration-200" icon={faEye}/>
            </Link>
            </button>
           </div>
           {
            priceAfterDiscount ? (<div className="badge px-3 py-0.5 rounded-md text-center bg-red-700 text-white absolute top-4 left-2 shadow-lg">
            <span className="text-sm">
              {calcDiscount(price,priceAfterDiscount)}%
            </span>
            </div>):''
           }
        </div>
  </> 
}
