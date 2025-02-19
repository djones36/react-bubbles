import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblesPage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import NavBar from "./components/NavBar";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblesPage} />
      </div>
    </Router>
  );
}

export default App;
