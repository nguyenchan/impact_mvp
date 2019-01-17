import React, { Component } from "react";
import "./App.css";
import Frontpage from "./components/Frontpage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Frontpage />
        </header>
      </div>
    );
  }
}

export default App;
