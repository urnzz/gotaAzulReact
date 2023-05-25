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
  const [errorMessage, setErrorMessage] = useState(null); // Error message state

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
  
      if (err.response) {
        // Display the error message from the server response
        alert(err.response.data.error);
      } else {
        // Display a generic error message for failed requests
        alert('An error occurred. Please try again later.');
      }
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
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Show error message if it exists */}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
