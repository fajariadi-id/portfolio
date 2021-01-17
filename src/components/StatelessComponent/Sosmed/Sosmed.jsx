import React from 'react';
import './Sosmed.scss';
import { headerIcons } from '../../../assets/data/data';

const Sosmed = ({ center, style }) => {
  return (
    <div className={`sosmed-container d-flex ${center}`}>
      {headerIcons.map((icon) => {
        return (
          <a href={icon.link} target='_blank' rel='noreferrer' key={icon.id}>
            <div className={`icon-container ${style}`}>{<icon.name />}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Sosmed;
