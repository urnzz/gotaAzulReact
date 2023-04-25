import React from 'react';
import './About.css'; // You may need to create and import a CSS file for this component

function About() {
  return (
    <div className="about-section">
      <div className="hero" id="sobre">
      <div class="custom-shape-divider-top-1668284390"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path></svg></div>
      <div class="container">
        <h1>sobre<span> nós</span></h1>
        <p>Somos uma escola de natação e hidroginástica empenhada em realizar o melhor atendimento para nossos clientes. 
Focados em qualidade de saúde e eficiência no bem estar.
Estamos no ramo há 15 anos com a Professora Simone Pereira dos Reis, formada e renomada entre seus alunos!</p>
      </div>
      <div id="beneficios" class="custom-shape-divider-bottom-16682839699"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path></svg></div>
     </div>
    </div>
  );
}

export default About;
