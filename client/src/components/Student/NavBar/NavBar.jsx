// NavBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../../assets/banner-logo.png';
import './NavBar.css';

function NavBar() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="navbar">
            {/* Upper Section */}
            <div className="navbar-upper">
                <div className="banner-img">
                    <img className='image' src= {banner} alt='logo'/>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-area"
                    />
                    <button className="search-btn">Search</button>
                </div>

                <div className="nav-area">
                    <button className="nav-btn">Menu</button>
                    <div className="nav-item">Item 1</div>
                </div>

                <div className="login-btn-area">
                    {isAuthenticated ? (
                        <button
                            className="logout-btn"
                            onClick={() => setAuthenticated(false)}
                        >
                            Log Out
                        </button>
                    ) : (
                        <>
                            <button
                                className="login-btn"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </button>
                            <button
                                className="register-btn"
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Lower Section */}
            <div className="navbar-lower">
                <ul className="nav-items">
                    <li className="nav-item" onClick={() => navigate('/')}>Home</li>
                    <li className="nav-item" onClick={() => navigate('/courses')}>Courses</li>
                    <li className="nav-item" onClick={() => navigate('/about')}>About Us</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
