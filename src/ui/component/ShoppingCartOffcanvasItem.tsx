import {Col, Row} from "react-bootstrap";
import {CartItemDto} from "../../data/cartItem/CartItem.type.ts";

type Props = {
  cartItemDto : CartItemDto
}

export default function ShoppingCartOffcanvasItem({cartItemDto}:Props) {
  return (
    <>
    <Row >
      <Col>
        <img src ={cartItemDto.imageUrl} alt="" style={{
          height:160,
          width:160
        }}/>
        <h5>{cartItemDto.name}</h5>
        <text>Price:${cartItemDto.price.toLocaleString()}</text>
        <p>Quantity:{cartItemDto.cartQuantity}</p>
      </Col>
    </Row>
    </>
  )
}