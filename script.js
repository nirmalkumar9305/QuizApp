const quizDB =[
    {
        question: "Q1: What is the fullform of HTML?",
        a:"Hyper markup",
        b:"Hyper text Language",
        c:"Hyper text markup languge",
        d:"Hyper text makup languge",
        ans:"ans3"
    },
    {
        question:"Q2:What is full form of JS?",
        a:"Java Street",
        b:"JavaScript",
        c:"Jason",
        d:"Java scape",
        ans:"ans2"
    },
    {
        question:"Q3: What is the full form of http?",
        a:"Hyper Text Transfer",
        b:"Hypertext Transfer Protocol",
        c:"Hyper test Transfer Protocol",
        d:"All the above",
        ans:"ans2"
    },
    {
        question: "Q4: What is the fullform of CSS?",
        a:"Cascading Style Sheets",
        b:"Cartoon style sheets",
        C:"Cascading super shets",
        d:"All the above",
        ans:"ans1"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option3');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
    });
    return answer;
};

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans ){
        score++;
    };

    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion();  
    }
    else{
        showScore.innerHTML =`
        <h3> You scored ${score}✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
       `;
       showScore.classList.remove('scoreArea');
}
});
