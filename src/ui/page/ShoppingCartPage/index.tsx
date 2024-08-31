import * as TransactionApi from "../../../api/TransactionApi.ts";
import TopNavBar from "../../component/TopNavBar.tsx";
import {Button, Container} from "react-bootstrap";
import Footer from "../../component/Footer.tsx";
import ShoppingCartContainer from "./component/ShoppingCartContainer.tsx";
import {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../../data/cartItem/CartItem.type.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import LoadingSpinner from "../../component/LoadingSpinner.tsx";

export default function ShoppingCartPage() {
  const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const loginUser =useContext(LoginUserContext);

  const calTotal = (cartItemDtoList: CartItemDto[]) => {
    return cartItemDtoList.reduce((total, currentValue) => (
      total + currentValue.cartQuantity * currentValue.price
    ), 0)
  }

  const prepareTransaction = async () => {
    try {
      setIsLoading(true)
      const responseDate = await TransactionApi.prepareTransaction();
      navigate(`/checkout/${responseDate.tid}`)
      setIsLoading(false)
    }catch (err) {
      console.error(err)
      navigate("error")
    }
  }

  const getUserCart = async () => {
    try {
      const responseDatalist = await CartItemApi.getUserCart()
      setCartItemDtoList(responseDatalist);
    } catch (err) {
      console.error(err)
      navigate("/error")
    }
  }

  const changeQuantity = (pid:number, quantity:number) =>{
    const updatedCartItemDtoList = cartItemDtoList?.map((value)=>{
      if (value.pid === pid ) {
        value.cartQuantity = quantity;
      }
      return value;
    })
    setCartItemDtoList(updatedCartItemDtoList);
  }

  const deleteCartItem = (pid:number)=>{
    const updateDtoList = cartItemDtoList?.filter((value)=> (
      value.pid !== pid
    ));
    setCartItemDtoList(updateDtoList);
  }

  useEffect(() => {
    if(loginUser) {
      getUserCart();
    }else if (loginUser===null){
      navigate("/login")
    }
  }, [loginUser])

  const renderCartContainer =()=>{
    if (cartItemDtoList && cartItemDtoList.length > 0) {
      return (
        <>
          <ShoppingCartContainer cartItemDtoList={cartItemDtoList} changeQuantity={changeQuantity}
                                 deleteCartItem={deleteCartItem}/>
          <div style={{
            display: "flex",
            justifyContent: "flex-end"
          }}>
            <table className="w-100" style={{
              borderTop: "3px solid",
              maxWidth: 400,
            }}>
              <tr >
                <td className="fw-bold">Total</td>
                <td style={{
                  textAlign: "right",
                  paddingRight:30,
                }}>${calTotal(cartItemDtoList).toLocaleString()}
                </td>
              </tr>
              <tr style={{
                textAlign: "right",
              }}>
                <Button
                  onClick={prepareTransaction}
                  variant="primary"
                  type="submit"
                  style={{
                  backgroundColor: "black",
                  borderColor: "black",
                  width: 160,
                  height: 52,
                  marginTop: 4,
                  marginLeft: 80
                }}>CHECK OUT</Button>
              </tr>
            </table>
          </div>
        </>
      )
    }else if (cartItemDtoList && cartItemDtoList.length === 0){
      return (
        <h1 style={{
          lineHeight:14
        }}>Shopping Cart is Empty....</h1>
      )
    }
  }

  return (
    <>
      <TopNavBar/>
      <Container>
        {
          renderCartContainer()
        }
      </Container>
      <LoadingSpinner loading={isLoading}/>
      <Footer/>
    </>
  )
}