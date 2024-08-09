const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de ler um artigo sobre a crescente ameaça da mudança climática. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Fico preocupado com o futuro do planeta.",
                afirmacao: "afirmação"
            },
            {
                texto: "Acredito que ainda podemos reverter a situação.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Na escola, o professor de ciências propõe uma atividade para criar um projeto que ajude a reduzir o desperdício de água na comunidade. Como você decide contribuir?",
        alternativas: [
            {
                texto: "Sugiro instalar sensores de vazamento de água nas casas para reduzir o desperdício.",
                afirmacao: "afirmação"
            },
            {
                texto: "Proponho uma campanha de conscientização para incentivar o uso responsável da água.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após apresentar seu projeto, o professor abre uma discussão sobre o impacto do desmatamento nas mudanças climáticas. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Acredito que precisamos de mais áreas protegidas e reflorestamento para combater o desmatamento.",
                afirmacao: "afirmação"
            },
            {
                texto: "Defendo que devemos encontrar um equilíbrio entre desenvolvimento econômico e preservação ambiental.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Para finalizar o projeto, seu grupo deve criar uma campanha visual para promover práticas sustentáveis na escola. O que você sugere?",
        alternativas: [
            {
                texto: "Criar cartazes usando materiais reciclados e distribuí-los pela escola.",
                afirmacao: "afirmação"
            },
            {
                texto: "Produzir um vídeo educativo utilizando animação digital para explicar os benefícios da sustentabilidade.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O grupo de trabalho está discutindo sobre o uso de energia renovável e um colega sugere que cada casa deve ter painéis solares, mas o custo é um problema. Como você responde?",
        alternativas: [
            {
                texto: "Concordo que é caro, mas acho que o investimento a longo prazo vale a pena.",
                afirmacao: "afirmação"
            },
            {
                texto: "Sugiro procurar alternativas mais acessíveis, como programas de incentivo governamental.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
