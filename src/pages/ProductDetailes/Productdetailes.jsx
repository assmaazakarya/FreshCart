
import { useParams } from "react-router"
import ProductInfo from "../../components/ProductInfo/ProductInfo"
import ProductDetailesTap from "../../components/ProductDetailesTaps/ProductDetailesTap"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import useProductDetailes from "../../hooks/useProductDetailes"
import ProductDetailesSkeleton from "../../components/Skeleton/ProductDetailesSkeleton"

export default function Productdetailes() {

  const {id} = useParams()
  const {productDetails, isLoading  } = useProductDetailes(id)
 
  if(isLoading) return <ProductDetailesSkeleton />
return <> 
            <div className="bg-gray-50">
              <title>Product Detailes</title>
              <ProductInfo productDetails={productDetails} />
              <ProductDetailesTap productDiscription={productDetails.description}/>
              <RelatedProducts category={productDetails.category}/>
            </div>
    </>
  
}
