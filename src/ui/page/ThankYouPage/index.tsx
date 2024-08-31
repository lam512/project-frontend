import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "react-bootstrap";
import Footer from "../../component/Footer.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankYouPage(){
  const [counter, setCounter] = useState<number>(5);

  const navigate = useNavigate();

  const t = setTimeout(()=>{
    setCounter((prevState)=>(
      prevState - 1
    ));
  },1000)

  useEffect(()=>{
    if (counter===0){
      navigate("/")
    }
    return () => {
      clearTimeout(t);
    }
  },[counter])

  return(
    <>
      <TopNavBar/>
      <Container >
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          flexDirection:"column"
        }}>
          <img src="../src/ui/img/thank.gif" alt=""/>
          <br/>
          <h5>return to home page after {counter} second...</h5>
        </div>
      </Container>
      <Footer/>
    </>
  )
}