import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></div>
    <div><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></div>
    <div><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></div>
    <div><NavLink to="/help" activeClassName="is-active">Help</NavLink></div>
  </header>
);

export default Header;
