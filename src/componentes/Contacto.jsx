import React, { useState } from 'react';
import { FaInstagramSquare, FaYoutube, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import Header from './Header';

const Contacto = () => {
  const redirectToURL = (url) => {
    window.location.href = url;
  };

  const contactEmail = 'contacto@example.com';
  const contactPhoneNumber = '+123456789';

  const linkedinProfiles = [
    {
      url: 'https://www.linkedin.com/in/enrique-kloosterman-9090aa1b5/',
      photo: 'https://media.licdn.com/dms/image/D4E35AQEpRZYHgR9a7w/profile-framedphoto-shrink_200_200/0/1649168456156?e=1688688000&v=beta&t=nG3EfwmtdcsHA8_BqRy3BdDkjLl_Ux-BXcmQVfHnDRw'
    },
    {
      url: 'https://www.linkedin.com/in/malvina-pacheco-376a59190/',
      photo: 'https://media.licdn.com/dms/image/D4D03AQG1fQ2hcOfCRg/profile-displayphoto-shrink_200_200/0/1681255532685?e=1693440000&v=beta&t=U1sZCD3NAWIuAUwFZfZcAQpX833yZXD6Q18PbfZFzug'
    },
    {
      url: 'https://www.linkedin.com/in/florencia-da-rosa-a6823a272/',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHvp17n4XdDug/profile-displayphoto-shrink_200_200/0/1683844037443?e=1693440000&v=beta&t=4VSVbdxFH5_CfewMq-ZYbquYXiBCySTyyyys0dNpXrk'
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Contacto</h2>
      <div>
        <FaYoutube
          size={50}
          onClick={() => redirectToURL('https://www.youtube.com')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div>
        <FaFacebookSquare
          size={50}
          onClick={() => redirectToURL('https://www.facebook.com')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div>
        <FaInstagramSquare
          size={50}
          onClick={() => redirectToURL('https://www.instagram.com')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {linkedinProfiles.map((profile, index) => (
        <div key={index}>
          <FaLinkedin
            size={50}
            onClick={() => redirectToURL(profile.url)}
            style={{ cursor: 'pointer' }}
          />
          <img src={profile.photo} alt="LinkedIn Profile" style={{ width: '50px', marginLeft: '10px' }} />
        </div>
      ))}
      <div>
        <p style={{ fontSize: '20px' }}><strong>Email:</strong> {contactEmail}</p>
        <p style={{ fontSize: '20px' }}><strong>Teléfono:</strong> {contactPhoneNumber}</p>
      </div>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px' }}>Formulario de Contacto</h3>
      <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
          <input type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} style={{ width: '100%', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input type="email" id="email" name="email" onChange={handleInputChange} value={formData.email} style={{ width: '100%', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensaje:</label>
          <textarea id="message" name="message" onChange={handleInputChange} value={formData.message} style={{ width: '100%', padding: '5px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
