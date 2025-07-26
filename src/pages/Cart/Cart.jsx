import { faShieldHalved,faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartItem from "../../components/CartItem/CartItem"
import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/Cart.Context"
import Loading from "../../components/Loading/Loading"
import { Link } from "react-router"
import emptyCart from '../../assets/empty-cart.svg'



export default function Cart() {
 
const { cartInfo , isLoading } = useContext(CartContext)



if(isLoading){
  return <Loading />
 }

 const {data , numOfCartItems , cartId} = cartInfo
 const {products , totalCartPrice} = data
 

 return  <section className="py-10 bg-gray-50">
                <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">                 
                 <div className="h-fit shopping-items col-span-2 rounded-sm border border-gray-200 bg-white">
                    <div className="p-5 top border-b border-gray-300/50 space-y-1.5 ">
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                        {
                       numOfCartItems > 0 &&  <span className={`text-sm`}>{numOfCartItems} items in your cart</span>
                        }
                     </div>  
                     {
                      numOfCartItems> 0 ?    products.map((product)=>{
                       return <CartItem productInfo={product} key={product._id}  />
                      }) :<div className="text-center py-4">
                       <img src={emptyCart} className="w-1/3 p-5 mx-auto" alt="" />
                       <p className="text-center py-3 font-semibold">Your Cart has {numOfCartItems} items </p>
                       <span className="text-center">Go Shopping <Link to={'/'} className="font-semibold text-primary-600 underline">here</Link></span>
                      </div>
                     }
                  </div>
                  <div className=" space-y-4 order-details h-fit col-span-1 p-5 bg-white border border-gray-200 rounded-sm overflow-hidden ">
                   <div className="space-y-3">
                    <h4 className=" text-xl font-semibold mb-5">Order Sammary</h4>
                    <div className="text-sm flex items-center justify-between">
                      <p>Subtotal ({numOfCartItems} item)</p>
                      <p>{totalCartPrice} EGP</p>
                    </div>
                     <div  className="text-sm flex items-center justify-between">
                      <p>Shipping</p>
                      <p>{
                        numOfCartItems > 0 ? 70 : 0
                        } EGP</p>
                    </div>
                     <div  className="text-sm flex items-center justify-between  border-b border-gray-200 pb-4">
                      <p>Tax</p>
                      <p> {Math.trunc(totalCartPrice * 0.14)} EGP</p>
                    </div>
                    <div  className="font-semibold flex items-center justify-between">
                      <p>Total</p>
                      <p> {
                        numOfCartItems > 0 ?  Math.trunc(totalCartPrice + 70 +(totalCartPrice * 0.14))  : 0} EGP</p>
                    </div>
                   </div>
                   <div className="btns *:w-full *:border space-y-3">
                      {
                        numOfCartItems > 0 && 
                        <Link className="btn bg-primary-600 border-primary-600 text-white text-sm hover:bg-primary-500 hover:border-primary-500 text-center" to={'/checkout'}>
                        <button>
                      Proceed to Checkout
                      </button>
                      </Link>

                      }
                       <Link className="btn text-center bg-transparent border-gray-200 text-sm" to={'/'}>
                      <button>
                      Continue Shopping
                      </button>
                      </Link>
                   </div>
                   <div className="*:p-4 *:border *:rounded-lg space-y-3">
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
