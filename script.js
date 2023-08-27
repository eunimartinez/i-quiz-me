let time = 90; //set the prefeered time
let score = 0;
let IntervalId;
function intervalFucntion() {
  const timerInterval = () =>
    (IntervalId = setInterval(() => {
      document.getElementById("timer").innerHTML = time;
      time -= 1;
      console.log(time);
      if (time < 0) {
        finalScreen();
        clearInterval(IntervalId);
        $(".times-up").toggleClass("times-up hide");
      }
    }, 1000));
  const scoreInterval = () =>
    setInterval(() => {
      document.getElementById("score").innerHTML = score;
    }, 1000);
  timerInterval();
  scoreInterval();
  $("#question-1").toggleClass("question-1-hide question-1-show");
  $("#start-btn").toggleClass("start-btn start-button-hide");
}
let timeSubtracted = 3;
let scoreAdded = 100;
const togglequestion1 = () => {
  if ($("#radio1-question-1").is(":checked")) {
    $("#question-1-btn").text("correct");
    score += scoreAdded;
  } else if ($("#radio2-question-1").is(":checked")) {
    $("#question-1-btn").text("incorrect");
    time -= timeSubtracted;
  } else if ($("#radio3-question-1").is(":checked")) {
    $("#question-1-btn").text("incorrect");
    time -= timeSubtracted;
  } else {
    $("#question-1-btn").text("incorrect");
    time -= timeSubtracted;
  }

  setTimeout(() => {
    $("#question-1").toggleClass("question-1-show question-1-hide");
    $("#question-2").toggleClass("question-2-hide question-2-show");
  }, 1000);
};

const togglequestion2 = () => {
  if ($("#radio1-question-2").is(":checked")) {
    
    $("#question-2-btn").text("correct");
    score += scoreAdded;
  } else if ($("#radio2-question-2").is(":checked")) {
    $("#question-2-btn").text("incorrect");
    time -= timeSubtracted;
  } else if ($("#radio3-question-2").is(":checked")) {
    $("#question-2-btn").text("incorrect");
    time -= timeSubtracted;
  } else {
    $("#question-2-btn").text("incorrect");
    time -= timeSubtracted;
  }

  setTimeout(() => {
    $("#question-2").toggleClass("question-2-show question-2-hide");
    $("#question-3").toggleClass("question-3-hide question-3-show");
  }, 1000);
};

const togglequestion3 = () => {
  if ($("#radio1-question-3").is(":checked")) {
    
    $("#question-3-btn").text("correct");
    score += scoreAdded;
  } else if ($("#radio2-question-3").is(":checked")) {
    $("#question-3-btn").text("incorrect");
    time -= timeSubtracted;
  } else if ($("#radio3-question-3").is(":checked")) {
    $("#question-3-btn").text("incorrect");
    time -= timeSubtracted;
  } else {
    $("#question-3-btn").text("incorrect");
    time -= timeSubtracted;
  }

  setTimeout(() => {
    $("#question-3").toggleClass("question-3-show question-3-hide");
    finalScreen();
  }, 1000);
};

function finalScreen() {
  $("#highscore-btn").attr("disabled", false);
  $("#final-box").removeClass("final-box-hide").addClass("final-box-show");
  $("#final-score").text(score);
}

function NameSubmitted() {
  let name = $("#name-box").val().toUpperCase();
  localStorage.setItem(name, score);
  ViewHighSchore()
}

function ViewHighSchore() {
  const items = { ...localStorage };
  const keys = Object.keys(items);
  console.log(keys.length);
  const values = Object.values(items);
  for (let i = 0; i < keys.length; i++) {
    document.getElementById(
      "highScore"
    ).innerHTML += `<div style="display:flex; justify-content:space-around;"><p>${keys[i]}</p><p>${values[i]}</p></div>`;
  }
}

document
  .getElementById("start-btn")
  .addEventListener("click", intervalFucntion);

$("#question-1-btn").on("click", togglequestion1);
$("#question-2-btn").on("click", togglequestion2);
$("#question-3-btn").on("click", togglequestion3);
$("#name-submit").on("click", NameSubmitted);
$("#highscore-btn").on("click", ViewHighSchore);
