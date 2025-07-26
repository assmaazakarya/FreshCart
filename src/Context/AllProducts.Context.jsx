import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService/Product-sercive";

export const productContext = createContext(null)

export default function ProductProvider({children}){

const [products,setProducts] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [isError , setIsError]= useState(false)
const [error , setError] = useState(null)


async function getProducts() {
       try {
        setIsLoading(true)
        const response = await getAllProducts()
        if(response.success){
        setIsLoading(false)
        setProducts(response.data.data)
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false)
        setIsError(true)
        setError(error)
       }
  }
useEffect(()=>{
    getProducts()
  },[])
  



return <productContext.Provider value={{products , isLoading , isError ,error}} >
{children}
</productContext.Provider>

}
