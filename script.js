var startButton = document.querySelector("#start-button");
var questionsContainer = document.querySelector("#questions-container");
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector("#answer-container");
var welcomeScreen = document.querySelector("#welcome-screen");
var loadQues = document.querySelector("#questions-container");
var timeEl = document.querySelector(".time");
var questionCounter = 0;
var timerSec = 1000;
var scoreBoard = document.querySelector("#save-player-score");
var score = 0;


var questions = [
  {
    question: "What color is the sky",
    choices: ["blue", "purple", "green", "beige"],
    answer: "blue"
  },
  {
    question: "What planet are we on?",
    choices: ["Neptune", "Mercury", "Earth", "Venus"],
    answer: "Earth"
  },
  {
    question: "How many fingers am I holding up?",
    choices: ["One", "Two", "Three", "Seven"],
    answer: "One",
  },
  {
    question: "Is this your card?",
    choices: ["Yes", "No", "Maybe?", "What card?"],
    answer: "What card?",
  },
  {
    question: "Which social media website was ruined by the Elongated Muskrat?",
    choices: ["Bluesky", "Facebook", "Reddit", "Twitter"],
    answer: "Twitter",
  },
  {
    question: "How many miles from Earth is the Moon in Miles?",
    choices: ["233,900 mi", "220,710 mi", "238,900 mi", "339,500 mi"],
    answer: "238,900 mi",
  },
  {
    question: "How stupid are you?",
    choices: ["Very", "Unimaginably", "Kinda dumb haha", "I'm not stupid!(lie)"],
    answer: "Kinda dumb haha",
  },
  
]


function startQuiz(){
  console.log("start");
  startButton.style.display = "none";



  
  handleTimer();
  displayQuestions();

}

function displayQuestions() {
  questionsContainer.innerHTML = "";
  var currQuestion = questions[questionCounter];
  var h3Tag = document.createElement("h3");
  h3Tag.textContent = currQuestion.question

  var divTag = document.createElement("div");
  divTag.id = "inner-questions-container";
  divTag.append(h3Tag);
  for (var i = 0; i < currQuestion.choices.length; i++) {
    var currChoice = currQuestion.choices[i]
    var btn = document.createElement("button");
    btn.textContent = currChoice;
    // append btn to div tag
    divTag.appendChild(btn);
  }
  questionsContainer.append(divTag);

  
  // append h1 and div tag to the page 
  // flag the btn which is the correct answer
  // maybe add an event listener on the quiz element and see if the event target matches one of the answer buttons

 

}



// function loadQues(){ 
//   if (startButton === "click"){
//     system.out.println("hello world")
    
//   }
  

// }
//   When an answer button is clicked :
//   - Was the correct button clicked?
//     - If not: display message and take away time 
//     - If not: display message 
//   - Increment questionCounter by 1
//   - Call the render function
// */
function displayTimer(){
  // setInterval(function(){
  //   secondsLeft --;
  //   timeEl.textContent = secondsLeft + "Your time WILL expire!";
  //   display.timeEl(timerInterval);

  //   if(secondsLeft === 0) {
  //     clearInterval(timerInterval);
  //     sendMessage();
  //   }

  // }, 1000);
}

// call handleTimer in start button

function handleTimer() {
  var timerInterval = setInterval(function(){
    secondsLeft --;
    timeEl.textContent = secondsLeft + "Your time WILL expire";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  
}


function handleAnswerClick(event) {
  if(event.target.tagName !== "BUTTON"){
    return
  }
  var answer = event.target.textContent;
  checkAns(answer);
}



 
function loadScore() {
    const totalScore = document.createElement("div");
    totalScore.textContent = `You scored ${score} out of ${questions.length}`
    scoreBoard.append(totalScore);
}
 
 
function nextQuestion() {
    if (questionCounter < questions.length - 1) {
        questionCounter++;
        displayQuestions();
    } else {
        // document.getElementById("opt").remove()
        // document.getElementById("ques").remove()
        // document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns(answer) {
    // const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (answer === questions[questionCounter].answer) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}










// event listener for quiz area (check tyo see if an answer btn was clicked)

questionsContainer.addEventListener("click", handleAnswerClick);

startButton.addEventListener("click", function(event){ 
  startQuiz();
  console.log(event.target);
});


console.log("hello world");
