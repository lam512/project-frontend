import {Button, Container} from "react-bootstrap";
import "../style.css"
import {useNavigate} from "react-router-dom";


export default function OfferContainer() {
  const navigate = useNavigate();

  return(
    <>
    <Container className="w-100" style={{
        position: "relative"
      }}>
      <img className="w-100 "  src = "../src/ui/img/DSC06734-2.jpg" alt="Snow"/>
      <div className="offer">
      <h1 className="offerHeader">Collaboration</h1>
      <p className="ps-3">Collection of nnb works in collaboration with selected artists</p>
      </div>

      <Button variant="dark"
              className="offerBtn"
              onClick={()=>navigate("product")}
      style={{fontSize:20}}>
        Shop Now
      </Button>
      </Container>
    </>
  )
}