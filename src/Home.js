import React from 'react';
import Slideshow from './Slideshow.js';
import Content from './Content';
import About from './About';
import Faq from './Faq.js';
import Location from './Location';

function Home() {
  return (
    <div id="home">
      <Slideshow />
      <Content />
      <About />
      <Faq />
      <Location />
      {/* Add more components if needed */}
    </div>
  );
}

export default Home;
