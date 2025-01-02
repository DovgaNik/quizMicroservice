const express = require("express");
const fs = require('fs');

const app = express();
app.use(express.json({ limit: '50mb' }));

// Loading the config
const configPath = 'config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
app.locals.config = config;

// Importing the routes
const gemini = require("./routes/gemini.js");
app.use(gemini)

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log("DEBUG: Server running. Listening on port " + PORT);
})