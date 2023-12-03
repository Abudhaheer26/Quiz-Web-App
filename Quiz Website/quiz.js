const quiz = [
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        ans1text: "Number",
        ans2text: "String",
        ans3text: "Boolean",
        ans4text: "Object",
        answer: "Object",
    },
    {
        question: "Which of the following is not a comparison operator in JavaScript?",
        ans1text: "=<",
        ans2text: "===",
        ans3text: "==",
        ans4text: "!=",
        answer: "=<",
    },{
        question: "What does the “NaN” value represent in JavaScript?",
        ans1text: "Not a number",
        ans2text: "undefined value",
        ans3text: "Boolean value",
        ans4text: "Null value",
        answer: "Not a number",
    },
    {
        question: "What is the correct syntax for a “for” loop in JavaScript?",
        ans1text: "for (i = 0; i < 5; i++)",
        ans2text: "for (var i = 0; i < 5; i++)",
        ans3text: "for (i = 5; i > 0; i-1)",
        ans4text: "none of the above",
        answer: "for (var i = 0; i < 5; i++)",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});