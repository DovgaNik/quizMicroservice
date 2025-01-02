const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const prompts = require("./promptCreator.js")

const app = express();
const port = 3000;

const configPath = 'config.json'
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const API_key = config.GEMINI_API_KEY;

app.use(express.json())

app.post("/gemini",  async (req, res) => {

    const genAI = new GoogleGenerativeAI(API_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = req.body.prompt + req.body.content;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send(result.response.text());

})

app.post("/gemini/options", async (req, res) => {

    const genAI = new GoogleGenerativeAI(API_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = prompts.createPrompt(req.body.amountOfQuestions, req.body.amountOfOptions, req.body.amountOfMultipleAnswerQuestions, req.body.ignoreContext, req.body.content);

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send(result.response.text());

})

app.listen(port, () => {
    console.log("DEBUG: Listening on port " + port);
})