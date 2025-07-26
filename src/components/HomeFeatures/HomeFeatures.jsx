import { faTruckFast , faArrowLeftRotate , faShieldHalved ,faHeadset} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function HomeFeatures() {
  return (
    <div className="bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 *:flex *:gap-4 *:items-center">
        <div className='border border-gray-300/30 rounded-sm p-4'>
            <div className='size-12 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 *:text-xl'>
            <FontAwesomeIcon  icon={faTruckFast}/>       
            </div>
            <div>
                <h3 className='font-semibold text-lg'>Free Delievery</h3>
                <p className='text-gray-400'>Odrer $50 or more</p>
            </div>
        </div>
        
           <div  className='border border-gray-300/30 rounded-sm p-4'>
            <div className='size-12 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 *:text-xl'>
            <FontAwesomeIcon  icon={faArrowLeftRotate}/>       
            </div>
            <div>
                <h3 className='font-semibold'>30 Days Return</h3>
                <p className='text-gray-400 text-sm'>Satisfaction guranteed</p>
            </div>
        </div>


           <div  className='border border-gray-300/30 rounded-sm p-4'>
            <div className='size-12 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 *:text-xl'>
            <FontAwesomeIcon  icon={faShieldHalved}/>       
            </div>
            <div>
                <h3 className='font-semibold'>Secure Payment</h3>
                <p className='text-gray-400 text-sm'>100% portected checkout</p>
            </div>
        </div>

           <div  className='border border-gray-300/30 rounded-sm p-4'>
            <div className='size-12 bg-primary-200 flex items-center justify-center rounded-full *:text-primary-600 *:text-xl'>
            <FontAwesomeIcon  icon={faHeadset}/>       
            </div>
            <div>
                <h3 className='font-semibold'>24/7 Support</h3>
                <p className='text-gray-400 text-sm'>Ready to help anytime</p>
            </div>
        </div>
      </div>
    </div>
  )
}
