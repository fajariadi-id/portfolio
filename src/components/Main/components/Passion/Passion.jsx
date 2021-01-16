import React from 'react';
import './Passion.scss';
import { cards } from '../../../../assets/data/data';

const Passion = () => {
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
