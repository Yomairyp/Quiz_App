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
        
    }
    
      
    };

};

function showScore(){
    let testOverHTML = "<h1>Results</h1>";
    testOverHTML += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = testOverHTML;
}

let questions = [
    new Question ("What does MVC stand for?",["Mobile-Version-Connect", "Model-Version-Control","Model-View-Controler", "Mobile-View-Connection"],"Model-View-Control"),
    new Question ("What is the does HTML stand for?",["Hypertext Markup Language", "Hyper Language", "Mark up Language"],"Hypertext Markup Language"),
    new Question ("Whats language is used for we apps?",["Java", "javaScript", "PHP", "All"], "All"),
    new Question ("What language is used to style a page?",["HTML","CSS", "Java","Ruby"],"CSS")
];

let quiz = new Quiz(questions);
populate();