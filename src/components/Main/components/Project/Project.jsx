import React, { useEffect, useRef } from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import './Project.scss';
import { h1Animation, gsapFrom } from '../../../../assets/data/animation';

const Project = () => {
  const right = useRef();
  const projectContainer = useRef();

  useEffect(() => {
    const rightSide = right.current;
    const container = projectContainer.current;

    rightSide.addEventListener('mouseenter', () =>
      container.classList.add('hover-right')
    );

    rightSide.addEventListener('mouseleave', () =>
      container.classList.remove('hover-right')
    );

    // *::: GSAP :::
    h1Animation('.project .header', -100, -100);

    gsapFrom('.split.left', -100, 0, '.project .header', 1, null, 0.2);
    gsapFrom('.split.right', 100, 0, '.split.right', 1, null, 0.2);

    return () => {
      rightSide.removeEventListener('mouseleave', () =>
        container.classList.add('hover-right')
      );
      rightSide.removeEventListener('mouseenter', () =>
        container.classList.remove('hover-right')
      );
    };
  }, []);

  return (
    <article className='project' id='project'>
      <div className='container'>
        <div className='header d-flex align-center'>
          <h1>
            Some Things I<span>’</span>ve Built
          </h1>
          <hr />
        </div>
      </div>

      <div ref={projectContainer} className='project-container'>
        <div className='split left d-flex align-center justify-content-center'>
          <div className='content'>
            <h2 className='h2-accent'>Netflix Clone</h2>
            <div className='description d-flex align-center'>
              <p>
                A simple Netflix Clone.
                <br />
                My best practice of implementing React and Axios HTTP Request to
                integrated with TMDB API.
              </p>

              <div className='tech '>
                <span>
                  <FaRegCheckCircle className='icon green' /> Fetching API -
                  TMDB API
                </span>
                <span>
                  <FaRegTimesCircle className='icon black' /> Responsive
                </span>
              </div>
            </div>

            <p className='h3-accent'>open in desktop for better experience</p>
            <a
              href='https://fajariadi-id.github.io/netflix-clone/'
              target='_blank'
              rel='noreferrer'
              className='link-btn'
            >
              <h2>take a look</h2>
            </a>
          </div>
        </div>

        <div
          ref={right}
          className='split right d-flex align-center justify-content-center'
        >
          <div className='content'>
            <h2 className='h2-accent'>
              JOKi App
              <br />
              Landing Page
            </h2>
            <div className='description d-flex align-center'>
              <p>
                Exploration of a simple landing page design with the idea of
                task completion service.
                <br />
                My best practice of building a responsive website that
                implementing HTML, CSS, and Vanilla JavaScript.
              </p>

              <div className='tech '>
                <span>
                  <FaRegTimesCircle className='icon black' /> Fetching API
                </span>
                <span>
                  <FaRegCheckCircle className='icon green' /> Responsive
                </span>
              </div>
            </div>

            <a
              href='https://fajariadi-id.github.io/joki-app/'
              target='_blank'
              rel='noreferrer'
              className='link-btn'
            >
              <h2>take a look</h2>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
