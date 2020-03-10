import * as React from "react";
import { render } from "react-dom";
import * as signalR from "@microsoft/signalr";
// local
import "./index.css";
import Count from "./components/Count";

// SignalR
let connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/chatHub")
  .build();

connection.on("ReceiveMessage", data => {
  console.log(
    `A message received from server (method = ReceiveMessage) ${data}`
  );
});

connection.start().then(() => connection.invoke("SendMessage", "Hello"));

const App = () => {
  return (
    <aside>
      <h1>Hello SignalR !</h1>
      {/* <Count count={0}></Count> */}
    </aside>
  );
};

render(<App />, document.getElementById("root"));