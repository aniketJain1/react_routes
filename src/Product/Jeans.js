import React, { useEffect, useState } from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Jeans() {
  const [apiData, setApiData] = useState([]);

  const [isError, setError] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  // useEffect(() => {
  //   axios
  //   .get(baseURL)
  //   .then((response) =>{ console.log("Mounted");  setApiData(response.data)})

  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get(baseURL);
      setApiData(res.data);
      console.log("Mounted");
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
      <h3>Jeans Items</h3>
      {isError != "" && <h2  className="text-danger" >{isError}</h2>}

      <Container >
        <Row>
          {apiData
            .map((items) => {
              const { id, title, body } = items;
              return (
                <JeansCard  key={id}  title={title.slice(0, 10)}  body={body.slice(0, 50)} />
              );
            })
            .slice(0, 10)}
        </Row>
      </Container>

      {/* {apiData
        .map((items) => {
          const { id, title, body } = items;
          return (
            <div key={id}>
              <h2>{title.slice(0, 10)}</h2>
              <p>{body.slice(0, 50)}</p>
            </div>
          );
        })
        .slice(0, 10)} */}
    </>
  );
}

function JeansCard({ title, body }) {
  return (
    <Col sm={6} md={4} lg={3}  className="mt-3">
      <Card bg="" border="primary" className=" shadow mb-5 bg-white rounded">
        <Card.Img src={process.env.PUBLIC_URL + "/images/jeans.jpg"} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Card Suntitle</Card.Subtitle>
          <Card.Text>{body}</Card.Text>
          <Button variant="success">Read More</Button>      
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Jeans;
