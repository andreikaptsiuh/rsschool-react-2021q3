import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="nav_list">
          <li>
            <Link className={`nav_list__link ${path === '/' ? 'active' : ''}`} to="/"> Home </Link>
          </li>
          <li>
            <Link className={`nav_list__link ${path === '/about' ? 'active' : ''}`} to="/about"> About </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
