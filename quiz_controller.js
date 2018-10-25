function Quiz (question){
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
};


Quiz.prototype.getQuestionIndex = function (){
    return this.question[this.questionIndex]

};