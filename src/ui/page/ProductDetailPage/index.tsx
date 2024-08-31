import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "react-bootstrap";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/product/Product.type.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import Footer from "../../component/Footer.tsx";

type Params = {
  productId : string
}

export default function ProductDetailPage() {
  const [productDetailDto, setProductDetailDto] = useState<ProductDetailDto | undefined>(undefined);

  const navigate = useNavigate();

  const params = useParams<Params>();

  const getProductByPid = async () => {
    if(params.productId) {
      try{
      const responseData = await ProductApi.getProductDyPid(params.productId);
      setProductDetailDto(responseData);
      }catch (err){
        console.error(err);
        navigate("/error");
      }
    }
  }

  useEffect(()=>{
    getProductByPid();
  },[])

  return (
    <>
      <TopNavBar/>
      <Container>
        {
        productDetailDto &&
        <ProductDetailContainer productDetailDto={productDetailDto}/>
        }
      </Container>
      <Footer/>
    </>
  )
}