import React from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Passion from './components/Passion/Passion';
import Project from './components/Project/Project';

const Main = () => {
  return (
    <main id='main' style={{ transition: 'all .5s ease' }}>
      <Passion />
      <Experience />
      {/* <Project />
      <Contact /> */}
    </main>
  );
};

export default Main;
