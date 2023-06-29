

const Contacto = () => {
  const redirectToRandomURL = () => {
    const urls = [
      'https://www.youtube.com',
      'https://www.facebook.com',
      'https://www.instagram.com'
    ];
    const randomURL = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomURL;
  };

  const contactEmail = 'contacto@example.com';
  const contactPhoneNumber = '+123456789';

  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Contacto</h2>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/016/716/475/original/youtube-icon-free-png.png" alt="YouTube" onClick={redirectToRandomURL} style={{ width: '50px' }} />
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" onClick={redirectToRandomURL} style={{ width: '50px' }} />
      </div>
      <div>
        <img src="https://logotipoz.com/wp-content/uploads/2021/10/instagram-2-1.svg" alt="Instagram" onClick={redirectToRandomURL} style={{ width: '50px' }} />
      </div>
      <div>
        <p style={{ fontSize: '20px' }}><strong>Email:</strong> {contactEmail}</p>
        <p style={{ fontSize: '20px' }}><strong>Teléfono:</strong> {contactPhoneNumber}</p>
      </div>
    </div>
  );
};

export default Contacto;



