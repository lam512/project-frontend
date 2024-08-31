import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "react-bootstrap";
import ErrorPageContainer from "./component/ErrorPageContainer.tsx";

export default function ErrorPage() {
  return (
  <>
    <TopNavBar/>
      <Container>
        <ErrorPageContainer/>
      </Container>
  </>
  )
}