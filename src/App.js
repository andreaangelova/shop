import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/pages/Card";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/card" component={Card}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
