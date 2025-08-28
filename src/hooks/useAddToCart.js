import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToCart } from '../services/CartService/cart-service'
import { toast } from 'react-toastify';

export default function useAddToCart() {
    
    const queryClient = useQueryClient();
    return useMutation({
    mutationFn:(id)=> addToCart(id),
    mutationKey: ['cart', 'add'],
    onSuccess:(data) => {
    toast.success(data.data.message)
    queryClient.invalidateQueries(['cartInfo'])
    },
    onError:() => {
      toast.error("Failed to add item");
    },
})
}
