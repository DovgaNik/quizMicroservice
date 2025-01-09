const express = require("express");
const fs = require('fs');

const app = express();
app.use(express.json({ limit: '10mb' })); // We've kept the limit at 10 mb as the maximum number of tokens corresponds to around 8mb of text. Model limit is 1kk tokens which corresponds to around 4kk of characters which corresponds to 8mb in UTF-8 Model limit is 1kk tokens which corresponds to around 4kk of characters which corresponds to 8mb in UTF-8

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