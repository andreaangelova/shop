import { useState } from "react";
import { Button, Card, Col, Row, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Shop = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const logIn = () => {
    setShow(false);
    history.push("/login");
  };
  return (
    <div>
      <Alert show={show} variant="success" className="alert">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>To add to a crad you need to be logged in</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Cancel
          </Button>
          <Button onClick={logIn} variant="outline-success">
            Log In
          </Button>
        </div>
      </Alert>
      <div className={show ? "blur" : ""}>
        <h1>This is shop page</h1>
        <Row xs={1} md={4} className="g-4 margin-left10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
            return (
              <Col key={item}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={require(`./../../images/image${item}.jpeg`).default}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => setShow(true)}>
                      Add to card
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Shop;
