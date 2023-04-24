import React from 'react';
import './index.css';

const Footer = () => {
  return (
     <footer>
  <div className="footer1">
    <div className="column25" id="aa"><h1>Serviços</h1><p>Natação</p><p>Hidroginástica</p></div>
    <div className="column25" id="bb"><h1>Contatos</h1>
      <div className="contatos">
      <p>gotaazulescola@gmail.com</p>
      <p>(17)98129-1322</p>
      </div>
   </div>
<div class="column25" id="cc">
      <h1>Social Links</h1>
        <div class="social-icons">

          <a href="https://pt-br.facebook.com/GotaAzulbarretos/" title="facebook">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
          </a> 
          <a href="https://www.instagram.com/gotaazulbarretos/" title="instagram">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5517988218741&amp;text=Tenho+interesse+nas+aulas%2C+poderia+me+passar+mais+informações%3F&amp;type=phone_number&amp;app_absent=0" title="instagram">
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </a>

        </div>   
    </div>
    <div className="clearfix"></div>
    <div style={{textAlign: "center"}}>
      <p style={{ color:'white', marginTop:'20px'}}>Gota Azul - Escola de Natação e Hidroginástica. COPYRIGHT Ⓡ 2022.</p>
    </div> 
  </div>
  </footer>
  );
};

export default Footer;
