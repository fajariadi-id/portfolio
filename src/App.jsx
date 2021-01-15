import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
