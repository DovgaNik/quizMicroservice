export function createPrompt (amountOfQuestions, amountOfOptions, amountOfMultipleAnswerQuestions, ignoreContext, content) {
    // Please analyze the transcript that I am going to give you.
    // Your task is to generate {amountOfQuestions} multiple choice questions each of which will contain {amountOfOptions} of responses. {amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.
    // The questions must not be based on any organisational aspects of the transcripts, so all the questions must be based on the materials of the main topic of the speech.
    // The questions must be outputted in json format. Nothing else except the json of the questions must be outputted.

    let prompt = "";

    prompt += "Please analyze the transcript that I am going to give you.\n";
    prompt += `Your task is to generate ${amountOfQuestions} multiple choice questions each of which will contain ${amountOfOptions} of responses. ${amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.\n`;
    if (ignoreContext) {
        prompt += "The questions must not be based on any organisational aspects of the transcripts, so all the questions must be based on the materials of the main topic of the speech.\n";
    }
    prompt += "The questions must be outputted in json format. Nothing else except the json of the questions must be outputted.\n";

    prompt += "Here is the transcript: \n";
    prompt += content;

    console.log(prompt)

    return prompt
}