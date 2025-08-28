import { faArrowRightRotate, faCreditCard, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import {jwtDecode} from "jwt-decode";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Auth.Context';
import { getUserOrders } from '../../services/orderService/order-service';
import OrdersSkeleton from '../../components/Skeleton/OrdersSkeleton';


export default function Orders() {
  
  const {token} = useContext(AuthContext)
  const {id} = jwtDecode(token)
  const [orders , setOrders] = useState(null)
  const [isLoading , setIsLoading] = useState(true)
 async function handleFetchingOrders(id){
       try {
        setIsLoading(true)
        const response = await getUserOrders(id)
        if(response.success){
        setIsLoading(false)          
        setOrders(response.data)
        }
       } catch (error) { 
        setIsLoading(false)
        console.log(error);
       } 
  }

useEffect(()=>{
handleFetchingOrders(id)
},[])

if(isLoading) return <OrdersSkeleton />

return <>
     <section className='space-y-4'>
      <title>My Orders</title>
      <h1 className='text-2xl font-semibold'>My Orders</h1>
      <div>
        {
          orders.map((order)=>{
            return <div key={order.id} className='ordre-card mt-3 shadow-sm border border-gray-200 rounded-lg'>
          <div className="top flex p-4 justify-between items-center bg-gray-50 border-b border-gray-200">
            <div className='right space-y-2'>
              <h3 className='font-semibold text-lg'>
                Order {order.id}
                { order.isDelivered ? <> 
                <span className='text-xs font-normal rounded-full py-1 px-2 ms-2 bg-primary-100 text-primary-600'>Deliverd</span>
                </> :<>
                <span className='text-xs font-normal rounded-full py-1 px-2 ms-2 bg-red-100 text-red-600'>Not Deliverd</span>
                </>}
                </h3>
              <p className='text-gray-500'>Placed on {new Date(order.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
            <div className='left space-x-4 *:space-x-2'>
              <span className='text-primary-600'> 
                <FontAwesomeIcon icon={faArrowRightRotate}/>
                <span>Reorder</span>
              </span>
              <Link>
              <FontAwesomeIcon icon={faEye}/>
              <span>View Details</span>
              </Link>
            </div>
          </div>
          <div className="down flex p-4 items-center justify-between ">
            <div className='pe-2 border-gray-300 w-30 overflow-auto *:size-12 *:rounded-lg flex items-center justify-between gap-3'>
            {
              order.cartItems.map((cartItem)=>{
                  return <img key={cartItem.product.id} src={cartItem.product.imageCover} className='object-cover' alt="" />
              })
            }  
            </div>
            <div  className='*:space-y-2 flex items-center gap-12 justify-between text-xs *:flex *:flex-col *:items-center'>
              <div>
                <p className='text-gray-500'>items</p>
                <h4>{ order.cartItems.length } Items</h4>
                </div>
              <div>
                <p className='text-gray-500'>Total Amount</p>
                <h4>{order.totalOrderPrice}$</h4>
                </div>
                <div>
                <p className='text-gray-500'>Deliverd to</p>
                <h4>{order.shippingAddress.details}</h4>
                </div>
            </div>
            <div className=' ps-2 border-gray-300 flex flex-col gap-2 items-end'>
              <button className='btn flex text-sm  items-center gap-2 bg-amber-600 text-white'>
                <FontAwesomeIcon icon={faCreditCard}/> <span>Complete Payment</span>
              </button>
              <button className='btn bg-primary-600 text-white w-fit text-sm'>
                Reorder Items
              </button>
            </div>
          </div>
        </div>
          })
        }
      </div>
     </section>
  </>
}
