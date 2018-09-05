var question1 = {
  q: "Question 1",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer",
  correct: "correct"
}

var question2 = {
  q: "Question 2",
  a2: "an answer",
  a3: "an answer",
  correct: "correct",
  a4: "an answer"
}

var question3 = {
  q: "Question 3",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var question4 = {
  q: "Question 4",
  a2: "an answer",
  correct: "correct",
  a3: "an answer",
  a4: "an answer"
}

var question5 = {
  q: "Question 5",
  a2: "an answer",
  correct: "correct",
  a3: "an answer",
  a4: "an answer"
}

var question6 = {
  q: "Question 6",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var question7 = {
  q: "Question 7",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var question8 = {
  q: "Question 8",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var question9 = {
  q: "Question 9",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var question10 = {
  q: "Question 10",
  correct: "correct",
  a2: "an answer",
  a3: "an answer",
  a4: "an answer"
}

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
var score = 0
var outOf = questionArray.length
var qIndex = 0
var number = 15
var timerInterval
var click
$(".final").hide()


// --TIMER------------------ chapter 05 slide 09 'Interval'

//run the timer with the interval
function run() {
  clearInterval(timerInterval)
  timerInterval = setInterval(timeDown, 1000)
}

//increment the timer
function timeDown() {
  number--

  $(".timer").text(number)

  //integrate the timer functionality into the quiz
  if (number === 0) {
    nextQuestion()
    restartTimer()
    alert("Time's up!")
  }
}

//stop the timer by clearng the timeout 
function stopTimer() {
  clearInterval(timerInterval)
}

function restartTimer() {
  number = 15;
}

function restart() {
  clearInterval(intervalId);
  number = 15;
  run();
}

var nextQuestion = function () {
  qIndex++;
  restartTimer();
  endGame();
  makeQuestion()
}

var makeQuestion = function () {
  $(".question").text(questionArray[qIndex].q)

  var answers = Object.values(questionArray[qIndex])
  answers.shift()

  $('.answer1').text(answers[0])
  $('.answer2').text(answers[1])
  $('.answer3').text(answers[2])
  $('.answer4').text(answers[3])
}

click = $(document).on("click", "p", function () {
  var input = $(this).text()

  if (input === questionArray[qIndex].correct) {
    score++
    alert("Correct!");
    nextQuestion()
  } else {
    alert("Nope! The correct answer was " + questionArray[qIndex].correct);

    nextQuestion()
  }
})

var endGame = function () {
  if (qIndex === outOf) {
    $(".final").show()
    $(".questionsMain").hide()

    $(".fScore").text("Your score is: " + score + "/" + outOf)
  } else {
    return false
  }
}

$(document).on("click", ".tryAgain", function() {
  qIndex = 0
  $(".final").hide()
  $(".questionsMain").show()
  makeQuestion();
  restartTimer();
  score = 0
})

run();
makeQuestion()