import React, { Fragment } from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Passion from './components/Passion/Passion';
import Project from './components/Project/Project';

const Main = () => {
  return (
    <Fragment>
      <Passion />
      {/* <Experience />
      <Project />
      <Contact /> */}
    </Fragment>
  );
};

export default Main;
