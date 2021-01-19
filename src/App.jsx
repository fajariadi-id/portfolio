import React, { Fragment, useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import PuffLoader from 'react-spinners/PuffLoader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <div className='loading d-flex justify-content-center align-center'>
          <PuffLoader color={'#ffc25c'} loading={loading} size={120} />
        </div>
      ) : (
        <div className={`App ${!loading && 'show'}`}>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
