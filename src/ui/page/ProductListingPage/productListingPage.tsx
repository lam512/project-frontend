import ProductListingGrid from "./component/ProductListingGrid.tsx";
import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../data/product/Product.type.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import {useNavigate} from "react-router-dom";
import TopNavBar from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";

export default function ProductListingPage(){
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] |undefined>(undefined);

  const navigate =useNavigate();

  const getAllProduct = async () => {
    try {
      const responseDataList = await ProductApi.getAllProduct();
      setGetAllProductDtoList(responseDataList);
    }catch (err) {
      navigate("/error");
    }
  }

  useEffect(()=>{
    getAllProduct();
  },[])

  return(
    <>
      <TopNavBar/>
    {
      getAllProductDtoList &&
      <ProductListingGrid getAllProductDtoList={getAllProductDtoList}/>
    }
    <Footer/>
    </>
  )
}