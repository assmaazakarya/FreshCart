import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { removeItemFromWishlist } from '../services/wishlistService/wishlistService';

export default function useRemoveItemFromWishlist() {
    const queryClient = useQueryClient();
    let toastId = null
    return useMutation({
    mutationFn: async(id)=> {
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
    toastId = toast.loading("removing item is in process")
    return removeItemFromWishlist(id)
}},
    mutationKey: ['wishlist', 'remove'],
    onSuccess:(data) => {
    toast.dismiss(toastId)
    if(data !== undefined){
        toast.success("This item has been removed from your wishlist successfully")
        localStorage.setItem('wishlistIDs',JSON.stringify(data.data.data)) 

    }
    queryClient.invalidateQueries(['wishlistInfo'])
},
    onError:(error) => {
      toast.error("something went wrong, Please try again later")
    },
})
}
