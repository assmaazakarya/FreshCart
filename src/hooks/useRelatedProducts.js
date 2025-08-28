import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/ProductService/Product-sercive'

export default function useRelatedProducts(id) {
  
    const {data:productsByCategory , isLoading , isError , error} = useQuery({
        queryKey:['productsByCategory' , id],
        queryFn: ()=> getAllProducts({category : id}), 
        select : (data)=> data.data.data 
    })
  
    return { productsByCategory, isLoading , isError , error}

}