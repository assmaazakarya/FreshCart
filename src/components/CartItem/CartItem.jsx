import { faMinus, faPlus , faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RatingStars from "../RatingStars/RatingStars"
import { Link } from "react-router"
import useRemoveItemFromCart from "../../hooks/useRemoveItemFromCart";
import useUpdateCartItemsQuantitiy from "../../hooks/useUpdateCartItemsQuantitiy"
import { useEffect, useState } from "react";


export default function CartItem({productInfo}) {

  const [isUpdating , setIsUpdating] = useState(false)
  const {price , count  , product} = productInfo
  const {id} = product

  const {mutate : removeMutate} = useRemoveItemFromCart()
  const {mutate : updateMutate , isSuccess} = useUpdateCartItemsQuantitiy()
   
  useEffect(() => {
    if (isSuccess) {
      setIsUpdating(false);
    }
  }, [isSuccess]);
  return <>
   <div className={`${isUpdating && 'opacity-50'} middle p-5 grid grid-cols-2`}>
                        <div className="flex items-center gap-4">
                             <Link to={`/product-detailes/${product?.id}`}> 
                            <img src={product?.imageCover} className="h-20 object-cover cursor-pointer rounded-lg"  alt="" />
                          </Link>
                          <div className="space-y-0.5">
                            <h3 className="text-sm ">
                               <Link to={`/product-detailes/${product?.id}`}> 
                              {product?.title}
                              </Link>
                              </h3>
                            <p className="text-sm text-gray-500">{product?.category?.name}</p>
                            <div className="flex gap-2 items-center">
                              <RatingStars ratingsAverage={product?.ratingsAverage} />
                              <span>{product?.ratingsAverage}</span>
                            </div>
                          </div>
                        </div>
                        <div className=" flex gap-8 items-center justify-end">
                          <div className="flex *:border-gray-200">
                            <div className="border p-2 rounded-tl-lg rounded-bl-lg">
                              <button onClick={()=>{
                                updateMutate({id , count: count-1})
                                setIsUpdating(true)
                              }}>
                            <FontAwesomeIcon className="text-xs" icon={faMinus}/>
                           </button>
                            </div>
                              <div className="border-t border-b px-4 py-2">
                           <span className="text-sm"> {count} </span>
                              </div>
                              <div className="border p-2 rounded-tr-lg rounded-br-lg">
                                <button onClick={()=>{
                                  updateMutate({id , count: count+1})
                                  setIsUpdating(true)
                                }}>
                           <FontAwesomeIcon className="text-xs" icon={faPlus}/>
                            </button>
                              </div>
                          </div>
                           <span className="font-semibold"> {price * count}  EGP</span>
                           <FontAwesomeIcon onClick={()=>{ removeMutate(product.id)}} icon={faTrash} className="text-red-600 cursor-pointer" />
                        </div>
   </div>                   
  </>
}
