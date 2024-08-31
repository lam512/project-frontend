import {CartItemDto} from "../../../../data/cartItem/CartItem.type.ts";
import {Button, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import * as CartItemApi from "../../../../api/CartItemApi.ts";
import {useState} from "react";

type Props ={
  cartItemDto :CartItemDto
  handleQuantityChange: (pid:number, quantity:number) => void
  deleteCartItem: (pid:number) =>void
}

export default function ShoppingCartItem({cartItemDto,handleQuantityChange, deleteCartItem}:Props) {
  const [isQuantityUpdating, setIsQuantityUpdating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  
const handleQuantityMinusOne = async () =>{
  if (cartItemDto.cartQuantity > 1) {
    setIsQuantityUpdating(true);
    const responseData = await CartItemApi.patchCartQuantity(cartItemDto.pid, cartItemDto.cartQuantity - 1);
    setIsQuantityUpdating(false);
    handleQuantityChange(cartItemDto.pid, responseData.cartQuantity)
  }
}

  const handleQuantityPlusOne = async () =>{
    if (cartItemDto.cartQuantity < cartItemDto.stock) {
      setIsQuantityUpdating(true);
      const responseData = await CartItemApi.patchCartQuantity(cartItemDto.pid, cartItemDto.cartQuantity + 1);
      setIsQuantityUpdating(false);
      handleQuantityChange(cartItemDto.pid, responseData.cartQuantity)
    }
  }

  const handleCartItemDelete = async () => {
    setIsDeleting(true);
    await CartItemApi.deleteCartItem(cartItemDto.pid);
    deleteCartItem(cartItemDto.pid);
    setIsDeleting(false);
  }
  
  return (
    <tr>
      <td className="p-4" >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
        }}>
          <img className="me-2" width="160" src={cartItemDto.imageUrl}
               alt=""/>
          <div>
            <text>{cartItemDto.name}</text>
            <p><small>Price: ${cartItemDto.price.toLocaleString()}</small></p>
          </div>
        </div>
      </td>
      <td className=" text-end" style={{
        paddingRight: 12,
      }}>
        <Button onClick={handleCartItemDelete} disabled={isDeleting} style={{
          backgroundColor: "black",
          borderColor: "black",
          padding:8
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3"
             viewBox="0 0 16 16">
          <path
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
        </Button>
      </td>
      <td className="pt-4">
            <Row style={{
              width:160
            }}>
              <InputGroup>
                <Button onClick={handleQuantityMinusOne} disabled={isQuantityUpdating} style={{
                  width:40,
                  marginBottom:20,
                  backgroundColor:"white",
                  borderColor:"darkgray"
                }}>
                  <FontAwesomeIcon icon={faMinus} style={{color: "#aaaaaa",}} />
                </Button>
                <Form.Control type="num" value={cartItemDto.cartQuantity} style={{
                  marginBottom:20,
                  textAlign:"center",
                  fontSize:20
                }}></Form.Control>
                <Button onClick={handleQuantityPlusOne} disabled={isQuantityUpdating} style={{
                  width:40,
                  marginBottom:20,
                  backgroundColor:"white",
                  borderColor:"darkgray"
                }}>
                  <FontAwesomeIcon icon={faPlus} style={{color: "#aaaaaa",}}/>
                </Button>
              </InputGroup>
            </Row>

      </td>
      <td className="p-4" style={{
        textAlign: "right"
      }}>${cartItemDto.price * cartItemDto.cartQuantity}
      </td>
    </tr>
  )
}