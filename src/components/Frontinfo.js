import React from 'react';
import whatsappicon from './images/whatsapp.png';
import './Frontinfo.css';

function Frontinfo() {
  return (
    <div className=''>
        <div className='container__box'>
        <img src={whatsappicon} />

        <h1>WhatsApp Web by Subhan</h1>
        <p>
        Now send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
        </div>
    </div>
  )
}

export default Frontinfo