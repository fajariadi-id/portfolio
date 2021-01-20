import React, { useEffect } from 'react';
import './Contact.scss';
import { h1Animation, gsapFrom } from '../../../../assets/data/animation';

const Contact = () => {
  useEffect(() => {
    h1Animation('.contact', -100, -100);

    gsapFrom('.contact p', 0, 100, '.contact');
    gsapFrom('.email-btn', 0, 50, '.contact .text', 1, null, 0.8);
  }, []);

  return (
    <article className='contact' id='contact'>
      <div className='container d-flex align-center justify-content-center'>
        <div className='header'>
          <h1>Get In Touch</h1>
          <hr />
        </div>

        <div className='text'>
          <p>
            Saat ini saya sedang aktif mencari peluang bekerja untuk posisi
            Junior Front-end Web Developer. Bila ingin bekerja sama atau sekedar
            berbagi ide untuk membangun suatu project, feel free to send me a
            message!
          </p>
        </div>

        <a href='mailto:fajariadi.id@gmail.com' className='email-btn'>
          <h2>Say Hello!</h2>
        </a>
      </div>
    </article>
  );
};

export default Contact;
