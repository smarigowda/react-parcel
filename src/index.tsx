import * as React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import * as signalR from "@microsoft/signalr";
// local
import "./index.css";
import TableBooking from "./components/TableBooking";

// SignalR
let connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/tableBookingHub")
  .withAutomaticReconnect([0, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 5000, 10000, 15000, 30000])
  .build();

// Reconnect will bring its own issues,
// instead, tell the connected user to refresh the browser.

const App = () => {
  let [showTableComponent, setShowTableComponent] = useState(false);
  useEffect(() => {
    console.log("[App] Befoer Start SignalR");
    console.log(`[App] connectionId = ${connection.connectionId}`);
    connection.start().then(() => {
      console.log("[App] After Start SignalR");
      console.log(`[App] connectionId = ${connection.connectionId}`);
      setShowTableComponent(true);
    });
  }, []);
  return (
    <aside>
      {showTableComponent ? (
        <TableBooking connection={connection}></TableBooking>
      ) : null}
    </aside>
  );
};

render(<App />, document.getElementById("root"));
