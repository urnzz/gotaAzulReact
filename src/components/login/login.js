
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import AuthContext from '../../context/AuthContext';  // Import the context
function Login() {
  const { setUsername, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Declare and initialize the setUsername and setIsAuthenticated functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log(response.data);

      // Update username and authentication status
      const { username } = response.data.user;
      setUsername(username);  // Update the username in the global state
      setIsAuthenticated(true);  // Update the isAuthenticated status in the global state
      localStorage.setItem('username', username);

      // Redirect to home page
      navigate('/'); // Replace '/' with the appropriate path for your home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form1">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input-field"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="input-field"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;