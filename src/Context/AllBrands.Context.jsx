import { createContext, useEffect, useState } from "react";
import { getAllBrands } from "../services/BrandsService/brands-service";

export const BrandsContext = createContext(null)

export default function BrandsProvider ({children}){
      const [brands, setBrands] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [isError, setIsError] = useState(false);
      const [error, setError] = useState(null);
    
     async function handleFetchingAllBrands(){
        try {
            setIsLoading(true)
            const response = await getAllBrands()
            if(response.success){
                setIsLoading(false)
                setBrands(response.data)
                setIsError(false)
            }
        } catch (error) {
            setIsError(ture)
            setIsLoading(false)
            setError(error)
        }
     }

useEffect(()=>{
handleFetchingAllBrands()
},[])
    return <BrandsContext.Provider value={{
        brands , 
        isError ,
        isLoading , 
        error,
        
        }}>
    {children}
    </BrandsContext.Provider>
}