const Logger = require("./logger");
let logger = new Logger();

logger.on("messageLogged", (arg) => {
    console.log("Event called");
    console.log("Args received: ", arg);
});

logger.log("Message");