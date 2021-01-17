import React from 'react';
import './Header.scss';
import pic from '../../assets/img/profile-pic.png';
import Sosmed from '../StatelessComponent/Sosmed/Sosmed';

const Header = () => {
  return (
    <header id='home'>
      <div className='container d-flex justify-content-between align-center'>
        <img src={pic} alt='pic' className='pic' />

        <div className='name__sosmed'>
          <h1>Fajar Riadi</h1>
          <hr />
          <Sosmed />
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
            kreativitas dalam membangun software yang baik dan pengalaman yang
            menarik.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;