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


//References to HTML elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeUp = document.getElementById("timeUp");
var viewLeaderBrd = document.getElementById("viewLeaderBrd");
var startDiv = document.getElementById("startDiv");
var startButton = document.getElementById("startButton");
var quizDiv = document.getElementById("quizDiv");
var questionContent = document.getElementById("questionContent");
var choiceButtons = document.querySelectorAll(".choiceButton");
console.log(Array.from(choiceButtons));
var checkAnswer = document.getElementById("checkAnswer");
var scoreDiv = document.getElementById("scoreDiv");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var initialSubmitButton = document.getElementById("initialSubmitButton");
var leaderBrdDiv = document.getElementById("ldrDiv");
var highScoreList = document.getElementById("highScoreList");
var returnHomeBtn = document.getElementById("returnHomeBtn");
var clearScoreBtn = document.getElementById("clearScores");
var choicesContainer = document.querySelector('.choices-container');
let questionBankIndex = 0
var secondsLeft;
var savedScoresArray;
//DEFINE VARIABLES
//Define a set of questions
const questionBank = [
    {
        question: "THE University of Michigan (GOO BLUEE!):",
        choices: ["Buckeyes", "Wolverines", "Badgers", "Boilmakers"],
        answer: "Wolverines"
    },
    {
        question: "Purdue University:",
        choices: ["Spartans", "Scarlet Knights", "Cornhuskers", "Boilmakers"],
        answer: "Boilmakers"
    },
    {
        question: "The Univeristy of Iowa:",
        choices: ["Wolverines", "Cornhuskers", "Hawkeyes", "Terrapins"],
        answer: "Hawkeyes"
    },
    {
        question: "Univeristy of Wisconsin:",
        choices: ["Terrapins", "Wildcats", "Hoosiers", "Badgers"],
        answer: "Badgers"
    },
    {
        question: "Michigan State University:",
        choices: ["Spartans", "Wolverines", "Buckeyes", "Hawkeyes"],
        answer: "Spartans"
    },
    {
        question: "Univeristy of Illinois Urbana-Champagne:",
        choices: ["Boilmakers", "Fighting Illini", "Wildcats", "Oranges"],
        answer: "Fighting Illini"
    },
    {
        question: "Rutgers University:",
        choices: ["Grizzys", "Tigers", "Scarlet Knights", "Hawkeyes"],
        answer: "Scarlet Knights"
    },
    {
        question: "Indiana University Bloomington:",
        choices: ["Hoosiers", "Wildcats", "Falcons", "Beavers"],
        answer: "Hoosiers"
    },
    {
        question: "University of Minnesota:",
        choices: ["Golden Gophers", "Maple Leafs", "Green Goblins", "Mountaineers"],
        answer: "Golden Gopers"
    },
    {
        question: "University of Nebraska:",
        choices: ["Jayhawks", "Longhorns", "Cornhuskers", "Fighting Illini"],
        answer: "Cornhuskers"
    },
    {
        question: "Penn State University:",
        choices: ["Lions", "Cowboys", "Bears", "Red Raiders"],
        answer: "Lions"
    },
    {
        question: "Ohio State University",
        choices: ["Losers", "Frogs", "Bobcats", "Buckeyes"],
        answer: "Buckeyes"
    },
    {
        question: "Northwestern University",
        choices: ["Wildcats", "Bobcats", "Jaguars", "Leopards"],
        answer: "Wildcats"
    }
]

// FUNCTIONS!!!

// start timer

// once timer starts, present user with questions and choices
secondsLeft = 121
function beginTimer() {
    secondsLeft = 121;
    const intervalId = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(intervalId);
            endGame();
        }
    }, 1000);
};

function startQuiz() {
    console.log('quiz started');
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    timeLeft.style.display = "block";
    scoreDiv.style.display = "none";
    // show the next question from our question bank
    showNextQuestion()
};

function showNextQuestion() {
    // check if there are more questions remaining in the question bank
    console.log(questionBankIndex)
    console.log(questionBank.length)
    if (questionBankIndex === questionBank.length) {
        endGame();
    } else {
        // if there are more questions, then display the next question to user
        questionContent.textContent = questionBank[questionBankIndex].question;
        for (let i = 0; i < 4; i++) {
            choiceButtons[i].textContent = questionBank[questionBankIndex].choices[i];
        }
    }
    return;
}


