export function onSocketConnection() {
  socket.on("send_message", (data) => {
    //servern lyssnar på eventet "send_message" och tar emot data som skickas från klienten
    socket.broadcast.emit("recieve_message", data); //skickar till alla förutom den som skickade meddelandet.
    io.sockets.emit("recieve_message", data); //skickar till ALLA användare
  });
}
