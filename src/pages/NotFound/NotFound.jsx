import { faComment, faEnvelope, faHome, faPhone, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import Subscribe from '../../components/Subscribe/Subscribe'
import useCategories from '../../hooks/useCategories'

export default function NotFound() {
  
    const {categories , isLoading} = useCategories()
    let category = []
    if(!isLoading){
      category = categories?.filter((categ)=>{
     if(categ.slug === "men's-fashion" || 
      categ.slug === "women's-fashion" || 
      categ.slug === "baby-and-toys" ||
      categ.slug === "beauty-and-health")  
      return categ
      })
     }
  

     
  return <>
  <main className='bg-gray-50 py-15'>
   <div className="container gap-6 flex flex-col justify-center items-center text-center">
     <div>
      <h2 className='text-9xl font-extrabold relative'>
        <span className='text-primary-100'>404</span>
        <FontAwesomeIcon className='text-5xl text-primary-600 absolute top-1/2 left-1/2 -translate-1/2' icon={faShoppingCart} />
      </h2>
    </div>
    <div className='space-y-4'>
       <h3 className='text-2xl font-bold text-gray-950'>Opps ! Page Not Found</h3>
      <div className='space-y-1'>
    <p className='text-sm text-gray-500'>The page you looking for seems to have gone shopping !</p>
     <span className='text-xs text-gray-500'>Don't worry, our fresh products are still available for you</span>
      </div>
  <div className='flex items-center gap-3 justify-center'>
      <Link to='/'>
      <button  className='hover:bg-transparent hover:text-primary-600  btn flex items-center gap-1 justify-center border border-primary-600 bg-primary-600 text-white'> 
        <FontAwesomeIcon icon={faHome} />
        <span className='text-sm'>Back to Home</span>
      </button>
      </Link>
      <Link>
      <button  className=' hover:bg-primary-600 hover:text-white btn flex items-center gap-1 justify-center border border-primary-600 bg-transparent text-primary-600'>
        <FontAwesomeIcon icon={faSearch} />
        <span className='text-sm'>Search Products</span>
      </button>
      </Link>
    
    
    
    
     </div>
    </div>
     <div className='space-y-4'>
     <p className='font-semibold text-gray-800'>Or explore our popular categories </p>
 <ul className='flex items-center gap-4'>
  <li>
<Link to={`/categories/${category[0]?._id}`}>
  <div className='size-35 bg-white rounded-lg shadow flex flex-col items-center justify-center gap-2 text-sm text-gray-800 font-semibold'>
        <img src={category[0]?.image} className='w-20 h-15 object-contain rounded-full' alt="" />
        <h3>
          {category[0]?.name} 
        </h3>
      </div>
</Link>
  </li>
  <li>
<Link to={`/categories/${category[1]?._id}`}>
  <div className='size-35 bg-white rounded-lg shadow flex flex-col items-center justify-center gap-2 text-sm text-gray-800 font-semibold'>
        <img src={category[1]?.image} className='w-20 h-15 object-contain rounded-full' alt="" />
        <h3>
          {category[1]?.name} 
        </h3>
      </div>
</Link>
  </li>
    <li>

<Link to={`/categories/${category[2]?._id}`}>
  <div className='size-35 bg-white rounded-lg shadow flex flex-col items-center justify-center gap-2 text-sm text-gray-800 font-semibold'>
        <img src={category[2]?.image} className='w-20 h-15 object-contain rounded-full' alt="" />
        <h3>
          {category[2]?.name} 
        </h3>
      </div>
</Link>
  </li>
<li>
<Link to={`/categories/${category[3]?._id}`}>
    <div className='size-35 bg-white rounded-lg shadow flex flex-col items-center justify-center gap-2 text-sm text-gray-800 font-semibold'>
        <img src={category[3]?.image} className='w-20 h-15 object-contain rounded-full' alt="" />
        <h3>
          {category[3]?.name} 
        </h3>
      </div>
</Link>
  </li>
 </ul>

     </div>
     <div className='bg-primary-50 py-8 px-15 rounded-lg space-y-4 '>
       <h4 className='font-semibold text-gray-800'>Need Help?</h4>
       <p className='text-sm text-gray-700'>Our customer support team is here to assist 24/7 </p>
       <ul className='flex items-center gap-8'>
        <li className='text-sm text-gray-700 space-x-2' >
          <FontAwesomeIcon className='text-primary-600' icon={faPhone}/>
          <span>+1 (800) 123-4567</span>
        </li>
          <li  className='text-sm text-gray-700 space-x-2' >
          <FontAwesomeIcon className='text-primary-600' icon={faEnvelope}/>
          <span>support@freshcart.com</span>
        </li>
        <li  className='text-sm text-gray-700 space-x-2' >
          <FontAwesomeIcon className='text-primary-600' icon={faComment}/>
          <span>Live Chat</span>
        </li>

       </ul>
     </div>
   </div>
  </main>
  <Subscribe/>
  </>
}
