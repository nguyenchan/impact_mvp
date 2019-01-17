import React, { Component } from "react";
import "./App.css";
import Frontpage from "./components/Frontpage/Frontpage";
import FSheep from "./components/Flashcards/_sheep/FSheep";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Frontpage />
        </header>
        <FSheep />
      </div>
    );
  }
}

export default App;
