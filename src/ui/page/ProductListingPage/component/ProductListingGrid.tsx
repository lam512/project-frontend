import {Col, Container, Row} from "react-bootstrap";
import ProductListingCard from "./ProductListingCard.tsx";
import {GetAllProductDto} from "../../../../data/product/Product.type.ts";

type Props ={
  getAllProductDtoList : GetAllProductDto[]
}

export default function ProductListingGrid({getAllProductDtoList}:Props) {
  return (
    <Container>
      <Row >
        {
          getAllProductDtoList.map((value)=>(
            <Col md={4} key={value.pid} >
              <div className="w-100 d-flex justify-content-center my-2 ">
              <ProductListingCard key={value.pid} getAllProductDto={value}/>
              </div>
            </Col>
            ))
        }
      </Row>
    </Container>
  )
}