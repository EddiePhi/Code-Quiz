// VVVVVVVV Assistance from Tutor: Vivian Tuong Nguyen VVVVVVVV

//Beginning Prompt
let introPrompt = document.querySelector("#intro")
let startQuizBtn = document.querySelector("#startQuizBtn");

introPrompt.textContent = "Welcome to the Code Quiz! Press the 'Start Quiz' to begin.";
startQuizBtn.addEventListener("click", displayCard);
startQuizBtn.addEventListener("click", hideIntro);
startQuizBtn.addEventListener("click", startTime);

function hideIntro(){
  introPrompt.remove();
  startQuizBtn.remove();
}

// Quiz
var totalScore = 0;
var index = 0;
var quiz = {
  questions:[
    "What tag is a generic HTML container?", 
    "What is Bootstrap?", 
    "What are the main 3 languages for web design?", 
    "What is alternate variable declaration to 'var'?", 
    "What is a popular coding algorithm interview question?"
  ],
  choices:[
    ['a', '<div>', 'c'],
    ['A responsive CSS framework', 'b', 'c'],
    ['a', 'b', 'HTML, CSS, & JavaScript'],
    ['let', 'b', 'c'],
    ['a', 'FizzBuzz', 'c']
  ],
  answers:['<div>', 'A responsive CSS framework', 'HTML, CSS, & JavaScript', 'let', 'FizzBuzz']
}

function checkResults(){
  // Validate correct answer
  console.log(this.textContent);
  if(this.textContent == quiz.answers[index]){
    alert("you are right");
    totalScore++;
  }
  else{
    alert("you are wrong");
    loseTime();
  }
  index++;
  
  if (index >= quiz.questions.length){
    gameOver();
  }

  
  displayCard();
  
  }

function displayCard(){
  document.querySelector("#question").textContent= "";
  document.querySelector("#choices").textContent= "";
  document.querySelector("#answer").textContent= "";
  
  //Prompt #question
  document.querySelector("#question").textContent = quiz.questions[index];
  
  //Buttons for #choices
  for(var i = 0; i < quiz.choices[index].length; i++){
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn-choice");
    btn.textContent = quiz.choices[index][i];
    btn.onclick = checkResults;
    document.querySelector("#choices").append(btn);
  }
  
  //#answer
  document.querySelector("#answer").textContent = quiz.answers[index];

}

// Timer
let timeEl = document.querySelector("#time");
let mainEl = document.querySelector("#main");
let secondsLeft = 100;
let timerInterval;

function startTime(){

  // Global timer variable to be access by gameOver()
  timerInterval = setInterval(countdown, 1000);
}

function countdown(){
  secondsLeft--;
  timeEl.textContent = secondsLeft + "s";

  if(secondsLeft === 0) {
    stopTime();
  }

}

function loseTime(){
  secondsLeft -= 10;
    timeEl.textContent = secondsLeft + "s";
  
    if(secondsLeft <= 0) {
      gameOver();
    }
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
    

    timeEl.textContent = "SCORE";
    divEl.textContent = String(document.getElementById("fieldEl").value) + ": " + totalScore;
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

















