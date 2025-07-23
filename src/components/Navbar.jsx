import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#ff5722', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: 'white', margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Food Delivery 🍴
        </Link>
      </h2>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Cart</Link>
        <Link to="/register" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Register</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
