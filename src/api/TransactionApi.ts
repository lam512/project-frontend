import axios from "axios";
import {getAuthConfig} from "../authService/FirebaseAuthService.ts";
import {TransactionDto} from "../data/transaction/transaction.type.ts";

const baseUrl = "http://localhost:8080";

export const  getTransactionByTid = async (tid:string) => {
  const response = await axios.get <TransactionDto>(
    `${baseUrl}/transaction/${tid}`,
    await getAuthConfig()
  );
  return response.data;
}

export const prepareTransaction = async () => {
  const response = await axios.post <TransactionDto>(
    `${baseUrl}/transaction/prepare`,
    null,
    await getAuthConfig()
  );
  return response.data;
}

export const payTransaction = async (tid:string) => {
  await axios.patch <TransactionDto>(
    `${baseUrl}/transaction/${tid}/pay`,
    null,
    await getAuthConfig()
  );
}

export const finishTransaction = async (tid:string) => {
  const response = await axios.patch <TransactionDto>(
    `${baseUrl}/transaction/${tid}/finish`,
    null,
    await getAuthConfig()
  );
  return response.data;
}
