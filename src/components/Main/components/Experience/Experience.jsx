import React, { useState, useEffect } from 'react';
import './Experience.scss';
import { skills, certificates } from '../../../../assets/data/data';
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  h1Animation,
  h2Animation,
  gsapFrom,
} from '../../../../assets/data/animation';

const Experience = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const handleNext = () =>
    setActiveSlider(
      activeSlider === certificates.length / 2 - 1 ? 0 : activeSlider + 1
    );

  const handlePrev = () =>
    setActiveSlider(activeSlider === 0 ? 2 : activeSlider - 1);

  const certificatesEl = document.querySelectorAll('.certificate');
  certificatesEl.forEach((certif) => {
    const certifWidth = certif.clientWidth * 2 + 10;
    certif.style.left = `-${certifWidth * activeSlider}px`;
  });

  useEffect(() => {
    h1Animation('.experience .header', -100, -100);

    h2Animation('.skills', -100, -100);
    h2Animation('.certificates', -100, -100);

    gsapFrom('.experience .text p', 0, 100, '.experience .text');
    gsapFrom('.skills h3', -100, 0, '.skills', 1);
    gsapFrom('.skills .icon', 10, 0, '.skills', 0.5, 0.2);
    gsapFrom(['.certificate-container', '.slider'], 0, 50, '.certificates', 1);
  }, []);

  return (
    <article className='experience' id='experience'>
      <div className='container'>
        <div className='header d-flex align-center'>
          <h1>Experience</h1>
          <hr />
        </div>

        <div className='text'>
          <p>
            I’ve been doing web development after graduating from college, and
            I’ve always eager to learn more about the industry.
          </p>
        </div>

        <div className='skill__certificate d-flex'>
          <div className='skills'>
            <h2>SKILLS</h2>
            <hr />

            <div className='skill-container'>
              <h3 className='h3-accent'>- Development</h3>
              <div className='icon-container d-flex'>
                {skills.map((skill) => {
                  return (
                    <div className='icon' key={skill.id}>
                      {<skill.name />}
                    </div>
                  );
                })}
              </div>

              <h3 className='h3-accent'>- Design</h3>
              <div className='icon-container d-flex'>
                <p className='icon'>Ps</p>
                <div className='icon'>
                  <FaFigma />
                </div>
              </div>
            </div>
          </div>

          <div className='certificates'>
            <h2>CERTIFICATES</h2>
            <hr />

            <div className='certificate-container d-flex'>
              {certificates.map((certificate) => {
                return (
                  <div className='certificate' key={certificate.id}>
                    <img src={certificate.img} alt={certificate.platform} />

                    <div className='certificate-info'>
                      <h3 className='title'>{certificate.title}</h3>
                      <span className='platform h3-accent'>
                        {certificate.platform}
                      </span>
                      <a
                        href={certificate.credential}
                        target='_blank'
                        rel='noreferrer'
                        className='credential'
                      >
                        See credential <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='slider-btn'>
              <button className='slider prev' onClick={handlePrev}>
                <FaChevronLeft />
              </button>

              <button className='slider next' onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Experience;
