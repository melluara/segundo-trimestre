const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que o planeta está enfrentando uma crise ambiental grave e precisa tomar uma decisão importante. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é preocupante e precisamos agir imediatamente!",
                afirmacao: "Você decidiu se envolver em projetos e iniciativas para ajudar o meio ambiente."
            },
            {
                texto: "É uma situação difícil, mas talvez possamos encontrar soluções tecnológicas.",
                afirmacao: "Você começou a pesquisar e apoiar o desenvolvimento de novas tecnologias para mitigar os impactos ambientais."
            }
        ]
    },
    {
        enunciado: "Com o avanço das tecnologias sustentáveis, uma escola oferece um curso sobre como utilizar essas tecnologias para preservar o planeta. O que você faz?",
        alternativas: [
            {
                texto: "Participa ativamente do curso para aprender e implementar soluções sustentáveis.",
                afirmacao: "Você se torna um defensor de práticas ecológicas e ajuda a educar outros sobre a importância da sustentabilidade."
            },
            {
                texto: "Opta por buscar informações por conta própria e aplicar essas tecnologias em seus projetos pessoais.",
                afirmacao: "Você consegue aplicar as tecnologias sustentáveis em suas atividades diárias e inspira outros a fazer o mesmo."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre o futuro do planeta, o impacto das ações humanas é discutido. Qual é a sua opinião sobre a responsabilidade individual na proteção ambiental?",
        alternativas: [
            {
                texto: "Acredito que cada pessoa tem um papel crucial em preservar o planeta e deve adotar práticas sustentáveis.",
                afirmacao: "Você participa de campanhas de conscientização e promove a mudança de comportamento em sua comunidade."
            },
            {
                texto: "A responsabilidade é principalmente das grandes empresas e governos, e eles devem liderar as ações.",
                afirmacao: "Você se engaja em iniciativas que pressionam as instituições a tomar medidas mais eficazes para proteger o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma campanha para sensibilizar as pessoas sobre a importância da preservação ambiental. Como você procede?",
        alternativas: [
            {
                texto: "Cria materiais educativos usando plataformas digitais e redes sociais para alcançar um público amplo.",
                afirmacao: "Sua campanha foi bem-sucedida em aumentar a conscientização e engajar pessoas na preservação ambiental."
            },
            {
                texto: "Organiza eventos locais e workshops para educar diretamente a comunidade sobre práticas sustentáveis.",
                afirmacao: "Os eventos ajudaram a promover mudanças de comportamento em nível local e fortaleceram o compromisso com o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Você está colaborando em um projeto de recuperação de áreas degradadas e enfrenta dificuldades. O que faz?",
        alternativas: [
            {
                texto: "Utiliza tecnologias avançadas para monitorar e acelerar a recuperação das áreas.",
                afirmacao: "Você consegue superar as dificuldades e melhorar os resultados do projeto com a ajuda da tecnologia."
            },
            {
                texto: "Trabalha em conjunto com a comunidade para buscar soluções práticas e sustentáveis.",
                afirmacao: "A colaboração com a comunidade trouxe novas ideias e soluções eficazes para o projeto de recuperação."
            }
        ]
    },
    {
        enunciado: "Seu grupo de estudo está finalizando um relatório sobre o futuro do planeta. Descobre que uma parte do relatório foi copiada de uma fonte sem revisão. O que você faz?",
        alternativas: [
            {
                texto: "Decide aceitar o relatório como está, pois o importante é o conteúdo final.",
                afirmacao: "Você percebeu que isso afetou a qualidade do trabalho e decidiu não mais depender apenas de fontes externas."
            },
            {
                texto: "Revisa o relatório cuidadosamente e faz as correções necessárias para garantir a integridade do trabalho.",
                afirmacao: "Você aprendeu a importância de verificar e validar as informações antes de apresentar um trabalho final."
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
