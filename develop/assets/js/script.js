// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//DEFINE VARIABLES
//Define a set of questions
const questions = [
    {
        question: "",
        choices: [],
        answer: ""
    },
    {
        question: "",
        choices: [],
        answer:""
    },
    {
        question:"",
        choices: [],
        answer:""
    },
    {
        question:"",
        choices:[],
        answer:""
    },
    {
        question:"",
        choices:[],
        answer:""
    }
]



//References to HTML elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeUp = document.getElementById("timeUp");
var viewLeaderBrd = document.getElementById("viewLeaderBrd");


var startDiv = document.getElementById("startDiv");
var startButton = document.getElementById("startButton");


var quizDiv = document.getElementById("quizDiv");
var questionContent = document.getElementById("questionContent");
var choiceA = document.getElementById("button-1");
var choiceB = document.getElementById("button-2");
var choiceC = document.getElementById("button-3");
var choiceD = document.getElementById("button-4");
var checkAnswer = document.getElementById("checkAnswer");

var scoreDiv = document.getElementById("scoreDiv");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var initialSubmitButton = document.getElementById("initialSubmitButton");









// FUNCTIONS
// start timer

var totalTime = 121;

