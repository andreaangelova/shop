import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const loggedIn = useSelector((store) => store.loggedIn);
  const dispatch = useDispatch();
  const logOunt = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <span>
        <Link className="align-middle" to="/">Logo</Link>
      </span>
      <ul>
        <li>
          <Link className="align-middle" to="/shop">Shop</Link>
        </li>
        {loggedIn && (
          <li>
            <Link  className="align-middle" to="/card">Card</Link>
          </li>
        )}
        <li>
          {loggedIn ? (
            <Button  className="align-middle" onClick={logOunt}>Logout</Button>
          ) : (
            <Link  className="align-middle" to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
