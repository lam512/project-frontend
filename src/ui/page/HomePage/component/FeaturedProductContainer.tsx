import {Col, Container, Row} from "react-bootstrap";
import "../style.css"
import {useNavigate} from "react-router-dom";

export default function FeaturedProductContainer() {
  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="title" style={{
        textAlign: "center",
        marginBottom: 20,
        position: "relative",
        lineHeight: 2,
        margin: 40
      }}>New Products</h2>
      <Row>
        <Col onClick={() => navigate("/product/1")} className="newProduct" style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50,
          fontSize: 14,
        }}>
          <img className="w-100"
               src="../src/ui/img/Snapinsta.app_454734231_1000856091774792_3077304698194107144_n_1080.jpg" alt=""/>
          <img src="../src/ui/img/pngwing.com.png" alt="" style={{width: 40, height: 40, margin: 5}}/>
          <h4>NNB translator tee</h4>
          <p>$450.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/9")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50,

        }}>
          <img className="w-100"
               src="../src/ui/img/B43DAD4E-534F-4260-A92A-2210978FA37E_1600x.webp" alt=""/>
          <img src="../src/ui/img/pngwing.com.png" alt="" style={{width: 40, height: 40, margin: 5}}/>

          <h4>NNB manager tee (Boss color)</h4>
          <p>$450.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/5")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50
        }}>
          <img className="w-100"
               src="../src/ui/img/8B240DB6-86A2-4DFB-A116-DFB70833A403_2100x.webp" alt=""/>
          <img src="../src/ui/img/pngwing.com.png" alt="" style={{width: 40, height: 40, margin: 5}}/>
          <h4>KOSS Porta Pro Classic On-Ear Headphones</h4>
          <p>$428.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/10")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50
        }}>
          <img className="w-100"
               src="../src/ui/img/IMG_0690_1600x.webp" alt=""/>
          <img src="../src/ui/img/pngwing.com.png" alt="" style={{width: 40, height: 40, margin: 5}}/>
          <h4>Post General Shopper Bag</h4>
          <p>$99.00</p>
        </Col>
      </Row>
      {/*second*/}
      <h2 className="title" style={{
        textAlign: "center",
        marginBottom: 10,
        position: "relative",
        lineHeight: 2,
        margin: 30,
        marginTop:0
      }}>Audiophile Gadgets</h2>
      <Row>
        <Col onClick={() => navigate("/product/4")} className="newProduct" style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50,
          fontSize: 14,
        }}>
          <img className="w-100"
               src="../src/ui/img/913D963D-5282-425C-9191-ACFA0F13C6FC_2100x.webp" alt="" style={{
                 height:305
          }}/>
          <h4>RTM B-1000EW Walkman</h4>
          <p>$550.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/11")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50,

        }}>
          <img className="w-100 "
               src="../src/ui/img/Turntable.webp" alt=""/>
          <h4>House Of Marley Stir It Up Wireless Turntable</h4>
          <p>$2,680.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/5")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50
        }}>
          <img className="w-100"
               src="../src/ui/img/8B240DB6-86A2-4DFB-A116-DFB70833A403_2100x.webp" alt=""/>
          <h4>KOSS Porta Pro Classic On-Ear Headphones</h4>
          <p>$428.00</p>
        </Col>
        <Col className="newProduct" onClick={() => navigate("/product/12")} style={{
          flexBasis: 25,
          padding: 10,
          minWidth: 250,
          marginBottom: 50
        }}>
          <img className="w-100"
               src="../src/ui/img/vinyl.webp" alt=""/>
          <h4>Pink Floyd - Dark Side Of The Moon (2023 Remaster)</h4>
          <p>$310.00</p>
        </Col>
      </Row>
    </Container>
  )
}