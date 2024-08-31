import TopNavBar from "../../component/TopNavBar.tsx";
import {Button, Container} from "react-bootstrap";
import Footer from "../../component/Footer.tsx";
import CheckOutTable from "./component/CheckOutTable.tsx";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/transaction.type.ts";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import LoadingSpinner from "../../component/LoadingSpinner.tsx";

type Params ={
  transactionId : string
}

export default function CheckOutPage() {
  const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate();
  const {transactionId} = useParams<Params>();

  const getTransactionByTid = async ()=>{
    if(!transactionId){
      navigate("/error")
    }
    try {
      const responseDate = await TransactionApi.getTransactionByTid(transactionId!);
      setTransactionDto(responseDate);
    }catch (err){
      console.error(err);
      navigate("/error");
    }
  }

  const handlePay = async () => {
    if(!transactionId){
      navigate("/error")
    }
    try{
      setIsLoading(true)
      await TransactionApi.payTransaction(transactionId!);
      await TransactionApi.finishTransaction(transactionId!);
      navigate("/thankyou");
      setIsLoading(false);
    }catch (err){
      console.error(err);
      navigate("/error")
    }
  }


  useEffect(()=>{
    if (loginUser) {
      getTransactionByTid();
    }else if(loginUser===null) {
      navigate("/")
    }
  },[loginUser]);


  const renderCheckOutContainer =() =>{
    if (transactionDto){
      return(
        <>
          <CheckOutTable transactionDto={transactionDto}/>
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
                  paddingRight: 30,
                }}>${transactionDto.total.toLocaleString()}
                </td>
              </tr>
              <tr style={{
                textAlign: "right",
              }}>
                <Button onClick={handlePay} variant="primary" type="submit" style={{
                  backgroundColor: "black",
                  borderColor: "black",
                  width: 160,
                  height: 52,
                  fontSize:20,
                  marginTop: 4,
                  marginLeft: 40
                }}>Pay</Button>
              </tr>
            </table>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <TopNavBar/>
      <Container>
        {
          renderCheckOutContainer()
        }
      </Container>
      <LoadingSpinner loading={isLoading}/>
      <Footer/>
    </>
  )
}