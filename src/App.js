import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';
import Slideshow from './components/slideshow/Slideshow.js';
function App() {
  return (
    <Router>
      <div className="App">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

