import {TransactionItemDto} from "../../../../data/transaction/transaction.type.ts";

type Props = {
  transactionItemDto : TransactionItemDto
}

export default function CheckOutTableItem({transactionItemDto}:Props) {
  return (
    <tr>
      <td className="p-4">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
        }}>
          <img className="me-2" width="160" src={transactionItemDto.product.image_url}
               alt=""/>
          <div>
            <text>{transactionItemDto.product.name}</text>
            <p><small>Price: ${transactionItemDto.product.price.toLocaleString()}</small></p>
          </div>
        </div>
      </td>
      <td className="text-lg-center" >
        {transactionItemDto.quantity}
      </td>
      <td className="p-4" style={{
        textAlign: "right"
      }}>${transactionItemDto.subtotal}</td>
    </tr>
  )
}