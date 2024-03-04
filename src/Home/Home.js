import { Carousel, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    // <div class="hero" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg")'}}>
    //     <h1>Hello</h1>
    // </div>

    <>
      <Container >
        <Row>
          <Col>
            <Carousel variant=""  style={{width:'85%', margin:'auto', marginTop:'10px'}} >
            {/* we can use : fade effect, normal slide effect , slide={false} */}
              <Carousel.Item interval={1000}>
                <img src="images/caro1.jpg" className="d-block w-100" />
                <Carousel.Caption interval={500}>
                  <h3>First Image</h3>
                  <p>Description Of First Images</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src="images/caro2.jpg" />
                <Carousel.Caption>
                  <h3>Second Image</h3>
                  <p>Description Of Second Images</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/caro3.jpg" />
                <Carousel.Caption interval={2000}>
                  <h3>Third Image</h3>
                  <p>Description Of Third Images</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src="images/caro4.jpg" />
                <Carousel.Caption>
                  <h3>Fourth Image</h3>
                  <p>Description Of Fourth Images</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
