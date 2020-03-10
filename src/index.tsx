import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Count from "./components/Count";

class App extends Component {
  render() {
    return (
      <aside>
        <h1>Hello World!</h1>
        <Count count={100}></Count>
      </aside>
    );
  }
}

render(<App />, document.getElementById("root"));
