const questions = [
    {
        question: "Who win the FIFA World Cup 2022 ?",
        answers: [
            { text: "France", correct: "false" },
            { text: "Crotia", correct: "false" },
            { text: "Argentina", correct: "true" },
            { text: "Morocco", correct: "false" }
        ]
    },
    {
        question: "How many states are there in India ?",
        answers: [
            { text: "29", correct: "false" },
            { text: "27", correct: "false" },
            { text: "30", correct: "false" },
            { text: "28", correct: "true" }
        ]
    },
    {
        question: "1kg weight is equal to ?",
        answers: [
            { text: "98N", correct: "false" },
            { text: "9.8N", correct: "true" },
            { text: "0.98N", correct: "flase" },
            { text: "0.098N", correct: "false" }
        ]
    },
    {
        question: "Combustion of a substance release heat and ---",
        answers: [
            { text: "light", correct: "true" },
            { text: "wood", correct: "false" },
            { text: "oxygen", correct: "false" },
            { text: "water", correct: "falsee" }
        ]
    },
    {
        question: "Name the company that makes processors for Computers ?",
        answers: [
            { text: "Samsung", correct: "false" },
            { text: "Intel Corporation", correct: "true" },
            { text: "HP", correct: "false" },
            { text: "Dell", correct: "false" }
        ]
    },
    {
        question: "Fastest man in the world ?",
        answers: [
            { text: "Ms Dhoni", correct: "false" },
            { text: " Cr Ronaldo", correct: "false" },
            { text: "Michal jordan", correct: "false" },
            { text: "Usain Bolt", correct: "true" }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}
function showScore() {
    resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextBtn.innerHTML = "paly Again";
nextBtn.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});
startQuiz();
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes);
// console.log(document.body.lastChild);
// console.log(document.head.childNodes);
// console.log(document.body.childNodes[4]);
// let arr = Array.from(document.body.firstElementChild)
// console.log(arr);

// let bg = () =>{
//     document.body.firstElementChild.style.color = 'red';
// }

// bg()
// let simple = document.getElementById('simple');
// simple.style.color ='yellow';
// let sim = document.getElementsByClassName('btn')[2];
// sim.style.background = 'red'
// let sim = document.getElementById('simple');
// console.log(sim.matches('.sim'));
// console.log(sim.closest("#question"))
// console.log(sim.closest('.text'))
let nam = document.querySelectorAll('.container')
console.log(nam.closest('.quiz'))