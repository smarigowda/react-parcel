import * as React from "react";

interface Props {
  connection: signalR.HubConnection;
}

const Count: React.FunctionComponent<Props> = ({ connection }) => {
  if (connection) {
    console.log(connection);
    // .Net calls ReceiveMessage
    connection.on("ReceiveMessage", data => {
      console.log(
        `[Count] A message is received from server (method = ReceiveMessage) ${data}`
      );
    });
  } else {
    console.error("signalR connection not available yet...!");
  }
  return <p>Count Component</p>;
};

export default Count;