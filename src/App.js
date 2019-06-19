import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";
import Sobre from "./Sobre";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ReactJS</h2>
          <p>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Sobre">Sobre</Link>
          </p>
          <div className="App-intro">
            <Route
              exact
              path="/"
              render={props => <Home {...props} name="Benzema" />}
            />
            <Route exact path="/sobre" component={Sobre} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
