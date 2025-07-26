
import Slider from '../../components/Slider/Slider'
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures' 
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import HomeDeals from '../../components/HomeDeals/HomeDeals'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Subscribe from '../../components/Subscribe/Subscribe';


export default function Home() {




  return (
    <div className='bg-gray-100 space-y-5'>
      <Slider/>
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals/>
      <FeaturedProducts/>
      <Subscribe/>
    </div>
  )
}
