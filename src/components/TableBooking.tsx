import * as React from "react";

interface Props {
  connection: signalR.HubConnection;
}

const TableBooking: React.FunctionComponent<Props> = ({ connection }) => {
  let message = {
    text: "Book a table for me in your restaurant ....!",
    email: "santosharakere@gmail.com",
    name: "Santosh Marigowda",
    phone: "07920830031",
    day: "02",
    month: "01",
    year: "2020",
    startTime: "09:30",
    endTime: "10:00",
    connectionId: connection.connectionId
  };
  console.log("[TableBooking]", connection);
  // .Net > js
  connection.on("BookTableResponse", data => {
    console.log(`[Count] A message is received from server ${data}`);
  });

  const handleTableBooking = () => {
    // js > .Net
    if(connection.state === 'Connected') {
      connection.invoke("BookTableRequest", JSON.stringify(message));
    } else {
      console.log('Please refresh your browser. And try again... Sorry');
    }
  };

  return (
    <aside>
      <h1 className="heading">Table Booking</h1>
      <button onClick={handleTableBooking} className="bt_send_button">
        Book Now
      </button>
    </aside>
  );
};

export default TableBooking;
