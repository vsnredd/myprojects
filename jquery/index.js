$(document).ready(function () {
    var magic8Ball = {};
    magic8Ball.listOfAnswers = [
      "No",
      "Yes",
      "May Be",
      "I don't think so",
      "of course!",
      "Undoubtedly",
      "In your Dreams",
    ];
  
    $("#answer").hide();
    magic8Ball.askQuestion = function (question) {
      $("#8Ball").effect("shake");
  
      var randomNumber = Math.random();
      var randomIndex = Math.floor(randomNumber * this.listOfAnswers.length);
      var answer = this.listOfAnswers[randomIndex];
      $("#answer").text(answer);
      console.log(question);
      console.log(answer);x
    };
    $("#questionButton").click(function () {
      $("#answer").show();
  
      setTimeout(function () {
        var question = prompt("ASK A YES OR NO QUESTION");
        magic8Ball.askQuestion(question);
      }, 600);
    });
  });