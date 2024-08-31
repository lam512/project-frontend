import { Container} from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem.tsx";
import {CartItemDto} from "../../../../data/cartItem/CartItem.type.ts";

type Props ={
  cartItemDtoList : CartItemDto[]
  changeQuantity:(pid:number, quantity:number) => void
  deleteCartItem:(pid:number) =>void
}

export default function ShoppingCartContainer({cartItemDtoList , changeQuantity, deleteCartItem}:Props) {

  return(
    <>
      <Container style={{
        marginTop: 80,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <table className="w-100 " style={{
          borderCollapse: "collapse",
        }}>
          <tr style={{
            textAlign: "left",
            color: "white",
            background: "black",
            fontWeight: "normal",
          }}>
            <th className="p-2 ">Product</th>
            <th className="p-2"></th>
            <th className="p-2" >Quantity</th>
            <th className="p-2" style={{
              textAlign: "right"
            }}>Subtotal
            </th>
          </tr>
            {
              cartItemDtoList.map((value)=>(
                <ShoppingCartItem key={value.pid} cartItemDto={value} handleQuantityChange={changeQuantity} deleteCartItem={deleteCartItem}/>
              ))
            }
        </table>
      </Container>
    </>
  )
}