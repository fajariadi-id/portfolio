import React from 'react';
import { FaFighterJet, FaSpaceShuttle } from 'react-icons/fa';
import Sosmed from '../StatelessComponent/Sosmed/Sosmed';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Sosmed center='justify-content-center' style='margin' />

        <a href='#home' className='icon'>
          <FaSpaceShuttle />
        </a>
        <span>Bring me up, Kale!</span>

        <p>&copy; 2021. Fajar Riadi</p>
      </div>
    </footer>
  );
};

export default Footer;
