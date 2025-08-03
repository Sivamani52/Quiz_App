const quizData = [
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She don't likes apples."
    ],
    answer: "She doesn't like apples."
  }
  // {
  //   question: "Choose the correct form of the verb: 'He ____ to school every day.'",
  //   options: [
  //     "go",
  //     "goes",
  //     "gone",
  //     "going"
  //   ],
  //   answer: "goes"
  // },
  // {
  //   question: "What is the past tense of 'write'?",
  //   options: [
  //     "writed",
  //     "wrote",
  //     "written",
  //     "writing"
  //   ],
  //   answer: "wrote"
  // },
  // {
  //   question: "Identify The Adjective: 'The quick brown fox jumps over the lazy dog.'",
  //   options: [
  //     "fox",
  //     "jumps",
  //     "quick",
  //     "dog"
  //   ],
  //   answer: "quick"
  // },
  // {
  //   question: "Which is a correct question tag? 'She is coming, ____?'",
  //   options: [
  //     "isn't she",
  //     "doesn't she",
  //     "won't she",
  //     "didn't she"
  //   ],
  //   answer: "isn't she"
  // },
  // {
  //   question: "What type of word is 'happily'?",
  //   options: [
  //     "Adjective",
  //     "Verb",
  //     "Noun",
  //     "Adverb"
  //   ],
  //   answer: "Adverb"
  // },
  // {
  //   question: "Which of these is a preposition?",
  //   options: [
  //     "beautiful",
  //     "under",
  //     "quickly",
  //     "jump"
  //   ],
  //   answer: "under"
  // },
  // {
  //   question: "Choose the correct article: 'He bought ___ umbrella.'",
  //   options: [
  //     "a",
  //     "an",
  //     "the",
  //     "no article needed"
  //   ],
  //   answer: "an"
  // },
  // {
  //   question: "Select the correct plural form: 'Child'",
  //   options: [
  //     "Childs",
  //     "Childes",
  //     "Children",
  //     "Childrens"
  //   ],
  //   answer: "Children"
  // },
  // {
  //   question: "What is the correct form of this sentence? 'He can sings well.'",
  //   options: [
  //     "He can sing well.",
  //     "He can sang well.",
  //     "He can sung well.",
  //     "He cans sing well."
  //   ],
  //   answer: "He can sing well."
  // }
];



var currentque=0;
var score=0;

Displayque();

function Displayque()
{
    const questions=document.querySelector(".question");
    const optionsEl=document.querySelector(".options");
    
     questions.textContent=quizData[currentque].question;

     optionsEl.textContent="";

     quizData[currentque].options.forEach(option => {

        const btn=document.createElement("button");
        btn.className="optionss";
        btn.innerHTML=option;
        btn.onclick= ()=> checkanswer(option);
       optionsEl.appendChild(btn);

       


        
     });
}

     function checkanswer(selector)
     {
            if(selector == quizData[currentque].answer)
            {
                score++;
                alert("Correct ✅");
                
                document.querySelector(".score").textContent=`score: ${score}`;
            }
            else
            {
                alert(`Wrong ❌  \n  \n Answer: ${quizData[currentque].answer}`);
            }
     

        currentque++;
        if(currentque < quizData.length)
        {   console.log("work");
            Displayque();
        }
        else
        {
            document.querySelector(".quiz-box").innerHTML="";
             
        
           document.querySelector(".list").innerHTML=` <h3>Quiz Over</h3><p>Your Score: ${score}/${quizData.length}</p>`;
        }

     }

function NextFun()
{
    alert("plz select one option");
}

