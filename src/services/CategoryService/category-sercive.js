import { apiClient } from "../axiosInstance/api-client"

export async function getAllCategories(){
      
    try {
        const options ={
        method:"GET",
        url:'/categories'
       }
       const response = await apiClient.request(options)
       return response
    } catch (error) {
        throw error
    }
    

}

export async function getAllSubCategoriesOfCategory ({id}){
   try {
    const options = {
        url :`/categories/${id}/subcategories`,
        method:"GET"
    }   
    const response = await apiClient.request(options)
    return response
} catch (error) {
    throw error
   }

}