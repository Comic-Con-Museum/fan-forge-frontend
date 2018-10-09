import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>Hi there Sir</div>
    );
  }
}

const Root = document.getElementById("root");

ReactDOM.render(<App />, Root);