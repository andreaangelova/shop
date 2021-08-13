import { Button, Card } from "react-bootstrap";
import image from "./../../images/image1.jpeg";

const Shop = () => {
  return (
    <div>
      <h1>This is shop page</h1>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
