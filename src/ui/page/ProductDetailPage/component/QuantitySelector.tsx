import {Button, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

type Props = {
  quantity : number,
  handleMinus : () =>void,
  handlePlus : ()=> void
}

export default function QuantitySelector({quantity, handleMinus, handlePlus}:Props) {
  return (
    <Row>
      <InputGroup>
      <Button onClick={handleMinus} style={{
        width:40,
        marginBottom:20,
        backgroundColor:"white",
        borderColor:"darkgray"
      }}>
        <FontAwesomeIcon icon={faMinus} style={{color: "#aaaaaa",}} />
      </Button>
      <Form.Control type="num" value={quantity} readOnly={true} style={{
        marginBottom:20,
        textAlign:"center",
        fontSize:20
      }}></Form.Control>
      <Button onClick={handlePlus} style={{
        width:40,
        marginBottom:20,
        backgroundColor:"white",
        borderColor:"darkgray"
      }}>
        <FontAwesomeIcon icon={faPlus} style={{color: "#aaaaaa",}}/>
      </Button>
      </InputGroup>
    </Row>
  )
}