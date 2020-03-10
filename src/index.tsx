import * as React from "react";
import { render } from "react-dom";
import * as signalR from "@microsoft/signalr";
// local
import "./index.css";
import TableBooking from "./components/TableBooking";

// SignalR
let connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/chatHub")
  .build();

const App = () => {
  React.useEffect(() => {
    console.log('[App] Start SignalR connection.');
    connection.start().then(() => connection.invoke("SendMessage", "Hello")); // calls .Net SendMessage method
  }, []);
  return (
    <aside>
      <p>Hello SignalR !</p>
      <TableBooking connection={connection}></TableBooking>
    </aside>
  );
};

render(<App />, document.getElementById("root"));
