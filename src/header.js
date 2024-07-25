import React from 'react';
import './App.css';
import Navigation from './Navigation';


function Header() {
    
    return (
        <header className="header">
            <Navigation/>
            <h1 style={{color:'white'}}className="secondItem">Welcome to Solvytix Landing Page</h1>
        </header>
    );
}

export default Header;
