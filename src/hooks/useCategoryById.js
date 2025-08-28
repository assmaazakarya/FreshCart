import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../services/ProductService/Product-sercive"

export default function useCategoryById(id) {
  
  const {data:categoryById , isLoading , isError , error} = useQuery({
    queryKey : ['categoryId', id],
    queryFn: ()=> getAllProducts({category : id}),
    select :(data) => data.data.data
   })
    
    return { categoryById, isLoading , isError , error}
}



