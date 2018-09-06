var question1 = {
  q: "What year was The Ohio State Univerity established?",
  a2: "1902",
  a3: "1883",
  a4: "1875",
  correct: "1870"
}

var question2 = {
  q: "What year did Ohio become a state?",
  a2: "1807",
  a3: "1821",
  correct: "1803",
  a4: "1837"
}

var question3 = {
  q: "How many states have the cardinal as their state bird?",
  correct: "7",
  a2: "2",
  a3: "3",
  a4: "5"
}

var question4 = {
  q: "From what tree does Ohio get its nickname?",
  a2: "Maple Tree",
  correct: "Buckeye Tree",
  a3: "Blue Spruce",
  a4: "Pine Tree"
}

var question5 = {
  q: "Of the 50 states, Ohio was the __ established.",
  a2: "12th",
  correct: "17th",
  a3: "16th",
  a4: "15th"
}

var question6 = {
  q: "What is the state animal of Ohio?",
  correct: "White-tailed Deer",
  a2: "Bobcat",
  a3: "Northern Squirrel",
  a4: "Yeti"
}

var question7 = {
  q: "What is the largest fruit able to grow in Ohio?",
  a2: "Pear",
  a3: "Papaya",
  a4: "Apple",
  correct: "Pawpaw"
}

var question8 = {
  q: "What is the state flower of Ohio?",
  a2: "White Carnation",
  correct: "Red Carnation",
  a3: "Reincarnation",
  a4: "Car Nation"
}

var question9 = {
  q: "How many presidents were born in Ohio?",
  a2: "3",
  a3: "4",
  correct: "7",
  a4: "8"
}

var question10 = {
  q: "What is the average airspeed velocity of an African swallow?",
  a2: "No one's ever asked me that",
  a3: "I dont know",
  a4: "Swallows can't fly",
  correct: "about 24 miles per hour"
}

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
var score = 0
var outOf = questionArray.length
var qIndex = 0
var number = 15
var timerInterval
var click
$(".final").hide()


// --TIMER--

function run() {
  clearInterval(timerInterval)
  timerInterval = setInterval(timeDown, 1000)
}


function timeDown() {
  number--

  $(".timer").text(number)

  if (number === 0) {
    nextQuestion()
    restartTimer()
    alert("Time's up!")
  }
}

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