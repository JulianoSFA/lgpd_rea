import { useState } from "react";
import React from "react";

export const Form = (props) => {
  const questions = [
    {
      question: 'Com a LGPD, como fica a lista de contatos que foi coletada pela minha empresa?',
      answers: ['Deve ser excluída imediatamente.', 'Precisa ser revisada para garantir o consentimento adequado.', 'Pode ser mantida sem alterações.', ],
      correctAnswer: 'Precisa ser revisada para garantir o consentimento adequado.'
    },
    {
      question: 'Mas e se a minha lista de contatos veio de terceiros, posso utilizá-la mesmo assim?',
      answers: ['Depende do consentimento obtido dos titulares dos dados.', 'Sim, pode ser usada sem restrições.', 'Não, a LGPD proíbe o uso de listas de terceiros.'],
      correctAnswer: 'Depende do consentimento obtido dos titulares dos dados.'
    },
    {
      question: 'Como fica a questão do relacionamento com outras empresas parceiras tendo em vista a LGPD?',
      answers: ['A LGPD não se aplica a relacionamentos com outras empresas.', 'As empresas parceiras devem seguir as mesmas regras da LGPD.', 'A LGPD não aborda essa questão.'],
      correctAnswer: 'As empresas parceiras devem seguir as mesmas regras da LGPD.'
    },
    {
      question: 'Posso vender uma base de dados pessoais para outras empresas?',
      answers: ['Sim, desde que os dados sejam anonimizados.', 'Não, a venda de dados pessoais é proibida pela LGPD.', 'Apenas se a empresa compradora concordar com os termos.'],
      correctAnswer: 'Não, a venda de dados pessoais é proibida pela LGPD.'
    },
    {
      question: 'Uma empresa de porte pequeno ou um MEI precisa se adequar à LGPD também?',
      answers: ['Não, a LGPD se aplica apenas a grandes empresas.', 'Sim, todas as empresas, independentemente do tamanho, devem se adequar.', 'Apenas se a empresa lida com dados sensíveis.'],
      correctAnswer: 'Sim, todas as empresas, independentemente do tamanho, devem se adequar.'
    },
    {
      question: 'O que são cookies em relação à privacidade de dados?',
      answers: ['São deliciosos biscoitos de chocolate.', 'São pequenos arquivos de texto que os sites armazenam no dispositivo do usuário.', 'São senhas criptografadas para autenticação.'],
      correctAnswer: 'São pequenos arquivos de texto que os sites armazenam no dispositivo do usuário.'
    },
    {
      question: 'Qual é a função dos cookies necessários em um site ou aplicação?',
      answers: ['Realizar funções básicas e garantir o funcionamento correto do site.', 'Armazenar preferências de idioma.', 'Rastrear atividades do usuário na internet.'],
      correctAnswer: 'Realizar funções básicas e garantir o funcionamento correto do site.'
    },
    {
      question: 'O que são cookies de terceiros e por que são relevantes para a LGPD?',
      answers: ['São biscoitos vendidos por empresas de terceiros.', 'São cookies que só funcionam em navegadores de terceiros.', 'São cookies colocados por domínios diferentes do site visitado e podem rastrear o usuário.'],
      correctAnswer: 'São cookies colocados por domínios diferentes do site visitado e podem rastrear o usuário.'
    },
    {
      question: 'Como uma empresa deve armazenar senhas de usuários de forma segura?',
      answers: ['Em um arquivo de texto simples.', 'Criptografando-as adequadamente.', 'Compartilhando-as com outros funcionários.'],
      correctAnswer: 'Criptografando-as adequadamente.'
    },
    {
      question: 'Se um usuário solicitar a exclusão de sua conta, como a empresa deve proceder?',
      answers: ['Ignorar o pedido.', 'Excluir imediatamente todos os dados do usuário.', 'Pedir ao usuário para reconsiderar.'],
      correctAnswer: 'Excluir imediatamente todos os dados do usuário.'
    }
  ];
  
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerOptionClick = (questionIndex, answer) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionIndex]: answer
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }

    alert(`Você acertou ${score} de ${questions.length} perguntas.`);
    cleanForm();
  };

  const cleanForm = () => {
    setSelectedAnswers({});
    window.location.reload();
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="section-title mb-2">
                <h2>Você Aprendeu?</h2>
                <p>
                  Teste os seus conhecimento sobre a LGPD
                </p>
              </div>
              <form>
              { questions.map((question, index) => {
                return (
                  <>
                    <div>            
                      <h4 style={{"font-size": "1.5rem", "color": "white"}}>PERGUNTA { index + 1 }</h4>
                    </div>
                    <div style={{"font-size": "1.25rem"}} className="pb-2">{question.question}</div>

                    <div className="d-flex flex-column pb-5">
                      {question.answers.map((answer, answerIndex) => (
                        <div key={`answer${index}`} className="d-flex align-items-center py-1">
                          <input 
                            className="col-1" 
                            type="radio" 
                            id={`answer${index}${answerIndex}`} 
                            name={`answer${index}`}
                            value={answer}
                            style={{height: "1rem"}}
                            onChange={() => handleAnswerOptionClick(index, answer)}
                          />
                          <label 
                            className="col-11" 
                            style={{"font-size": "1rem"}} 
                            htmlFor={`answer${index}${answerIndex}`}
                          >
                            {`${ String.fromCharCode(97 + answerIndex)}) ${answer}`}
                          </label>
                        </div>
                      ))}
                    </div>
                  </>
                )})
              }
              </form>
              <button 
                className="btn btn-custom btn-lg page-scroll"
                onClick={submitForm}
              >Finalizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
