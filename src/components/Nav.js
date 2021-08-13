import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <span>
        <Link to="/">Logo</Link>
      </span>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
