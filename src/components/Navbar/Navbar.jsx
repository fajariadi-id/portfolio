import React, { useRef, useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/img/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // 120 -> navbar height
      window.pageYOffset > 120 ? setShowNav(true) : setShowNav(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const linksContainer = useRef();
  const handleToggle = () => {
    const links = linksContainer.current;
    links.classList.toggle('show-link');
    const linksHeight = links.clientHeight;
    if (linksHeight === 0) {
      links.style.height = '29vh';
      // document.getElementById('home').style.filter = 'blur(0)';
      // document.getElementById('main').style.filter = 'blur(0)';
    } else {
      links.style.height = 0;
      // document.getElementById('home').style.filter = 'blur(5px)';
      // document.getElementById('main').style.filter = 'blur(5px)';
    }
  };

  const nav = useRef();
  const handleScrollLink = (e) => {
    e.preventDefault();

    const navHeight =
      nav.current.clientHeight > 80
        ? nav.current.clientHeight - 40
        : nav.current.clientHeight;
    const id = e.target.getAttribute('href').slice(1);
    const linkEl = document.getElementById(id);

    let position = linkEl.offsetTop - navHeight;

    window.scrollTo({
      top: position,
    });

    handleToggle();
  };

  return (
    // !::: MOBILE FIRST APPROACH :::
    <nav className={`nav ${showNav && 'nav-bg'}`}>
      <div className='container' ref={nav}>
        <div className='header d-flex align-center justify-content-between'>
          <a href='#home'>
            <img src={logo} alt='logo' className='logo' />
          </a>
          <button className='btn-open' onClick={handleToggle}>
            <FaBars />
          </button>
        </div>

        <div className='nav-white' ref={linksContainer}>
          <div className='nav-accent'>
            <div className='nav-main d-flex align-center justify-content-center'>
              <ul className='links'>
                <li>
                  <a
                    href='#passion'
                    className='link'
                    onClick={(e) => handleScrollLink(e)}
                  >
                    Passion
                  </a>
                </li>
                <li>
                  <a
                    href='#experience'
                    className='link'
                    onClick={(e) => handleScrollLink(e)}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href='#project'
                    className='link'
                    onClick={(e) => handleScrollLink(e)}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='link'
                    onClick={(e) => handleScrollLink(e)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
