import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import AuthContext from '../../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // directly use these values from context instead of creating a local state
  const { username, isAuthenticated, setUsername, setIsAuthenticated } = useContext(AuthContext);
   
  const checkUserAuthentication = () => {
    const token = localStorage.getItem('userToken');
    return token !== null;
  };

  const fetchUsername = () => {
    return localStorage.getItem('username');
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username'); // also remove the username from local storage
    setIsAuthenticated(false);
    setUsername(null);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  const isHomePage = location.pathname === '/';
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
    <nav className={`topnav ${isHomePage ? 'home-page' : ''}`} id="topnav">
      <a style={{ float: 'left', fontSize: '30px' }} href="/">Gota<span>Azul</span></a>
      <div id="myLinks">
        <a href="/gotaAzulR" className={`link-item ${isHomePage ? 'current' : ''}`}>Início</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#sobre">Quem somos?</a>
        <a href="#duvidas">Dúvidas frequentes</a>
        <a href="#maps">Localização</a>
        {isAuthenticated ? (
          <>
            <a className="username">{username}</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (<div>
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="register-button" onClick={handleRegister}>Register</button></div>
        )}
      </div>
      <a href="javascript:void(0);" className="icon" onClick={ham}><i className="fa fa-bars"></i></a>
    </nav>
  );
}

export default Navbar;
