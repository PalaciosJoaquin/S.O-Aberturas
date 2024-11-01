import React from 'react';
import './Footer.scss'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__section--info">
          <h3>Sobre Nosotros</h3>
          <p>Somos una empresa líder en soluciones de aberturas de aluminio, ofreciendo productos de alta calidad que combinan diseño y funcionalidad. Nuestra misión es proporcionar soluciones innovadoras que mejoren la calidad y estetica de los espacios.</p>
        </div>

        <div className="footer__section footer__section--links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/portafolio">Portafolio</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section footer__section--contact">
          <h3>Contacto</h3>
          <p><strong>Dirección:</strong> Juan B Justo 4287</p>
          <p><strong>Teléfono:</strong> +54 2236854213</p>
          <p><strong>Email:</strong> ondicolaidan@gmail.com</p>
        </div>

        <div className="footer__section footer__section--social">
          <h3>Seguinos</h3>
          <div className="footer__social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/so.aberturas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} S.O.Aberturas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
