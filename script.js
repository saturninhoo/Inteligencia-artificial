const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha agricultura importante para a economia?"
        alternativas: [
            {
                texto: "sim",
                afirmacao: "a agricultura é importante para a economia por ser uma dos principais formas de sustentaçãodo país com sua exportação de soja e outros plantios"
            },
            {
                texto: "não",
                afirmacao: "com a mudança climatica sendo muito forte pode acontecer de se perder todo cultivo e com isso perder os inventimentos na lavoura"

            ]

},

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
