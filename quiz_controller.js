function Quiz (question){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};


Quiz.prototype.getQuestionIndex = function (){
    return this.question[this.questionIndex]

};

Quiz.prototype.isEnded = function(){
    return this.length === this.questionIndex
}