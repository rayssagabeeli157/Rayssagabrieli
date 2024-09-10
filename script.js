const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "eu e minhas amigas vamos na avenida tomar sorvete",
        alternativas: [
            {
                texto: "voce gosta de sorvete",
                afirmacao: "sim amiga"
            },
            {
                texto: "voce gosta de qual sabor",
                afirmacao: "amo sorvete de morango"
            }
        ]
    },
    {
        enunciado: "voce prefere na sorveteria na gbom ou no mcdanoud",
        alternativas: [
            {
                texto: "pode ser no mc.",
                afirmacao: "la emuito bom"
            },
            {
                texto: "voce vai quere algum adicional",
                afirmacao: "sim"
            }
        ]
    },
    {
        enunciado: "pode ser com chocobol e mm",
        alternativas: [
           {  
                texto: "ok vou pedir",
                afirmacao: "tabom"
            },
            {
                texto: "o sorvte ja esta pronto.",
                afirmacao: "obrida amiga"
            }
        ]
    },
    {
        enunciado: "vamos comer logo",
        alternativas: [
            {
                texto: "amiga voce pegou de que",
                afirmacao: "chocolate"
            },
            {
                texto: "vamos dar uma volta enquanto comemos",
                afirmacao: "ok"
            }
        ]
    },
    {
        enunciado: "amiga voce viu quem vei opra ca",
        alternativas: [
            {
                texto: "nao quem",
                afirmacao: "ta bom"
            },
            {
                texto: "nossa que sorveteruim ",
                afirmacao: "samiga"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();