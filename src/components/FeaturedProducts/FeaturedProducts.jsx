import { useContext, useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getAllProducts } from '../../services/ProductService/Product-sercive'
import Loading from '../Loading/Loading'
import { productContext } from '../../Context/AllProducts.Context'

export default function FeaturedProducts() {
  
  const {products , isLoading , isError , error} = useContext(productContext)


if(isLoading){
    return <Loading />
}

  return <>
      <section className='py-10'>
        <div className="container">
            <h2 className='text-xl font-semibold'>Featured Products</h2>
              <div className="py-10 cards space-y-3 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      
                     {
                         !isLoading && products ? products.map((product)=>{
                         return <ProductCard key={product.id} product={product} />
                       }):<Loading/>
                       
                     }
             
                   </div>
        </div>
      </section>
    </>
  
}
