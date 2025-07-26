import { apiClient } from "../axiosInstance/api-client"

export async function getAllSubCategories (){

   try {
    const options = {
        url :'/subcategories',
        method:"GET"
    }   
    const response = await apiClient.request(options);
    return response
} catch (error) {
    throw error
   }
}

