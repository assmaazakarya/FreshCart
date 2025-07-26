import { faMinus, faPlus , faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RatingStars from "../RatingStars/RatingStars"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/Cart.Context"
import { Link } from "react-router"
import { WishlistContext } from "../../Context/Wishlist.Context"

export default function WishlistItem({productInfo}) {
 
const {price , id  , imageCover , ratingsAverage , title , category} = productInfo
const {handleRemovingItemFromWishlist} = useContext(WishlistContext)
const {handleAddingtoCart} = useContext(CartContext)


async function removeItem(id) {
 await handleRemovingItemFromWishlist(id) 
}

async function addToCart(id) {
  await handleAddingtoCart(id)
}

  return <>
   <div className={`border-b border-gray-200  middle p-5 grid grid-cols-2`}>
                        <div className="flex items-center gap-4">
                             <Link to={`/product-detailes/${id}`}> 
                            <img src={imageCover} className="h-20 object-cover cursor-pointer rounded-lg"  alt="" />
                          </Link>
                          <div className="space-y-0.5">
                            <h3 className="text-sm ">
                               <Link to={`/product-detailes/${id}`} className="line-clamp-1">  
                              {title}
                              </Link>
                              </h3>
                            <p className="text-sm text-gray-500">{category?.name}</p>
                            <div className="flex gap-2 items-center">
                              <RatingStars ratingsAverage={ratingsAverage} />
                              <span>{ratingsAverage}</span>
                            </div>
                            <p className="text-primary-600 font-semibold">{price}$</p>
                          </div>
                        </div>
                        <div className=" flex gap-8 items-center justify-end">
                            <button onClick={()=>{
                              addToCart(id)
                            }} className="btn bg-primary-600 text-white hover:bg-primary-500">
                                Add to Cart
                            </button>
                           <FontAwesomeIcon onClick={()=>{removeItem(id)}} icon={faTrash} className="text-gray-400 cursor-pointer" />
                        </div>
   </div>                   
  </>
}
