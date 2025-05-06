import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menubar.css';
import ThemeToggleBtn from './ThemeToggleBtn';
import useTheme from '../context/theme'; 

function MenuBar() {
  const { themeMode } = useTheme();

  return (
    <header className={`top-bar ${themeMode === 'dark' ? 'top-bar-dark' : 'top-bar-light'}`}>
      <div className="logo">Loan Calculator</div>
      <nav className="nav-links">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/exchange">EXCHANGE RATES (LIVE)</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/error">ERROR PAGE</NavLink>
        <ThemeToggleBtn />
      </nav>
    </header>
  );
}

export default MenuBar;
