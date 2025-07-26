import { apiClient } from "../axiosInstance/api-client";

export async function getAllProducts({limit,sort,fields,price_gte,page,keyword,brand,price_lte,category} = {} ) {
      
  try {
        const options ={
          method:"GET",
          url:`/products?${limit?`limit=${limit}`:''}${sort?`&sort=${sort}`:''}${fields?`&fields=${fields}`:''}${price_gte?`&price[gte]=${price_gte}`:''}${page?`&page=${page}`:''}${keyword?`&keyword=${keyword}`:''}${brand?`&brand=${brand}`:''}${price_lte?`&price[lte]=${price_lte}`:''}${category?`&category[in]=${category}`:''}`
         }

         const response = await apiClient.request(options)             
        
         return response
      }  catch (error) {
         throw error
      }
      
}
