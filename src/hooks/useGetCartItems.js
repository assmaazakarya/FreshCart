import { useQuery } from '@tanstack/react-query'
import { getCartItems } from '../services/CartService/cart-service'
import { AuthContext } from "../Context/Auth.Context";
import { useContext } from 'react';

export default function useGetCartItmes() {
   const {token} = useContext(AuthContext)
   
    const {isError, error,isLoading , data:cartInfo} = useQuery({
        queryKey:['cartInfo'],
        queryFn: ()=> {if(token){return getCartItems()}},
        select :(data)=> data.data
    })
    return {isError, error,isLoading ,cartInfo}
}
