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
button1.style.visibility = "hidden"
button2.style.visibility = "hidden"
button3.style.visibility = "hidden"
button4.style.visibility = "hidden"
button5.style.visibility = "hidden"
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
  button1.style.visibility = "visible"
  button2.style.visibility = "visible"
  button3.style.visibility = "visible"
  button4.style.visibility = "visible"
  button5.style.visibility = "visible"
  question1.textContent = "What tag is a generic HTML container?";
  
  answer1.textContent = "<div>";
  answer2.textContent = "Wrong Answer";
  answer3.textContent = "Wrong Answer";
  answer4.textContent = "Wrong Answer";
  answer5.textContent = "Wrong Answer";

  if (!button1) {
      secondsLeft = secondsLeft - 5;
  }
}


function secondQuestion() {
  question2.textContent = "What is Bootstrap?";
  
  answer1.textContent = "Wrong Answer";
  answer2.textContent = "A responsive CSS framework";
  answer3.textContent = "Wrong Answer";
  answer4.textContent = "Wrong Answer";
  answer5.textContent = "Wrong Answer";
}


function thirdQuestion() {
  question3.textContent = "What are the main 3 languages for web design?";
  
  answer1.textContent = "Wrong Answer";
  answer2.textContent = "Wrong Answer";
  answer3.textContent = "HTML, CSS, JavaScript";
  answer4.textContent = "Wrong Answer";
  answer5.textContent = "Wrong Answer";
}


function fourthQuestion() {
  question4.textContent = "What is alternate variable declaration to 'var'?";
  
  answer1.textContent = "Wrong Answer";
  answer2.textContent = "Wrong Answer";
  answer3.textContent = "Wrong Answer";
  answer4.textContent = "let";
  answer5.textContent = "Wrong Answer";
}


function fifthQuestion() {
  question5.textContent = "What is a popular coding algorithm interview question?";
  
  answer1.textContent = "Wrong Answer";
  answer2.textContent = "Wrong Answer";
  answer3.textContent = "Wrong Answer";
  answer4.textContent = "Wrong Answer";
  answer5.textContent = "FizzBuzz";
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

















