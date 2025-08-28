import { useQuery } from '@tanstack/react-query'
import { getAllSubCategories } from '../services/SubCategoriesService/SubCategories-Service'

export default function useSubcategories() {
  
  const {data:subCategories , isLoading , isError ,error} = useQuery({
    queryKey:['subCategories'],
    queryFn : getAllSubCategories,
    select: (data)=> data?.data.data  
  })
  
    return { subCategories, isLoading , isError , error}
}
