// VVVVVVVV Assistance from Tutor: Vivian Tuong Nguyen VVVVVVVV

//Beginning Prompt
let introPrompt = document.querySelector("#intro");
let startQuizBtn = document.querySelector("#startQuizBtn");

introPrompt.textContent = "Welcome to the Code Quiz! Press 'Start Quiz' to begin.";
startQuizBtn.addEventListener("click", displayCard);
startQuizBtn.addEventListener("click", hideIntro);
startQuizBtn.addEventListener("click", startTime);

function hideIntro(){
  introPrompt.remove();
  startQuizBtn.remove();
};

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
    ['<p>', '<div>', '<h1>'],
    ['A responsive CSS framework', 'Another name for laces', "William Turner\'s dad"],
    ['French, Swahili, Korean', 'Python, C++, Java', 'HTML, CSS, & JavaScript'],
    ['let', 'declare', 'create'],
    ['Twilio', 'FizzBuzz', 'Glia']
  ],
  answers:['<div>', 'A responsive CSS framework', 'HTML, CSS, & JavaScript', 'let', 'FizzBuzz']
};

function checkResults(){
  // Validate correct answer using alerts from https://getbootstrap.com/docs/4.0/components/alerts/
  console.log(this.textContent);
  
  if(this.textContent == quiz.answers[index]){
    let success = document.createElement('div');
    success.textContent = "Correct!";
    success.setAttribute('class', 'alert alert-success');
    success.setAttribute('role', 'alert');
    document.body.appendChild(success);
    totalScore++;
  } else {
    let failure = document.createElement('div');
    failure.textContent = "Correct!";
    failure.setAttribute('class', 'alert alert-danger');
    failure.setAttribute('role', 'alert');
    document.body.appendChild(failure);
    loseTime();
  };
// <div class="alert alert-success" role="alert">
//     Correct!
// </div>
// <div class="alert alert-danger" role="alert">
//     Incorrect!
// </div> 





  index++;
  
  if (index >= quiz.questions.length){
    gameOver();
  };
  
  displayCard();
  
  };

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
  };
  

};

// Timer
let timeEl = document.querySelector("#time");
let mainEl = document.querySelector("#main");
let secondsLeft = 61;
let timerInterval;

function startTime(){

  // Global timer variable to be access by gameOver()
  timerInterval = setInterval(countdown, 1000);
};

function countdown(){
  secondsLeft--;
  timeEl.textContent = secondsLeft + "s";

  if(secondsLeft <= 0) {
    gameOver();
  };

};

function loseTime(){
  secondsLeft -= 10;
    timeEl.textContent = secondsLeft + "s";
  
    if(secondsLeft <= 0) {
      gameOver();
    };
};

// Game Over Prompt
function gameOver() {
  clearInterval(timerInterval);
  
  //document.querySelector("#spacing").remove();
  timeEl.textContent = "GAME OVER";
  timeEl.setAttribute("class", "col-md-12 d-flex justify-content-center");
  secEl = document.createElement("section");
  secEl.textContent = "Your Score: " + totalScore;
  

  
  secEl.setAttribute("class", "col-md-12 d-flex justify-content-center");
  mainEl.appendChild(secEl);

  rowEl = document.createElement("section");
  rowEl.setAttribute("class", "row justify-content-center");
  mainEl.appendChild(rowEl);

  spaceEl = document.createElement("section");
  spaceEl.setAttribute("class", "d-flex justify-content-center");
  rowEl.appendChild(spaceEl);

  fieldEl = document.createElement("input");
  fieldEl.setAttribute("type", "text");
  fieldEl.setAttribute("placeholder", "Enter Initials");
  fieldEl.setAttribute("id", "fieldEl");
  fieldEl.setAttribute("class", "d-flex justify-content-center");
  rowEl.appendChild(fieldEl);


  butEl = document.createElement("input");
  butEl.setAttribute("type", "submit");
  butEl.setAttribute("id", "submitButton");
  butEl.setAttribute("class", "d-flex justify-content-center");
  rowEl.appendChild(butEl);

  
  
  document.getElementById("submitButton").addEventListener("click", submitScore);
  
  
    
  // Submit Score afterwards
  function submitScore(){
    //querySelectorAll() not working.
    //document.querySelectorAll("alert").remove();
    
    timeEl.textContent = "HIGH SCORE";
    //Local Storage Set
    secEl.textContent = localStorage.setItem('newScore', String(document.getElementById("fieldEl").value) + ": " + totalScore);
    //Local Storage Get
    console.log(localStorage.getItem('newScore'));

    secEl.textContent = String(document.getElementById("fieldEl").value) + ": " + totalScore;
    fieldEl.remove();
    butEl.setAttribute("id", "startOver");
    butEl.setAttribute("value", "Start Over");
    
    document.getElementById("startOver").addEventListener("click", startOver);
    
    //Reload page to start over
    function startOver(){
      location.reload();
    };
  };
};

// - Add to local storage
//     - local.Storage.setItem(‘key’, value)
// - Retrieve from local storage
//     - local.Storage.getItem(‘key’)
// - Before you save to local storage, you have to convert it to a string first: JSON.stringify(key)
// - To “unstringify” use JSON.parse()