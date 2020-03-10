import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Count from "./components/Count";
import * as signalR from "@microsoft/signalr";

// setup and initiate SignalR
let connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/chatHub")
  .build();

connection.on("ReceiveMessage", data => {
  console.log(`A message received from server (method = ReceiveMessage) ${data}`);
});

connection.start().then(() => connection.invoke("SendMessage", "Hello"));
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