function gradeUserAnswer(event) {
    //console.log(event.target);
    if (event.target.matches('button')) {
        //  console.log(event.target.textContent);
        if (event.target.textContent == questionBank[questionBankIndex].answer) {
            console.log('right answer');
            checkAnswer.textContent = "Right selection!"
            checkAnswer.style.display = "block";
        } else {
            console.log('wrong answer');
            // if wrong deduct 10 seconds from timer
            secondsLeft = secondsLeft - 10;
            checkAnswer.textContent = "Wrong selection!"
            checkAnswer.style.display = "block";
        }
        // run through set of questions
        questionBankIndex++;
        showNextQuestion();
    }
}

// event listener to listen for start quiz button
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", beginTimer);
choicesContainer.addEventListener('click', gradeUserAnswer);


// when all the questions have been answered or the timer reaches 0 endGame
function endGame() {
    console.log('Game has ended.')
    scoreDiv.style.display = "block";  // this is the final score
    quizDiv.style.display = "none";
    startDiv.style.display = "none";
    timeLeft.style.disply = "none";
    timer.style.display = "none";
    timeUp.style.display = "block";

    // show the user their score
    finalScore.textContent = timeLeft.textContent
}


// show user final score (which is the time remaining on the timer) and prompt them to enter initials
// store the high score into local storage


function storeScores(e) {
    e.preventDefault();

    // if (userInitials.value === "") {
    //     alert("Enter your initials, please");
    //     return;
    // }

    scoreDiv.style.display = "none";
    quizDiv.style.display = "none";
    startDiv.style.display = "none";
    timeLeft.style.disply = "none";
    timeUp.style.display = "none";
    leaderBrdDiv.style.display = "block";

    // use the store object method to stringify the score array in ascending order in local storage
    var userScore = {
        initials: userInitials.value,
        score: finalScore.textContent
    }

    var savedHighScores = localStorage.getItem('high scores');
    var scoresArray;

    // localStorage.setItem("userScore", JSON.stringify(userScore));
    // renderScore()


    // if (savedScores === null) {
    //     savedScoresArray = [];
    // } else {
    //     savedScoresArray = JSON.parse(savedScores)
    // }

    // savedScoresArray.push(userScore);


    // var savedScoresArray = JSON.stringify(savedScoresArray);
    // window.localStorage.setItem("high score", savedScoresArray);

    showLdrBoard();

};

// event listener for user submitting initials
initialSubmitButton.addEventListener("click", function (e) {
    // Save high score in local storage
    let highScoreData = JSON.parse(localStorage.getItem("userScore") || "[]")
    highScoreData.push(parseInt(finalScore.textContent))
    localStorage.setItem("userScore", JSON.stringify(highScoreData))


    // console.log("highScoreData", highScoreData)

    
    // show leaderboard page
    showLdrBoard();
})



// show the user all of the current high scores in order
// need to check if there are any saved in local storage (if there are none then none will display)

function showLdrBoard() {
    // clear existing stuff from screen and display leaderboard 
    leaderBrdDiv.style.display = "block";
    scoreDiv.style.display = "none";
    quizDiv.style.display = "none";
    startDiv.style.display = "none";
    timeLeft.style.disply = "none";
    timeUp.style.display = "none";
    
 

    var savedHighScores = localStorage.getItem("userScore");
    console.log("savedHighScores", savedHighScores)
    highScoreList.textContent = savedHighScores
    // var storedScores = JSON.parse(savedHighScores);
    // for (let i = 0; i < storedScores.length; i++) {
    //     var newLdrBrdScore = document.createElement("li");
    //     newLdrBrdScore.innerHTML = storedScores[i].initials + ":" + storedScores[i].score;
    //     highScoreList.appendChild(newLdrBrdScore);
    // }
}

// event listener to view the leaderboard list
viewLeaderBrd.addEventListener("click", function (e) {
    showLdrBoard(e)
})

// event listener to return to home page
returnHomeBtn.addEventListener("click", function () {
    startDiv.style.display = "block";
    leaderBrdDiv.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";
    timeLeft.style.display = "block";
    scoreDiv.style.display = "none";
})

// event lisener to clear high scores
clearScoreBtn.addEventListener("click", function(e){
    window.localStorage.removeItem("userScore")
    highScoreList.innerHTML="Scores cleared!"
})
