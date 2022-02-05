const QUIZ_DATA = [
  {
    question: 'How old are you?',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'c'
  },
  {
    question: 'What is the best programming language?',
    a: 'Python',
    b: 'Java',
    c: 'Javascript',
    d: 'C',
    correct: 'b'
  },
  {
    question: 'who is the president of Brazil?',
    a: 'Lula',
    b: 'Bolsonaro',
    c: 'Dilma',
    d: 'Temer',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programing interface',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d:'none of the above',
    correct: 'b'
  }
]




const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();


function loadQuiz() {
  const currentQuizData = QUIZ_DATA[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  
}

submitButton.addEventListener("click", ()=> {
  currentQuiz++;
  if(currentQuiz<QUIZ_DATA.length){
    loadQuiz();
  } else {
    alert('You finished');
  }
})