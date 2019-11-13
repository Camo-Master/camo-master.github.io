let questions = [
  'Sharks can regrow teeth',
  'HTML stands for hypertext markup language',
  'Dogs have four legs'
];

let question = document.getElementById('question');
let questionNumber = 0

question.innerHTML = questions[questionNumber];

function questionAnswered(answer){
  if(answer){
    question.innerHTML = "Correct!";
    questionNumber += 1;
  }else{
    document.body.innerHTML = "<span class=\"loserMessage\">You Lost the Game!</span>"
    questionNumber += 1;
  }

  if(questionNumber > 2){
    document.body.innerHTML = "<span class=\"loserMessage\">You Lost the Game!</span>"
  }else{
    setTimeout(function(){ question.innerHTML = questions[questionNumber]; }, 2000);
  }

}
