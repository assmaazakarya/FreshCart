import { useQuery } from "@tanstack/react-query"
import { getAllSubCategoriesOfCategory } from "../services/CategoryService/category-sercive"

export default function useSubCategoriesOfCategory(id) {
  
    const {data:subCategoriesOfCategory , isLoading , isError ,error} = useQuery({
        queryKey :['subCategoriesOfCategory',id],
        queryFn: ()=> getAllSubCategoriesOfCategory({id}),
        select: (data) => data.data.data
    })
    return {subCategoriesOfCategory, isLoading , isError , error}
}
