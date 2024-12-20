const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const port = 3000;

const API_key = "";

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to microservice!");
})

app.post("/gemini",  async (req, res) => {

    const genAI = new GoogleGenerativeAI(API_key);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = req.body.prompt;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send(result.response.text());

})

app.listen(port, () => {
    console.log("DEBUG: Listening on port " + port);
})