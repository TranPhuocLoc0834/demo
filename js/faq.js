
var questions = document.getElementsByClassName("question");
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.height="0";
    } else {
      answer.style.height = "150px";
    }
  });
}
