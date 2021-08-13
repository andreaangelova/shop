import { useState } from "react";
import { Button, Card, Col, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import shoppingItems from "../shared/shoppingItems";

const Shop = () => {
  const loggedIn = useSelector((store) => store.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const logIn = () => {
    setShowAlert(false);
    history.push("/login");
  };
  const addItem = (id) => {
    if (loggedIn) {
      dispatch({ type: "ADD_ITEM", payload: id });
    } else {
      setShowAlert(true);
    }
  };
  return (
    <div>
      <Alert show={showAlert} variant="success" className="alert">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>To add to a crad you need to be logged in</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAlert(false)} variant="outline-danger">
            Cancel
          </Button>
          <Button onClick={logIn} variant="outline-success">
            Log In
          </Button>
        </div>
      </Alert>
      <div className={showAlert ? "blur" : ""}>
        <h1>This is shop page</h1>
        <Row xs={1} md={4} className="g-4 margin-left10">
          {shoppingItems.map((item) => {
            return (
              <Col key={item.id}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={require(`./../../images/image${item.id}.jpeg`).default}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary" onClick={() => addItem(item.id)}>
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
