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
        <Link to="/">Logo</Link>
      </span>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {loggedIn && (
          <li>
            <Link to="/card">Card</Link>
          </li>
        )}
        <li>
          {loggedIn ? (
            <Button onClick={logOunt}>Logout</Button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
