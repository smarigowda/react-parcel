import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Count from "./components/Count";
import * as signalR from "@microsoft/signalr";


// setup and initiate SignalR
let connection = new signalR.HubConnectionBuilder()
    .withUrl("/chat")
    .build();
    
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
