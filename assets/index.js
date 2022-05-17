const quiz =[
    {
        question:"What is shortform of Hypertext Markup Language",
        a:"HTML",
        b:"HTMLT",
        c:"MLHT",
        
        correct:"HTML",
    },
    {
        question:"What is the other name for Javascript",
        a:"ECMAscript",
        b:"JS",
        c:"none",
        Correct:"Js",
    },
    {
        question:"Is c++ a low-level language",
        a:"True",
        b:"False",
        c:"none",
        correct:"True",
    },
    {
        question:"Which one is not an html tag",
        a:"h1 ",
        b:"body",
        c:"document.write",
        correct:"document.write",
    }
];
const questionElm = document.querySelector('question');
 const aElm = document.querySelector('label[for="a"]');
 const bElm = document.querySelector('label[for="b"]');
 const cElm = document.querySelector('label[for="c"]');
 const dElm = document.querySelector('label[for="d"]');

 const submitbtn = document.querySelector  ("submitBtn");
 const answers =document.querySelectorAll('input[name="answer"]');
 const questElm = document.querySelector  ("quest");

 let quizCount =0;
 let score =0;


 const loadQuiz = function()  {
    deselectAnswer();
     let currQuiz =quiz[quizCount];
    
     question.innerHTML =currQuiz.question;
     aElm.innerHTML =currQuiz.a;
     bElm.innerHTML =currQuiz.b;
     cElm.innerHTML =currQuiz.c;
     dElm.innerHTML =currQuiz.d;
};
const getSelectedAnswer =() => {
     
    let selectAnswer = false;

    answers.forEach(elm =>{
        if(elm.checked){
          selectAnswer =elm.id;
        }
    });
    return selectAnswer;
};
const deselectAnswer = () =>{
    answers.forEach(elm =>{
    elm.checked =false;
        
    });
       
 }
 submitBtn.addEventListener("click",() => {
    
   
    let selectAnswer= getSelectedAnswer();
    if(quizCount < quiz.length-1){
        if(selectAnswer){ 
          if(selectAnswer === quiz[quizCount].correct){
              score++;
          }
          quizCount++;
          loadQuiz();
        }
    }else{
    alert( score);
    }    
});
 loadQuiz();