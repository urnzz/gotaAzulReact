import React from 'react';
import './index.css';

const Content = () => {
  return (
    <div>
    <section className="container content" id="c1">
      <div className="column">
        <h1 style={{ marginTop: '40px' }}>Aulas de Natação</h1>
        <div style={{ marginBottom: '40px' }}>
          <p>
            A natação é um esporte que melhora a força, tonifica os músculos e trabalha todo o corpo, estimula as articulações e
            ligamentos e ajuda no controle de peso e na queima da gordura. A natação é um esporte aeróbico indicado para todas as
            idades, idosos e grávidas por ser um tipo de atividade física com poucos riscos e impacto para o ossos. É recomendado ter aulas de natação de 2 a 3 vezes por semana
          </p>
        </div>
      </div>
      <div className="column">
        <h1 style={{ marginTop: '40px' }}>Aulas de Hidroginástica</h1>
        <div style={{ marginBottom: '40px' }}>
          <p>
            A hidroginástica é uma atividade física em que são combinados exercícios aeróbicos com a natação, o que proporciona
            diversos benefícios para a saúde, como perda de peso, melhora da circulação e fortalecimento
dos músculos. É uma atividade de baixo impacto, sendo excelente para pessoas com problemas nas articulações, idosos e gestantes. As aulas de hidroginástica podem ser realizadas de 2 a 3 vezes por semana, conforme a disponibilidade e necessidades de cada aluno.
</p>
</div>
</div>
</section> 
<div class="clearfix"></div>
</div>
);
};

export default Content;