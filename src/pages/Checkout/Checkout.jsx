import { faCcAmex, faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong, faChevronLeft, faCircleInfo, faCreditCard, faLock, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { CreateCashOrder } from '../../services/orderService/order-service'
import { toast } from 'react-toastify'
import useGetCartItmes from '../../hooks/useGetCartItems'
import CheckoutSkeleton from '../../components/Skeleton/CheckoutSkeleton'

export default function Checkout() {

const phoneRegex = /^01[0125][0-9]{8}$/
const navigate = useNavigate()

async function handleCreatingOrder(values){
  try {
    const response = await CreateCashOrder({paymentMethod:values.paymentMethod , cartId , shippingAddress:values.shippingAddress})  
    if(response.success){
      if(response.data.session){
        toast.loading("You will be directed to stripe to complete your payment process")
         setTimeout(()=>{
            location.href = response.data.session.url
        } , 3000)
      }
      toast.success("Your order has been created successfully")
      setTimeout(()=>{  
         navigate('/account')
      } , 3000)
    }
   
  } catch (error) {
    toast.error(error.message)
  }
}

const validationSchema = yup.object({
  paymentMethod : yup.string().required("Payment method is required"),
  shippingAddress: yup.object({
    details: yup.string().required("Address is required"),
    phone: yup.string().required("Phone number is required").matches(phoneRegex,"Phone number is invalid"),
    city: yup.string().required("City is required")
  })
})

const formik = useFormik({
  initialValues :{
    paymentMethod : 'online',
    shippingAddress :{
      details:'',
      phone:'',
      city:''
    }
  },
  validationSchema,
  onSubmit :handleCreatingOrder
})
 
function handlePaymentChange(e) {
  formik.setFieldValue("paymentMethod", e.target.value)
}


const {cartInfo , isLoading}= useGetCartItmes()

if(isLoading) return <CheckoutSkeleton />

const {cartId  , data} = cartInfo
const {totalCartPrice , products} = data
 
return <>
  <section className='bg-gray-50'>
    <title>Checkout</title>
    <div className="container max-w-6xl p-6">
      <form onSubmit={formik.handleSubmit} >
        <h1 className='text-2xl font-semibold mb-6'>CheckOut</h1>
      <div className="grid lg:grid-cols-12 gap-8">
          <div className="payment-method space-y-6 *:bg-white *:shadow-sm *:p-6 *:rounded-md lg:col-span-8">
            <div className="payment-options space-y-4">
               <h2 className='font-semibold text-xl'>Payment Method</h2>
                <div className='space-y-4'>
                  <label htmlFor="cod" 
                  className={`${formik.values.paymentMethod === 'cod' ? 'bg-primary-50 border-primary-600/20' : 'transition-colors duration-200' } cursor-pointer flex items-start gap-4 border border-gray-200 rounded-lg px-4 py-6 hover:border-primary-600`}>   
                  <input 
                  className='size-4'
                  type="radio" 
                  name="paymentMethod" 
                  value={`cod`} 
                  id="cod"
                  checked={formik.values.paymentMethod==="cod"}
                  onChange={(e)=> handlePaymentChange(e) }
                  />
                  
                  <div className='w-full space-y-4'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-4 items-center'>
                      <FontAwesomeIcon icon={faMoneyBillWave} className='text-2xl text-primary-600'/>
                    <div>
                      <h3 className='font-semibold'>Cach on Delivery</h3>
                      <p className='text-gray-600 text-sm'>Pay when your order arrives</p>
                    </div>
                    </div>
                     <span className='text-primary-600'>No extra charges</span>
                    </div>
                    <div className={` ${formik.values.paymentMethod === 'cod' ? '':'hidden'} ml-6 flex items-center gap-2 text-primary-600 border border-primary-300 bg-primary-400/20 py-2 px-3 rounded-lg`} >
                      <FontAwesomeIcon icon={faCircleInfo}/>
                      <p className='text-sm'>Please keep exact change ready for hassle-free delivery</p>
                    </div>
                  </div>
                
                </label>
                
                <label htmlFor="online" className={`${formik.values.paymentMethod === 'online' ? 'bg-primary-50 border-primary-600/20 ' : ' transition-colors duration-200' } cursor-pointer flex items-start gap-4 border border-gray-200 rounded-lg px-4 py-6 hover:border-primary-600`}>
                  <input
                  className='size-4' 
                  type="radio" 
                  name="paymentMethod" 
                  value={`online`} 
                  id="online"
                  checked={formik.values.paymentMethod==="online"}
                  onChange={(e)=> handlePaymentChange(e) }
                   />
                  <div className='w-full space-y-4'>
                         <div className='flex justify-between items-center'>
                      <div className='flex gap-4 items-center'>
                       <FontAwesomeIcon icon={faCreditCard} className='text-2xl text-primary-600'/>
                    <div>
                      <h3 className='font-semibold'>Online Payment</h3>
                      <p className='text-gray-600 text-sm'>Pay secure with your card or wallet</p>
                    </div>
                     </div>
                    <span className='text-primary-600'>Recommended</span>
                    </div>
                <div className={`${formik.values.paymentMethod === 'online' ? '' : 'hidden'} ml-6 flex items-center gap-2 text-blue-600 border bg-blue-200/50 border-blue-300 py-2 px-3 rounded-lg`} >
                      <FontAwesomeIcon icon={faCircleInfo}/>
                      <p className='text-sm'>You will be redirected to secure payment gateway to complete your transaction</p>
                    </div>
                  </div>


                </label>
                </div>
              </div>
            <div className='shipping-address space-y-4'>
                 <h2 className='font-semibold text-xl'>Shipping Address</h2>
                 <div className='address flex flex-col gap-2'>
                  <label htmlFor="addressDetails" className='text-sm'>Address Details*</label>
                  <textarea 
                  value={formik.values.shippingAddress.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='shippingAddress.details'
                  id="addressDetails" 
                  className='form-control min-h-20 max-h-40' 
                  placeholder='Enter your full address details'></textarea>
                  {
                    formik.touched.shippingAddress?.details && 
                    formik.errors.shippingAddress?.details && 
                    <p className='text-red-600 text-xs'>*{formik.errors.shippingAddress?.details}</p>
                  }
                 </div>
                 <div className='flex items-center *:grow-1 gap-4'>
                  <div className='phone-number flex flex-col gap-2'>
                    <label htmlFor="phone" className='text-sm'>Phone Number*</label>
                    <input 
                    value={formik.values.shippingAddress.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='shippingAddress.phone'
                    type="tel" 
                    id='phone' 
                    className='form-control' 
                    placeholder='01067424693'/>
                  {
                    formik.touched.shippingAddress?.phone && 
                    formik.errors.shippingAddress?.phone && <p className='text-red-600 text-xs'>*{formik.errors.shippingAddress?.phone}</p>
                  }
                  </div>
                  <div className='city flex flex-col gap-2'>
                     <label htmlFor="city" className='text-sm'>City*</label>
                    <input 
                    value={formik.values.shippingAddress.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='shippingAddress.city'
                    type="text" 
                    id='city' 
                    className='form-control' 
                    placeholder='Sadat City'/>
                  {
                    formik.touched.shippingAddress?.city && 
                    formik.errors.shippingAddress?.city && <p className='text-red-600 text-xs'>*{formik.errors.shippingAddress?.city}</p>
                  }
                  </div>
                 </div>
               </div>
          </div> 

          <div className="order-summary h-fit bg-white shadow-sm rounded-lg p-6 lg:col-span-4">
            <h2 className='text-xl font-semibold'>Order Summary</h2>
            <div className="cart-items border-b border-gray-200 pb-3 max-h-40 overflow-auto">
              {
                products.map((product)=>{
                 return <Link to={`/product-detailes/${product.product.id}`} key={product.product.id} className="item flex items-center gap-2 text-sm pt-2">
                <img src={product.product.imageCover} alt="" className='size-12 object-cover rounded-lg' />
                <div>
                  <h3 className='line-clamp-1'>{product.product.title}</h3>
                  <span className='text-xs text-gray-500'>Qty : {product.count}</span>
                </div>
                <span className='ms-auto '>{product.price} EGP</span>
              </Link>
                })
              }
                 </div>
              <ul className='*:flex *:justify-between *:items-center space-y-3 py-3'>
                <li>
                  <span>Subtotal</span>
                  <span>{totalCartPrice} EGP</span>
                </li>
                <li>
                  <span>Deleivery</span>
                  <span>70 EGP</span>
                </li>
                <li>
                  <span>Tax</span>
                  <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                </li>
                <li className='font-semibold border-t border-gray-200 py-3'>
                  <span>Total</span>
                  <span>{Math.trunc( totalCartPrice+ 70 + (Math.trunc(totalCartPrice * 0.14)))} EGP</span>
                </li>
              </ul>
              <div className='btn-group *:w-full *:flex *:items-center *:justify-center *:gap-2 space-y-3'>
                <button type='submit' className={`btn bg-primary-600 text-white border border-primary-600 hover:bg-primary-500 hover:border-primary-500`}>
                  <span>Proceed Payment</span>
                  <FontAwesomeIcon icon={faArrowRightLong}/>
                </button>
                <Link to={'/cart'} className='btn *:flex *:items-center *:justify-center *:gap-2 bg-transparent border border-gray-500/20 hover:bg-gray-50 '>
                  <FontAwesomeIcon icon={faChevronLeft}/>
                  <span>Previous Step</span>
                </Link>
              </div>
              <div className='space-y-2 pt-3'>
                <h3 className='font-semibold'>Secure checkout</h3>
                <div className='flex items-center gap-3'>
                  <FontAwesomeIcon className='text-primary-600' icon={faLock}/>
                <p className='text-gray-500'>Your payment information is secure</p>
                </div>
                <div className='flex items-center mt-4 space-x-2'>
                  <FontAwesomeIcon icon={faCcVisa} className='text-2xl text-blue-700'/>
                  <FontAwesomeIcon icon={faCcMastercard} className='text-2xl text-red-500'/>
                  <FontAwesomeIcon icon={faCcAmex} className='text-2xl text-blue-500'/>
                  <FontAwesomeIcon icon={faCcPaypal} className='text-2xl text-blue-800'/>
                  <FontAwesomeIcon icon={faCcApplePay} className='text-2xl text-gray-800'/>
                </div>
              </div>
           
          </div>
      </div>
      </form>
    </div>
  </section>
  </>
}
