import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../services/ProductByIdService/ProductById-service';

export default function useProductDetailes(id) {
    
    const { data:productDetails , isLoading , isError , error } = useQuery({
        queryKey:['productDetailes' , id],
        queryFn: ()=> getProductById({id}),
        select:(data) => data?.data.data
    })
    
    return {productDetails, isLoading , isError , error }
}
