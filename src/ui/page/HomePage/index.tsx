import TopNavBar from "../../component/TopNavBar.tsx";
import HomeBanner from "./component/HomeBanner.tsx";
import {Container} from "react-bootstrap";
import Footer from "../../component/Footer.tsx";
import FeaturedProductContainer from "./component/FeaturedProductContainer.tsx";
import OfferContainer from "./component/OfferContainer.tsx";

export default function HomePage(){
  return (
    <>
      <TopNavBar/>
      <Container>
          <HomeBanner/>
          <FeaturedProductContainer/>
          <OfferContainer/>
      </Container>
      <Footer/>
    </>
  )
}
