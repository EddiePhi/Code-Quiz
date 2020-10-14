// https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp

// Variables for Questions, Answers, and Buttons
let question1 = document.getElementById("q1");
let question2 = document.getElementById("q1");
let question3 = document.getElementById("q1");
let question4 = document.getElementById("q1");
let question5 = document.getElementById("q1");

let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");
let answer4 = document.getElementById("a4");
let answer5 = document.getElementById("a5");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");

let select1 = document.querySelector(".button1").textContent = "Select";
let select2 = document.querySelector(".button2").textContent = "Select";
let select3 = document.querySelector(".button3").textContent = "Select";
let select4 = document.querySelector(".button4").textContent = "Select";
let select5 = document.querySelector(".button5").textContent = "Select";



// Start Quiz
document.getElementById("startQuiz").addEventListener("click", firstQuestion);
document.getElementById("startQuiz").addEventListener("click", setTime);
  

let totalScore = 0;



// Timer
let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let secondsLeft = 10;

function setTime() {
  document.getElementById("intro").style.visibility = "hidden";
  document.getElementById("startQuiz").style.visibility = "hidden";

  // Global timer variable to be access by gameOver()
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "s";
  
    if(secondsLeft === 0) {
      gameOver();
    }
  }, 1000);
}



// Game Over Prompt
function gameOver() {
  clearInterval(timerInterval);
  
  timeEl.textContent = "GAME OVER";

  divEl = document.createElement("div");
  divEl.textContent = "Your Score: " + totalScore;
  mainEl.appendChild(divEl);

  fieldEl = document.createElement("input");
  fieldEl.setAttribute("type", "text")
  fieldEl.setAttribute("placeholder", "Enter Initials");
  fieldEl.setAttribute("id", "fieldEl")
  mainEl.appendChild(fieldEl);

  butEl = document.createElement("input");
  butEl.setAttribute("type", "submit");
  butEl.setAttribute("id", "submitButton");
  mainEl.appendChild(butEl);

  document.getElementById("submitButton").addEventListener("click", submitScore)
  
  // Submit Score afterwards
  function submitScore(){
    question5.remove();
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    answer5.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();

    timeEl.textContent = "SCORE";
    divEl.textContent = String(document.getElementById("fieldEl").value) + ", Score: " + totalScore;
    fieldEl.remove();
    butEl.setAttribute("id", "startOver");
    butEl.setAttribute("value", "Start Over");
    
    document.getElementById("startOver").addEventListener("click", startOver);
    
    //Reload page to start over
    function startOver(){
      location.reload();
    }
  } 
}



//Function Questions
function firstQuestion() {
  
  question1.textContent = "Select 1";
  
  answer1.textContent = "1";
  answer2.textContent = "2";
  answer3.textContent = "3";
  answer4.textContent = "4";
  answer5.textContent = "5";

  if (!button1) {
      secondsLeft = secondsLeft - 5;
  }
}


function secondQuestion() {
  question2.textContent = "Select B";
  
  answer1.textContent = "A";
  answer2.textContent = "B";
  answer3.textContent = "C";
  answer4.textContent = "D";
  answer5.textContent = "E";
}


function thirdQuestion() {
  question3.textContent = "Select #";
  
  answer1.textContent = "!";
  answer2.textContent = "@";
  answer3.textContent = "#";
  answer4.textContent = "$";
  answer5.textContent = "%";
}


function fourthQuestion() {
  question4.textContent = "Select (";
  
  answer1.textContent = "^";
  answer2.textContent = "&";
  answer3.textContent = "*";
  answer4.textContent = "(";
  answer5.textContent = ")";
}


function fifthQuestion() {
  question5.textContent = "Select the fifth one";
  
  answer1.textContent = "First";
  answer2.textContent = "Second";
  answer3.textContent = "Third";
  answer4.textContent = "Fourth";
  answer5.textContent = "Fifth";
}



// Intro page + Start Quiz button
// Welcome the the Code Quiz! One you press the "Start Quiz" button, you will have 60 seconds to finish the 5 questions. Good luck!
// Question - 4 buttons with different options
// Question - 4 buttons with different options
// Question - 4 buttons with different options
// Question - 4 buttons with different options
// Question - 4 buttons with different options
// All done page - display score, enter Initials
// High Score page - Display Initials and High score - Go back button, clear high scores questions

















