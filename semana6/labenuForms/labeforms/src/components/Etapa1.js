import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={'1. Qual o seu nome?'} />
        <PerguntaAberta pergunta={'2. Qual sua idade?'}/>
        <PerguntaAberta pergunta={'3. Qual seu email?'}/>
        <PerguntaOpcoes
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
          "Ensino Medio Incompleto",
          'Ensino Medio COmpleto',
          'Ensino Superior Incompleto',
          'Ensino Superior Completo',
        ]}
        />
      </div>
    );
  }
}

export default Etapa1;