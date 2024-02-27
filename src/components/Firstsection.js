import React from 'react';
import './Firstsection.css';
import awardImage from '../images/1.png';
import logo from '../images/logo.png';
import awardImage1 from '../images/2.png';

function Header() {
  return (
    <div className="firstsection">
      <div className="award_img">
        <img className="award" src={awardImage} alt="Award_image" />
      </div>

      <div className="logo_portion">
        <img className="header__logo" src={logo} alt="k" />
        <h3>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>

        <img className="header__logo1" src={awardImage1} alt="k" />
        <p>
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
}

export default Header;
