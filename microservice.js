const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const prompts = require("./promptCreator.js")

const app = express();
const port = 3000;

const configPath = 'config.json'
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const API_KEY = config.GEMINI_API_KEY;
const GEMINI_MODEL = config.GEMINI_MODEL;

app.use(express.json({ limit: '50mb' }));

app.post("/gemini", async (req, res) => {

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

    const prompt = prompts.createPrompt(req.body.amountOfQuestions, req.body.amountOfOptions, req.body.amountOfMultipleAnswerQuestions, req.body.ignoreContext, req.body.content);

    const result = await model.generateContent(prompt);
    res.send(result.response.text());

})

app.listen(port, () => {
    console.log("DEBUG: Listening on port " + port);
})