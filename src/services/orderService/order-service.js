import { apiClient } from "../axiosInstance/api-client"

export async function CreateCashOrder ({paymentMethod, cartId , shippingAddress}){
    try {
        const options = {
          method:"POST",
          data:{ shippingAddress }
        }
        if(paymentMethod === 'cod'){
            options.url = `/orders/${cartId}`
        }else if(paymentMethod ==='online'){
            options.url = `/orders/checkout-session/${cartId}?url=http://localhost:5173`
        }
        
        const response = await apiClient.request(options)
        return response

    } catch (error) {
        throw error
    }
}

export async function getUserOrders(id) {
    try {
       const options ={
        url :`/orders/user/${id}`,
        method:"GET" 
       }
      const response = await apiClient.request(options)
      return response
     } catch (error) {
        throw error
    }
}