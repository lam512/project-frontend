import {Container} from "react-bootstrap";
import CheckOutTableItem from "./CheckOutTableItem.tsx";
import {TransactionDto} from "../../../../data/transaction/transaction.type.ts";

type Props = {
  transactionDto :  TransactionDto
}

export default function CheckOutTable({transactionDto}:Props) {
  return (
    <>
      <Container  style={{
        marginTop: 40,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <table className="w-100 " style={{
          borderCollapse: "collapse"}}>
          <tr style={{
            textAlign: "left",
            color: "white",
            background: "black",
            fontWeight: "normal",
          }}>
            <th className="p-2 ">Product</th>
            <th className="p-2 text-lg-center">Quantity</th>
            <th className="p-2" style={{
              textAlign: "right"
            }}>Subtotal
            </th>
          </tr>
          {
            transactionDto.items.map((value)=> (
              <CheckOutTableItem key={value.tpid} transactionItemDto={value}/>
            ))
          }
        </table>
      </Container>
    </>
  )
}