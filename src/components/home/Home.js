import React from 'react';
import Slideshow from '../slideshow/Slideshow.js';
import Content from '../content/Content.js';
import About from '../about/About.js';
import Faq from '../faq/Faq.js';
import Location from '../location/Location.js';
import Resume from '../Resume/Resume.js';

function Home() {
  return (
    <div id="home">
      <Slideshow />
      <Content />
      <About />
      <Faq />
      <Location />
      <Resume />
      {/* Add more components if needed */}
    </div>
  );
}

export default Home;
