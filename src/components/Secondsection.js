import React from 'react';
import './Secondsection.css';
import machinesImages from '../images/3.png';

function Secondsection() {
  return (
    <div className="secondsection">
      <p className="pr">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>

      <img className="instruments" src={machinesImages} alt="k" />
      <p className="pa">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr style={{ borderColor: 'red', margin: '0 0.5rem' }} />
      <p className="pa">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="par">
        CHEMICALS & PROCESS |POWER | WATER & WASTE WATER | OILS & GAS | PHARMA |
        SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE| METAL & MINING
        | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC
        | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}

export default Secondsection;
