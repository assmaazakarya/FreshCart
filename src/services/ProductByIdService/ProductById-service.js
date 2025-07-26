import { apiClient } from "../axiosInstance/api-client"

export async function getProductById({id}) {
    
   try{
    const options = {
         method:"GET",
         url:`/products/${id}`
    }
    const response = await apiClient.request(options)
    return response
        
}catch(error){  
    throw error
   }


}