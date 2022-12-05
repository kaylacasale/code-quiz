var startEl = document.querySelector(".start");
var startTextEl = document.querySelector(".startQuiz");
var startBtn = document.getElementById("startBtn");


function startQuiz() {
    startBtn.addEventListener("click", function () {
        startTextEl.textContent = " ";
        startBtn.textContent = "End Quiz";
        startTime();
        //seeQuestion(question);

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
        seeQuestion(question);

        if (secondsLeft === 0) {
            clearInterval(updateTime);
            timerUpMessage();
        }

    }, 1000);
}

//enter timerUpMessage displayed at end (score, results, form to save score with contact info)
function timerUpMessage() {
    timerEl.textContent = " ";
    var h1El = document.createElement("h1");
    h1El.textContent = "Time is Up! Quiz Results:";
    timerUpEl.appendChild(h1El);
}

//startTime();

var question = {
    title: 'Question 1',
    options: ['an', 'an', 'an', 'an'],
    answer: 1
};

// show each question
function seeQuestion(q) {
    // select dom element headerDiv by id and assign to variable
    var h2Div = document.getElementById('headerDiv');
    // modify the text
    h2Div.textContent = q.title;
    //select all input elements with the same class
    var answers = document.querySelectorAll('label');
    //console.log(option);

    // for each of the answers, display text from the question object using iterations through the options array
    answers.forEach(function (element, index) {
        element.textContent = q.options[index];

    });
};


//seeQuestion(question);


var select = document.getElementById('choice');
select.addEventListener("keyof", function () {
    if (select.value == checked) {
        console.log('not');
    } else {
        console.log('clicked')
    }
})

// var select = document.getElementById('a1');
// select.addEventListener('click', function () {
//     console.log('Clicked!');
// });


//var selectInput = document.querySelectorAll('.option')



// function answerQuestion(q) {
//     var selectInput = document.querySelectorAll('.option');
//     selectInput.addEventListener('click', function (e, index) {
//         e.preventDefault();
//         if (selectInput.value === q.answer[index]) {
//             scoreDiv++;
//             var count = document.createElement("p")
//             count.textContent = scoreDiv.value;
//             scoreDiv.appendChild(count);
//         }

//     });
// };



// const img = document.createElement("img");
// img.src = "https://code-quiz/assets/images/tooth.png";
// document.body.appendChild(img);



// var nextBtn = document.getElementById('submit');
// //this function will be executed every time their is a click on the button
// nextBtn.addEventListener('click', function () {
//     console.log('clicked next');

