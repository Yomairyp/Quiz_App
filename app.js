function populate () {
    if(quiz.isEnded()){
        showScore ()
    } else {
        //   show question
      let element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

    //   show choices
      let choices = quiz.getQuestionIndex().choices;
      for( let i = 0; i < choices.length; i++) { 
          let element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
         guess("btn" + [i], choices + [i])
    }
      showProgress()
    }

};

function guess(id,guess){
    let button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess(guess);
        populate();
    }

};

 function showProgress(){
     let currentQuestionNumber = quiz.questionIndex + 1;
     let element = document.getElementById("progress");
     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 
 };


function showScore(){
    let gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

let questions = [
    new Question ("What does MVC stand for?",["Mobile-Version-Connect", "Model-Version-Control","Model-View-Controller", "Mobile-View-Connection"],"Model-View-Control"),
    new Question ("What is the does HTML stand for?",["Hypertext Markup Language", "Hyper Language", "Mark up Language"],"Hypertext Markup Language"),
    new Question ("Whats language is used for web apps?",["Java", "javaScript", "PHP", "All"], "All"),
    new Question ("What language is used to style a page?",["HTML","CSS", "Java","Ruby"],"CSS")
];

let quiz = new Quiz(questions);
populate();