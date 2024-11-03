// Create a port for server to run
const PORT = process.env.PORT || 8000;

// Require Express application, exported from app.js
const app = require("./app");

const listener = () => console.log(`Listening on PORT ${PORT}!`);

app.listen(PORT, listener);