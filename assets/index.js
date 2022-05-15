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
        question:"Is c++ a low-level language",
        a:"True",
        b:"False",
        c:"none",
        correct:"True",
    }
];
const questionElm = document.querySelector('question');
 const aElm = document.querySelector('label[for="a"]');
 const bElm = document.querySelector('label[for="b"]');
 const cElm = document.querySelector('label[for="c"]');
 const dElm = document.querySelector('label[for="d"]');

 const submitbtn = document.querySelector  ("submitBtn");
 const answers =document.querySelectorAll('input[name="answer"]');

 let quizCount =0;
 let score =0;


 const loadQuiz = () => {
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
 submitBtn.addEventListener("click",()