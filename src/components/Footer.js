import React from 'react';
import './Footer.css';
import { FaSquarePhone, FaFacebook } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

function Footer() {
  return (
    <div className="footer">
      <div class="footer_content">
        <p>
          <FaSquarePhone />
          <a href="tel:18002001234">Toll free 1800 200 1234</a>
        </p>
      </div>
      <div class="footer_content">
        <p>
          <FaFacebook />
          <a href="https://www.facebook.com/cripumps">
            www.facebook.com/cripumps
          </a>
        </p>
      </div>
      <div class="footer_content">
        <p>
          <TbWorld />
          <a href="https://www.crigroups.com/">www.crigroups.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
