import React from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <div className="confirm-page">
      {/* Encabezado */}
      <header className="header">
        <div className="logo-section">
          <img src="resources/LOG.JPG" alt="Logo" className="logo" />
      
        </div>
        <div className="contact-section">
          <button className="whatsapp-btn">Escríbenos<br />Información por WhatsApp</button>
          <button className="call-btn">Llámanos<br />+57 301 672 9250</button>
        </div>
        <div className="schedule">
          <p>
            Horario de Atención al Cliente:<br />
            Lunes a Viernes de 7:00am a 5:00pm<br />
            Sábados de 7:00am a 1:00pm
          </p>
        </div>
      </header>

      {/* Sección principal */}
      <main className="main-content">
        <div className="confirmation-section">
          <div className="check-icon">✔️</div>
          <h1>Reserva Confirmada</h1>
          <p className="reservation-code">Código: <strong>AVA5SD95PA</strong></p>
          <p>¡Gracias por tu reserva!</p>
          <p>
            Recibirás todos los detalles en tu correo, si no lo encuentras, revisa SPAM o correo no deseado.
          </p>
        </div>

        <div className="help-section">
          <h2>¿Necesitas ayuda?</h2>
          <p><strong>Modificar:</strong> Haz una nueva reserva y la anterior se cancelará automáticamente.</p>
          <p><strong>Cancelar:</strong> Responde al correo que te enviamos solicitando la cancelación de reserva.</p>
        </div>

        <div className="contact-section">
          <h2>Contáctanos</h2>
          <p>Si necesitas asistencia adicional, estamos aquí para ayudarte.</p>
          <p>¡Buen viaje y disfruta de la aventura!</p>
        </div>
          {/* footer */}
          <footer id="footer">
  <div className="footer-top">
    <div className="footer-section">
      <h4>Contacto</h4>
      <p>Teléfono: +57 301 672 9250</p>
      <p>Email: info@RentalCar.com</p>
    </div>
    <div className="footer-section">
      <h4>Enlaces Útiles</h4>
      <ul>
        <li><a href="#privacidad">Política de Privacidad</a></li>
        <li><a href="#terminos">Términos y Condiciones</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Síguenos</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2024 RentalCar. Todos los derechos reservados.</p>
  </div>
</footer>
      </main>
    </div>
    
    
  );
};
export default Tab3;
