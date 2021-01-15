import React from 'react';
import './Header.scss';
import pic from '../../assets/img/profile-pic.png';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <header id='home'>
      <div className='container d-flex justify-content-between align-center'>
        <img src={pic} alt='author picture' className='pic' />

        <div className='name__sosmed'>
          <h1>Fajar Riadi</h1>
          <hr />
          <div className='sosmed-container d-flex'>
            <div className='icon-container'>
              <FaInstagram />
            </div>
            <div className='icon-container'>
              <FaLinkedinIn />
            </div>
            <div className='icon-container'>
              <FaGithub />
            </div>
          </div>
        </div>

        <div className='description'>
          <p className='body-accent'>- Introduction</p>
          <h2 className='job'>Front-End Web Developer Enthusiast.</h2>
          <p>
            Saya adalah seorang web developer dengan passion pada bidang
            front-end development dan design. Saat ini saya baru saja
            menyelesaikan studi di <span>Universitas Gunadarma</span> dengan
            jurusan <span>sistem komputer</span>. Saya memiliki cita-cita untuk
            menuju jenjang karir yang memungkinkan saya dapat menyalurkan
            kreativitas dalam membuat software yang baik dan pengalaman yang
            menarik.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
