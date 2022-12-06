var startEl = document.querySelector(".start");
var startTextEl = document.querySelector(".startQuiz");
var startBtn = document.getElementById("startBtn");
var formEl = document.querySelector("form");
formEl.style.display = "none";
var submitBtn;

function startQuiz() {
    startBtn.addEventListener("click", function () {
        startTextEl.textContent = " ";
        startBtn.textContent = "End Quiz";
        formEl.style.display = "block";
        submitBtn = document.createElement("button");
        submitBtn.textContent = "Next";
        formEl.appendChild(submitBtn);

        renderQuestion();
        startTime();

    })
}
startQuiz();

var timerEl = document.querySelector(".time");
var timerUpEl = document.getElementById("timeUp");
var updateTime;
var secondsLeft = 10;

function startTime() {
    var updateTime = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
        // seeQuestion(question);

        if (secondsLeft === 0) {
            clearInterval(updateTime);
            timerUpMessage();
        }

    }, 1000);
}

//enter timerUpMessage displayed at end (score, results, form to save score with contact info) and make form element dissapear when time = 0 (when timerUpMessage is called)
function timerUpMessage() {
    timerEl.textContent = " ";
    var h1El = document.createElement("h1");
    h1El.textContent = "Time is Up! Quiz Results:";
    timerUpEl.appendChild(h1El);
    formEl.style.display = "none"; // clear (hide) form element when timerUpMessage is called from startTime (if time=0)
    startBtn.style.display = "none"; // clear (hide) startBtn (changed text in TimerUp function) when timerUpMessage is called from startTime (when time=0)
}

//startTime();

//var title = ['Question 1']
//wrap- array of objects (describing real world)
//mimic a for loop
//var scoreCount = document.getElementById("scoreDiv")
var scoreCount = document.getElementById("scoreDiv")
var currentScore = 0;
var currentQuestion = 0; // ++ 
var questions = [
    {
        title: "Question 1",
        option: ["a1", "a2", "a3", "a4"],
        answer: 1,
        score: 1
    },
    {
        title: "Question 2",
        option: ["b1", "b2", "b3", "b4"],
        answer: 1,
        score: 1
    },
    {
        title: "Question 3",
        option: ["c1", "c2", "c3", "c4"],
        answer: 1,
        score: 1
    },
    {
        title: "Question 4",
        option: ["d1", "d2", "d3", "d4"],
        answer: 1,
        score: 1
    }
]


function renderQuestion() {
    var question = questions[currentQuestion];
    var title = question.title; //make variables for each based on question
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


    //var scoreNow = 0;
    // if (choice2Btn.dataset.correct = true) {
    //     currentScore++
    //     var scoreNow = currentScore;
    //     console.log(scoreNow)
    // }


    // var scoreNow = + score
    // //currentScore.textContent = scoreNow;
    // console.log(currentScore);
    // scoreCount.textContent = scoreNow;




    choice1Btn.addEventListener("click", handleChoiceClick)
    choice2Btn.addEventListener("click", handleChoiceClick)
    choice3Btn.addEventListener("click", handleChoiceClick)
    choice4Btn.addEventListener("click", handleChoiceClick)

    // choice1Btn.addEventListener("click", checkAnswer)
    // choice2Btn.addEventListener("click", checkAnswer)
    // choice3Btn.addEventListener("click", checkAnswer)
    // choice4Btn.addEventListener("click", checkAnswer)


}
function handleChoiceClick(event) {
    event.preventDefault();
    checkAnswer(event);
    //nextQuestion(event);
}

var result;

function checkAnswer(event) {
    event.preventDefault();
    //var userAnswer = event.target;
    console.log(event.target.answer)
    console.log(event.target.dataset.correct);
    if (event.target.dataset.correct == 'true') {
        result = document.createElement("p")
        result.textContent = "Correct!";
        formEl.appendChild(result);
        currentScore++
        var scoreNow = currentScore;
        scoreCount.textContent = scoreNow;
        //var addPoint = questions.score;
        //console.log(addPoint)
    } else if (event.target.dataset.correct != 'true') {
        result = document.createElement("p")
        result.textContent = "Incorrect :(";
        formEl.appendChild(result);
        currentScore;
        var scoreNow = currentScore;
        scoreCount.textContent = scoreNow;
    }
    //console.log(userAnswer.value);
    nextQuestion();


    //console.log(questions.answer[currentQuestion]);
    //var answerCorrect = questions.a
    //console.log(questions.option[questions.answer]);


}
function nextQuestion() {

    //event.preventDefault();
    currentQuestion++
    renderQuestion();





    //see if answer is right
    //show next button
}




// function nextQuestion(event) {
//     currentQuestion++
//     renderQuestion(currentQuestion);
// }
// var question = {
//     title: ['Question 4', 'Question 2', 'Question 3'],
//     options: (['an', 'an', 'an', 'an'], ['to', 'for', 'to', 'to']),
//     //answer: 1
// };
// var counter = 0;
// var h2Div = document.getElementById('headerDiv')
// var answers = document.querySelectorAll('label');
// h2Div.textContent = question.title[counter];
// answers.textContent = question.options[counter]

