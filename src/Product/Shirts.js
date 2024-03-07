
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Shirts() {

  const [apiData, setApiData] = useState([]);
  const [isError, setError] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/photos";

  const getApiData = async () => {
    try {
      const res = await axios.get(baseURL);
      setApiData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <br />
      <h3>Shirts Items</h3>
      {isError != "" && <h2 className="text-danger">{isError}</h2>}

      <Container>

        <Row>
          {apiData
            .map((items) => {
              const { id, title, url, thumbnailUrl } = items;
              return (
                <ShirtsCard key={id}  title={title.slice(0, 10)}  url={url} thumbnailUrl={thumbnailUrl} />
              );
            })
            .slice(100,130 )}
        </Row>

      </Container>
    </>
  )
}

function ShirtsCard({key, title, url, thumbnailUrl }) {
  return (
    <Col md={3} className="mt-3">
      <Card className="shadow mb-5 bg-white rounded">
        <Card.Img src={url} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Subtitle>Card Subtitle</Card.Subtitle>
          <Card.Text> This is description of Shirts. </Card.Text>
          <Button variant="danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Shirts