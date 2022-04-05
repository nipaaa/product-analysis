import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='container-fluid'>
            <div className='bg-info rounded-3 py-3 d-flex justify-content-around'>
            <h2>Cookie Cutter Cookies</h2>
            <nav>
                <Link  className='menu-bar' to="/home">Home</Link>
                <Link className='menu-bar' to="/reviews">Reviews</Link>
                <Link className='menu-bar' to="/dashboard">Dashboard</Link>
                <Link className='menu-bar' to="/QnA">QnA</Link>
                <Link className='menu-bar' to="/about">About</Link>
            </nav>
        </div>
      </div>
    );
};

export default Header;