import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <article className='contact' id='contact'>
      <div className='container d-flex align-center justify-content-center'>
        <h1>Get In Touch</h1>
        <hr />

        <p>
          Saat ini saya sedang aktif mencari peluang bekerja untuk posisi
          Front-end Web Developer. Bila ingin bekerja sama atau sekedar berbagi
          ide untuk membangun suatu project, feel free to send me a message!
        </p>

        <a href='mailto:fajariadi.id@gmail.com' className='email-btn'>
          <h2>Say Hello!</h2>
        </a>
      </div>
    </article>
  );
};

export default Contact;
