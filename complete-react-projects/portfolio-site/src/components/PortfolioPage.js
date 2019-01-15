import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the following things I've done:</p>
    <div><Link to="/portfolio/1">Item One</Link></div>
    <div><Link to="/portfolio/2">Item Two</Link></div>
  </div>
);

export default PortfolioPage;
