import React from 'react';
import './Resume.css';

const GotaAzul = () => {
  return (
    <div className="hero1" id="sobre1">
      <div className="column" id="den"></div>
      <div className="column">
        <div style={{ textAlign: 'left', marginLeft: '10px' }}>
          <h1>
            A Gota Azul
            <hr
              id="hr"
              style={{ width: '660px', borderColor: '#75E2FF' }}
            />
          </h1>
          <p>
            Criada em 2005 a Gota Azul veio para você e sua família se
            divertir enquanto cuidam de sua saúde. Nesses mais de 15 anos
            de história optamos sempre pelo melhor atendimento, afinal
            nossos clientes fazem parte da nossa família.
          </p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default GotaAzul;
