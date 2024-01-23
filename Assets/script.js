//initial variables pre-initation
var instructions = document.querySelector("#instructions");
var quizFrame = document.querySelector("#quizFrame");

//quiz variables 
var questionPlaceholder = document.querySelector("#questionPlaceholder");
var start = document.querySelector("#start");
var highscore = document.querySelector("#highscore");
var scores = {
    initials: [],
    scores: [],
}

//questions stored as objects
let questionOne = {
    title: "Commonly used data types DO NOT include:",
    answerBank: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
}

let questionTwo = {
    title: "The condition of an if / else statement is enclosed within ___.",
    answerBank: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "3. parentheses",
}

var questionBank = [questionOne, questionTwo];
console.log(questionBank.length);



//commences quiz
start.addEventListener("click", function commence() {

    //removes instructions
    instructions.remove();
    start.remove();

    /*
    //start timer
    var timer = 0;
    var myScore = 0;
    */

    //establish frame to format answer bank
    var answerFrame = document.createElement("div");
    answerFrame.className = "answerFrame";
    quizFrame.appendChild(answerFrame);
    
    
    //iterates through questions
    for (var i = 0; i < questionBank.length; i++) {

        var currentQuestion = questionBank[i].title;
        questionPlaceholder.textContent = currentQuestion;

        //iterates to create multiple choice buttons
        for (var j = 0; j < questionBank[i].answerBank.length; j++) {
            answerSelection = questionBank[i].answerBank[j];
            var newButton = document.createElement("button");
            newButton.className = "button";
            newButton.textContent = answerSelection;
            answerFrame.appendChild(newButton);
        }
    }

} );


