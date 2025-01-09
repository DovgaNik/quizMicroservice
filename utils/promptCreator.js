export function createPrompt (amountOfQuestions, amountOfOptions, amountOfMultipleAnswerQuestions, ignoreContext, language, content) {
    // You are the smartest presentation advisor. you will be given a transcript of presentation. Your job is to generate a multiple choice quiz to evaluate the level of comprehension by the audience based on the main points of the conversation.
    // Your task is to generate {amountOfQuestions} multiple choice questions each of which will contain {amountOfOptions} of responses. {amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.
    // The questions must not be based on any of the irrelevant content of the presentation.
    // The questions must be in {language}
    // The generated question and answers must be presented in the following format. Nothing else than this json must be outputted, not any comments or anything of that sort.
    //{
    //   "questions": [
    //     {
    //       "question": "Question 1",
    //       "options": [
    //         "Option 1",
    //         "Option 2",
    //         "Option 3",
    //         "Option 4"
    //         ... can be more or less options
    //       ],
    //       "correct_answers": [index of the correct option (can be one or more depending on the need)]
    //     },
    //     .... all the further questions in the same format in this array
    //     ]
    // }
    let prompt = "";

    prompt += "You are the smartest presentation advisor. you will be given a transcript of presentation. Your job is to generate a multiple choice quiz to evaluate the level of comprehension by the audience based on the main points of the conversation.\n";
    prompt += `Your task is to generate ${amountOfQuestions} multiple choice questions each of which will contain ${amountOfOptions} of responses. ${amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.\n`;
    if (ignoreContext) {
        prompt += "The questions must not be based on any of the irrelevant content of the presentation.\n";
    }
    prompt += `The questions must be in ${language}.\n`
    prompt += "The generated question and anwsers must be presented in the following format. Nothing else than this json must be outputted, not any comments or anything of that sort.\n";
    prompt += "{\n" +
        "  \"questions\": [\n" +
        "    {\n" +
        "      \"question\": \"Question 1\",\n" +
        "      \"options\": [\n" +
        "        \"Option 1\",\n" +
        "        \"Option 2\",\n" +
        "        \"Option 3\",\n" +
        "        \"Option 4\"\n" +
        "        ... can be more or less options\n" +
        "      ],\n" +
        "      \"correct_answers\": [index of the correct option (can be one or more depending on the need)]\n" +
        "    },\n" +
        "    .... all the further questions in the same format in this array\n" +
        "    ]\n" +
        "}"

    prompt += "Here is the transcript: \n";
    prompt += content;

    console.log(prompt)

    return prompt
}