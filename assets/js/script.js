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

var question = {
    title: ['Question 1', 'Question 2', 'Question 3'],
    options: (['an', 'an', 'an', 'an'], ['to', 'for', 'to', 'to']),
    //answer: 1
};

var h2Div = document.getElementById('headerDiv')
var answers = document.querySelectorAll('label');
h2Div.textContent = question.title[0];
answers.textContent = question.options[0]
answers.forEach(function (element, index) {
    element.textContent = question.options[index];
})
var length = question.title.length;
//h2Div.textContent = question.title[0]
//answers.textContent = question.options[0[0]]
// show each question
function seeQuestion(q) {
    //h2Div.textContent = q.title;
    // var h2Div = document.getElementById('headerDiv')
    // var answers = document.querySelectorAll('label');
    // h2Div.textContent = q.title[0]
    // answers.textContent = q.options[0[0]]






    submitBtn.addEventListener('click', function (event) {
        //h2Div.textContent = question.title[0];
        //answers.textContent = question.options[0]
        for (var i = 0; i < question.title.length; i++) {
            console.log(question.title[i])
            event.preventDefault()
            var nextq = q.title[i];
            console.log(nextq)
        }
        for (var i = 0; i < q.options.length; i++) {
            event.preventDefault();
            var nextqa = q.options[i]
            console.log(nextqa)

        }


        //q.title[i++]
        // h2Div.textContent = q.title[i]
        // answers.textContent = q.options[i]
        // console.log("hi")

        h2Div.textContent = nextq
        answers.textContent = nextqa
        console.log("hi")




    })

    //nextQuestion(q);


}

// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//nextQuestion(q);
// for (var i = 0; i < q.title.length; i++) {
//     h2Div.textContent = q.title[i]
//     answers.textContent = q.options[i]

//q.title[i]
//q.answers[[i]]
//nextQuestion();




//answers.textContent = q.option

// submitBtn.addEventListener('click', function (event, array) {
//     event.preventDefault();
//     for (var i = 0; i < q.title.length; i++) {
//         //element = event.target;
//         //var element = event.target;

//         // select dom element headerDiv by id and assign to variable
//         //var h2Div = document.getElementById('headerDiv');
//         // modify the text
//         //question.title[i]++;
//         h2Div.textContent = q.title[i];


//         //for (var i = 0; i < q.title.length; i++) {
//         //select all input elements with the same class
//         //var answers = document.querySelectorAll('label');
//         //answers.textContent = q.options[i];

//         //console.log(option);

//         // for each of the answers, display text from the question object using iterations through the options array
//         answers.forEach(function (element, index) {
//             element.textContent = q.options[index];
//         })




//function nextQuestion(q) {
// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
// console.log("hi")
// for (var i = 0; i < q.length; i++) {
//     q.title[i++]
//     h2Div.textContent = q.title[i]
//     answers.textContent = q.options[i]
//     seeQuestion(i++)
//     //seeQuestion(i++);
//     //seeQuestion(q);
// }
// ;



// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     for (var i = 0; i < q.title.length; i++) {
//         var h2Div = document.getElementById('headerDiv');
//         h2Div.textContent = q.title[i];
//         var answers = document.querySelectorAll('label');
//         answers.textContent = q.options[i];
//         q.answer[i];





//     }
// })

// var question2 = {
//     title: 'Question 2',
//     options: ['to', 'to', 'to', 'to'],
//     answer: 2
// };


//seeQuestion(question);



var select = document.getElementById('choice');
select.addEventListener("keyof", function () {
    if (select.value == checked) {
        console.log('not');
    } else {
        console.log('clicked')
    }
});

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
