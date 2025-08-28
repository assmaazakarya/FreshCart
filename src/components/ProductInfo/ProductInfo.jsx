import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeftRotate, faCartShopping, faMinus, faPlus, faShareNodes,faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RatingStars from "../RatingStars/RatingStars";
import { calcDiscount } from "../../utlis/discount";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import { Link } from "react-router";
import useGetCartItmes from "../../hooks/useGetCartItems";
import useAddToCart from "../../hooks/useAddToCart";
import useRemoveItemFromCart from "../../hooks/useRemoveItemFromCart";
import useUpdateCartItemsQuantitiy from "../../hooks/useUpdateCartItemsQuantitiy";
export default function ProductInfo({productDetails}) {
  
  const {title ,ratingsAverage ,ratingsQuantity , description , price , priceAfterDiscount , images ,quantity , id} = productDetails
  
  const { cartInfo }  = useGetCartItmes()
  const {mutate : addMutate} = useAddToCart()
  const {mutate : removeMutate} = useRemoveItemFromCart()
  const {mutate : updateMutate} = useUpdateCartItemsQuantitiy()
  
  let count = 0
  let productsArr=cartInfo?.data?.products;
  const productId = productsArr?.filter((product)=>{
    if(product?.product?.id === id){
      count =  product.count
      return (product?.product?.id);
    }
  })
   
  return   <section className="py-15">
                <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
                  <div className="slider col-span-1 h-fit bg-white shadow-md rounded-lg overflow-hidden ">
                    <ReactImageGallery  
                    showNav={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    items={images.map((img)=>{ return {original : img, thumbnail : img }})}/>
                  </div>
                  <div className="product-info p-8 col-span-2 rounded-lg shadow-md bg-white">
                    <div className="top border-b border-gray-300/50 space-y-4 pb-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm px-3 py-1 rounded-md ${quantity > 0 ? 'text-primary-500 bg-primary-100' :' text-red-600 bg-red-100 '}`}>
                          {quantity > 0 ? "In Stock": 'Out Of Stock'}
                          </span>
                        <div className="flex items-center gap-2 *:text-gray-500">
                          <FontAwesomeIcon icon={faHeart} />
                          <FontAwesomeIcon icon={faShareNodes} />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold">{title}</h2>
                      <div className="rating flex gap-4 items-center"> 
                      <RatingStars ratingsAverage={ratingsAverage}/>
                      <div className="space-x-1 *:text-gray-500 *:text-sm">
                        <span>{ratingsAverage}</span>
                        <span>({ratingsQuantity} reviews)</span>
                      </div>
                     </div>
                     <div className="flex gap-2.5 items-center">
                        <h4 className="text-2xl font-bold">${priceAfterDiscount || price } </h4>
                        {
                          priceAfterDiscount ? (<>
                          <del className="text-gray-500">${price}</del>
                          <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-md">
                           Save {calcDiscount(price,priceAfterDiscount)}%
                           </span>
                          </>) :''
                         }
                      </div>
                    </div>
                    <div className="middle  border-b border-gray-300/50 py-5 space-y-4">
                      <p className="text-gray-600">
                        {description}
                        </p>
                      <div className="quantity flex items-center gap-6">
                      <span>Quantity: </span>
                        <div className="flex flex-col mt-3 md:mt-0 md:flex-row gap-3 items-center">
                          <div className="*:text-gray-500 border border-gray-300 rounded-sm space-x-6 px-4 py-1.5 ">
                         <button onClick={()=>{
                                updateMutate({id , count: count - 1})
                              }}>
                        <FontAwesomeIcon icon={faMinus}/>
                      </button>
                      <span>{count}</span>
                      <button  onClick={()=>{
                                updateMutate({id , count: count + 1})
                              }}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                       </div>
                       <span className="text-sm text-gray-600">only ({quantity}) items left in the stock</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         {
                           productId?.length > 0 ?
                           <>
                            <button 
                         onClick={()=>{ removeMutate(id)}}
                         className="hover:bg-red-500 hover:border-red-500 space-x-2 btn bg-red-600 text-white border border-red-600">
                          <FontAwesomeIcon icon={faCartShopping} />
                          <span>Remove from Cart</span>
                          </button>
                           </>
                           :
                           <>
                           <button 
                         onClick={()=>{addMutate({id})}}
                         className="hover:bg-primary-500 hover:border-primary-500 space-x-2 btn bg-primary-600 text-white border border-primary-600">
                          <FontAwesomeIcon icon={faCartShopping} />
                          <span>Add to Cart</span>
                          </button>
                           </>

                         }

                        <Link to={'/checkout'} className="btn bg-transparent border border-gray-300 text-center">Buy Now</Link>
                      </div>
                    </div>
                    <div className="down grid grid-cols-1 md:grid-cols-2 gap-y-3 pt-6">
                      <div className="flex items-center gap-3">
                        <div className='size-11 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 '>
                          <FontAwesomeIcon icon={faTruckFast}/>
                        </div>
                       <div>
                         <h5  className='font-semibold'>Free Delivery</h5>
                        <p className='text-gray-400 text-sm'>Free shipping on orders over 50$</p>
                       </div>
                         </div>
                         <div className="flex items-center gap-3">
                        <div className='size-11 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 '>
            <FontAwesomeIcon  icon={faArrowLeftRotate}/>       
            </div>
            <div>
                <h3 className='font-semibold'>30 Days Return</h3>
                <p className='text-gray-400 text-sm'>Satisfaction guranteed</p>
            </div>
                       </div>
                    </div>
                  </div>
                </div>
              </section>  
}
