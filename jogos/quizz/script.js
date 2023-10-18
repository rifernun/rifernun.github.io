window.alert("Bem vindo ao Quizz");
window.alert("Acerte a alternativa para ganhar!!!");
window.alert("Boa sorte");

const questaos = [
    {
        questao: "Qual Heroi é mulher?",
        resposta: [
            {texto: "Pantera Negra", correto: false},
            {texto: "Viúva Negra", correto: true},
            {texto: "Homem Aranha", correto: false},
            {texto: "Flash", correto: false},
        ]
    },
    {
        questao: "Qual heroí solta teia?",
        resposta: [
            {texto: "Pantera Negra", correto: false},
            {texto: "Viúva Negra", correto: false},
            {texto: "Flash", correto: false},
            {texto: "Homem Aranha", correto: true},
        ]
    },
    {
        questao: "Qual heroí não é da MARVEL?",
        resposta: [
            {texto: "Capitã Marvel", correto: false},
            {texto: "Hulk", correto: false},
            {texto: "Capitão Pátria", correto: true},
            {texto: "Magneto", correto: false},
        ]
    },
    {
        questao: "Qual heroí teve seus pais brutalmente assassinados?",
        resposta: [
            {texto: "Flash", correto: false},
            {texto: "The Rock", correto: false},
            {texto: "Batman", correto: true},
            {texto: "Donald Trump", correto: false},
        ]
    },
    {
        questao: "Quando foi lançado a primeira revista em quadrinhos da dc?",
        resposta: [
            {texto: "28 de Fevereiro de 1856", correto: false},
            {texto: "18 de Abril de 1938", correto: true},
            {texto: "16 de Agosto de 2000", correto: false},
            {texto: "06 de Janeiro de 1952", correto: false},
        ]
    },
];

const questaoelement = document.getElementById("questao");
const answerbotaos = document.getElementById("answer-buttons");
const nextbotao = document.getElementById("next-btn");

let questaoatualindex = 0;
let score = 0;

function startQuiz()
{
    questaoatualindex = 0;
    score = 0;
    nextbotao.innerHTML = "Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion = questaos[questaoatualindex];
    let questionNo = questaoatualindex + 1;
    questaoelement.innerHTML = questionNo + ". " + currentQuestion.questao;

    currentQuestion.resposta.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.texto;
        button.classList.add("btn");
        answerbotaos.appendChild(button);
        if(resposta.correto)
        {
            button.dataset.correto = resposta.correto
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState()
{
    nextbotao.style.display = "none";
    while(answerbotaos.firstChild){
        answerbotaos.removeChild(answerbotaos.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correto === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbotaos.children).forEach(button => {
        if(button.dataset.correto === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbotao.style.display = "block";
}

function showScore()
{
    resetState();
    questaoelement.innerHTML = `Você acertou ${score} de ${questaos.length} perguntas!`;
    nextbotao.innerHTML = "Jogar novamente";
    nextbotao.style.display = "block";
}

function handleNextButton()
{
    questaoatualindex++;
    if(questaoatualindex < questaos.length){
        showQuestion();
    }else
    {
        showScore();
    }
}

nextbotao.addEventListener("click", ()=>{
    if(questaoatualindex < questaos.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();