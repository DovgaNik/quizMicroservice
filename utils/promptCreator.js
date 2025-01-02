export function createPrompt (amountOfQuestions, amountOfOptions, amountOfMultipleAnswerQuestions, ignoreContext, language, content) {
    // You are the smartest presentation advisor. you will be given a transcript of presentation that can be anything like a lecture or a business presentation, it doesn't matter. your job is to analyze the main points and topics of the conversation and generate a multiple choice quiz to evaluate the level of comprehension by the audience.
    // Your task is to generate {amountOfQuestions} multiple choice questions each of which will contain {amountOfOptions} of responses. {amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.
    // The questions must not be based on any organisational aspects of the transcripts, so all the questions must be based on the materials of the main topic of the speech.
    // The questions must be in {language}
    // The questions must be outputted in json format. Nothing else except the json of the questions must be outputted.

    let prompt = "";

    prompt += "You are the smartest presentation advisor. you will be given a transcript of presentation that can be anything like a lecture or a business presentation, it doesn't matter. your job is to analyze the main points and topics of the conversation and generate a multiple choice quiz to evaluate the level of comprehension by the audience.\n";
    prompt += `Your task is to generate ${amountOfQuestions} multiple choice questions each of which will contain ${amountOfOptions} of responses. ${amountOfMultipleAnswerQuestions} of questions must contain more than one correct response.\n`;
    if (ignoreContext) {
        prompt += "The questions must not be based on any organisational aspects of the transcripts, so all the questions must be based on the materials of the main topic of the speech. So nothing like names of the presenters any organisatinal moments or anything like that. Just the main topic of the speech like the materials of the lecture or the presented subject.\n";
    }
    prompt += `The questions must be in ${language}.\n`
    prompt += "The questions must be outputted in json format. Nothing else except the json of the questions and answers must be outputted.\n";

    prompt += "Here is the transcript: \n";
    prompt += content;

    console.log(prompt)

    return prompt
}