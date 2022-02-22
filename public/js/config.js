const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const answerNumber = parseInt(params.number);

const answers = [
    {
        text: "couch",
        code: "4058",
    },
    {
        text: "bunny",
        code: "8941",
    },
    {
        text: "legos",
        code: "3493",
    },
    {
        text: "gnome",
        code: "2243",
    },
    {
        text: "socks",
        code: "7498",
    },
    {
        text: "yeast",
        code: "4357",
    },
    {
        text: "games",
        code: "6004",
    },
    {
        text: "plant",
        code: "8449",
    },
    {
        text: "piano",
        code: "1121",
    },
    {
        text: "bikes",
    },
];
const number = answerNumber ? answerNumber : 1
const gameConfig = {
    participant: "Jessica",
    description: "BIRTHDAY WORDLE",
    mainTitle: "B-DAY WORDLE",
    number: number,
    answers: answers,
    answer: answers[number - 1].text,
    code: answers[number - 1].code,
    isFirstOne: number === 1,
    isLastOne: number === answers.length,
}