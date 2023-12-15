// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/loader">Loader</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
        <li>
          <Link to="/callback">Request Callback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
