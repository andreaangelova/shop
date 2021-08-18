import { Card, Col, Row, Button } from "react-bootstrap";

const CardItems = ({ items, addItem, removeItem, addMore, addLess }) => {
  return (
    <Row xs={1} md={4} className="g-4 margin-left10">
      {items.map((item) => {
        return (
          <Col key={item.id}>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require(`./../../images/image${item.id}.jpeg`).default}
              />
              <Card.Body>
                <Card.Title>
                  {item.title} {item.quantity && `x ${item.quantity}`}
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {addItem && (
                  <Button
                    className="add-item"
                    variant="primary"
                    onClick={() => addItem(item.id)}
                  >
                    Add to card
                  </Button>
                )}
                {removeItem && (
                  <Button
                    className="remove-item"
                    variant="primary"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove form card
                  </Button>
                )}
                {addMore && (
                  <Button variant="primary" onClick={() => addMore(item.id)}>
                    ADD MORE
                  </Button>
                )}
                {addLess && (
                  <Button variant="primary" onClick={() => addLess(item.id)}>
                    ADD LESS
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default CardItems;
