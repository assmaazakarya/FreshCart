import { apiClient } from "../axiosInstance/api-client";

export async function addToCart({id}){
try {
  const options={
    url :'/cart',
    method:"POST",
    data:{
        productId:id 
    }
  }
    const response = await apiClient.request(options)
    return response
    
} catch (error) {
    throw error
}   
}
export async function getCartItems() {
  
  try {
    const options = {
      url:'/cart',
      method:"GET"
    }
    const response = await apiClient.request(options);
    return response
  } catch (error) {
    throw error
  }

}
export async function removeCartItem(id) {
  try {
    
  const options={
    url :`/cart/${id}`,
    method:"DELETE",
  }
    const response = await apiClient.request(options)
    return response
    
} catch (error) {
    throw error
}   
}
export async function updateCartItems({id,count}) {
  try {
    
  const options={
    url :`/cart/${id}`,
    method:"PUT",
    data:{
      count
    }
  }
    const response = await apiClient.request(options)
    return response
    
} catch (error) {
    throw error
}   
}