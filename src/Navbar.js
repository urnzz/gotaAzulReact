import React, { useEffect } from 'react';
import './index.css';

function Navbar() {
  useEffect(() => {
    const nav = document.querySelector('.topnav');

    const fixNav = () => {
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    };

    const handleResize = () => {
      ham();
    };

    window.addEventListener('scroll', fixNav);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', fixNav);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function ham() {
    var x = document.getElementById('myLinks');
    if (window.innerWidth >= 768) {
      x.style.display = 'flex';
      document.querySelector('.topnav').style.height = '80px';
    } else if (x.style.display === 'flex') {
      x.style.display = 'none';
      document.querySelector('.topnav').style.height = '80px';
    } else {
      x.style.display = 'flex';
      document.querySelector('.topnav').style.height = '150px';
      x.style.fontSize = '12px';
    }
  }

  return (
    <nav className="topnav" id="topnav">
      {/* ... */}
         <a style={{ float: 'left', fontSize: '30px' }} href="./index.html">
        Gota<span>Azul</span>
      </a>
      <div id="myLinks">
        <a href="index.html" className="current">
          Início
        </a>
        <a href="#beneficios">Benefícios</a>
        <a href="#sobre">Quem somos?</a>
        <a href="#duvidas">Dúvidas frequentes</a>
        <a href="#maps">Localização</a>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={ham}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
}

export default Navbar;
