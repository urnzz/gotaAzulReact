import React from 'react';
const Location = () => {
  return (
    <div id="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.033172609365!2d-48.567237184532395!3d-20.54582358626189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb8529dd76516d%3A0x33d89fd4d2e540d2!2sTv.%20Evaristo%20Urias%20de%20Paula%2C%20240%20-%20Bom%20Jesus%2C%20Barretos%20-%20SP%2C%2014781-087!5e0!3m2!1spt-BR!2sbr!4v1665765670627!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};
export default Location;
