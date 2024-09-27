import { useState } from 'react';

const perguntas = [
  {
    pergunta: "O que é responsividade?",
    opcoes: [
      "A capacidade de se adaptar a diferentes dispositivos.",
      "A rapidez com que um site carrega.",
      "A quantidade de usuários que acessam um site.",
      "A velocidade da internet do usuário."
    ],
    respostaCorreta: 0,
    explicacao: "Alternativa correta: A. Responsividade é a capacidade de um site se adaptar a diferentes resoluções de tela."
  },
  {
    pergunta: "O que é Mobile-First?",
    opcoes: [
      "Criar aplicativos exclusivamente para celulares.",
      "Desenvolver a versão mobile de um site antes da versão desktop.",
      "Focar apenas em mobile marketing.",
      "Ignorar os usuários de desktop."
    ],
    respostaCorreta: 1,
    explicacao: "Alternativa correta: B. Mobile-First é a prática de desenhar e desenvolver pensando primeiro na versão mobile."
  },
  {
    pergunta: "O que é usabilidade?",
    opcoes: [
      "A qualidade que mede quão fácil é usar um sistema.",
      "A taxa de conversão de um site.",
      "O tempo de carregamento de uma página.",
      "O número de acessos diários."
    ],
    respostaCorreta: 0,
    explicacao: "Alternativa correta: A. Usabilidade refere-se à facilidade com que os usuários podem utilizar uma interface."
  },
  {
    pergunta: "Qual é a principal vantagem de usar o design responsivo?",
    opcoes: [
      "Melhorar a velocidade do site.",
      "Tornar o site mais acessível em diferentes dispositivos.",
      "Aumentar o número de visitas no site.",
      "Facilitar a edição do conteúdo."
    ],
    respostaCorreta: 1,
    explicacao: "Alternativa correta: B. A responsividade garante que o site funcione bem em diferentes dispositivos, como desktops, tablets e smartphones."
  },
  {
    pergunta: "O que é grid layout?",
    opcoes: [
      "Uma maneira de organizar o conteúdo em colunas e linhas.",
      "Um framework CSS para acelerar o desenvolvimento.",
      "Um tipo de menu de navegação.",
      "Uma técnica de animação CSS."
    ],
    respostaCorreta: 0,
    explicacao: "Alternativa correta: A. Grid layout é uma técnica CSS para organizar o conteúdo em uma estrutura de linhas e colunas."
  },
  {
    pergunta: "Qual a importância da usabilidade em um site?",
    opcoes: [
      "Aumenta o tráfego no site.",
      "Facilita a navegação para o usuário, tornando o site mais eficiente.",
      "Reduz o tempo de carregamento da página.",
      "Aumenta as vendas de produtos."
    ],
    respostaCorreta: 1,
    explicacao: "Alternativa correta: B. Uma boa usabilidade permite que o usuário navegue facilmente, aumentando sua satisfação."
  },
  {
    pergunta: "Qual tecnologia é frequentemente usada para criar layouts responsivos?",
    opcoes: [
      "JavaScript.",
      "PHP.",
      "CSS Flexbox.",
      "SQL."
    ],
    respostaCorreta: 2,
    explicacao: "Alternativa correta: C. CSS Flexbox é muito utilizado para criar layouts flexíveis e responsivos."
  },
  {
    pergunta: "O que significa o termo 'viewport' no design responsivo?",
    opcoes: [
      "O espaço visível do site em um dispositivo.",
      "A altura total da página web.",
      "A largura da tela do dispositivo.",
      "A resolução do site."
    ],
    respostaCorreta: 0,
    explicacao: "Alternativa correta: A. Viewport é o espaço visível de um site no dispositivo que o usuário está utilizando."
  },
  {
    pergunta: "Qual é uma boa prática para melhorar a usabilidade?",
    opcoes: [
      "Usar botões pequenos para economizar espaço.",
      "Reduzir a quantidade de texto nas páginas.",
      "Certificar-se de que as informações importantes estejam facilmente acessíveis.",
      "Usar imagens grandes para chamar a atenção."
    ],
    respostaCorreta: 2,
    explicacao: "Alternativa correta: C. Tornar as informações importantes fáceis de encontrar melhora a usabilidade do site."
  },
  {
    pergunta: "Por que o Mobile-First é importante no design web?",
    opcoes: [
      "A maioria dos usuários agora acessa a internet por dispositivos móveis.",
      "Porque os navegadores móveis são mais rápidos.",
      "Porque é mais barato desenvolver para mobile.",
      "A internet móvel tem maior largura de banda."
    ],
    respostaCorreta: 0,
    explicacao: "Alternativa correta: A. Mobile-First é importante porque a maioria dos acessos à internet hoje ocorre em dispositivos móveis."
  }
];

const Quiz = () => {
  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const selecionarOpcao = (indice) => {
    if (!mostrarResposta) {
      setOpcaoSelecionada(indice);
    }
  };

  const confirmarResposta = () => {
    if (opcaoSelecionada === null) return;
    if (opcaoSelecionada === perguntas[indicePerguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    setMostrarResposta(true);
  };

  const proximaPergunta = () => {
    setMostrarResposta(false);
    setOpcaoSelecionada(null);
    if (indicePerguntaAtual < perguntas.length - 1) {
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciarQuiz = () => {
    setMostrarResultado(false);
    setIndicePerguntaAtual(0);
    setPontuacao(0);
    setOpcaoSelecionada(null);
    setMostrarResposta(false);
  };

  const obterLetra = (indice) => {
    return String.fromCharCode(65 + indice);
  };

  const porcentagemAcertos = Math.round((pontuacao / perguntas.length) * 100);
  const porcentagemErros = 100 - porcentagemAcertos;

  if (mostrarResultado) {
    return (
      <div className="resultado-container">
        <h2>Resultado Final</h2>
        <p className="relacao">Você acertou {pontuacao}/{perguntas.length} questões.</p>
        <p>Acertos: {porcentagemAcertos}%</p>
        <p>Erros: {porcentagemErros}%</p>
        <button className="reiniciar" onClick={reiniciarQuiz}>Refazer Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="pergunta">{perguntas[indicePerguntaAtual].pergunta}</h1>
      <p className="contador">
        {indicePerguntaAtual + 1}/{perguntas.length}
      </p>
      <ul className="opcoes">
        {perguntas[indicePerguntaAtual].opcoes.map((opcao, indice) => (
          <li
            key={indice}
            className={`opcao ${
              opcaoSelecionada === indice && !mostrarResposta ? 'selecionada' : ''
            } ${
              mostrarResposta
                ? indice === perguntas[indicePerguntaAtual].respostaCorreta
                  ? 'correta'
                  : opcaoSelecionada === indice
                  ? 'incorreta'
                  : ''
                : ''
            }`}
            onClick={() => selecionarOpcao(indice)}
          >
            {obterLetra(indice)}. {opcao}
          </li>
        ))}
      </ul>
      {mostrarResposta ? (
        <div>
          <p className="explicacao">
            {perguntas[indicePerguntaAtual].explicacao}
          </p>
          {indicePerguntaAtual < perguntas.length - 1 ? (
            <button className="proxima" onClick={proximaPergunta}>
              Próxima questão
            </button>
          ) : (
            <button className="ver-resultado" onClick={proximaPergunta}>
              Ver resultado
            </button>
          )}
        </div>
      ) : (
        <button className="confirmar" onClick={confirmarResposta}>Confirmar</button>
      )}
    </div>
  );
};

export default Quiz;