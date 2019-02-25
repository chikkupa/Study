const EventEmitter = require("events");
eventEmitter = new EventEmitter();

eventEmitter.on("messageLogged", (arg) => {
    console.log("Event Listener called");
    console.log("Argument Received: ", arg);
});

eventEmitter.emit("messageLogged", {id: 1, name : "Chikku P A"})
// Comment to be deleted