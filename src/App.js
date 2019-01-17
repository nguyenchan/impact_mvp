import React, { Component } from "react";
import "./App.css";
import Frontpage from "./components/Frontpage/Frontpage";
import FSheep from "./components/Flashcards/_sheep/FSheep";
import FShip from "./components/Flashcards/_ship/FShip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Frontpage />
        </header>
        <FSheep />
        <FShip />
      </div>
    );
  }
}

export default App;
