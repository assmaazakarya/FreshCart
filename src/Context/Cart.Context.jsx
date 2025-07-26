import {  createContext, useContext, useEffect, useState } from "react";
import { addToCart, getCartItems, removeCartItem, updateCartItems } from "../services/CartService/cart-service";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import { AuthContext } from "./Auth.Context";






export const CartContext = createContext(null)

export default function CartProvider({children}){

const [cartInfo , setCartInfo] = useState(null)   
const [isLoading, setIsLoading] = useState(true)
const [isError , setIsError]= useState(false)
const [error , setError] = useState(null)
const {token} = useContext(AuthContext)


async function handleAddingtoCart(id){
   try {
       setIsLoading(true)
        const response = await addToCart({id})
        if(response.success){
         toast.success(response.data.message)
         setIsLoading(false)
         setCartInfo(response.data)
         handleGettingCartItems()
       }
    } catch (error) {
       setIsLoading(false)
       setError(error)
       setIsError(true)        
    } 

}
async function handleGettingCartItems(){
   try {
        setIsLoading(true)
        const response = await getCartItems()
        if(response.success){
        setIsLoading(false)
        setCartInfo(response.data)
       }
    } catch (error) {
       setIsLoading(false)
       setError(error)
       setIsError(true)        
    } 

}
async function handleRemovingCartItem(id) { 
try {
 const result = await Swal.fire({
  title: "Are you sure you want to remove this item?",
  text: "You won't be able to revert this!",
  icon: "warning",
  iconColor:'#d33',
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#36454F",
  confirmButtonText: "Yes, delete it!"
})
 if(result.isConfirmed){
        const toastId = toast.loading("removing item is in process")
        const response = await removeCartItem(id)
        if(response.success){
        setIsLoading(false)
        setCartInfo(response.data)
        toast.dismiss(toastId)
 }}
    } catch (error) {
       setIsLoading(false)
       setError(error)
       setIsError(true)        
    } 
}
async function handleUpdatingQuantity({id , count}) {
     try {
      const toastId = toast.loading("Updating your item quantity")  
      const response = await updateCartItems({id,count})
      if(response.success){
      toast.dismiss(toastId)   
      setCartInfo(response.data)
       }
    } catch (error) {
       setError(error)
       setIsError(true)        
    } 
}
useEffect(()=>{
   if(token)   handleGettingCartItems()
},[])

return <CartContext.Provider value={{
    cartInfo , 
    isError , 
    isLoading , 
    error , 
    setCartInfo,
    handleAddingtoCart , 
    handleGettingCartItems,
    handleRemovingCartItem,
    handleUpdatingQuantity
}} >
    {children}
</CartContext.Provider>
}