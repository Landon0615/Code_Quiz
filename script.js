
const quiz = {
    "quiz": {
        "questions": [
            {
                "id": 0,
                "question": "What is a Javascript Variable?",
                "answers": [
                    {
                        "answer": "Action performed on an object.",
                        "id": 0
                    },
                    {
                        "answer": "Container for data values.",
                        "id": 1
                    },
                    {
                        "answer": "A list of objects.",
                        "id": 2
                    },
                    {
                        "answer": "None of the above.",
                        "id": 3
                    }
                ]
            },
            {
                "id": 1,
                "question": "What is a method?",
                "answers": [
                    {
                        "answer": "A list of objects.",
                        "id": 0
                    },
                    {
                        "answer": "The variable value.",
                        "id": 1
                    },
                    {
                        "answer": "Action that can be performed on an object.",
                        "id": 2
                    },
                    {
                        "answer": "None of the above.",
                        "id": 3
                    }
                ]
            },
            {
                "id": 2,
                "question": "What is a Javascript array?",
                "answers": [
                    {
                        "answer": "A list of objects.",
                        "id": 0
                    },
                    {
                        "answer": "A method.",
                        "id": 1
                    },
                    {
                        "answer": "Container for data values.",
                        "id": 2
                    },
                    {
                        "answer": "None of the above.",
                        "id": 3
                    }
                ]
            }
        ],
        "answerKey": {
            "correctAnswers": [
                {
                    "questionId": 0, 
                    "answer": 1
                },
                {
                    "questionId": 2, 
                    "answer": 0
                },
                {
                    "questionId": 1, 
                    "answer": 2
                }
            ]
        }
    }
}
$(document).ready(function () {
    var currentQuestion = 0
    var currentQuestionId = quiz.quiz.questions[currentQuestion].id;
    var score = 0
    var rightAnswer = quiz.quiz.answerKey.correctAnswers.filter((answer) => answer.questionId === currentQuestionId)[0];
    
    $('#question-1-title').text(quiz.quiz.questions[0].question);
    $('#answer0').text(quiz.quiz.questions[0].answers[0].answer);
    $('#answer1').text(quiz.quiz.questions[0].answers[1].answer);
    $('#answer2').text(quiz.quiz.questions[0].answers[2].answer);
    $('#answer3').text(quiz.quiz.questions[0].answers[3].answer);
    $('.container-fluid').hide();
    $('#button').click(function() {
        counter();
        $('#button').hide();
        $('.container-fluid').show();
    });
    $('#quiz').click(function() {
        var newQuestion = ++currentQuestion
        console.log("clicked")
        $('#question-1-title').text(quiz.quiz.questions[newQuestion].question);
        $('#answer0').text(quiz.quiz.questions[newQuestion].answers[0].answer);
        $('#answer1').text(quiz.quiz.questions[newQuestion].answers[1].answer);
        $('#answer2').text(quiz.quiz.questions[newQuestion].answers[2].answer);
        $('#answer3').text(quiz.quiz.questions[newQuestion].answers[3].answer);
    });
    $('#answer0').click(function () {
        var answerChoice = $('#answer0').val();
        var chosenAnswerId = quiz.quiz.questions[newQuestion].answers.filter((fAnswer) => fAnswer.answer === answerChoice)[0];
       if (chosenAnswerId === rightAnswer.answer){
           score++
       } else {
        counter--
       }   
    });
    $('#answer1').click(function () {
        var answerChoice = $('#answer1').val();
        var chosenAnswerId = quiz.quiz.questions[currentQuestion].answers.filter((fAnswer) => fAnswer.answer === answerChoice)[0];
       if (chosenAnswerId === rightAnswer.answer){
           score++
       } else {
        counter--
       }   
    });
    $('#answer2').click(function () {
        var answerChoice = $('#answer0').val();
        var chosenAnswerId = quiz.quiz.questions[currentQuestion].answers.filter((fAnswer) => fAnswer.answer === answerChoice)[0];
       if (chosenAnswerId === rightAnswer.answer){
           score++
       } else {
        counter--
       }   
    });
    $('#answer3').click(function () {
        var answerChoice = $('#answer1').val();
        var chosenAnswerId = quiz.quiz.questions[currentQuestion].answers.filter((fAnswer) => fAnswer.answer === answerChoice)[0];
       if (chosenAnswerId === rightAnswer.answer){
           score++
       } else {
           counter--
       }   
    });
    console.log(score)
    function counter(){
        var n=$('.counter').attr('id');
        var c=n;
        $('.counter').text(c);
        setInterval(function(){
            c--;
            if(c>=0){
                $('.counter').text(c);
            }
            if(c==0){
                $('.counter').text(n);
            }
        },1000);
    }
  });
 




