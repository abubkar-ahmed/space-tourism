import React from 'react'
import {NavLink} from 'react-router-dom';
import {useRef} from 'react';

function Header() {
    const navRef = useRef();

    function showNav() {
        navRef.current.classList.toggle('nav');
    }

  return (
    <header>
        <img src='./images/shared/logo.svg' alt='logo' className='logo'></img>
        <img src='./images/shared/icon-hamburger.svg' alt='ham' className='ham' onClick={showNav}/>
        <nav  ref={navRef}>
            <img src='./images/shared/icon-close.svg' alt='close' className='close' onClick={showNav}/>
            <ul>
                <li><NavLink to='/'><span>00</span>home</NavLink></li>
                <li><NavLink to='/destenation'><span>01</span>destenation</NavLink></li>
                <li><NavLink to='/crew'><span>02</span>crew</NavLink></li>
                <li><NavLink to='/technology'><span>03</span>technology</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header