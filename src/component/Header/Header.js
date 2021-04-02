import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
               <nav>
                <Link to="/home">Home</Link>
                <Link to="/order">Orders</Link>
                <Link to="/admin">Admin</Link>
                <button>Login</button>
           </nav>
        </div>
    );
};

export default Header;