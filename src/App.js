import React, { Component } from "react";
import "./App.css";
import Frontpage from "./components/Frontpage/Frontpage";
import FSheep from "./components/Flashcards/_sheep/FSheep";
import FShip from "./components/Flashcards/_ship/FShip";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Frontpage} exact />
            <Route path="/sheep" component={FSheep} />
            <Route path="/ship" component={FShip} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
