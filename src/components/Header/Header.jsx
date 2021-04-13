import React, { useEffect, useLayoutEffect } from 'react';
import './Header.scss';
import pic from '../../assets/img/profile-pic.png';
import Sosmed from '../StatelessComponent/Sosmed/Sosmed';
import gsap from 'gsap';

const Header = () => {
  useLayoutEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline
      .from('header .pic', {
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.5,
      })
      .from(
        ['header h1', 'header .body-accent'],
        {
          y: -100,
          opacity: 0,
          ease: 'power3.out',
          delay: 1.5,
        },
        0.2
      )
      .from(
        ['header hr', 'header .job'],
        { x: -100, opacity: 0, ease: 'power3.out', delay: 1.5 },
        0.8
      )
      .from(
        'header .icon-container',
        { y: 100, opacity: 0, stagger: 0.2, ease: 'power3.out' },
        '<.2'
      )

      .from(
        'header .text',
        { y: 100, opacity: 0, ease: 'power3.out', delay: 1.5 },
        1
      );
  }, []);

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
          <p className='text'>
            I'm a web developer with a passion for front-end development and
            design. I've completed a bachelor's degree of computer science at{' '}
            <span>Gunadarma University</span> majoring in{' '}
            <span>computer systems</span>. Currently, I'm learning at Coding.id
            pursuing certification of training in Advanced Front End Class. I
            aspire toward a career that will allow me to channel my creativity
            through crafting beautiful software and engaging experiences.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
