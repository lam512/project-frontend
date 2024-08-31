import {Col, Container, Form, Row, Toast, ToastContainer} from "react-bootstrap";
import QuantitySelector from "./QuantitySelector.tsx";
import {ProductDetailDto} from "../../../../data/product/Product.type.ts";
import {useContext, useState} from "react";
import * as CartItemApi from"../../../../api/CartItemApi.ts";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  productDetailDto : ProductDetailDto
}

export default function ProductDetailContainer({productDetailDto}: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddtoCart, setIsAddtoCart] = useState<boolean>(false);
  const loginUser = useContext(LoginUserContext);
  const navigate =useNavigate();
  const [show, setShow] = useState(false);

  const handleQuantityMinus = () =>{
    if (quantity> 1) {
      setQuantity((prevState) =>(
        prevState - 1
      ));
    }
  }

  const handleQuantityPlus = () =>{
    if (quantity < productDetailDto.stock) {
      setQuantity((prevState)=>(
        prevState + 1
      ));
    }
  }

  const handleAddtoCart = async () => {
    if (loginUser) {
      try {
        setIsAddtoCart(true);
        await CartItemApi.putCartItem(productDetailDto.pid, quantity)
        setShow(true)
        setIsAddtoCart(false);
      } catch (err) {
        console.error(err)
      }
    }else if (loginUser===null){
        navigate("/login")
    }
  }

  const renderAddToCartContainer = () =>{
    if (productDetailDto.stock > 0) {
      return (
        <>
          {
             <button type="submit" onClick={handleAddtoCart} disabled={isAddtoCart} style={{
              width: 140,
              height: 40,
              marginBottom: 20,
              backgroundColor: "white",
            }}> Add To Cart</button>
          }
        </>
      )
    } else {
      return (
        <text style={{fontSize:20, color:"red"}}>Sold Out</text>

      )
    }
  }

  return (
    <>
      <Container style={{
        marginTop: 48
      }}>
        <Row>
          <Col style={{
            padding: 20
          }}>
            <img src={productDetailDto.image_url}
                 width="100%"
                 alt=""/>
          </Col>
          <Col style={{
            padding: 20
          }}>
            <p>Home / Product / Product Details</p>
            <h1>{productDetailDto.name}</h1>
            <h4 style={{
              fontSize: 22,
              margin: 20,
              fontWeight: "bold"
            }}>${productDetailDto.price}</h4>
            <Form style={{marginBottom:10}}>
              {/*<Form.Select size="sm" style={{*/}
              {/*  display: "block",*/}
              {/*  padding: 10,*/}
              {/*  marginTop: 20,*/}
              {/*  marginBottom: 20*/}
              {/*}}>*/}
              {/*  <option>Select Size</option>*/}
              {/*  <option>S</option>*/}
              {/*  <option>M</option>*/}
              {/*  <option>L</option>*/}
              {/*  <option>XL</option>*/}
              {/*  <option>XXL</option>*/}
              {/*</Form.Select>*/}
              <QuantitySelector
                quantity={quantity}
                handleMinus={handleQuantityMinus}
                handlePlus={handleQuantityPlus}/>
              {
                renderAddToCartContainer()
              }
            </Form>
            <h3>Product Details</h3>
            <br/>
            <p style={{
              whiteSpace: "pre-wrap"
            }}>{productDetailDto.description}</p>
          </Col>
        </Row>
        <ToastContainer position="top-end" className="p-3" style={{zIndex: 1}}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{
            marginTop:60
          }}>
            <Toast.Header style={{
              backgroundColor:"darkgray",
              color:"white"}}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Success</strong>
            </Toast.Header >
            <Toast.Body>Success add to cart!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </>
  )
}