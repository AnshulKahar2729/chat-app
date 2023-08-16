import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// clients --> the one who is messaging
// c --> each client in the array of all clients who will be receiving the message
wss.on("connection", (client) => {
  client.on("message", (message, isBinary) => {
    [...wss.clients]
      .filter((c) => c !== client)
      .forEach((c) => c.send(isBinary ? message.toString : message));
  });
});
