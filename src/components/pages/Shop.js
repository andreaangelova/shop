import { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CardItems from "../shared/CardItems";
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
      <div className={showAlert ? "blur mt-5" : "mt-5"}>
        <CardItems items={shoppingItems} addItem={addItem} />
      </div>
    </div>
  );
};

export default Shop;
