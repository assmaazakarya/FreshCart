import { Link } from "react-router";
import Subscribe from "../../components/Subscribe/Subscribe";
import useBrands from "../../hooks/useBrands";
import BrandsSkeleton from "../../components/Skeleton/BrandsSkeleton";

export default function Brands() {

const {brands , isLoading} = useBrands()

if(isLoading) {return <BrandsSkeleton/>} 

  return <>
   <section className="pt-10 space-y-8 text-center">
    <div className="container">
      <div className="space-y-4">
      <h2 className="text-gray-900 text-2xl font-semibold">Our Partner Brands</h2>
      <p className="text-gray-600 text-sm">Discover quality products from our trusted brand partners. We've partnered with leading <br />
        brands to bring you the best selection of fresh and organic products
      </p>
    </div>
    
    </div>
    <div className="bg-gray-50 py-10">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 *:rounded-md *:shadow ">
        { brands?.map((brand)=>{
          return <div className="overflow-hidden bg-white" key={brand._id}>
            <img src={brand.image} className="h-2/3 mx-auto" alt="" />
            <div className="border-t border-gray-100 flex justify-between h-1/3 items-center px-5">
              <h4 className="text-gray-600 font-semibold">{brand.name}</h4>
              <Link className="text-primary-600">View</Link>
            </div>
          </div>
        })
      }
      </div>
    </div>
   </section>
   <Subscribe/>
  </>
}
