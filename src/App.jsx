import React, { Fragment } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
