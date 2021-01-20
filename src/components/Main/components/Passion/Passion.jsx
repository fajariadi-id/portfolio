import React, { useEffect } from 'react';
import './Passion.scss';
import { cards } from '../../../../assets/data/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { h1Animation } from '../../../../assets/data/animation';

const Passion = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    h1Animation('.passion', -100, -100);

    const cards = document.querySelectorAll('.passion .card');
    cards.forEach((card) => {
      gsap.from(card, {
        duration: 2,
        opacity: 0,
        y: 100,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
        },
      });
    });
  }, []);

  return (
    <article className='passion' id='passion'>
      <div className='container'>
        <div className='header d-flex align-center'>
          <h1>What I Do</h1>
          <hr />
        </div>

        <div className='card-container d-flex justify-content-evenly '>
          {cards.map((card) => {
            return (
              <div className='card' key={card.id}>
                <div className='icon d-flex align-center justify-content-center'>
                  {<card.icon />}
                </div>

                <h2 className='h2-accent'>{card.title}</h2>

                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Passion;
