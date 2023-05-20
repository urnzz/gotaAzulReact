import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';
import AuthContext from '../../context/AuthContext';  // Import the context

function Register() {
  const navigate = useNavigate();
  const { setUsername, setIsAuthenticated } = useContext(AuthContext); // Extract setUsername and setIsAuthenticated from the context
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // Add all other fields
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log(response.data);

      // Update username and authentication status
      const { username } = response.data.user;
      setUsername(username);  // Update the username in the global state
      setIsAuthenticated(true);  // Update the isAuthenticated status in the global state
      localStorage.setItem('username', username);
      // Redirect to the home page
      navigate('/'); // Replace '/' with the appropriate path for your home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleRegister} className="login-form1">
      {/* Repeat for other fields */}
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="input-field"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input-field"
        required
      />
      {/* ... */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="input-field"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
