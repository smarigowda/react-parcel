import * as React from "react";

interface Props {
  connection: signalR.HubConnection;
}

const TableBooking: React.FunctionComponent<Props> = ({ connection }) => {
  console.log("[TableBooking]", connection);
  // .Net > js
  connection.on("BookTableResponse", data => {
    console.log(`[Count] A message is received from server ${data}`);
  });

  const handleTableBooking = () => {
    // js > .Net
    connection.invoke(
      "BookTableRequest",
      "Book A Table for me in a Cool restaurant....!"
    );
  };

  return (
    <aside>
      <p>Table Booking Component</p>
      <button onClick={handleTableBooking} className="bt_send_button">Book Now</button>
    </aside>
  );
};

export default TableBooking;
