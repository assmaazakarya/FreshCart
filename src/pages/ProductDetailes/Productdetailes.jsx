
import { useParams } from "react-router"
import ProductInfo from "../../components/ProductInfo/ProductInfo"
import ProductDetailesTap from "../../components/ProductDetailesTaps/ProductDetailesTap"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import { getProductById } from "../../services/ProductByIdService/ProductById-service"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"

export default function Productdetailes() {

  const {id} = useParams()
  const [productDetails , setProductDetails] = useState(null)
  const [isLoading , setIsLoading] = useState(true)
  const [isError , setIsError] = useState(false)



  async function getProductInfo() {
    try {
     setIsLoading(true) 
     const response = await getProductById({id})
     if(response.success){
     setIsLoading(false)
     setProductDetails(response.data.data)
     }
    } catch (error) { 
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(()=>{
    getProductInfo()
  },[id])

  if(isLoading) return <Loading />

  return <> 
            <div className="bg-gray-50">
              <ProductInfo productDetails={productDetails} />
              <ProductDetailesTap productDiscription={productDetails.description}/>
              <RelatedProducts category={productDetails.category}/>
            </div>
    </>
  
}
