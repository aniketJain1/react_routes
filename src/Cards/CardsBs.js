import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CardsBs() {
  return (
    <div className="normaldiv">
      <Container className="mt-2">
        <Row>
          <Col md={4}>
            <Card bg='warning'>
              <Card.Header> <h3>This is Card Header</h3> </Card.Header>
              <Card.Img src="images/nature3.jpg   " />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card Suntitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Click Here...</Card.Link> <br />
                <Button variant="danger">Read More</Button>
                <div className="d-grid mt-2 mb-2">
                  <Button variant="primary">Submit</Button>
                </div>
                <Card.Footer>This is Footer</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="success">
              <Card.Img src="images/nature3.jpg   " />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card Suntitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="success">Read More</Button>
                <div className="d-grid mt-2">
                  <Button variant="primary">Submit</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card border="primary" className="text-light">
              <Card.Img src="images/nature3.jpg   " />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card Suntitle</Card.Subtitle>
                <Card.Text >
                  Some quick example text to build on the card title and make up
                </Card.Text>
                <Button variant="warning">Read More</Button>
                <div className="d-grid mt-2">
                  <Button variant="primary">Submit</Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardsBs;
