import React from 'react';

const Nosotros = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Nosotros</h2>
      <p style={paragraphStyle}>Somos un grupo de estudiantes desarrollando esta aplicación web como parte de nuestro proyecto de aprendizaje. Este equipo está conformado por Enrique, Florencia, Malvina y Viviana.</p>
      <p style={paragraphStyle}>Nuestro objetivo es adquirir experiencia práctica en el desarrollo de aplicaciones web y mejorar nuestras habilidades en React.</p>
      <p style={paragraphStyle}>¡Estamos entusiasmados en compartir este proyecto con ustedes!</p>
    </div>
  );
};

const containerStyle = {
  background: '#f7f7f7',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

export default Nosotros;

