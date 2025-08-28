import { useMutation,useQueryClient } from '@tanstack/react-query'
import { addToWishlist } from '../services/wishlistService/wishlistService'
import { toast } from 'react-toastify'

export default function useAddToWishlist() {
  
    const queryClient = useQueryClient()

    return useMutation({   
    mutationKey:['wishlist' , 'add'],
    mutationFn:(id)=> addToWishlist({id}),
    onSuccess:(data)=> {
    localStorage.setItem('wishlistIDs',JSON.stringify(data.data.data)) 
    toast.success(data.data.message)
    queryClient.invalidateQueries(['wishlistInfo'])
      },
      onError:() => {
        toast.error("Failed to add item");
      },
})
}
