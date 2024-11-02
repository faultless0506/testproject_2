import React from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item"><Link to="/">Navitem-1</Link></li>
          <li className="header__nav-list-item"><Link to="/">Navitem-1</Link></li>
          <li className="header__nav-list-item"><Link to="/">Navitem-1</Link></li>
        </ul>
      </nav>
      <button className="header__button" onClick={() => {}}>button</button>
    </header>
  );
}
