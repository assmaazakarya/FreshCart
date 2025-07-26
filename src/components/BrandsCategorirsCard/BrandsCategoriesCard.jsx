import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'



export default function BrandsCategoriesCard({category}) {
  

  const {name , slug , image , _id} = category
  return <>
       <div className=' shadow rounded-lg overflow-hidden '>
        <div className='relative'>
            <div className='flex items-end px-4 pb-4 bg-gradient-to-t from-black/50 to-black/10 absolute inset-0 z-20'>
          <h3 className='text-white text-xl font-semibold'>{name}</h3>
            </div>
            <img src={image} className='w-full  h-52 object-contain' alt="" />
         </div>
        <div className='bg-white flex items-center justify-between p-3.5'>
            <h4 className='bg-primary-100 text-primary-600 px-2 py-1 rounded-md'> 
                {slug}
            </h4>
            <Link to={`/categories/${_id}`} className='text-primary-500 cursor-pointer'>
            <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
       </div>
  </> 
}
