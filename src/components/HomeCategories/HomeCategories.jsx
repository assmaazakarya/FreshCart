import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { useContext,} from 'react'
import Loading from '../Loading/Loading'
import { categoriesContext } from '../../Context/AllCategories.Context'

export default function HomeCategories() {
  
const {categories , isLoading , isError , error} = useContext(categoriesContext)

if(isLoading){
    return <Loading />
}

  return (
    <div className='container'>
      <div className='flex flex-col gap-3 items-start justify-between md:items-center py-4 md:flex-row md:gap-0 '>
    <h3 className='text-xl font-semibold'>Shop by Category</h3>
        <Link to={'/categories'} className=' group flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors duration-200'>
        <span>View All Categories</span>
         <FontAwesomeIcon className='group-hover:translate-x-1 transition-transform duration-200' icon={faArrowRight}/>
        </Link>
    </div>

    <div className='py-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 '>

     {
       !isLoading && categories ? categories.map((category)=>{
         
        return <Link to={`/categories/${category._id}`} key={category._id} className='hover:shadow-md transition-shadow duration-300 *:bg-white *:shadow-xs *:rounded-sm *:flex *:flex-col *:items-center *:text-center *:py-4 *:space-y-2'>
        <div>
         <div className='rounded-full overflow-hidden'>
            <img src={category.image} className='size-15 object-contain' alt="" />
         </div>
         <div>
            <h4 className='font-semibold'>{category.name}</h4>
         </div>
        </div>
        </Link> 

        }) :<Loading/>
      }  


        
     </div>
     </div>
  )
}
