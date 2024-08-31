import {Carousel, Container} from "react-bootstrap";

export default function HomeBanner() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="./src/ui/img/DSC05469.JPEG"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>One Drop</h3>
            <p>Exclusive dealer in Hong Kong.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/ui/img/DSC05518.JPEG"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Kind Of Blue Records</h3>
            <p>The one and only cassette shop in Taiwan.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/ui/img/DSC02962.JPEG"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Noritake Pop Up</h3>
            <p>
              First nnb colab pop up shop in HK.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}