//initial variables pre-initation
var instructions = document.querySelector("#instructions");
var quizFrame = document.querySelector("#quizFrame");
var timerFrame = document.querySelector("#timerFrame");
var timer = "";
var quizIndex = 0;
var interval = "";

//quiz variables 
var questionPlaceholder = document.querySelector("#questionPlaceholder");
var next = document.querySelector(".next");
var highscore = document.querySelector("#highscore");
var myScore = 4;
var priorScores = {
    initials: ["aa", "bb"],
    playerScore: [4, 4],
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

let questionThree = {
    title: "String values must be enclosed within ___ when being assigned to variables.",
    answerBank: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: "3. quotes",
}

let questionFour = {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerBank: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: "4. console.log",
}

var questionBank = [questionOne, questionTwo, questionThree, questionFour];

function nextQuestion() {

    //removes instructions
    instructions.remove();
    next.remove();

    //establish div to format answer frame
    var answerFrame = document.createElement("div");
    answerFrame.className = "answerFrame";
    quizFrame.appendChild(answerFrame);
    
    //resets timer
    timerFrame.textContent = "Time: " + timer;


    //displays question
    var currentQuestion = questionBank[quizIndex].title;
    questionPlaceholder.textContent = currentQuestion;

    //iterates through answers and creates buttons
    for (var i = 0; i < questionBank[quizIndex].answerBank.length; i++) {
        answerSelection = questionBank[quizIndex].answerBank[i];
        var newButton = document.createElement("button");
        newButton.className = "answer";
        newButton.textContent = answerSelection;
        answerFrame.appendChild(newButton);
    }
    //refreshes querySelector w/ newly created buttons
    newAnswerButton = document.querySelectorAll(".answer");

    newAnswerButton.forEach(function (button) {

        button.addEventListener("click", function() {
            removePriorAnswers(); 
            nextQuestion();
            clearInterval(interval);
            countdown();
        });
    });

    next.addEventListener("click", function() {
        
        if (quizIndex < questionBank.length - 1) {
            nextQuestion();
            removePriorAnswers(); 
            clearInterval(interval);
            countdown();
        } else {
            removePriorAnswers();
            quizEnd();
        }
        
    });
    

    quizIndex++;

}

function removePriorAnswers() {
    // Assuming you have a collection of elements you want to delete
var elementsToDelete = document.getElementsByClassName("answer");

// Convert the HTMLCollection to an array for easier iteration
var elementsArray = Array.from(elementsToDelete);

// Iterate through the array and delete each element
elementsArray.forEach(function (element) {
    element.remove();
});
}

//resets, engages, and decrements timer
function countdown(){
    timer = 60;

    if (timer === 60) {
        interval = setInterval(decrement, 1000);
    } 

    function decrement() {
        timer--;

        if(timer >= 0) {
            timerFrame.textContent = "Time: " + timer;
        } else {
            clearInterval(interval);
            alert("Times up!");
            nextQuestion();
        }
    }
}

//provides input form
function quizEnd() {
    
    quizFrame.innerHTML += "<p> Your final score is..."

    var finalScore = document.createElement("p");
    finalScore.id = "finalScore";
    finalScore.textContent = myScore;
    quizFrame.appendChild(finalScore);

    quizFrame.innerHTML += "<p>Enter Initials: </p><input type=text id='initialsInput'><button id='submit'>Submit</button>";

}

function showHighscores() {
    questionPlaceholder.textContent = "Highscores";
    
    for (var i = 0; i < priorScores.initials.length; i++) {
        var findInitial = priorScores.initials[i];
        var findScore = priorScores.playerScore[i];
        var newLine = document.createElement("p");
        newLine.className = "highscores";
        newLine.textContent = findInitial + " - " + findScore;
        quizFrame.appendChild(newLine);
    }
}


//commences quiz
next.addEventListener("click", function() {
    
    nextQuestion();
    countdown();
    
});

highscore.addEventListener("click", function(){
    
     //removes instructions
     instructions.remove();
     start.remove();
     
    showHighscores()
})


