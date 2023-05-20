import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';
import Slideshow from './components/slideshow/Slideshow.js';
import Register from './components/register/register.js';
import Login from './components/login/login.js';
import AuthContext from './context/AuthContext';  // Import the context

function App() {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (    
    <AuthContext.Provider value={{ username, setUsername, isAuthenticated, setIsAuthenticated }}>
        <Router>
      <div className="App">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/content" element={<Content />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </AuthContext.Provider>
);
}

export default App;

