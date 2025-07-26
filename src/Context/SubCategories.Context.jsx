import {createContext, useEffect, useState } from "react";
import { getAllSubCategories } from "../services/SubCategoriesService/SubCategories-Service";
import { getAllSubCategoriesOfCategory } from "../services/CategoryService/category-sercive";

export const subCategoriesContext = createContext(null)

export default function SubCategoriesProvider({children}){
   
    const [subCategories,setSubCategories] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError , setIsError] = useState(false)
    const [error , setError] = useState(null)
    const [subCategoriesOfCategory , setSubCategoriesOfCategory ] = useState(null)
    
     async function handleGettingAllSubCategories() {
       try {
        setIsLoading(true)
        const response = await getAllSubCategories()
        if(response.success){
        setIsLoading(false)
        setSubCategories(response.data.data)
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false)
        setIsError(true)
        setError(error)
       }
     }

async function handleFetchingAllSubcategoriesOfCategory({id}) {
  try {
       setIsLoading(true)
       const response = await getAllSubCategoriesOfCategory({id})
       if(response.success){
       setIsLoading(false)
       setSubCategoriesOfCategory(response.data.data);
       }
     } catch (error) {
       console.log(error);
       setIsLoading(false)
       setIsError(true)
       setError(error)
      }

}



    useEffect(()=>{
     handleGettingAllSubCategories()
    },[])

    return <subCategoriesContext.Provider value={{
       subCategoriesOfCategory,subCategories , isError , isLoading , error ,handleFetchingAllSubcategoriesOfCategory
    }}>
     {children}
    </subCategoriesContext.Provider>
}