// answers.forEach(function (element, index) {
//     element.textContent = question.options[index];
// })
// //var length = question.title.length;
// //h2Div.textContent = question.title[0]
// //answers.textContent = question.options[0[0]]
// // show each question
// function seeQuestion(q) {
//     //h2Div.textContent = q.title;
//     // var h2Div = document.getElementById('headerDiv')
//     // var answers = document.querySelectorAll('label');
//     // h2Div.textContent = q.title[0]
//     // answers.textContent = q.options[0[0]]

//     submitBtn.addEventListener('click', function (event) {
//         //h2Div.textContent = question.title[0];
//         //answers.textContent = question.options[0]
//         //for (var i = 0; i < 2; i++) {
//         //console.log(question.title[i])
//         counter++

//         console.log(q.title[counter]);
//         event.preventDefault()
//         var nextq = q.title[counter];
//         //var nextq = q[i].title;
//         console.log(nextq)
//         h2Div.textContent = nextq;

//         //for (var i = 0; i < 5; i++) {
//         event.preventDefault();
//         var nextqa = q[0].options[counter]
//         console.log(nextqa)

//         //}


//         //q.title[i++]
//         // h2Div.textContent = q.title[i]
//         // answers.textContent = q.options[i]
//         // console.log("hi")

//         //h2Div.textContent = nextq
//         answers.innerHTML = nextqa
//         console.log("hi")




//     })

//     //nextQuestion(q);


// }


// // for (var i = 0; i < highScores.length; i++) {
// //     var score = document.createElement("p");
// //     score.textContent = highScores[i].initials
// // }
// // submitBtn.addEventListener('click', function (event) {
// //     event.preventDefault();
// //nextQuestion(q);
// // for (var i = 0; i < q.title.length; i++) {
// //     h2Div.textContent = q.title[i]
// //     answers.textContent = q.options[i]

// //q.title[i]
// //q.answers[[i]]
// //nextQuestion();




// //answers.textContent = q.option

// // submitBtn.addEventListener('click', function (event, array) {
// //     event.preventDefault();
// //     for (var i = 0; i < q.title.length; i++) {
// //         //element = event.target;
// //         //var element = event.target;

// //         // select dom element headerDiv by id and assign to variable
// //         //var h2Div = document.getElementById('headerDiv');
// //         // modify the text
// //         //question.title[i]++;
// //         h2Div.textContent = q.title[i];


// //         //for (var i = 0; i < q.title.length; i++) {
// //         //select all input elements with the same class
// //         //var answers = document.querySelectorAll('label');
// //         //answers.textContent = q.options[i];

// //         //console.log(option);

// //         // for each of the answers, display text from the question object using iterations through the options array
// //         answers.forEach(function (element, index) {
// //             element.textContent = q.options[index];
// //         })




// //function nextQuestion(q) {
// // submitBtn.addEventListener('click', function (event) {
// //     event.preventDefault();
// // console.log("hi")
// // for (var i = 0; i < q.length; i++) {
// //     q.title[i++]
// //     h2Div.textContent = q.title[i]
// //     answers.textContent = q.options[i]
// //     seeQuestion(i++)
// //     //seeQuestion(i++);
// //     //seeQuestion(q);
// // }
// // ;



// // submitBtn.addEventListener('click', function (event) {
// //     event.preventDefault();
// //     for (var i = 0; i < q.title.length; i++) {
// //         var h2Div = document.getElementById('headerDiv');
// //         h2Div.textContent = q.title[i];
// //         var answers = document.querySelectorAll('label');
// //         answers.textContent = q.options[i];
// //         q.answer[i];





// //     }
// // })

// // var question2 = {
// //     title: 'Question 2',
// //     options: ['to', 'to', 'to', 'to'],
// //     answer: 2
// // };


// //seeQuestion(question);



// var select = document.getElementById('choice');
// select.addEventListener("keyof", function () {
//     if (select.value == checked) {
//         console.log('not');
//     } else {
//         console.log('clicked')
//     }
// });

// // var select = document.getElementById('a1');
// // select.addEventListener('click', function () {
// //     console.log('Clicked!');
// // });


// //var selectInput = document.querySelectorAll('.option')



// // function answerQuestion(q) {
// //     var selectInput = document.querySelectorAll('.option');
// //     selectInput.addEventListener('click', function (e, index) {
// //         e.preventDefault();
// //         if (selectInput.value === q.answer[index]) {
// //             scoreDiv++;
// //             var count = document.createElement("p")
// //             count.textContent = scoreDiv.value;
// //             scoreDiv.appendChild(count);
// //         }

// //     });
// // };



// // const img = document.createElement("img");
// // img.src = "https://code-quiz/assets/images/tooth.png";
// // document.body.appendChild(img);



// // var nextBtn = document.getElementById('submit');
// // //this function will be executed every time their is a click on the button
// // nextBtn.addEventListener('click', function () {
// //     console.log('clicked next');
