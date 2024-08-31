import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "react-bootstrap";
import LoginForm from "./component/LoginForm.tsx";
import Footer from "../../component/Footer.tsx";

export default function LoginPage() {
  return (
    <>
      <TopNavBar/>
      <Container>
        <LoginForm/>
      </Container>
      <Footer/>
    </>
  )
}