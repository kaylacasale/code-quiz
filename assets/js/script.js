var startEl = document.querySelector(".start");
var startTextEl = document.querySelector(".startQuiz");
var startBtn = document.getElementById("startBtn");
var formEl = document.getElementById("quiz")
formEl.style.display = "none";
var submitBtn;
var emailInput = document.querySelector("#email")
var submitFormEl = document.getElementById("userInfo");
submitFormEl.style.display = "none";
var nameInput = document.getElementById("name");
var saveBtn = document.getElementById("save");
var savedName = document.getElementById("saved-name");


var scoreNow = 0;
function saveScore() {
    var userInput = {
        userName: nameInput.value,
        userEmail: emailInput.value,
        //score: scoreCount.value
    }
    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.setItem("scoreNow", JSON.stringify(scoreNow));
}

function renderScore() {
    var userSaved = JSON.parse(localStorage.getItem("userInput"));
    var scoreSaved = JSON.parse(localStorage.getItem("score"));


    if (userSaved !== null) {
        document.getElementById("saved-name").innerHTML = userSaved.userName;
        document.getElementById("saved-email").innerHTML = userSaved.userEmail;
        document.getElementById("saved-score").innerHTML = scoreSaved;
        //document.getElementById("saved-score").innerHTML = scoreCount.score;
    } else {
        return;
    }
}

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    saveScore();
    renderScore();
})

function init() {
    renderScore();
}
init();
function startQuiz() {
    startBtn.addEventListener("click", function () {
        timerEl.style.display = "block"
        startTextEl.textContent = " ";
        startBtn.textContent = "End Quiz";
        formEl.style.display = "block";
        submitBtn = document.createElement("button");
        //submitBtn.textContent = "Next";
        submitBtn.style.display = "none";
        formEl.appendChild(submitBtn);

        renderQuestion();
        startTime();

    })
}
startQuiz();

var timerEl = document.querySelector(".time");
timerEl.style.display = "none"
var timerUpEl = document.getElementById("timeUp");
var updateTime;
var secondsLeft = 30;

function startTime() {
    var updateTime = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
        // seeQuestion(question);

        if (secondsLeft === 0) {
            //clearInterval(updateTime);
            timerUpMessage();
        }

    }, 1000);

    startBtn.addEventListener("click", function () {
        //checkAnswer();

        timerUpMessage();
        console.log("end")
    })

}

//*enter timerUpMessage displayed at end (score, results, form to save score with contact info) and make form element dissapear when time = 0 (when timerUpMessage is called)
function timerUpMessage() {
    timerEl.textContent = " ";
    timerEl.style.display = "none";
    clearInterval(updateTime)
    var h1El = document.createElement("h1");
    h1El.textContent = " ";
    h1El.textContent = "Time is Up! Quiz Results: " + currentScore;
    timerUpEl.appendChild(h1El);
    timerUpEl.setAttribute("style", "font-size: 20px; background-color: aliceblue; font-weight: bold; ")
    formEl.style.display = "none"; // clear (hide) form element when timerUpMessage is called from startTime (if time=0)
    startBtn.style.display = "none"; // clear (hide) startBtn (changed text in TimerUp function) when timerUpMessage is called from startTime (when time=0)
    submitFormEl.style.display = "block";

}




//*wrap- array of objects 
//*mimic a for loop

var scoreCount = document.getElementById("scoreDiv")
var currentScore = 0;
var currentQuestion = 0; // ++ 
var questions = [
    {
        title: "How would you log the length of the window object?",
        option: ["console.log(window)", "window.length", "console.log(window.length)", "console.log(length)"],
        answer: 2,
        score: 1
    },
    {
        title: "If a button element was appended to each of 'i' divs in a for loop, how many button elements would exist?",
        option: ["i.length", "i", "i[0]", "1"],
        answer: 1,
        score: 1 //*possibly unneccessary 
    },
    {
        title: "Where in an index.html file would you link script components from bootstrap?",
        option: ["<body>", "<main>", "<a href>", "<head>"],
        answer: 3,
        score: 1
    },
    {
        title: "Which is NOT a method of selecting an element in JavaScript?",
        option: ["document.getElementbyId('.id')", "$('#id')", "document.getElementbyId('id')", "document.querySelector('#id')"],
        answer: 1,
        score: 1
    }
]


function renderQuestion() {
    var question = questions[currentQuestion];
    var title = question.title; //*make variables for each based on question
    var options = question.option;
    var answer = question.answer;
    var score = question.score;



    var questionsHeader = document.querySelector("#questionHeader")
    var choice1Btn = document.querySelector("#choice1")
    var choice2Btn = document.querySelector("#choice2")
    var choice3Btn = document.querySelector("#choice3")
    var choice4Btn = document.querySelector("#choice4")

    questionsHeader.textContent = title;
    //console.log(options[0]);
    choice1Btn.innerText = options[0];
    choice2Btn.innerText = options[1];
    choice3Btn.innerText = options[2];
    choice4Btn.innerText = options[3];

    if (answer === 0) {
        choice1Btn.dataset.correct = true;
        console.log(correctOption)
    } else if (answer === 1) {
        choice2Btn.dataset.correct = true;
    } else if (answer === 2) {
        choice3Btn.dataset.correct = true;
    } else {
        choice4Btn.dataset.correct = true;
    }





    choice1Btn.addEventListener("click", handleChoiceClick)
    choice2Btn.addEventListener("click", handleChoiceClick)
    choice3Btn.addEventListener("click", handleChoiceClick)
    choice4Btn.addEventListener("click", handleChoiceClick)



}
function handleChoiceClick(event) {
    event.preventDefault();
    checkAnswer(event);

    //nextQuestion(event);
}

var result;
// var scoreNow;

function checkAnswer(event) {
    event.preventDefault();
    //var userAnswer = event.target;
    console.log(event.target.answer)
    console.log(event.target.dataset.correct);
    scoreNow = localStorage.getItem("count");
    if (event.target.dataset.correct == 'true') {
        result = document.createElement("p")
        result.textContent = "1 - Correct!";
        formEl.appendChild(result);
        currentScore++
        scoreNow = currentScore;
        scoreCount.textContent = "SCORE: " + scoreNow;
        localStorage.setItem("score", scoreNow);
        //var addPoint = questions.score;
        //console.log(addPoint)
    } else if (event.target.dataset.correct != 'true') {
        result = document.createElement("p")
        result.textContent = "0 - Incorrect :(";
        formEl.appendChild(result);
        //currentScore;
        scoreNow = currentScore;
        scoreCount.textContent = "SCORE: " + currentScore;
        localStorage.setItem("score", scoreNow);
        //scoreCount.textContent = scoreNow;
    } else {
        scoreNow = currentScore;
        localStorage.setItem("score", scoreNow);
    }
    //console.log(userAnswer.value);
    nextQuestion();


}

function nextQuestion() {

    //event.preventDefault();
    currentQuestion++
    renderQuestion();
    console.log(currentQuestion)
}




