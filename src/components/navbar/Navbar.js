import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import AuthContext from '../../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUsername, setIsAuthenticated } = useContext(AuthContext);

  const [userState, setUserState] = useState({username: null, isAuthenticated: false});

  useEffect(() => {
    const userIsAuthenticated = checkUserAuthentication();
    setIsAuthenticated(userIsAuthenticated);
  
    if (userIsAuthenticated) {
      const fetchedUsername = fetchUsername();
      setUsername(fetchedUsername);
      setUserState({username: fetchedUsername, isAuthenticated: userIsAuthenticated});
    }
  }, [setUsername, setIsAuthenticated]);
  

  useEffect(() => {
    setUserState({username: null, isAuthenticated: false});
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
  const checkUserAuthentication = () => {
    const token = localStorage.getItem('userToken');
    return token !== null;
  };


  const fetchUsername = () => {
    return localStorage.getItem('username');
    
  };
  const handleLogout = () => {
    localStorage.removeItem('userToken');

    setIsAuthenticated(false);
    setUsername(null);
    setUserState({username: null, isAuthenticated: false});

    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`topnav ${isHomePage ? 'home-page' : ''}`} id="topnav">
      <a style={{ float: 'left', fontSize: '30px' }} href="/">Gota<span>Azul</span></a>
      <div id="myLinks">
        <a href="/" className={`link-item ${isHomePage ? 'current' : ''}`}>Início</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#sobre">Quem somos?</a>
        <a href="#duvidas">Dúvidas frequentes</a>
        <a href="#maps">Localização</a>
        {userState.isAuthenticated ? (
          <>
            <a className="username">{userState.username}</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="login-button" onClick={handleLogin}>Login</button>
        )}
      </div>
      <a href="javascript:void(0);" className="icon" onClick={ham}><i className="fa fa-bars"></i></a>
    </nav>
  );
}

export default Navbar;
