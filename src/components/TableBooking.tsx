import * as React from "react";

interface Props {
  connection: signalR.HubConnection;
}

const TableBooking: React.FunctionComponent<Props> = ({ connection }) => {
  console.log("[TableBooking]", connection);
  // .Net > js ReceiveMessage
  connection.on("ReceiveMessage", data => {
    console.log(
      `[Count] A message is received from server (method = ReceiveMessage) ${data}`
    );
  });
  // js > .Net SendMessage method
  connection.invoke("SendMessage", "Hello");
  return <p>Table Booking Component</p>;
};

export default TableBooking;