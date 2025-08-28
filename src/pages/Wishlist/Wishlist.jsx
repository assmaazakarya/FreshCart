import { faShieldHalved,faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router"
import emptyCart from '../../assets/empty-cart.svg'
import WishlistItem from "../../components/WishlistItem/WishlistItem"
import useGetWishlistItems from "../../hooks/useGetWishlistItems"
import WishlistSkeleton from "../../components/Skeleton/WishlistSkeleton"


export default function Wishlist() {
   
 const {wishlistInfo , isLoading} = useGetWishlistItems()

 console.log(wishlistInfo);
 

 if(isLoading) return <WishlistSkeleton />

  return   <section className="py-10 bg-gray-50">
                <title>My Wishlist</title>
                <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-10">                 
                 <div className="h-fit shopping-items col-span-2 rounded-sm border border-gray-200 bg-white">
                    <div className="p-5 top border-b border-gray-300/50 space-y-1.5 ">
                        <h2 className="text-2xl font-bold">Wishlist</h2>
                        {
                       wishlistInfo?.count > 0 &&  <span className={`text-sm`}>{wishlistInfo?.count} items in your wishlist</span>
                        }
                     </div>  
                     {
                     wishlistInfo?.count> 0 ?    wishlistInfo?.data.map((product)=>{
                       return <WishlistItem productInfo={product} key={product.id} />
                      }) :<div className="text-center py-4">
                       <img src={emptyCart} className="w-1/3 p-5 mx-auto" alt="" />
                       <p className="text-center py-3 font-semibold">Your Wishlist has {wishlistInfo?.count} items </p>
                       <span className="text-center">Browse our products <Link to={'/'} className="font-semibold text-primary-600 underline">here</Link></span>
                      </div>
                     }
                  </div>
                  <div className=" space-y-4 order-details h-fit col-span-1 *:p-6 *:bg-white *:shadow-sm *:rounded-md overflow-hidden ">
                   <div className="space-y-3 ">
                    <h4 className=" text-xl font-semibold mb-5">Create New Wishlist</h4>
                    <div className="text-sm flex flex-col gap-2">
                      <label htmlFor="wishlist">Wishlist Name</label>
                      <input type="text" name="wishlist" id="wishlist"  placeholder="e.g., Holiday Shopping" className="form-control w-full placeholder:text-gray-900 font-semibold"/>
                    </div>
                     <div  className="text-sm flex flex-col gap-2">
                      <label htmlFor="status">Privacy</label>
                      <div className="*:space-x-2 flex items-center gap-4">
                      <div>
                        <input type="radio" name="status" id="Public"/>
                      <label htmlFor="Public">Public</label> 
                      </div>                     
                      <div>
                        <input type="radio" name="status" id="Private" />
                      <label htmlFor="Private">Private</label>
                      </div>

                      </div>

                    </div>
                     <div  className="text-sm flex items-center justify-between ">
                      <button className="btn bg-primary-600 text-white hover:bg-primary-500  w-full">Create Wishlist</button>
                    </div>
                   
                   </div>
                 
                   <div className="btns space-y-4 ">
                     <h3 className="font-semibold">My Wishlists</h3>
                     <ul>
                      <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                        <div>
                          <h4 >Defualt Wishlist</h4>
                          <p className="text-sm text-gray-500">12 items</p>
                        </div>
                        <Link className="text-primary-600">View</Link>
                      </li>
                        <li className="flex items-center justify-between border-b border-gray-200 py-3">
                        <div>
                          <h4 >Defualt Wishlist</h4>
                          <p className="text-sm text-gray-500">12 items</p>
                        </div>
                        <Link className="text-primary-600">View</Link>
                      </li>
                        <li className="flex items-center justify-between  pt-3">
                        <div>
                          <h4 >Defualt Wishlist</h4>
                          <p className="text-sm text-gray-500">12 items</p>
                        </div>
                        <Link className="text-primary-600">View</Link>
                      </li>
                     </ul>
                   </div>
                 
                 
                 
                 
                 
                   <div className="*:p-4 *:border *:rounded-lg space-y-3 ">
                    <div className="bg-gray-50 border-gray-50 space-y-2">
                      <div className="space-x-2  flex items-center">
                        <FontAwesomeIcon className="text-primary-600" icon={faTruckFast}/>
                        <span className="text-sm font-semibold">Free Delivery</span>
                      </div> 
                      <p className="text-xs">Your order qualifies for free Delivery. Estimated delivery : 2-3 business days </p>
                    </div>
                    <div className="space-y-2 border-primary-200 bg-primary-50">
                      <div className="space-x-2 flex items-center">
                        <FontAwesomeIcon className="text-primary-600" icon={faShieldHalved}/>
                        <span className="text-sm font-semibold">Secure Checkout</span>
                      </div>
                      <p className="text-xs">Your payment information is protected with 256-bit SSL encryption </p>
                   
                    </div>
                    </div>
                   </div>
                  </div>
              </section> 
}
