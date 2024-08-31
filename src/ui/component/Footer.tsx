import {Col, Container, Nav, Row} from "react-bootstrap";
import logo from "../img/nnb_logo_2020.jpg";
import paypal from "../img/PayPal.png";
import visa from "../img/visa-logo-svgrepo-com.png"
import master from "../img/PngItem_17977.png";

export default function Footer() {
  return(
    <Nav className="w-100" style={{
      backgroundColor:"darkgrey",
      color:"white",
      fontSize:14,
      paddingTop:80,
      paddingRight:0,
      paddingLeft:0,
      marginTop:40,
      marginBottom:0,

    }}>
      <Container>
        <Row>
          <Col style={{
            minWidth: 250,
            marginBottom: 20,
            flexBasis: 30
          }}>
            <h3 style={{
              marginBottom: 20,
              color: "gray"
            }}>Contact information</h3>
            <p>nnbworkshop@gmail.com</p>
            <div style={{
              marginTop: 30,
            }}>
              <img className="me-sm-1" width="60" src={paypal} alt=""/>
              <img className="me-sm-2" width="60" src={visa} alt=""/>
              <img className="me-sm-1" width="60" src={master} alt=""/>
            </div>
          </Col>
          <Col style={{
            minWidth: 250,
            marginBottom: 40,
            flexBasis: 1,
            textAlign: "center"
          }}>
            <img width="180px"
                 src={logo}
                 alt=""/>
            <p style={{
              marginTop: 20
            }}>Feel free to contact nnb if you have cool gadgets to collab in promotion !</p>
          </Col>
          <Col style={{
            minWidth: 250,
            marginBottom: 20,
            flexBasis: 12,
            textAlign: "center"
          }}>
            <h3 style={{
              marginBottom: 20,
              color: "gray"
            }}>SOCIAL LINKS</h3>
            <ul style={{
              listStyleType: "none",
              paddingRight: 20
            }}>
              <li>Threads</li>
              <li>Whatapp</li>
              <li>Line</li>
            </ul>
          </Col>
          <Col style={{
            minWidth: 250,
            marginBottom: 20,
            flexBasis: 12,
            textAlign: "center"
          }}>
            <h3 style={{
              marginBottom: 20,
              color: "gray",
            }}>SOCIAL LINKS</h3>
            <ul style={{
              listStyleType: "none",
              paddingRight: 20
            }}>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <div style={{
          marginTop:20
        }}>
            <p style={{
              textAlign:"center"
            }}>
              Copyright &copy; 2024 - Noirnblanc Limited
            </p>
        </div>
      </Container>
    </Nav>
  )
}