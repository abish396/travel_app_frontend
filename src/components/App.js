import React from "react";
import Home from "./home/home";
import Container from "./container/container";
import TrekDetails from "./trekdetails/trekdetails";
import TrekCustomization from "./trekcustomization/trekcustomization";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  //search/:trekmenuitem
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <TrekCustomization />
        </Route>
        <Route path="/search">
          <Container />
        </Route>
        <Route exact path="/trekdetails">
          <TrekDetails />
        </Route>
        {/* <Route exact path="/">
            <Home />
          </Route> */}
      </Router>
    </div>
  );
}

export default App;
