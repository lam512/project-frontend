import {Button, Card} from "react-bootstrap";
import {GetAllProductDto} from "../../../../data/product/Product.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  getAllProductDto : GetAllProductDto
}

export default function ProductListingCard({getAllProductDto}:Props) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '24rem' }} >
      <Card.Img  height="420" variant="top" src={getAllProductDto.imageUrl}/>
      <Card.Body>
        <Card.Title style={{height:48}}>{getAllProductDto.name}</Card.Title>
        <Card.Text>
          ${getAllProductDto.price.toLocaleString()}<br/>
        </Card.Text>
        <Button  variant="dark" onClick={()=>{navigate(`/product/${getAllProductDto.pid}`)}}>Buy</Button>
      </Card.Body>
    </Card>
  )
}