import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import * as FirebaseService from "../../../../authService/FirebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import {GoogleLoginButton} from "react-social-login-buttons";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const loginUser = useContext(LoginUserContext)

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const loginResult = await FirebaseService.handleSignInWithGoogle();
    if (loginResult) {
      navigate(-1);
    }
  }

  useEffect(() =>{
    if (loginUser) {
      navigate("/")
    }
  },[loginUser])

  const renderLoginButton = () => {
    if (!isLoggingIn) {
    return (
      <Button variant="primary" type="submit" style={{
        backgroundColor: "black",
        borderColor: "black",
        width:160,
        height:52,
        marginTop:4
      }}>
        LOGIN
      </Button>
    )
      } else {
      return (
        <button className="btn btn-primary" type="button" disabled  style={{
          backgroundColor: "black",
          borderColor: "black",
          width:160,
          height:52,
          marginTop:4 }}>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      )
    }
  }

return (
  <div style={{
    padding: 50
  }}>
    <Container>
      <Row>
        <Col className="text-xxl-center">
            <img src="./src/ui/img/螢幕截圖 2024-08-22 下午3.24.39.png" width="100%" alt=""/>
          </Col>
          <Col>
            <Container style={{
              width: 440,
              height: 400,
              margin: "auto",
              position: "relative",
              marginTop: 160
            }}>
              <Form onSubmit={async (event)=>{
                setIsLoggingIn(true);
                event.preventDefault();
                const loginResult = await FirebaseService.handleSignInWithEmailAndPassword(email, password);
                setIsLoggingIn(false);
                if (loginResult) {
                  navigate(-1);
              }else{
                  setIsLoginFailed(true)
                  }
                }
              }>
                {
                  isLoginFailed &&
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16"
                             role="img" aria-label="Warning:">
                            <path
                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div>
                            Wrong Login Email or Password !
                        </div>
                    </div>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email}
                                onChange={event => setEmail(event.target.value)}/>
                  {/*<Form.Text className="text-muted">*/}
                  {/*  We'll never share your email with anyone else.*/}
                  {/*</Form.Text>*/}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                </Form.Group>
                <div className="d-flex" >
                  {renderLoginButton()}
                <GoogleLoginButton onClick={handleGoogleLogin}/>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}