import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCartItems } from '../services/CartService/cart-service'
import { toast } from 'react-toastify'

export default function useUpdateCartItemsQuantitiy() {
   let toastId = null
   const queryClient = useQueryClient()
   return useMutation({
    mutationFn : ({id,count})=> {            
        toastId = toast.loading("Updating your item quantity")  
        return updateCartItems({id,count})
    },
    mutationKey:['cart','update'],
    onSuccess:()=>{
        toast.dismiss(toastId) 
        queryClient.invalidateQueries(['cartInfo']) 
        toast.success("Your cart quantity has been updated successfully") 
    },
    onError:()=>{
        toast.error("Something went wrong , Please try again later")
    }
})
}
