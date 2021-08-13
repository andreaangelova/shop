import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Welcome to our SHOP</h1>
        <p>Find anything that you need</p>
        <h3>
          <Link to="/shop">SHOP NOW!</Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
