import { useQuery } from "@tanstack/react-query";
import { getItemsFromWishlist } from "../services/wishlistService/wishlistService";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.Context";

export default function useGetWishlistItems() {

    const {token} = useContext(AuthContext)
    const {data:wishlistInfo , isLoading , isError , error} = useQuery({
        queryKey:['wishlistInfo'],
        queryFn:()=>{if(token){return getItemsFromWishlist()}},
        select :(data) => data?.data
    })
    return {wishlistInfo , isLoading , isError , error};
}
