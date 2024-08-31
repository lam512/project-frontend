import axios from "axios";
import {CartItemDto} from "../data/cartItem/CartItem.type.ts";
import {getAuthConfig} from "../authService/FirebaseAuthService.ts";

const baseUrl = "http://localhost:8080";


export async function getUserCart (): Promise<CartItemDto[]>  {
  try {
  const response = await axios.get <CartItemDto[]>(
    `${baseUrl}/cart`,
    await getAuthConfig()
  )
    return response.data;

    }catch (error){
    console.error(error);
    throw error;
  }
}

export const putCartItem  = async (pid:number,quantity:number)=>{
  await axios.put(
    `${baseUrl}/cart/${pid}/${quantity}`,
    null,
    await getAuthConfig()
  )
}

export const patchCartQuantity = async (pid:number,quantity:number) =>{
  const response = await axios.patch<CartItemDto>(
    `${baseUrl}/cart/${pid}/${quantity}`,
    null,
    await getAuthConfig()
  )
  return response.data;
}

export const deleteCartItem = async (pid:number) =>{
  await axios.delete<CartItemDto>(
    `${baseUrl}/cart/${pid}`,
    await getAuthConfig()
  )
}