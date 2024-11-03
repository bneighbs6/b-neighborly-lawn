// Create a port for server to run
const { PORT = 8000 } = process.env; 

// Require Express application, exported from app.js
const app = require("./app");

const listener = () => console.log(`Listening on PORT ${PORT}!`);

app.listen(PORT, listener);