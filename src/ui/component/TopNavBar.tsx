import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import logo from "../img/nnb_logo_2020.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FireBaseAuthService from "../../authService/FirebaseAuthService.ts";
import ShoppingCartOffcanvasItem from "./ShoppingCartOffcanvasItem.tsx";
import {CartItemDto} from "../../data/cartItem/CartItem.type.ts";
import  * as CartItemApi from "../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";

export default function TopNavBar() {
  const loginUser = useContext(LoginUserContext);
  const navigate =useNavigate();
  const [Cart, setCart] = useState<boolean>(false);
  const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);

  const handleOpenCart = () => {
    setCart(true)
  }
  const handleCloseCart = () => {
    setCart(false);
  }

  const getUserCart = async () => {
    setCartItemDtoList(undefined);
    const responseDatalist = await CartItemApi.getUserCart();
    setCartItemDtoList(responseDatalist);
  }

  const renderCartOffvancasItem =()=>{
    if (cartItemDtoList){
      if (cartItemDtoList.length>0){
        return  (
          cartItemDtoList.map((value)=>(
            <ShoppingCartOffcanvasItem cartItemDto={value} />
          ))
        )
      }
    else{
      return (
        <text> 0 products in your cart</text>
      )
    }
  }
    }

  const renderLoginContainer = () => {
    if (loginUser) {
      return (
        <Nav.Link onClick={()=>{
          FireBaseAuthService.handleSignOut()
        }} style={{
        paddingRight: 0,
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
             className="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
          <path fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg>
      </Nav.Link>
      )
    } else if (loginUser === null) {
      return (
        <Nav.Link href="/login" style={{
        paddingRight: 0
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person"
             viewBox="0 0 16 16">
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      </Nav.Link>
      )
    } else {
      return (
        <div>
        <img src="" alt=""/>
      </div>
      )
    }
  }

  return (
    <>
      <Navbar
        className="w-100"
        style={{
          marginBottom: 8,
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img width="120px"
                 src={logo}
                 alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-0  mt-3 ms-2">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/link">About</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className=" me-sm-1">
            {renderLoginContainer()}
            <Nav.Link onClick={handleOpenCart}>
              <FontAwesomeIcon icon={faCartShopping} size="lg"/>
            </Nav.Link>
          </Nav>
          <Form >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search for.."
                className=" mr-sm-2"
              />
              <Button  variant="primary" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search"
                     viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </Button >
            </InputGroup>
          </Form>
          {/*<Nav.Link className="me-2 ms-2" onClick={handleOpenCart}>*/}
          {/*  <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#111212",}} />*/}
          {/*</Nav.Link>*/}
          <Offcanvas show={Cart} onHide={handleCloseCart} onEnter={getUserCart} placement={"end"} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            {
              renderCartOffvancasItem()
            }
            <br/>
            <br/>
            <Button onClick={()=>{navigate("/shoppingcart")}} className="fw-bold fs-6" variant="primary" type="button" style={{
              backgroundColor: "black",
              borderColor: "black",
              width:160,
              height:40,
              borderRadius:0,
            }}>
              EDIT CART
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}