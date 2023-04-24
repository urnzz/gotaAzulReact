import React from 'react';
import './index.css'; // You may need to create and import a CSS file for this component

function FAQ() {
  return (
    <div className="faq-section">
      <div id="duvidas" style={{ backgroundColor: '#244d61' }}>
        <h1 id="tituDuv" align="center" style={{ color : "white" }}>Dúvidas frequentes</h1>
    <div class="c">
      <input  type="checkbox" id="faq-1"></input>
      <h3><label for="faq-1">Onde está localizado a escola?</label></h3>
      <div class="p">
        <p>Você pode encontrar nossa escola neste mesmo site ou até mesmo pesquisando no Google "Gota Azul"</p>
      </div> 
    </div>
    <div class="c">

      <input type="checkbox" id="faq-2"></input>
      <h3><label for="faq-2">Qual a idade recomendada para aulas infatil?</label></h3>
      <div class="p">
        <p>Recomendamos crianças a partir de 4 anos de idade, há mais facilidade de lecionar e contém uma altura considerável para
        a piscina!</p>
      </div>

    </div>
    <div class="c">
    
      <input type="checkbox" id="faq-3"></input>
      <h3><label for="faq-3">Qual a idade recomendada para Hidroginástica?</label></h3>
      <div class="p">
        <p>Não há restrição de idade, porém recomendamos ter capacidade de movimentação o suficiente para as aulas.</p>
      </div>
    
    </div>
    <div class="c">
    
      <input type="checkbox" id="faq-4"></input>
      <h3><label for="faq-4">Quais as formas de pagamento aceita no local?</label></h3>
      <div class="p">
        <p>No momento trabalhamos com pix e dinheiro, logo estaremos trabalhando com cartão.</p>
      </div>
    
    </div>
    <div class="c">
      <input type="checkbox" id="faq-5"></input>
      <h3><label for="faq-5">Posso fazer uma aula experimental?</label></h3>
      <div class="p">
        <p>Claro! É só entrar em contato antecipadamente informando sua preferência de horário que combinaremos um dia.</p>
      </div>
    </div>
    
    </div>
    </div>

  );
}

export default FAQ;
