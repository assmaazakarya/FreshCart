import { createContext, useContext, useEffect, useState } from "react";
import { addToWishlist, getItemsFromWishlist, removeItemFromWishlist } from "../services/wishlistService/wishlistService";
import { AuthContext } from "./Auth.Context";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'


export const WishlistContext = createContext(null)


export default function WishlistProvider({children}){

const [wishlistInfo , setWishlistInfo] = useState(null)   
const [isLoading, setIsLoading] = useState(true)
const [isError , setIsError]= useState(false)
const [error , setError] = useState(null)
const [wishlistIds , setWishListIds ] = useState(JSON.parse(localStorage.getItem('wishlist')) || null)
const {token} = useContext(AuthContext)


async function handleAddingtoWishlist(id){
    try {
        const response = await addToWishlist({id})
        if(response.success){
        setWishListIds(response.data)
        localStorage.setItem('wishlist',JSON.stringify(response.data)) 
        console.log(wishlistIds);
        toast.success(response.data.message)
        setIsLoading(false)   
        handleFetchingItemsFromWishlist()
       }
    } catch (error) {
        setIsLoading(false)
       setError(error)
       setIsError(true)        
    } 
}

async function handleFetchingItemsFromWishlist() {
    
    try {
        setIsLoading(true)
        const response = await getItemsFromWishlist()
        if(response.success){
         toast.success(response.data.message)
         setIsLoading(false)
         setWishlistInfo(response.data)     
       }
    } catch (error) {
       setIsLoading(false)
       setError(error)
       setIsError(true)        
    } 
}

async function handleRemovingItemFromWishlist(id) {
    
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
        const toastId = toast.loading("removing item is in progress")
            const response = await removeItemFromWishlist(id)
            if(response.success){
            setWishListIds(response.data)
            localStorage.setItem('wishlist' , JSON.stringify(response.data)) 
            toast.dismiss(toastId)}
            toast.success(response.data.message)
            handleFetchingItemsFromWishlist()
            }

        } catch (error) 
    {
       setError(error)
       setIsError(true)        
    } 
}

useEffect(()=>{
 if(token) handleFetchingItemsFromWishlist()
},[])

return <WishlistContext.Provider value={{
    wishlistInfo , 
    wishlistIds,
    isError , 
    isLoading , 
    error , 
    handleAddingtoWishlist,
    handleRemovingItemFromWishlist

}} >
    {children}
</WishlistContext.Provider>
}